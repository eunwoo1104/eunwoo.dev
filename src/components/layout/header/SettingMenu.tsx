"use client";

import { useEffect, useState } from "react";

import { Toggle } from "@/components/Toggle";
import { icons } from "@/utils/icons";

import { MenuBox } from "./MenuBox";

export function SettingMenu() {
  const getSelectedTheme = () => localStorage.getItem("theme") || "system";
  const getSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)")?.matches
      ? "dark"
      : "light";

  const [selectedTheme, setSelectedTheme] =
    useState<string>(getSelectedTheme());

  useEffect(() => {
    if (selectedTheme !== "system")
      localStorage.setItem("theme", selectedTheme);
    else localStorage.setItem("theme", "system");
    document.documentElement.classList.toggle(
      "dark",
      selectedTheme !== "system"
        ? selectedTheme === "dark"
        : getSystemTheme() === "dark",
    );
  }, [selectedTheme]);

  return (
    <MenuBox className="md:w-fit space-y-2">
      <div className="font-bold text-sm text-neutral-600 dark:text-neutral-400 flex flex-row items-center space-x-1">
        <div className="inline-block">
          {selectedTheme === "dark" ||
          (selectedTheme === "system" && getSystemTheme() === "dark")
            ? icons.dark
            : icons.light}
        </div>
        <p>테마 설정</p>
      </div>
      <div className="flex flex-row justify-between items-center">
        <p>다크 모드</p>
        <Toggle
          value={
            selectedTheme === "dark" ||
            (selectedTheme === "system" && getSystemTheme() === "dark")
          }
          onClick={() =>
            setSelectedTheme(selectedTheme === "light" ? "dark" : "light")
          }
          disabled={selectedTheme === "system"}
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <p>시스템 테마 사용</p>
        <div className="flex-1 w-4" />
        <Toggle
          value={selectedTheme === "system"}
          onClick={() =>
            setSelectedTheme(
              selectedTheme === "system" ? getSystemTheme() : "system",
            )
          }
        />
      </div>
      <div className="font-bold text-sm text-neutral-600 dark:text-neutral-400 flex flex-row items-center space-x-1">
        <div className="inline-block">{icons.language}</div>
        <p>언어 설정</p>
      </div>
      <p>준비중...</p>
    </MenuBox>
  );
}
