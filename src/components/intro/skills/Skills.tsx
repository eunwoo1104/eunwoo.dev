import { icons } from "@/utils/icons";

import { SkillBox } from "./SkillBox";

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
    { name: "Tailwind CSS", color: "bg-sky-500", icon: icons.tailwind },
    { name: "FastAPI", color: "bg-fastapi-mint", icon: icons.fastapi },
    { name: "Sanic", color: "bg-sanic-red", icon: icons.sanic },
  ];
  const databases = [
    { name: "MariaDB", color: "bg-mariadb-blue", icon: icons.mariadb },
    { name: "MongoDB", color: "bg-mongodb-green", icon: icons.mongodb },
  ];

  return (
    <div className="flex flex-col space-y-2 w-full">
      <SkillBox
        name="Language"
        items={langs}
        defaultIcon={icons.code}
        forceTextColor="white"
      />
      <SkillBox
        name="Framework"
        items={frameworks}
        defaultIcon={icons.terminal}
        forceTextColor="white"
      />
      <SkillBox
        name="Database"
        items={databases}
        defaultIcon={icons.database}
        forceTextColor="white"
      />
    </div>
  );
}
