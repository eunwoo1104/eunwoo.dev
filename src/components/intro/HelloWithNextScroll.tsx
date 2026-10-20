"use client";

import { useRef } from "react";

import { Hello } from "@/components/intro/Hello";

export function HelloWithNextScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div className="min-h-[calc(100dvh-88px)] flex flex-col items-center justify-center">
        <Hello
          chevronOnClick={() => {
            if (!!nextRef.current)
              nextRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        />
        <div className="h-32" />
        <div ref={nextRef} />
      </div>
      <div className="min-h-screen scroll-mt-[88px]">{children}</div>
    </div>
  );
}
