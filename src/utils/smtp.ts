import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

interface MailToSend {
  target: string;
  title: string;
  content: string;
  failAction?: () => void;
  retryOnFail?: number;
}

interface MailInQueue extends MailToSend {
  retryOnFail: number;
  retryCount: number;
}

class SMTPHandler {
  private queue: MailInQueue[];
  private notifyMailAdded: (() => void) | null = null;

  private constructor() {
    this.queue = [];
    void this.runMailQueue();
  }

  public static getHandler(): SMTPHandler {
    if (!global._smtpHandler) {
      global._smtpHandler = new SMTPHandler();
    }
    return global._smtpHandler;
  }

  public addMail(mail: MailToSend): void {
    const mailToInsert = Object.assign({}, mail) as MailInQueue;
    if (mailToInsert.retryOnFail === undefined) {
      mailToInsert.retryOnFail = 0;
    }
    mailToInsert.retryCount = 0;

    this.queue.push(mailToInsert);

    const notify = this.notifyMailAdded;
    this.notifyMailAdded = null;
    notify?.();
  }

  private popMail(): MailInQueue | null {
    if (this.queue.length === 0) return null;
    return this.queue.shift() as MailInQueue;
  }

  private async sendMail(mail: MailInQueue) {
    try {
      const res = await transporter.sendMail({
        from: process.env.EMAIL_ADDRESS ?? process.env.GMAIL_USER,
        to: mail.target,
        subject: mail.title,
        text: mail.content,
      });
      console.debug(
        `Mail sent to ${mail.target} with response ${res.response}`,
      );
    } catch (err) {
      console.error(err);
      if (mail.retryOnFail > 0) {
        if (mail.retryCount >= mail.retryOnFail) {
          if (!!mail.failAction) {
            try {
              mail.failAction();
            } catch (err) {
              console.error(err);
            }
          }
          return;
        }
        mail.retryCount++;
        this.queue.unshift(mail);
      } else if (!!mail.failAction) {
        try {
          mail.failAction();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }

  private waitForMail(): Promise<void> {
    return new Promise((resolve) => {
      this.notifyMailAdded = resolve;
    });
  }

  private async runMailQueue() {
    while (true) {
      // TODO: manage mails via database
      const mail = this.popMail();
      if (!mail) {
        await this.waitForMail();
        continue;
      }
      // TODO: add handler for smtp rate limit
      await this.sendMail(mail);
      await new Promise((resolve) =>
        setTimeout(resolve, Number(process.env.MAIL_SEND_INTERVAL) || 1000),
      );
    }
  }
}

export type { SMTPHandler };
export const smtpHandler = SMTPHandler.getHandler;
