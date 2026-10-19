import { connection } from "next/server";

import { ExternalLink } from "@/components/ExternalLink";
import { database } from "@/utils/database";
import { icons } from "@/utils/icons";

export async function Links() {
  await connection();

  const links = await database.introLink().select();

  return (
    <div>
      {links.length ? (
        links.map((link) => (
          <ExternalLink
            url={link.url}
            key={link.name}
            icon={icons[link.type as keyof typeof icons] || icons.externalLink}
          >
            {link.name}
          </ExternalLink>
        ))
      ) : (
        <p>어라? 지금은 보여줄 것이 없는 것 같아요...</p>
      )}
    </div>
  );
}
