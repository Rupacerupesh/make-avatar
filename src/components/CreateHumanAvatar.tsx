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
import { useState } from "react";
import {
  animalEyesKeys,
  animalEyesOptions,
  animalEyesViewPort,
} from "./animal-shapes/animal-eyes";
import ChangeFeature from "./ChangeFeature";
import {
  AnimalAvatarStateInterface,
  HumanAvatarStateInterface,
} from "@/lib/types";
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
import { avatarColors, backgroundColors } from "./animal-shapes/animal-colors";
import {
  humanClothesKeys,
  humanClothesOptions,
  humanClothesViewport,
  humanEyebrowsKeys,
  humanEyebrowsOptions,
  humanEyebrowsViewport,
  humanEyesKeys,
  humanEyesOptions,
  humanEyesViewport,
  humanHairKeys,
  humanHairOptions,
  humanHairViewport,
  humanMouthKeys,
  humanMouthOptions,
  humanMouthViewport,
} from "./human-shapes";
import RenderHumanAvatar from "./RenderHumanAvatar";
import ChangeFeatureHuman from "./ChangeFeatureHuman";

const BackgroundOptions = [
  { type: "circle", Icon: CircleIcon },
  { type: "square", Icon: SquareIcon },
  { type: "none", Icon: BanIcon },
];

const getRandomNumberFromArrayLength = (length: number) =>
  Math.floor(Math.random() * length);

const CreateHumanAvatar = () => {
  const [state, setState] = useState<HumanAvatarStateInterface>({
    humanClothes: humanClothesKeys[0],
    humanEyebrows: humanEyebrowsKeys[0],
    humanEyes: humanEyesKeys[0],
    humanHair: humanHairKeys[0],
    humanMouth: humanMouthKeys[0],
    humanAvatarColor: "red",
    humanBgColor: "black",
    humanClothesColor: "blue",
  });

  const randomShuffle = () => {
    setState({
      humanClothes:
        humanClothesKeys[
          getRandomNumberFromArrayLength(humanClothesKeys.length)
        ],
      humanMouth:
        humanMouthKeys[getRandomNumberFromArrayLength(humanMouthKeys.length)],
      humanEyes:
        humanEyesKeys[getRandomNumberFromArrayLength(humanEyesKeys.length)],
      humanHair:
        humanHairKeys[getRandomNumberFromArrayLength(humanHairKeys.length)],
      humanEyebrows:
        humanEyebrowsKeys[
          getRandomNumberFromArrayLength(humanEyebrowsKeys.length)
        ],

      humanBgColor:
        backgroundColors[
          getRandomNumberFromArrayLength(backgroundColors.length)
        ],
      humanClothesColor:
        backgroundColors[
          getRandomNumberFromArrayLength(backgroundColors.length)
        ],
      humanAvatarColor:
        avatarColors[getRandomNumberFromArrayLength(avatarColors.length)],
    });
  };

  const handleChange = (key: string, index: number | string) => {
    setState((prevState) => ({
      ...prevState,
      [key]: index,
    }));
  };

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
                  onChange={(v) => handleChange("humanAvatarColor", v)}
                  value={state.humanAvatarColor}
                />
                <span className="text-md  font-medium">Face</span>
              </div>

              <div className="flex flex-col">
                <ColorPicker
                  onChange={(v) => handleChange("humanBgColor", v)}
                  value={state.humanBgColor}
                />
                <span className="text-md  font-medium">BG</span>
              </div>
            </div>
            <div className="flex flex-col">
              <ColorPicker
                onChange={(v) => handleChange("humanClothesColor", v)}
                value={state.humanClothesColor}
              />
              <span className="text-md  font-medium">Cloth</span>
            </div>
          </div>
          <div className="basis-2/3 ">
            <RenderHumanAvatar avatarState={state} />

            <div className="flex gap-4 mt-10">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <Download className="w-5 h-5" />

                    <ChevronDown className="w-5 h-5 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Download PNG</DropdownMenuItem>
                  <DropdownMenuItem>Download SVG</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="outline">
                <Link2 className="h-6 w-6" />
              </Button>

              <Button variant="outline">
                <Eye className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <Separator />
        </div>

        <ChangeFeatureHuman
          label="Eyes"
          feature="humanEyes"
          viewPort={humanEyesViewport}
          currentValue={state.humanEyes}
          onChange={handleChange}
          color={state.humanAvatarColor}
          options={humanEyesOptions}
        />

        <ChangeFeatureHuman
          label="Mouth"
          feature="humanMouth"
          viewPort={humanMouthViewport}
          currentValue={state.humanMouth}
          onChange={handleChange}
          color={state.humanAvatarColor}
          options={humanMouthOptions}
        />

        <ChangeFeatureHuman
          label="Hair"
          feature="humanHair"
          viewPort={humanHairViewport}
          currentValue={state.humanHair}
          onChange={handleChange}
          color={state.humanAvatarColor}
          options={humanHairOptions}
        />

        <ChangeFeatureHuman
          label="Cloth"
          feature="humanClothes"
          viewPort={humanClothesViewport}
          currentValue={state.humanClothes}
          onChange={handleChange}
          color={state.humanAvatarColor}
          options={humanClothesOptions}
        />

        <ChangeFeatureHuman
          label="Eyebrows"
          feature="humanEyebrows"
          viewPort={humanEyebrowsViewport}
          currentValue={state.humanEyebrows}
          onChange={handleChange}
          color={state.humanAvatarColor}
          options={humanEyebrowsOptions}
        />
      </div>
    </div>
  );
};

export default CreateHumanAvatar;
