import {
  animalEarsKeys,
  animalEyebrowsKeys,
  animalEyesKeys,
  animalFaceKeys,
  animalHairKeys,
  animalMuzzleKeys,
  animalPatternsKeys,
} from "@/components/animal-shapes";
import { backgroundColors, animalAvatarColors } from "./colors";

export const websiteUrl = "https://make-avatar.vercel.app/api";

const getRandomNumberFromArrayLength = (length: number) =>
  Math.floor(Math.random() * length);

export const defaultAnimalAvatarState = {
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
    animalMuzzleKeys[getRandomNumberFromArrayLength(animalMuzzleKeys.length)],
  animalPatterns:
    animalPatternsKeys[
      getRandomNumberFromArrayLength(animalPatternsKeys.length)
    ],
  bgColor:
    backgroundColors[getRandomNumberFromArrayLength(backgroundColors.length)],
  avatarColor:
    animalAvatarColors[
      getRandomNumberFromArrayLength(animalAvatarColors.length)
    ],
  bgType: "circle",
};
