"use client";

import CreateHumanAvatar from "@/components/CreateHumanAvatar";
import RenderNamedHumanAvatar from "@/components/RenderNamedHumanAvatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";

const EXAMPLE_NAMES = [
  "Emma Caldwell",
  "Lucas Harper",
  "Olivia Bennett",
  "Ethan Sullivan",
  "Sophia Hayes",
  "James Monroe",
  "Ava Patterson",
  "Noah Brooks",
  "Mia Collins",
  "Liam Reynolds",
  "Isabella Morgan",
  "Mason Clarke",
];

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <CreateHumanAvatar />

        <Separator />

        <div className="grid justify-items-center gap-4">
          <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
          {name && <RenderNamedHumanAvatar name={name} />}
        </div>

        <div className="grid grid-cols-4 gap-x-20 gap-y-10">
          {EXAMPLE_NAMES.map((e) => (
            <div key={e}>
              <RenderNamedHumanAvatar name={e} key={e} />
              {e}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
