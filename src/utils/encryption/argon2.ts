import * as argon2 from "argon2";
import "server-only";

export function argon2encrypt(text: string): Promise<string> {
  return argon2.hash(text);
}

export function argon2verify(hashed: string, text: string): Promise<boolean> {
  return argon2.verify(hashed, text);
}
