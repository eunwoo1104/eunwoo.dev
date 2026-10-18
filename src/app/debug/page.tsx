import { headers } from "next/headers";
import { Suspense } from "react";

import { getDeviceIdentifier } from "@/utils/request";

async function DevIdent() {
  const header = await headers();
  return <p>{getDeviceIdentifier(header)}</p>;
}

export default function Debug() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Client debug info</h1>
      <div className="my-4 h-[1px] w-full bg-neutral-700" />
      <h2 className="text-xl font-semibold">Device identifier</h2>
      <Suspense fallback={<p>loading...</p>}>
        <DevIdent />
      </Suspense>
    </div>
  );
}
