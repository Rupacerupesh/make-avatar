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
import RenderNamedHumanAvatar from "@/components/RenderNamedHumanAvatar";
import {
  backgroundColors,
  humanClothesColors,
  humanSkinColors,
} from "@/lib/colors";
import { defaultAavatarSize } from "@/lib/const";
import { createSvg, createBackground } from "@/lib/svg";
import { AnimalAvatarStateInterface } from "@/lib/types";
import {
  generateAvatarStateFromName,
  generateDefaultRandomAvatarState,
  isHexCode,
} from "@/lib/utils";
import { NextRequest, NextResponse } from "next/server";
import sharp from "sharp";

const getRandomNumberFromArrayLength = (length: number) =>
  Math.floor(Math.random() * length);

const generateAnimalAvatar = (features: any): string => {
  let defaultSize = defaultAavatarSize;

  let avatarState: AnimalAvatarStateInterface = {
    ...generateDefaultRandomAvatarState(),
  };

  if (features.name) {
    avatarState = generateAvatarStateFromName(features.name);
  } else {
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
    if (features.eyebrows && animalEyebrowsKeys.includes(features.eyebrows)) {
      avatarState.animalEyebrows = features.eyebrows;
    }

    if (features.muzzle && animalMuzzleKeys.includes(features.muzzle)) {
      avatarState.animalMuzzle = features.muzzle;
    }

    if (features.skin && isHexCode(features.skin)) {
      avatarState.avatarColor = "#" + features.skin;
    }

    if (features.background && isHexCode(features.background)) {
      avatarState.bgColor = "#" + features.background;
    }
  }

  if (
    features["background-type"] &&
    ["circle", "none", "square"].includes(features["background-type"])
  ) {
    avatarState.bgType = features["background-type"];
  }

  if (features.size) {
    const parsedSize = parseInt(features.size, 10); // Parse size as an integer
    if (Number.isInteger(parsedSize) && parsedSize >= 0 && parsedSize <= 1000) {
      defaultSize = parsedSize;
    }
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
    defaultSize,
    avatarState.bgType !== "none"
      ? createBackground(avatarState.bgType === "circle", avatarState.bgColor)
      : "",
    shapes.join(""),
    ""
  );
};

const generateHumanAvatar = async (features: any): Promise<Buffer> => {
  let defaultSize = defaultAavatarSize;

  if (features.name) {
    const ReactDOMServer = (await import("react-dom/server")).default;
    const svg = ReactDOMServer.renderToString(
      RenderNamedHumanAvatar({ name: features.name })
    );
    return Buffer.from(svg);
  }

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
  if (features.eyebrows && humanEyebrowsKeys.includes(features.eyebrows)) {
    avatarState.humanEyebrows = features.eyebrows;
  }

  if (features.cloth && humanClothesKeys.includes(features.cloth)) {
    avatarState.humanClothes = features.cloth;
  }

  if (features.mouth && humanMouthKeys.includes(features.mouth)) {
    avatarState.humanMouth = features.mouth;
  }

  if (features.skin && isHexCode(features.skin)) {
    avatarState.humanAvatarColor = "#" + features.skin;
  }

  if (features.background && isHexCode(features.background)) {
    avatarState.humanBgColor = "#" + features.background;
  }

  if (features["clothes-color"] && isHexCode(features["clothes-color"])) {
    avatarState.humanClothesColor = "#" + features["clothes-color"];
  }

  if (features.size) {
    const parsedSize = parseInt(features.size, 10); // Parse size as an integer
    if (Number.isInteger(parsedSize) && parsedSize >= 0 && parsedSize <= 1000) {
      defaultSize = parsedSize;
    }
  }

  const ReactDOMServer = (await import("react-dom/server")).default;
  const svg = ReactDOMServer.renderToString(
    RenderHumanAvatar({ avatarState, size: defaultSize })
  );
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
