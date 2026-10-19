import { Suspense } from "react";

import { Links } from "./Links";

export function LinksContainer() {
  return (
    <div>
      <h2 className="text-xl font-semibold">Contacts & Links</h2>
      <p>insert link area comment here</p>
      <Suspense>
        <Links />
      </Suspense>
    </div>
  );
}
