"use client";
import CreateAnimalAvatar from "@/components/CreateAnimalAvatar";
import CreateHumanAvatar from "@/components/CreateHumanAvatar";
import RenderNamedAnimalAvatar from "@/components/RenderNamedAnimalAvatar";
import RenderNamedHumanAvatar from "@/components/RenderNamedHumanAvatar";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
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
];

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex w-full">
          <CreateAnimalAvatar />
          <CreateHumanAvatar />
        </div>
        <Separator id="examples" />

        <div className="w-full flex  justify-center ">
          <div>
            <Input
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex w-full">
          <div className="w-full flex  items-center justify-center ">
            {name && <RenderNamedAnimalAvatar name={name} />}
          </div>
          <div className="w-full flex items-center justify-center ">
            {name && <RenderNamedHumanAvatar name={name} />}
          </div>
        </div>

        <div className="flex w-full gap-8">
          <div className="w-full flex items-center justify-center">
            <div className="grid grid-cols-3 gap-8">
              {EXAMPLE_NAMES.map((e) => (
                <div key={e} className="flex flex-col items-center">
                  <RenderNamedAnimalAvatar name={e} />
                  <p className="text-center">{e}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full flex items-center justify-center ">
            <div className="grid grid-cols-3 gap-8">
              {EXAMPLE_NAMES.map((e) => (
                <div key={e} className="flex flex-col items-center">
                  <RenderNamedHumanAvatar name={e} key={e} />
                  <p className="text-center">{e}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
