"use client";

import { useEffect, useState } from "react";

import { getCurrentUser } from "@/actions/user";
import { SessionContext } from "@/utils/contexts";
import type { User } from "@/utils/types";

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getCurrentUser().then(
      (response) => response.data && setUser(response.data),
    );
  }, []);

  return <SessionContext value={{ user, setUser }}>{children}</SessionContext>;
}
