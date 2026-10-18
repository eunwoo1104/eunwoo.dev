import { headers } from "next/headers";
import { Suspense } from "react";

import { getDeviceIdentifier } from "@/utils/request";

async function LoadedDevIdent() {
  const header = await headers();
  return <p>{getDeviceIdentifier(header)}</p>;
}

export function DevIdent() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <LoadedDevIdent />
    </Suspense>
  );
}
