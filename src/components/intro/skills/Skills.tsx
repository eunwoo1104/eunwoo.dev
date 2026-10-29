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
    { name: "React Native", color: "bg-react-blue", icon: icons.react },
    { name: "Next.js", color: "bg-black", icon: icons.nextjs },
    { name: "Tailwind CSS", color: "bg-sky-500", icon: icons.tailwind },
    { name: "FastAPI", color: "bg-fastapi-mint", icon: icons.fastapi },
    { name: "Sanic", color: "bg-sanic-red", icon: icons.sanic },
  ];
  const databases = [
    { name: "MariaDB", color: "bg-mariadb-blue", icon: icons.mariadb },
    { name: "MongoDB", color: "bg-mongodb-green", icon: icons.mongodb },
  ];
  const cloud = [
    { name: "AWS EC2", color: "bg-aws-gray" },
    { name: "Akamai Linode", color: "bg-akamai-blue", icon: icons.akamai },
    {
      name: "Cloudflare",
      color: "bg-cloudflare-orange",
      icon: icons.cloudflare,
    },
    { name: "Vercel", color: "bg-black", icon: icons.vercel },
    { name: "Datadog", color: "bg-datadog-purple", icon: icons.datadog },
  ];
  const server = [
    { name: "Ubuntu", color: "bg-ubuntu-orange", icon: icons.ubuntu },
    { name: "PowerEdge", color: "bg-dell-blue", icon: icons.dell },
    { name: "iDRAC8", color: "bg-dell-blue", icon: icons.dell },
    { name: "KVM", icon: icons.linux },
    { name: "Docker", color: "bg-docker-blue", icon: icons.docker },
    { name: "Docker Compose", color: "bg-docker-blue", icon: icons.docker },
  ];
  const etc = [
    { name: "Git", color: "bg-git-orange", icon: icons.git },
    { name: "GitHub", color: "bg-black", icon: icons.github },
    { name: "GitHub Actions", color: "bg-black", icon: icons.github },
    { name: "Yup" },
    { name: "Notion", icon: icons.notion },
    {
      name: "Google Analytics",
      color: "bg-ganalytics-orange",
      icon: icons.ganalytics,
    },
    { name: "Google AdSense", color: "bg-gadsense-blue", icon: icons.gadsense },
  ];

  return (
    <div className="flex flex-col space-y-3 w-full">
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
      <SkillBox
        name="Cloud"
        items={cloud}
        defaultIcon={icons.cloud}
        forceTextColor="white"
      />
      <SkillBox
        name="Server & Infrastructure"
        items={server}
        defaultIcon={icons.server}
        forceTextColor="white"
      />
      <SkillBox
        name="Tools & Misc"
        items={etc}
        defaultIcon={icons.tools}
        forceTextColor="white"
      />
    </div>
  );
}
