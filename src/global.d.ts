import type { SMTPHandler } from "@/utils/smtp";

declare global {
  var _smtpHandler: SMTPHandler | undefined;
}

export {};
