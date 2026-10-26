import {
  FaBars,
  FaChevronDown,
  FaCode,
  FaCog,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaRegCheckCircle,
  FaSun,
} from "react-icons/fa";
import { FaUser, FaUserTag } from "react-icons/fa6";
import { HiMail, HiOutlineExternalLink } from "react-icons/hi";
import {
  IoDocumentLockOutline,
  IoDocumentOutline,
  IoLanguage,
} from "react-icons/io5";
import { MdOutlineBorderColor, MdPassword } from "react-icons/md";
import {
  SiDiscord,
  SiInstagram,
  SiNextdotjs,
  SiNotion,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiUptimekuma,
  SiYoutube,
  SiYoutubemusic,
} from "react-icons/si";

export const iconLicenses: Array<IconLicense> = [
  {
    id: "fa",
    name: "Font Awesome 5",
    license: "CC BY 4.0",
    link: "https://fontawesome.com/",
  },
  {
    id: "fa6",
    name: "Font Awesome 6",
    license: "CC BY 4.0",
    link: "https://fontawesome.com/",
  },
  {
    id: "md",
    name: "Material Design",
    license: "Apache License Version 2.0",
    link: "https://developers.google.com/fonts/docs/material_icons?hl=ko",
  },
  {
    id: "hi",
    name: "Heroicons",
    license: "MIT",
    link: "https://heroicons.com/",
  },
  {
    id: "si",
    name: "Simple Icons",
    license: "CC0 1.0 Universal",
    link: "https://simpleicons.org/",
  },
  {
    id: "io5",
    name: "Ionicons 5",
    license: "MIT",
    link: "https://ionicons.com/",
  },
];

export const icons = {
  light: <FaSun />,
  dark: <FaMoon />,
  setting: <FaCog />,
  list: <FaBars />,
  externalLink: <HiOutlineExternalLink />,
  language: <IoLanguage />,
  email: <HiMail />,
  password: <MdPassword />,
  user: <FaUser />,
  nick: <FaUserTag />,
  chevronDown: <FaChevronDown />,
  circleCheck: <FaRegCheckCircle />,
  privacy: <IoDocumentLockOutline />,
  code: <FaCode />,
  color: <MdOutlineBorderColor />,
  docs: <IoDocumentOutline />,

  // Programming Language Logo
  py: <SiPython />,
  ts: <SiTypescript />,
  // Tech Stack Logo
  nextjs: <SiNextdotjs />,
  github: <FaGithub />,
  react: <SiReact />,
  tailwind: <SiTailwindcss />,
  // Social
  insta: <SiInstagram />,
  linkedin: <FaLinkedin />,
  notion: <SiNotion />,
  discord: <SiDiscord />,
  youtube: <SiYoutube />,
  ytmusic: <SiYoutubemusic />,
  // Other
  uptime: <SiUptimekuma />,
};

interface IconLicense {
  id: string;
  name: string;
  license: string;
  link: string;
}
