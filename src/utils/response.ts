export const codes = {
  ok: "OK",

  unknown: "UNKNOWN_ERROR",
  notFound: "NOT_FOUND",

  validError: "VALIDATION_ERROR",
  authError: "AUTHENTICATION_ERROR",
  emailUnverified: "EMAIL_UNVERIFIED",
  emailFailed: "EMAIL_VERIFICATION_FAILED",
  rateLimited: "RATE_LIMITED",

  sessionExpired: "SESSION_EXPIRED",
  sessionInvalid: "SESSION_INVALID",
};

export interface ResponseBody<T> {
  code: string;
  data?: T;
  msg?: string;
}
