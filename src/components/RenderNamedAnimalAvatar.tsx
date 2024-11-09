import { AnimalAvatarStateInterface } from "@/lib/types";

import {
  animalEarsKeys,
  animalEyebrowsKeys,
  animalEyesKeys,
  animalHairKeys,
  animalMuzzleKeys,
  animalPatternsKeys,
} from "./animal-shapes";
import RenderAnimalAvatar from "./RenderAnimalAvatar";
import { getSecondRandomNumber, seedRandomNumberFromString } from "@/lib/utils";
import { animalAvatarColors, backgroundColors } from "@/lib/colors";

interface RenderNamedAnimalAvatarProps {
  name: string;
}

const generateAvatarStateFromName = (
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
const RenderNamedAnimalAvatar: React.FC<RenderNamedAnimalAvatarProps> = ({
  name,
}) => {
  const avatarState = generateAvatarStateFromName(name);
  return <RenderAnimalAvatar avatarState={avatarState} />;
};

export default RenderNamedAnimalAvatar;
