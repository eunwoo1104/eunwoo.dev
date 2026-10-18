import { userAgent } from "next/server";

export function getDeviceIdentifier(headers: Headers): string {
  const agent = userAgent({ headers: headers });
  return `${agent.os.name},${agent.browser.name},${agent.browser.major},${agent.engine.name},${agent.cpu.architecture},bot:${agent.isBot}`;
}
