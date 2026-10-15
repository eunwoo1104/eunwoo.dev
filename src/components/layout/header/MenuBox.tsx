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
      className={`bg-neutral-200 dark:bg-neutral-850 fixed top-0 right-0 left-0 md:left-auto z-30 mt-19 ml-8 mr-8 p-4 rounded-lg ${className}
                  [--enter-x:15px] [--enter-y:0px] md:[--enter-x:0px] md:[--enter-y:-15px]`}
      initial={{ opacity: 0, x: "var(--enter-x)", y: "var(--enter-y)" }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: "var(--enter-x)", y: "var(--enter-y)" }}
      transition={{ duration: 0.1 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
