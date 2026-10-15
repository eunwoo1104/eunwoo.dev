"use client";

import type { ComponentPropsWithRef } from "react";

export function HeaderButton({
  className,
  onClick,
  children,
  ...props
}: ComponentPropsWithRef<"button">) {
  return (
    <button
      className={`clickable circle-icon bg-neutral-200 dark:bg-neutral-850 h-10 w-10 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
