"use client";
import CreateAnimalAvatar from "@/components/CreateAnimalAvatar";
import CreateHumanAvatar from "@/components/CreateHumanAvatar";
import RenderNamedAnimalAvatar from "@/components/RenderNamedAnimalAvatar";
import RenderNamedHumanAvatar from "@/components/RenderNamedHumanAvatar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { websiteUrl } from "@/lib/const";
import {
  ArrowRight,
  Fingerprint,
  Palette,
  Shuffle,
  Sliders,
} from "lucide-react";
import Image from "next/image";
import { ReactNode, useState } from "react";

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

interface FeatureItemProps {
  icon: ReactNode; // Accepts any valid React node, such as an icon or JSX
  text: string; // Text content for the feature item
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
        {icon}
      </div>
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
};

const scrollToTool = () => {
  const element = document.querySelector("#tool");
  if (element) {
    const offset = 80; // Adjust if there's a sticky header
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
};

export default function Home() {
  const [name, setName] = useState("");

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-2 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start  font-sans">
        <section className="bg-gradient-to-b from-primary-50 to-background py-20 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-2">
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                <h2 className="text-3xl relative z-20 font-bold  text-black dark:text-white font-sans tracking-tight">
                  Create Awesome Avatars with&nbsp;
                  <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-emerald-500 via-teal-400 to-green-400 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                      <span className="">Make avatar</span>
                    </div>
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-emerald-500 via-teal-400 to-green-400 py-4">
                      <span className="">Make avatar</span>
                    </div>
                  </div>
                </h2>

                <p className="text-xl mt-4 mb-4 text-muted-foreground ">
                  Design unique avatars for your profiles, websites, or apps.
                  Choose from abstract shapes to lovingly crafted characters,
                  all customizable piece by piece or generated from a seed.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <FeatureItem
                    icon={<Sliders className="h-6 w-6" />}
                    text="Fully customizable options"
                  />
                  <FeatureItem
                    icon={<Fingerprint className="h-6 w-6" />}
                    text="Deterministic avatars from seeds"
                  />
                  <FeatureItem
                    icon={<Shuffle className="h-6 w-6" />}
                    text="Random avatar generation"
                  />
                  <FeatureItem
                    icon={<Palette className="h-6 w-6" />}
                    text="Multiple avatar styles"
                  />
                </div>
                <div className="flex space-x-4">
                  <Button size="lg" onClick={scrollToTool}>
                    Start Creating <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="lg:w-1/2 flex justify-center items-center relative">
                <div className="relative w-full ">
                  <BackgroundBeamsWithCollision>
                    {Array.from({ length: 5 }).map((_, index) => {
                      const angle = (index * 360) / 5; // Distribute evenly across 360 degrees
                      const radius = 120; // Adjust radius for spacing
                      const x = radius * Math.cos((angle * Math.PI) / 180); // X position
                      const y = radius * Math.sin((angle * Math.PI) / 180); // Y position

                      return (
                        <div
                          key={index}
                          className="absolute"
                          style={{
                            top: `calc(50% + ${y}px)`,
                            left: `calc(50% + ${x}px)`,
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          <Image
                            src={`${websiteUrl}?name=samples-${index}${
                              index % 2 !== 0 ? "&type=human" : ""
                            }`}
                            width={120} // Avatar size
                            height={120}
                            alt={`Sample Avatar ${index + 1}`}
                            className="rounded-full border-2 border-background shadow-lg"
                          />
                        </div>
                      );
                    })}
                  </BackgroundBeamsWithCollision>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="flex w-full" id="tool">
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
