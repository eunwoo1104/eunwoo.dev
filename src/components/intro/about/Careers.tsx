import { connection } from "next/server";

import { getCareers } from "@/actions/intro";

import { CareerBox } from "./CareerBox";

export async function Careers() {
  await connection();

  const careers = await getCareers();

  return (
    <div className="flex flex-col space-y-3">
      {Object.entries(careers).map(([title, items], idx) => (
        <div key={idx}>
          <h3>{title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {items.map((value, idx) => (
              <CareerBox {...value} key={idx} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
