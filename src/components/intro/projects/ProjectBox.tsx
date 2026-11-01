import { ExternalLink } from "@/components/ExternalLink";
import { icons } from "@/utils/icons";

export function ProjectBox({ name, description, links }: ProjectBoxProps) {
  return (
    <div className="level-2-bg rounded-lg p-4">
      <h3>{name}</h3>
      <div className="flex flex-row items-center gap-x-2">
        {links?.map((value, idx) => (
          <ExternalLink key={idx} url={value.url} icon={value.icon}>
            {value.text}
          </ExternalLink>
        ))}
      </div>
      <p className="subtext">{description}</p>
    </div>
  );
}

interface ProjectBoxProps {
  name: string;
  description: string;
  links?: { url: string; text: string; icon?: React.ReactElement }[];
}
