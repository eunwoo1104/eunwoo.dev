import "server-only";

import connection, { database } from "@/utils/database";
import type { EmailRateLimitTable } from "@/utils/database";

export async function tryUserRateLimit(
  rateLimitData: UserRateLimit,
): Promise<{ safe: true } | { safe: false; resetAfter: number }> {
  return await connection.transaction(async (trx) => {
    await trx<EmailRateLimitTable>("email_rate_limit")
      .insert({
        type: rateLimitData.type,
        identifier: rateLimitData.identifier,
      })
      .onConflict(["type", "identifier"])
      .ignore();

    const res = await trx<EmailRateLimitTable>("email_rate_limit")
      .select<{ count: number; time_passed: number }[]>(
        "count",
        connection.raw(
          "TIMESTAMPDIFF(SECOND, start_date, CURRENT_TIMESTAMP()) AS time_passed",
        ),
      )
      .where({ type: rateLimitData.type, identifier: rateLimitData.identifier })
      .forUpdate()
      .first();

    // this should not happen
    if (!res) return { safe: false, resetAfter: -1 };

    const timeRemaining = rateLimitData.resetAfter - res.time_passed;
    if (timeRemaining < 0) {
      await trx<EmailRateLimitTable>("email_rate_limit")
        .where({
          type: rateLimitData.type,
          identifier: rateLimitData.identifier,
        })
        .update({ count: 0, start_date: database.dateNow() });
    } else if (res.count >= rateLimitData.maxAllowed) {
      return { safe: false, resetAfter: timeRemaining };
    }

    await trx<EmailRateLimitTable>("email_rate_limit")
      .where({ type: rateLimitData.type, identifier: rateLimitData.identifier })
      .increment("count", 1);
    return { safe: true };
  });
}

export interface UserRateLimit {
  type: "register" | "password_reset";
  identifier: string;
  maxAllowed: number;
  resetAfter: number;
}
