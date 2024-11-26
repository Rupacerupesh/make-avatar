import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { AnimalAvatarStateInterface } from "./types";
import {
  animalEarsKeys,
  animalEyebrowsKeys,
  animalEyesKeys,
  animalFaceKeys,
  animalHairKeys,
  animalMuzzleKeys,
  animalPatternsKeys,
} from "@/components/animal-shapes";
import { animalAvatarColors, backgroundColors } from "./colors";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function stringToHash(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

export function seedRandomNumberFromString(str: string) {
  const hash = stringToHash(str);
  // Normalize the hash value to a number between 0 and 1
  const seedRandom = (hash % 1000000) / 1000000;
  return seedRandom;
}

export function getSecondRandomNumber(randomNumber: number, max: number) {
  // Convert the first random number (0 to 1) into a string and use it as the seed
  const randomString = randomNumber.toString();

  // Use the previous stringToHash function to generate a hash
  const hash = stringToHash(randomString);

  // Map the hash to a value between 0 and 100
  const secondRandom = Math.abs(hash % max); // Ensures value is between 0 and 100

  return secondRandom;
}

export const generateAvatarStateFromName = (
  name: string
): AnimalAvatarStateInterface => {
  const randomNumber = seedRandomNumberFromString(name);

  return {
    animalEars:
      animalEarsKeys[
        getSecondRandomNumber(randomNumber, animalEarsKeys.length)
      ],

    animalEyebrows:
      animalEyebrowsKeys[
        getSecondRandomNumber(randomNumber, animalEyebrowsKeys.length)
      ],
    animalFace: "default",
    animalEyes:
      animalEyesKeys[
        getSecondRandomNumber(randomNumber, animalEyesKeys.length)
      ],
    animalHair:
      animalHairKeys[
        getSecondRandomNumber(randomNumber, animalHairKeys.length)
      ],
    animalMuzzle:
      animalMuzzleKeys[
        getSecondRandomNumber(randomNumber, animalMuzzleKeys.length)
      ],
    animalPatterns:
      animalPatternsKeys[
        getSecondRandomNumber(randomNumber, animalPatternsKeys.length)
      ],

    avatarColor:
      animalAvatarColors[
        getSecondRandomNumber(randomNumber, animalAvatarColors.length)
      ],
    bgColor:
      backgroundColors[
        getSecondRandomNumber(randomNumber, backgroundColors.length)
      ],
    bgType: "circle",
  };
};

const getRandomNumberFromArrayLength = (length: number): number =>
  Math.floor(Math.random() * length);

export const generateDefaultRandomAvatarState = () => {
  return {
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
};

export const isHexCode = (str: string) => {
  const hexRegex = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
  return hexRegex.test("#" + str);
};

export const handleDownload = (url: string, fileName: string): void => {
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link); // Append to the DOM
  link.click();
  document.body.removeChild(link); // Remove from the DOM
};

export const handleDownloadSVG = (url: string): void => {
  handleDownload(url, "make-avatar.svg");
};

export const handleDownloadPNG = (url: string): void => {
  console.log({ url });
  handleDownload(`${url}&response=png`, "make-avatar.png");
};
