import "server-only";

import knex from "knex";

const connection = knex({
  client: "mysql2",
  connection: {
    host: process.env.MARIADB_HOST || "localhost",
    port: Number(process.env.MARIADB_PORT) || 3306,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE || "eunwoodev",
  },
});

export const database = {
  user: () => connection<UserTable>("user"),
  session: () => connection<SessionTable>("session"),
  emailVerify: () => connection<EmailVerificationTable>("email_verify"),
  introLink: () => connection<IntroLinkTable>("intro_link"),
};

export interface UserTable {
  id: number;
  email: string;
  password: string;
  username: string;
  nickname: string | null;
  created_at: Date;
  flags: number;
}

export interface SessionTable {
  refresh_token: string;
  user: number;
  device_identifier: string;
  created_at: Date | null;
}

export interface EmailVerificationTable {
  user: number;
  token: string;
}

export interface IntroLinkTable {
  name: string;
  type: string;
  url: string;
  external: boolean;
}

export default connection;
