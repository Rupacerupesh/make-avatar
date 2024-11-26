"use client";

import {
  BanIcon,
  ChevronDown,
  CircleIcon,
  Download,
  Eye,
  Link2,
  ShuffleIcon,
  SquareIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { ColorPicker } from "./ui/color-picker";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Separator } from "@radix-ui/react-separator";
import { useEffect, useState } from "react";
import {
  animalEyesKeys,
  animalEyesOptions,
  animalEyesViewPort,
} from "./animal-shapes/animal-eyes";
import ChangeFeature from "./ChangeFeature";
import { AnimalAvatarStateInterface } from "@/lib/types";
import {
  animalEarsKeys,
  animalEarsOptions,
  animalEarsViewPort,
  animalEyebrowsKeys,
  animalEyebrowsOptions,
  animalEyeBrowsViewPort,
  animalFaceKeys,
  animalHairKeys,
  animalHairOptions,
  animalHairViewPort,
  animalMuzzleKeys,
  animalMuzzleOptions,
  animalMuzzleViewPort,
  animalPatternsKeys,
  animalPatternsOptions,
  animalPatternsViewPort,
} from "./animal-shapes";
import RenderAnimalAvatar from "./RenderAnimalAvatar";
import { animalAvatarColors, backgroundColors } from "@/lib/colors";
import {
  generateDefaultRandomAvatarState,
  handleDownloadPNG,
  handleDownloadSVG,
} from "@/lib/utils";
import { websiteUrl } from "@/lib/const";
import { Popover, PopoverContent } from "./ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";

const BackgroundOptions = [
  { type: "circle", Icon: CircleIcon },
  { type: "square", Icon: SquareIcon },
  { type: "none", Icon: BanIcon },
];

const getRandomNumberFromArrayLength = (length: number) =>
  Math.floor(Math.random() * length);

