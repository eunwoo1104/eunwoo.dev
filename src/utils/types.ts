export interface User {
  id: number;
  email: string;
  username: string;
  nickname: string | null;
  createdAt: Date;
  flags: number;
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
