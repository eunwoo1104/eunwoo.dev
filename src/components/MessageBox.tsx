export function MessageBox({
  type,
  title,
  children,
  className,
  titleClassName,
  ...props
}: MessageBoxProps) {
  let boxColor;
  switch (type) {
    case "info":
      boxColor = "bg-cornflowerblue text-blue-900 dark:text-blue-50";
      break;
    case "success":
      boxColor = "bg-green-400 text-green-900 dark:text-green-50";
      break;
    case "warn":
      boxColor = "bg-orange-300 text-orange-900 dark:text-orange-50";
      break;
    case "error":
      boxColor = "bg-lightcoral text-red-900 dark:text-red-50";
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
      <p className={"text-xl font-bold" + (titleClassName || "")}>{title}</p>
      {children}
    </div>
  );
}

export interface MessageBoxProps extends React.HTMLProps<HTMLDivElement> {
  type: "info" | "success" | "warn" | "error" | "none";
  title: string;
  titleClassName?: string;
}
