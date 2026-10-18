"use client";

import { useEffect, useState } from "react";

export function DevScreen() {
  const [size, setSize] = useState<string>("Loading...");

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setSize(`${window.screen.width} x ${window.screen.height}`);
  }, []);

  return <p>{size}</p>;
}
