import Link from "next/link";
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
    return (
      <div className="min-h-[calc(100dvh-88px)] flex flex-col items-center justify-center">
        <h1 className="text-5xl">권한이 없습니다.</h1>
        <div className="h-4" />
        <Link href="/" className="level-2-bg rounded-lg p-4 text-lg">
          홈으로 돌아가기
        </Link>
        <div className="h-32" />
      </div>
    );
  }
  return <div>{children}</div>;
}
