"use client";

import { AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { HeaderButton } from "@/components/layout/header/HeaderButton";
import { SettingMenu } from "@/components/layout/header/SettingMenu";
import { SiteMenu } from "@/components/layout/header/SiteMenu";
import { icons } from "@/utils/icons";

export function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menuButtonsRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  const changeMenuOpen = (menu: string) => {
    if (openMenu == menu) {
      setOpenMenu(null);
    } else {
      setOpenMenu(menu);
    }
  };

  useEffect(() => {
    if (!openMenu) return;

    const handlePointerDown = (e: PointerEvent) => {
      const target = e.target;
      if (!(target instanceof Node)) return;

      const clickedButtons = menuButtonsRef.current?.contains(target) ?? false;
      const clickedMenu = menuRef.current?.contains(target) ?? false;

      if (clickedButtons || clickedMenu) return;

      setOpenMenu(null);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [openMenu]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setOpenMenu(null);
  }, [pathname]);

  return (
    <div>
      <header
        className="fixed top-0 left-0 right-0 z-30 content-px py-6
                   flex flex-row items-center transition-colors duration-300
                   before:absolute before:inset-0 before:-z-10 before:backdrop-blur-xs before:mask-[linear-gradient(to_bottom,black_65%,transparent)]"
      >
        <Link href="/" className="font-bold text-2xl clickable rounded-lg py-1">
          eunwoo.dev
        </Link>
        <div className="flex-1" />
        <div
          className="flex flex-row justify-center items-center space-x-3"
          ref={menuButtonsRef}
        >
          <HeaderButton onClick={() => changeMenuOpen("setting")}>
            {icons.setting}
          </HeaderButton>
          <HeaderButton onClick={() => changeMenuOpen("site")}>
            {icons.list}
          </HeaderButton>
        </div>
      </header>
      <div ref={menuRef}>
        <AnimatePresence>
          {openMenu === "setting" ? (
            <SettingMenu />
          ) : openMenu === "site" ? (
            <SiteMenu />
          ) : null}
        </AnimatePresence>
      </div>
    </div>
  );
}
