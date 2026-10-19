export interface User {
  id: number;
  email: string;
  username: string;
  nickname: string | null;
  createdAt: Date;
  flags: number;
}

export const enum UserFlags {
  OWNER = 1 << 0,
}

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

export interface IntroLinkTable {
  name: string;
  type: string;
  url: string;
  external: boolean;
}
