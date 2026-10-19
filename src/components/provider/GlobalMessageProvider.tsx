"use client";

import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

import type { MessageBoxProps } from "@/components/MessageBox";
import { MessageBox } from "@/components/MessageBox";
import { GlobalMessageContext } from "@/utils/contexts";

export function GlobalMessageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [messages, setMessages] = useState<MessageBoxProps[]>([]);
  const [currentMessage, setCurrentMessage] = useState<MessageBoxProps | null>(
    null,
  );

  const addMessage = (message: MessageBoxProps) => {
    if (!currentMessage) setCurrentMessage(message);
    else setMessages((prevMessages) => [...prevMessages, message]);
  };

  const popMessage = () => {
    if (messages.length === 0) return null;
    const msg = messages[0];
    setMessages((prevMessages) => prevMessages.slice(1));
    return msg;
  };

  const handleMessageClose = () => {
    setCurrentMessage(popMessage());
  };

  return (
    <GlobalMessageContext value={{ messages, addMessage }}>
      <AnimatePresence>
        {currentMessage && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.1 }}
            className="fixed top-[90px] w-full content-px"
          >
            <MessageBox
              {...currentMessage}
              className="hover:cursor-pointer"
              onClick={handleMessageClose}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </GlobalMessageContext>
  );
}
