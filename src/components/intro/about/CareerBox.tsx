import { ExternalLink } from "@/components/ExternalLink";

export function CareerBox({
  name,
  icon,
  position,
  startDate,
  endDate,
  links,
}: CareerBoxProps) {
  return (
    <div className="level-2-bg rounded-lg p-4">
      <div className="flex flex-row items-center w-full text-lg">
        <div className="mr-1">{icon}</div>
        <p>{name}</p>
        <div className="flex-1" />
        {links && (
          <div className="flex flex-row items-center space-x-1.5">
            {links.map((value, idx) => (
              <ExternalLink url={value.url} icon={value.icon} key={idx} />
            ))}
          </div>
        )}
      </div>
      <p className="subtext">
        {position}, {startDate} ~ {endDate}
      </p>
    </div>
  );
}

interface CareerBoxProps {
  name: string;
  icon: React.ReactElement;
  position: string;
  startDate: string;
  endDate: string;
  links?: {
    url: string;
    icon?: React.ReactElement;
  }[];
}
