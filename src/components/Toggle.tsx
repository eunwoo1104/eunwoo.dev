"use client";
import { motion } from "motion/react";

export function Toggle({ value, onClick, disabled }: ToggleProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      className="w-10 h-6 p-1 rounded-full flex items-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      animate={{
        backgroundColor: value ? "#60a5fa" : "#a3a3a3",
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      disabled={disabled}
    >
      <motion.div
        className="w-4 h-4 rounded-full bg-white"
        animate={{ x: value ? 16 : 0 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        whileTap={{ scale: 0.94 }}
      />
    </motion.button>
  );
}

interface ToggleProps {
  value: boolean;
  onClick: () => void;
  disabled?: boolean;
}
