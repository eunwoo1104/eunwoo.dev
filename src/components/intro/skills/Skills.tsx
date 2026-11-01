import { connection } from "next/server";

import { getSkills } from "@/actions/intro";

import { SkillBox } from "./SkillBox";

export async function Skills() {
  await connection();

  const skills = await getSkills();

  return (
    <div className="flex flex-col space-y-3 w-full mt-2">
      {skills.map((value, idx) => (
        <SkillBox key={idx} {...value} />
      ))}
    </div>
  );
}
