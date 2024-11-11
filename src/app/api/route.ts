/* eslint-disable */

import {
  animalEarsKeys,
  animalEarsOptions,
  animalEyebrowsKeys,
  animalEyebrowsOptions,
  animalEyesKeys,
  animalEyesOptions,
  animalFaceKeys,
  animalFaceOptions,
  animalHairKeys,
  animalHairOptions,
  animalMuzzleKeys,
  animalMuzzleOptions,
  animalPatternsKeys,
} from "@/components/animal-shapes";
import {
  humanClothesKeys,
  humanMouthKeys,
  humanEyesKeys,
  humanHairKeys,
  humanEyebrowsKeys,
} from "@/components/human-shapes";
import RenderHumanAvatar from "@/components/RenderHumanAvatar";
import {
  backgroundColors,
  animalAvatarColors,
  humanClothesColors,
  humanSkinColors,
} from "@/lib/colors";
import { createSvg, createBackground } from "@/lib/svg";
import { AnimalAvatarStateInterface } from "@/lib/types";
import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

const getRandomNumberFromArrayLength = (length: number) =>
  Math.floor(Math.random() * length);

const defaultState = {
  animalEyes: animalEyesKeys[0],
  animalHair: animalHairKeys[0],
  animalEars: animalEarsKeys[0],
  animalEyebrows: animalEyebrowsKeys[0],
  animalFace: animalFaceKeys[0],
  animalMuzzle: animalMuzzleKeys[0],
  animalPatterns: animalPatternsKeys[0],
  bgColor:
    backgroundColors[getRandomNumberFromArrayLength(backgroundColors.length)],
  avatarColor:
    animalAvatarColors[
      getRandomNumberFromArrayLength(animalAvatarColors.length)
    ],
  bgType: "circle",
};

const generateAnimalAvatar = (features: any): string => {
  let avatarState = { ...defaultState };

  // Check if each feature key exists in the features object
  if (features.eyes && animalEyesKeys.includes(features.eyes)) {
    avatarState.animalEyes = features.eyes;
  }
  if (features.hair && animalHairKeys.includes(features.hair)) {
    avatarState.animalHair = features.hair;
  }
  if (features.ears && animalEarsKeys.includes(features.ears)) {
    avatarState.animalEars = features.ears;
  }
  if (features.eyeBrows && animalEyebrowsKeys.includes(features.eyeBrows)) {
    avatarState.animalEyebrows = features.eyeBrows;
  }

  if (features.muzzle && animalMuzzleKeys.includes(features.muzzle)) {
    avatarState.animalMuzzle = features.muzzle;
  }

  if (
    features.bgType &&
    ["circle", "none", "square"].includes(features.bgType)
  ) {
    avatarState.bgType = features.bgType;
  }

  const shapes = [
    animalFaceOptions[avatarState.animalFace](avatarState.avatarColor),
    animalEyesOptions[avatarState.animalEyes](avatarState.avatarColor),
    animalEyebrowsOptions[avatarState.animalEyebrows](avatarState.avatarColor),
    animalEarsOptions[avatarState.animalEars](avatarState.avatarColor),
    animalHairOptions[avatarState.animalHair](avatarState.avatarColor),
    animalMuzzleOptions[avatarState.animalMuzzle](avatarState.avatarColor),
  ];

  return createSvg(
    200,
    avatarState.bgType !== "none"
      ? createBackground(avatarState.bgType === "circle", avatarState.bgColor)
      : "",
    shapes.join(""),
    ""
  );
};

const generateHumanAvatar = async (features: any): Promise<Buffer> => {
  let avatarState = {
    humanClothes:
      humanClothesKeys[getRandomNumberFromArrayLength(humanClothesKeys.length)],
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
      backgroundColors[getRandomNumberFromArrayLength(backgroundColors.length)],
    humanClothesColor:
      humanClothesColors[
        getRandomNumberFromArrayLength(humanClothesColors.length)
      ],
    humanAvatarColor:
      humanSkinColors[getRandomNumberFromArrayLength(humanSkinColors.length)],
  };

  // Check if each feature key exists in the features object
  if (features.eyes && humanEyesKeys.includes(features.eyes)) {
    avatarState.humanEyes = features.eyes;
  }
  if (features.hair && humanHairKeys.includes(features.hair)) {
    avatarState.humanHair = features.hair;
  }
  if (features.eyeBrows && humanEyebrowsKeys.includes(features.eyeBrows)) {
    avatarState.humanEyebrows = features.eyeBrows;
  }

  if (features.cloth && humanClothesKeys.includes(features.cloth)) {
    avatarState.humanClothes = features.cloth;
  }

  if (features.mouth && humanMouthKeys.includes(features.mouth)) {
    avatarState.humanMouth = features.mouth;
  }

  const ReactDOMServer = (await import("react-dom/server")).default;
  const svg = ReactDOMServer.renderToString(RenderHumanAvatar({ avatarState }));
  return Buffer.from(svg);
};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const responseType = searchParams.get("response") ?? "svg";
  const avatarType = searchParams.get("type");

  const features: Record<string, string> = {};

  searchParams.forEach((value, key) => {
    features[key] = value;
  });

  // Determine avatar type and format

  const svgContent =
    avatarType === "human"
      ? await generateHumanAvatar(features)
      : generateAnimalAvatar(features);

  if (responseType === "svg") {
    return new NextResponse(svgContent, {
      headers: { "Content-Type": "image/svg+xml" },
    });
  }

  // Convert SVG to PNG if requested
  const pngBuffer = await sharp(Buffer.from(svgContent)).png().toBuffer();
  return new NextResponse(pngBuffer, {
    headers: { "Content-Type": "image/png" },
  });
}
