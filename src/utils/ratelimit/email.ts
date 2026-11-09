import "server-only";

import { database } from "@/utils/database";

export async function getGlobalEmailRateLimitCount(): Promise<{
  count: number;
  timeLeft: number;
}> {
  const oneDay = 24 * 60 * 60;
  let count;
  let timeLeft;
  const res = await database
    .emailRateLimit()
    .select<{ count: number; time_passed: number }[]>(
      "count",
      database.raw(
        "TIMESTAMPDIFF(SECOND, start_date, CURRENT_TIMESTAMP()) AS time_passed",
      ),
    )
    .where("type", "global_email");

  if (res.length === 0 || res[0].time_passed >= oneDay) {
    await database.raw(
      `INSERT INTO email_rate_limit(type, identifier) VALUES ('global_email', SHA2('global', 256)) ON DUPLICATE KEY UPDATE start_date=CURRENT_TIMESTAMP(), count=0`,
    );
    count = 0;
    timeLeft = oneDay;
  } else {
    count = res[0].count;
    timeLeft = oneDay - res[0].time_passed;
  }

  return { count, timeLeft };
}

export async function tryGlobalEmailRateLimit(
  maxRequest: number,
): Promise<{ safe: true } | { safe: false; timeLeft: number }> {
  const res = await getGlobalEmailRateLimitCount();
  if (res.count >= maxRequest) return { safe: false, timeLeft: res.timeLeft };

  // Since email sending is sequential, we can safely increment the count
  await database
    .emailRateLimit()
    .update({ count: database.raw("count + 1") })
    .where("type", "global_email");
  return { safe: true };
}
