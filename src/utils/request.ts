import { userAgent } from "next/server";

export function getDeviceIdentifier(headers: Headers): string {
  const agent = userAgent({ headers: headers });
  return `${agent.os.name},${agent.browser.name},${agent.browser.major},${agent.engine.name},${agent.cpu.architecture},bot:${agent.isBot}`;
}

export function getClientIP(headers: Headers): string {
  return (
    headers.get("cf-connecting-ip") || headers.get("x-forwarded-for") || ""
  );
}
