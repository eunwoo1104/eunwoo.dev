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
      className={`clickable circle-icon level-2-bg h-10 w-10 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
