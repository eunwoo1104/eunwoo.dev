import { connection } from "next/server";

import { getLinks } from "@/actions/intro";
import { ExternalLink } from "@/components/ExternalLink";
import { icons } from "@/utils/icons";

export async function Links({ editMode }: LinksProps) {
  await connection();

  const links = await getLinks();

  return (
    <div>
      {links.length ? (
        links.map((value, idx) => (
          <div key={idx} className="flex flex-row items-center space-x-1.5">
            {editMode && (
              <div className="text-red-500 clickable">{icons.minus}</div>
            )}
            <ExternalLink
              url={value.url}
              icon={value.icon || icons.externalLink}
            >
              {value.name}
            </ExternalLink>
          </div>
        ))
      ) : (
        <p>어라? 지금은 보여줄 것이 없는 것 같아요...</p>
      )}
    </div>
  );
}

interface LinksProps {
  editMode?: boolean;
}
