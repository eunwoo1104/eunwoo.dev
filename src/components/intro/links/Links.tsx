import { connection } from "next/server";

import { getLinks } from "@/actions/intro";
import { ExternalLink } from "@/components/ExternalLink";
import { icons } from "@/utils/icons";

export async function Links() {
  await connection();

  const links = await getLinks();

  return (
    <div>
      {links.length ? (
        links.map((value, idx) => (
          <ExternalLink
            url={value.url}
            key={idx}
            icon={value.icon || icons.externalLink}
          >
            {value.name}
          </ExternalLink>
        ))
      ) : (
        <p>어라? 지금은 보여줄 것이 없는 것 같아요...</p>
      )}
    </div>
  );
}
