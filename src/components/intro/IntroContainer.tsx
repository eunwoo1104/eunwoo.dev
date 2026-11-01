import { Suspense } from "react";

export function IntroContainer({
  title,
  subtitle,
  children,
}: IntroContainerProps) {
  return (
    <div className="">
      <h2 className="text-3xl">{title}</h2>
      <h4 className="font-light">{subtitle}</h4>
      <Suspense>{children}</Suspense>
    </div>
  );
}

interface IntroContainerProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}
