import { icons } from "@/utils/icons";

export function ExternalLink({
  url,
  children,
  icon,
  linkType = "button",
}: ExternalLinkProps) {
  if (!icon) icon = icons.externalLink;
  let aClassName =
    "inline-flex justify-center items-baseline hover:opacity-75 gap-x-[3px]";
  if (linkType === "paragraph") aClassName += " underline";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={aClassName}
    >
      {linkType === "button" ? null : children}
      <span className={children ? "relative top-[2px]" : ""}>{icon}</span>
      {linkType === "button" ? children : null}
    </a>
  );
}

interface ExternalLinkProps {
  url: string;
  children?: string | React.ReactNode;
  icon?: React.ReactElement;
  linkType?: "button" | "paragraph";
}
