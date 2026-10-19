import { redirect } from "next/navigation";
import { connection } from "next/server";

import { getCurrentUser } from "@/actions/user";
import { UserFlags } from "@/utils/types";

// Since user data must be loaded for checking permissions,
// this layout is not pre-rendered
export const instant = false;

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await connection();

  const user = await getCurrentUser();
  if (!user.data) {
    redirect("/user/login?redirect=dashboard");
  }

  if (!(user.data.flags & UserFlags.OWNER)) {
    return <div>권한이 없습니다.</div>;
  }
  return <div>{children}</div>;
}
