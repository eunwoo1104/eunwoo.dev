import { icons } from "@/utils/icons";

export function ExternalLink({
  url,
  children,
  icon,
  linkType = "button",
  className = "",
  withGap = true,
  iconOnRight = false,
}: ExternalLinkProps) {
  if (!icon) icon = icons.externalLink;
  let aClassName = "inline-flex justify-center items-baseline hover:opacity-75";
  if (withGap) aClassName += " gap-x-[3px]";
  if (linkType === "paragraph") aClassName += " underline";
  if (className) aClassName += " " + className;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={aClassName}
    >
      {iconOnRight ? children : null}
      <span className={children ? "relative top-0.5" : ""}>{icon}</span>
      {iconOnRight ? null : children}
    </a>
  );
}

interface ExternalLinkProps {
  url: string;
  children?: string | React.ReactNode;
  icon?: React.ReactElement;
  linkType?: "button" | "paragraph";
  className?: string;
  withGap?: boolean;
  iconOnRight?: boolean;
}
