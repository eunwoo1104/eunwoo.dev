export function SkillBox({
  name,
  items,
  defaultIcon,
  forceTextColor,
}: SkillBoxProps) {
  return (
    <div className="level-2-bg rounded-lg p-4">
      <h3 className="flex flex-row items-center gap-x-1">
        <span>{defaultIcon}</span>
        {name}
      </h3>
      <div className="h-1.5" />
      <div className="flex flex-wrap gap-2 w-full">
        {items.map((value, idx) => (
          <p
            className={
              "rounded-lg level-3-bg px-2 py-1 flex flex-row gap-x-[3px] items-center " +
              (value.color || "") +
              (!value.color
                ? ""
                : forceTextColor == "white"
                  ? " text-white"
                  : forceTextColor == "black"
                    ? " text-black"
                    : "")
            }
            key={idx}
          >
            <span>{value.icon || defaultIcon}</span>{" "}
            <span className="relative top-[0.5px]">{value.name}</span>
          </p>
        ))}
      </div>
    </div>
  );
}

interface SkillBoxProps {
  name: string;
  items: { name: string; color?: string; icon?: React.ReactElement }[];
  defaultIcon: React.ReactElement;
  forceTextColor?: "white" | "black";
}
