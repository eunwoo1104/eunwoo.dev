export function SkillBox({
  name,
  items,
  defaultIcon,
  forceTextColor,
}: SkillBoxProps) {
  return (
    <div className="level-2-bg rounded-lg p-4">
      <h3>{name}</h3>
      <div className="h-1" />
      <div className="flex flex-wrap gap-2 w-full">
        {items.map((value, idx) => (
          <p
            className={
              "rounded-lg level-3-bg px-2 py-1 flex flex-row gap-x-[3px] items-center " +
              (value.color || "") +
              (forceTextColor == "white"
                ? " text-white"
                : forceTextColor == "black"
                  ? " text-black"
                  : "")
            }
            key={idx}
          >
            <span className="relative">{value.icon || defaultIcon}</span>{" "}
            {value.name}
          </p>
        ))}
      </div>
    </div>
  );
}

interface SkillBoxProps {
  name: string;
  items: { name: string; color?: string; icon?: React.ReactElement }[];
  defaultIcon?: React.ReactElement;
  forceTextColor?: "white" | "black";
}
