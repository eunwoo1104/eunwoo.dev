"use server";

import { icons, iconsFromImage } from "@/utils/icons";
import type { IntroCareer, IntroSkill } from "@/utils/types";

// TODO: fetch all of these data from database

export async function getCareers(): Promise<{ [key: string]: IntroCareer[] }> {
  const educations = [
    {
      name: "건국대학교 컴퓨터공학부",
      icon: iconsFromImage(20).konkuk,
      position: "재학중",
      startDate: "2025.03",
      endDate: "현재",
      links: [
        { url: "https://www.konkuk.ac.kr/", icon: icons.school },
        { url: "https://cse.konkuk.ac.kr/", icon: icons.cse },
      ],
    },
    {
      name: "삼육대학교 컴퓨터공학부",
      icon: iconsFromImage(20).sahmyook,
      position: "2학년 수료",
      startDate: "2023.03",
      endDate: "2025.02",
      links: [
        { url: "https://www.syu.ac.kr/", icon: icons.school },
        { url: "https://www.syu.ac.kr/cse/", icon: icons.cse },
      ],
    },
  ];
  const clubs = [
    {
      name: "GDG On Campus - Konkuk Univ.",
      icon: iconsFromImage(20).gdg,
      position: "Member",
      startDate: "2026.09",
      endDate: "현재",
      links: [
        { url: "https://gdgoc-konkuk.com/", icon: icons.home },
        { url: "https://github.com/gdgoc-konkuk", icon: icons.github },
      ],
    },
    {
      name: "GDG On Campus - Sahmyook Univ.",
      icon: iconsFromImage(20).gdg,
      position: "Core Member",
      startDate: "2023.09",
      endDate: "2025.02",
      links: [{ url: "https://gdsc-syu-welcome.pages.dev/", icon: icons.home }],
    },
    {
      name: "COD36EEK",
      icon: iconsFromImage(20).cod36eek,
      position: "임원",
      startDate: "2023.09",
      endDate: "2024.08",
      links: [
        {
          url: "https://ctftime.org/team/270620",
          icon: icons.externalLink,
        },
      ],
    },
  ];
  const teams = [
    {
      name: "한국 디스코드 리스트",
      icon: iconsFromImage(20).klistBg,
      position: "팀장",
      startDate: "2022.03",
      endDate: "현재",
      links: [
        { url: "https://koreanbots.dev/", icon: icons.home },
        { url: "https://github.com/koreanbots", icon: icons.github },
      ],
    },
    {
      name: "Project eTe",
      icon: iconsFromImage(20).ete,
      position: "개발자",
      startDate: "2021.12",
      endDate: "현재",
      links: [
        { url: "https://etebot.io'/", icon: icons.home },
        { url: "https://github.com/Project-eTe", icon: icons.github },
      ],
    },
  ];

  return {
    Education: educations,
    "School Clubs": clubs,
    "Project Teams": teams,
  };
}

export async function getSkills(): Promise<IntroSkill[]> {
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
    { name: "NGINX", color: "bg-nginx-green", icon: icons.nginx },
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

  return [
    {
      name: "Language",
      items: langs,
      defaultIcon: icons.code,
      forceTextColor: "white",
    },
    {
      name: "Framework",
      items: frameworks,
      defaultIcon: icons.terminal,
      forceTextColor: "white",
    },
    {
      name: "Database",
      items: databases,
      defaultIcon: icons.database,
      forceTextColor: "white",
    },
    {
      name: "Cloud",
      items: cloud,
      defaultIcon: icons.cloud,
      forceTextColor: "white",
    },
    {
      name: "Server & Infrastructure",
      items: server,
      defaultIcon: icons.server,
      forceTextColor: "white",
    },
    {
      name: "Tools & Misc",
      items: etc,
      defaultIcon: icons.tools,
      forceTextColor: "white",
    },
  ];
}
