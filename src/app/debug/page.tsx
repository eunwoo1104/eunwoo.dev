import { DevIdent } from "./_components/DevIdent";
import { DevScreen } from "./_components/DevScreen";

export default function Debug() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Client debug info</h1>
      <div className="my-4 h-[1px] w-full bg-neutral-700" />
      <h2 className="text-xl font-semibold">Device identifier</h2>
      <DevIdent />
      <h2 className="text-xl font-semibold">Device screen</h2>
      <DevScreen />
    </div>
  );
}
