"use client";

import { motion } from "motion/react";
import { AnimatePresence } from "motion/react";
import { useState } from "react";

import { MessageBox } from "@/components/MessageBox";
import { GlobalMessageContext } from "@/utils/contexts";
import type { MessageBoxData } from "@/utils/contexts";

export function GlobalMessageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [messages, setMessages] = useState<MessageBoxData[]>([]);
  const [currentMessage, setCurrentMessage] = useState<MessageBoxData | null>(
    null,
  );

  const addMessage = (message: MessageBoxData) => {
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
            className="fixed top-[90px] w-full content-px z-50"
          >
            <MessageBox
              {...currentMessage}
              className="hover:cursor-pointer content-w-limit"
              onClick={handleMessageClose}
            >
              {currentMessage.content ? (
                <p>{currentMessage.content}</p>
              ) : (
                currentMessage.children
              )}
            </MessageBox>
            <div className="flex flex-row mt-2 content-w-limit">
              {messages.length > 0 && (
                <div className="level-2-bg rounded-lg p-2 text-sm font-light">
                  추가 메시지 {messages.length}개 남음
                </div>
              )}
              <div className="flex-1" />
              <div
                className="level-2-bg rounded-lg p-2 text-sm hover:cursor-pointer"
                onClick={handleMessageClose}
              >
                클릭하여 닫기
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </GlobalMessageContext>
  );
}
