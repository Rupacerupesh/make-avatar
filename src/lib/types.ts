import {
  animalEyesOptions,
  animalHairOptions,
  animalEyebrowsOptions,
  animalEarsOptions,
  animalFaceOptions,
  animalMuzzleOptions,
  animalPatternsOptions,
} from "@/components/animal-shapes";

export type AnimalEyesOptionsKeysType = keyof typeof animalEyesOptions;
export type AnimalHairOptionsKeysType = keyof typeof animalHairOptions;
export type AnimalEarsOptionsKeysType = keyof typeof animalEarsOptions;
export type AnimalEyebrowsOptionsKeysType = keyof typeof animalEyebrowsOptions;
export type AnimalFaceOptionsKeysType = keyof typeof animalFaceOptions;
export type AnimalMuzzleOptionsKeysType = keyof typeof animalMuzzleOptions;
export type AnimalPatternsOptionsKeysType = keyof typeof animalPatternsOptions;

export type ShapeOptionType = {
  [key: string]: (color: string) => string;
};

export interface AnimalAvatarStateInterface {
  avatarColor: string;
  bgColor: string;
  bgType?: string;
  animalEyes: AnimalEyesOptionsKeysType;
  animalHair: AnimalHairOptionsKeysType;
  animalEars: AnimalEarsOptionsKeysType;
  animalEyebrows: AnimalEyebrowsOptionsKeysType;
  animalFace: AnimalFaceOptionsKeysType;
  animalMuzzle: AnimalMuzzleOptionsKeysType;
  animalPatterns: AnimalPatternsOptionsKeysType;
}
