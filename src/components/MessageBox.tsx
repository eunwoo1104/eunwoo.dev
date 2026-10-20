export function MessageBox({
  type,
  title,
  children,
  className,
  icon,
  titleClassName,
  ...props
}: MessageBoxProps) {
  let boxColor;
  switch (type) {
    case "info":
      boxColor = "bg-cornflowerblue text-blue-900";
      break;
    case "success":
      boxColor = "bg-green-400 text-green-900";
      break;
    case "warn":
      boxColor = "bg-orange-300 text-orange-900";
      break;
    case "error":
      boxColor = "bg-lightcoral text-red-900";
      break;
    default:
      boxColor = "";
      break;
  }

  return (
    <div
      className={`rounded-lg w-full p-4 ${boxColor} ` + (className || "")}
      {...props}
    >
      <p
        className={
          "text-xl font-bold " +
          (icon ? "inline-flex justify-center items-baseline " : "") +
          (titleClassName || "")
        }
      >
        {icon && <span className="relative top-[3px] mr-1">{icon}</span>}
        {title}
      </p>
      {children}
    </div>
  );
}

export interface MessageBoxProps extends React.HTMLProps<HTMLDivElement> {
  type: "info" | "success" | "warn" | "error" | "none";
  title: string;
  icon?: React.ReactNode;
  titleClassName?: string;
}
