import { createContext } from "react";

import type { MessageBoxProps } from "@/components/MessageBox";
import type { User } from "@/utils/types";

export interface SessionContextInterface {
  user: User | null;
  setUser: (session: User | null) => void;
}

export interface MessageBoxData extends MessageBoxProps {
  content?: string;
}

interface GlobalMessageContextInterface {
  messages: MessageBoxData[];
  addMessage: (content: MessageBoxData) => void;
}

export const SessionContext = createContext<SessionContextInterface | null>(
  null,
);

export const GlobalMessageContext =
  createContext<GlobalMessageContextInterface | null>(null);
