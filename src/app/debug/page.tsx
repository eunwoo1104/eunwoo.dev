import { DevIdent } from "./_components/DevIdent";
import { DevScreen } from "./_components/DevScreen";

export default function Debug() {
  return (
    <div>
      <h1>Client debug info</h1>
      <div className="my-4 divider" />
      <h2>Device identifier</h2>
      <DevIdent />
      <h2>Device screen</h2>
      <DevScreen />
    </div>
  );
}
