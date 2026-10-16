export const codes = {
  ok: "OK",
  unknown: "UNKNOWN_ERROR",
  validError: "VALIDATION_ERROR",
  authError: "AUTHENTICATION_ERROR",
  notFound: "NOT_FOUND",
  sessionExpired: "SESSION_EXPIRED",
  sessionInvalid: "SESSION_INVALID",
};

export interface ResponseBody<T> {
  code: string;
  data?: T;
  msg?: string;
}
