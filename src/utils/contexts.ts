import { createContext } from "react";

import type { User } from "@/utils/types";

export interface SessionContextInterface {
  user: User | null;
  setUser: (session: User | null) => void;
}

export const SessionContext = createContext<SessionContextInterface | null>(
  null,
);
