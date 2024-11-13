"use client";
import CreateAnimalAvatar from "@/components/CreateAnimalAvatar";
import RenderNamedAnimalAvatar from "@/components/RenderNamedAnimalAvatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState } from "react";

const EXAMPLE_NAMES = [
  "Bailey",
  "Cooper",
  "Lola",
  "Finn",
  "Hazel",
  "Bentley",
  "Milo",
  "Luna",
  "Ollie",
  "Scout",
  "Frankie",
  "Nala",
];

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <CreateAnimalAvatar />
        <Separator />

        <div className="grid justify-items-center gap-4">
          <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
          {name && <RenderNamedAnimalAvatar name={name} />}
        </div>

        <div className="grid grid-cols-4 gap-x-20 gap-y-10">
          {EXAMPLE_NAMES.map((e) => (
            <div key={e}>
              <RenderNamedAnimalAvatar name={e} key={e} />
              {e}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
