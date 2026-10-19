import type { Metadata } from "next";
import Script from "next/script";

import { Header } from "@/components/layout/header/Header";
import { SessionProvider } from "@/components/provider/SessionProvider";

import "./globals.css";

export const metadata: Metadata = {
  title: "eunwoo.dev",
  description: "Hello, World!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const themeScript = `
  let themeSet = localStorage.getItem('theme');
  if (!themeSet) {
    localStorage.setItem('theme', 'system');
    themeSet = 'system';
  }
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')?.matches ? 'dark' : 'light';
  const root = document.documentElement;
  if ((themeSet === 'system' && systemTheme === "dark") || themeSet === 'dark') root.classList.toggle('dark', true);`;

  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <SessionProvider>
        <body className="level-1-bg w-full min-h-screen font-normal text-base">
          <Header />
          <div className="content-pt content-px min-h-screen">{children}</div>
        </body>
      </SessionProvider>
    </html>
  );
}
