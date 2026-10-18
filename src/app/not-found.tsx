"use client";

import { useEffect, useState } from "react";

const notFoundMessages = [
  "여긴 아무것도 없어요.",
  "사공사 낫 파운드...",
  "포오포 뉴 에라 에라",
];

export default function NotFound() {
  const [msg, setMsg] = useState<string | null>();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMsg(
      notFoundMessages[Math.floor(Math.random() * notFoundMessages.length)],
    );
  }, []);

  return (
    <div>
      <div className="min-h-[calc(100dvh-88px)] flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold">! ! 404 ! !</h1>
        <p className={`text-lg text-center ${msg ? "" : "invisible"}`}>
          {msg || "&nbsp;"}
        </p>
        <div className="h-32" />
      </div>
    </div>
  );
}
