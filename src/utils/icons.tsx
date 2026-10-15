import {
  FaBars,
  FaCog,
  FaGithub,
  FaLinkedin,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { HiMail, HiOutlineExternalLink } from "react-icons/hi";
import { IoLanguage } from "react-icons/io5";
import {
  SiDiscord,
  SiInstagram,
  SiNextdotjs,
  SiNotion,
  SiPython,
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

  // Programming Language Logo
  py: <SiPython />,
  ts: <SiTypescript />,
  // Tech Stack Logo
  nextjs: <SiNextdotjs />,
  github: <FaGithub />,
  // Social
  insta: <SiInstagram />,
  email: <HiMail />,
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
