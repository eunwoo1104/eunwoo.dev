import { Intro } from "@/components/animated/Intro";

export default function Home() {
  return (
    <div className="w-full">
      <div className="min-h-[calc(100dvh-88px)] flex flex-col items-center justify-center">
        <Intro />
        <div className="h-32" />
      </div>
    </div>
  );
}
