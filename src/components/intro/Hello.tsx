"use client";

import { motion } from "motion/react";

import { ExternalLink } from "@/components/ExternalLink";
import { icons } from "@/utils/icons";

export function Hello({ chevronOnClick }: { chevronOnClick: () => void }) {
  return (
    <div className="w-fit mx-auto flex flex-col items-center justify-center space-y-1.5">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
        className="flex flex-row text-4xl xs:text-5xl lg:text-6xl font-extrabold space-x-1"
      >
        <h1 className="text-center">Hello, World!</h1>
        <motion.h1
          animate={{
            rotate: [0, -30, 45, 0],
            transition: { duration: 1, delay: 1 },
          }}
          className="self-center"
        >
          👋
        </motion.h1>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: -15 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        className="text-2xl xs:text-3xl font-light"
      >
        학생 개발자 최은우 입니다.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 2 },
        }}
        className="flex flex-row space-x-2"
      >
        <ExternalLink
          url="mailto:choi@eunwoo.dev"
          className="clickable circle-icon level-2-bg h-12 w-12 text-2xl items-center"
          icon={icons.email}
          withGap={false}
        />
        <ExternalLink
          url="https://github.com/eunwoo1104"
          className="clickable circle-icon level-2-bg h-12 w-12 text-2xl items-center"
          icon={icons.github}
          withGap={false}
        />
        <button
          className="clickable circle-icon level-2-bg h-12 w-12 text-2xl"
          onClick={chevronOnClick}
        >
          {icons.chevronDown}
        </button>
      </motion.div>
    </div>
  );
}
