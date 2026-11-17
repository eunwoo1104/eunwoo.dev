"use client";

import { motion } from "motion/react";
import type { HTMLMotionProps } from "motion/react";

export function MenuBox({
  className,
  children,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      className={`level-2-bg z-30 p-4 rounded-lg w-full md:w-fit ${className} [--enter-y:-15px]`}
      initial={{ opacity: 0, y: "var(--enter-y)" }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, y: "var(--enter-y)" }}
      transition={{ duration: 0.1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
