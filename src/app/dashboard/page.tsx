import { redirect } from "next/navigation";

import { getCurrentUser } from "@/actions/user";
import { UserFlags } from "@/utils/types";

export default async function Dashboard() {
  const user = await getCurrentUser();
  if (!user.data) {
    redirect("/user/login?redirect=dashboard");
  }

  if (!(user.data.flags & UserFlags.OWNER)) {
    return <div>권한이 없습니다.</div>;
  }

  return <div>TBA</div>;
}