const CreateAnimalAvatar = () => {
  const [state, setState] = useState<AnimalAvatarStateInterface>(
    generateDefaultRandomAvatarState()
  );

  const randomShuffle = () => {
    setState({
      animalEyes:
        animalEyesKeys[getRandomNumberFromArrayLength(animalEyesKeys.length)],
      animalHair:
        animalHairKeys[getRandomNumberFromArrayLength(animalHairKeys.length)],
      animalEars:
        animalEarsKeys[getRandomNumberFromArrayLength(animalEarsKeys.length)],
      animalEyebrows:
        animalEyebrowsKeys[
          getRandomNumberFromArrayLength(animalEyebrowsKeys.length)
        ],
      animalFace: animalFaceKeys[0],
      animalMuzzle:
        animalMuzzleKeys[
          getRandomNumberFromArrayLength(animalMuzzleKeys.length)
        ],
      animalPatterns:
        animalPatternsKeys[
          getRandomNumberFromArrayLength(animalPatternsKeys.length)
        ],
      bgColor:
        backgroundColors[
          getRandomNumberFromArrayLength(backgroundColors.length)
        ],
      avatarColor:
        animalAvatarColors[
          getRandomNumberFromArrayLength(animalAvatarColors.length)
        ],
      bgType: "circle",
    });
  };

  const handleChange = (key: string, index: number | string) => {
    setState((prevState) => ({
      ...prevState,
      [key]: index,
    }));
  };

  const generateUrl = (
    baseUrl: string,
    params: Record<string, string>
  ): string => {
    const queryString = Object.entries(params)
      .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
      .join("&");
    return `${baseUrl}${queryString}`;
  };

  const url = generateUrl(websiteUrl + "?", {
    eyes: state.animalEyes,
    hair: state.animalHair,
    ears: state.animalEars,
    eyebrows: state.animalEyebrows,
    muzzle: state.animalMuzzle,
    patterns: state.animalPatterns,
    background: state.bgColor.replace("#", ""),
    skin: state.avatarColor.replace("#", ""),
    "background-type": state.bgType,
  });

  const handleOpenLink = () => {
    window.open(url, "_blank");
  };

  const [isCopied, setIsCopied] = useState(false);

  let timeoutId: NodeJS.Timeout;

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setIsCopied(true);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setIsCopied(false);
    }, 1000);
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    return () => clearTimeout(timeoutId);
  }, []);

  if (!isClient) return null; // or a loading state

  return (
    <div className="w-full max-w-md mx-auto space-y-6 p-4">
      <div className="space-y-1">
        <div className="flex flex-row justify-end mb-5 gap-2">
          <div className="basis-1/3  min-w-32 space-y-3">
            <Button
              variant="secondary"
              size="default"
              onClick={randomShuffle}
              className="mb-10"
            >
              <ShuffleIcon className="h-5 w-5 " />
            </Button>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <ColorPicker
                  onChange={(v) => handleChange("avatarColor", v)}
                  value={state.avatarColor}
                />
                <span className="text-md  font-medium">Face</span>
              </div>

              <div className="flex flex-col">
                <ColorPicker
                  onChange={(v) => handleChange("bgColor", v)}
                  value={state.bgColor}
                />
                <span className="text-md  font-medium">BG</span>
              </div>
            </div>

            <div>
              <div className=" flex justify-center bg-slate-200 rounded-full p-1">
                {BackgroundOptions.map(({ type, Icon }) => (
                  <Button
                    key={type}
                    size="icon"
                    variant={state.bgType === type ? "secondary" : "link"}
                    onClick={() => handleChange("bgType", type)}
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
              <span className="text-md  font-medium">Background</span>
            </div>
          </div>
          <div className="basis-2/3 ">
            <RenderAnimalAvatar avatarState={state} />

            <div className="flex gap-4 mt-10">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Download className="w-5 h-5" />

                    <ChevronDown className="w-5 h-5 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => handleDownloadPNG(url)}>
                    Download PNG
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleDownloadSVG(url)}>
                    Download SVG
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Popover open={isCopied}>
                <PopoverTrigger>
                  <Button variant="outline" onClick={handleCopyToClipboard}>
                    <Link2 className="h-6 w-6" />
                  </Button>
                </PopoverTrigger>

                <PopoverContent
                  className="w-auto h-auto p-2 text-sm font-medium"
                  side="top"
                >
                  Copied!
                </PopoverContent>
              </Popover>

              <Button variant="outline" onClick={handleOpenLink}>
                <Eye className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <Separator />
        </div>

        <ChangeFeature
          label="Eyes"
          feature="animalEyes"
          viewPort={animalEyesViewPort}
          currentValue={state.animalEyes}
          onChange={handleChange}
          color={state.avatarColor}
          options={animalEyesOptions}
        />

        <ChangeFeature
          label="Hair"
          feature="animalHair"
          viewPort={animalHairViewPort}
          currentValue={state.animalHair}
          onChange={handleChange}
          color={state.avatarColor}
          options={animalHairOptions}
        />

        <ChangeFeature
          label="Ears"
          feature="animalEars"
          viewPort={animalEarsViewPort}
          currentValue={state.animalEars}
          onChange={handleChange}
          color={state.avatarColor}
          options={animalEarsOptions}
        />

        <ChangeFeature
          label="Eyebrows"
          feature="animalEyebrows"
          viewPort={animalEyeBrowsViewPort}
          currentValue={state.animalEyebrows}
          onChange={handleChange}
          color={state.avatarColor}
          options={animalEyebrowsOptions}
        />

        <ChangeFeature
          label="Muzzle"
          feature="animalMuzzle"
          viewPort={animalMuzzleViewPort}
          currentValue={state.animalMuzzle}
          onChange={handleChange}
          color={state.avatarColor}
          options={animalMuzzleOptions}
        />

        <ChangeFeature
          label="Pattern"
          feature="animalPatterns"
          viewPort={animalPatternsViewPort}
          currentValue={state.animalPatterns}
          onChange={handleChange}
          color={state.avatarColor}
          options={animalPatternsOptions}
        />
      </div>
    </div>
  );
};

export default CreateAnimalAvatar;
