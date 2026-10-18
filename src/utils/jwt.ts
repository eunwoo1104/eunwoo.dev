import { SignJWT, jwtVerify } from "jose";
import type { JWTPayload } from "jose";
import { JWTExpired } from "jose/errors";
import "server-only";

const algorithm = process.env.JWT_ALGORITHM || "HS256";
const loadedSecret = process.env.JWT_SECRET;
const jwtSecret = loadedSecret && new TextEncoder().encode(loadedSecret);
const jwtIssuer = process.env.SERVICE_URL || "localhost";

export function createJWT(
  payload: JWTPayload,
  expiresAt: string | number | Date,
): Promise<string> {
  if (!jwtSecret) throw new Error("JWT secret not provided");

  return new SignJWT(payload)
    .setProtectedHeader({ alg: algorithm })
    .setIssuedAt()
    .setIssuer(jwtIssuer)
    .setExpirationTime(expiresAt)
    .sign(jwtSecret);
}

export async function verifyJWT(
  token: string,
): Promise<JWTVerifySuccessResult | JWTVerifyFailResult> {
  if (!jwtSecret) throw new Error("JWT secret not provided");

  try {
    const { payload } = await jwtVerify(token, jwtSecret, {
      algorithms: [algorithm],
      issuer: jwtIssuer,
    });
    return { success: true, payload };
  } catch (e) {
    // if (!(e instanceof JWTExpired)) console.error(e);
    return {
      success: false,
      reason: e instanceof JWTExpired ? "expired" : "invalid",
    };
  }
}

interface JWTVerifySuccessResult {
  success: true;
  payload: JWTPayload;
}

interface JWTVerifyFailResult {
  success: false;
  reason: string | null;
}
