"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navigator() {
  const pathname = usePathname();

  const paths = {
    "/": "홈",
    "/intro": "인트로",
  };

  return (
    <div className="flex flex-col items-center rounded-md level-2-bg text-xl font-semibold w-28 p-2 h-[calc(100dvh-18rem)] fixed top-36 left-0 z-10 content-ml">
      {Object.entries(paths).map(([path, name]) => (
        <Link
          key={path}
          href={"/dashboard" + path}
          className={
            "p-3 w-full text-center " +
            ((path === "/" && pathname === "/dashboard") ||
            pathname === "/dashboard" + path
              ? "level-3-bg rounded-md"
              : "")
          }
        >
          {name}
        </Link>
      ))}
    </div>
  );
}
