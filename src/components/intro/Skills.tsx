import { SkillBox } from "@/components/intro/SkillBox";
import { icons } from "@/utils/icons";

export function Skills() {
  // TODO: move these data to database
  const langs = [
    { name: "Python", color: "bg-python-blue", icon: icons.py },
    { name: "TypeScript", color: "bg-typescript-blue", icon: icons.ts },
    { name: "Java", color: "bg-java-orange" },
  ];
  const frameworks = [
    { name: "React", color: "bg-react-blue", icon: icons.react },
    { name: "Next.js", color: "bg-black", icon: icons.nextjs },
    { name: "FastAPI", color: "bg-fastapi-mint", icon: icons.fastapi },
  ];

  return (
    <div className="flex flex-col w-full">
      <SkillBox
        name="Language"
        items={langs}
        defaultIcon={icons.code}
        forceTextColor="white"
      />
      <div className="h-2" />
      <SkillBox
        name="Framework"
        items={frameworks}
        defaultIcon={icons.terminal}
        forceTextColor="white"
      />
    </div>
  );
}
