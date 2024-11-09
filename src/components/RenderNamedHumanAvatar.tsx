import { HumanAvatarStateInterface } from "@/lib/types";
import {
  humanClothesKeys,
  humanEyebrowsKeys,
  humanEyesKeys,
  humanHairKeys,
  humanMouthKeys,
} from "./human-shapes";
import RenderHumanAvatar from "./RenderHumanAvatar";
import { getSecondRandomNumber, seedRandomNumberFromString } from "@/lib/utils";
import {
  backgroundColors,
  humanClothesColors,
  humanSkinColors,
} from "@/lib/colors";

interface RenderNamedHumanAvatarProps {
  name: string;
}

const generateAvatarStateFromName = (
  name: string
): HumanAvatarStateInterface => {
  const randomNumber = seedRandomNumberFromString(name);

  return {
    humanClothes:
      humanClothesKeys[
        getSecondRandomNumber(randomNumber, humanClothesKeys.length)
      ],
    humanMouth:
      humanMouthKeys[
        getSecondRandomNumber(randomNumber, humanMouthKeys.length)
      ],
    humanEyes:
      humanEyesKeys[getSecondRandomNumber(randomNumber, humanEyesKeys.length)],
    humanHair:
      humanHairKeys[getSecondRandomNumber(randomNumber, humanHairKeys.length)],
    humanEyebrows:
      humanEyebrowsKeys[
        getSecondRandomNumber(randomNumber, humanEyebrowsKeys.length)
      ],

    humanBgColor:
      backgroundColors[
        getSecondRandomNumber(randomNumber, backgroundColors.length)
      ],
    humanClothesColor:
      humanClothesColors[
        getSecondRandomNumber(randomNumber, humanClothesColors.length)
      ],
    humanAvatarColor:
      humanSkinColors[
        getSecondRandomNumber(randomNumber, humanSkinColors.length)
      ],
  };
};

const RenderNamedHumanAvatar: React.FC<RenderNamedHumanAvatarProps> = ({
  name,
}) => {
  const avatarState = generateAvatarStateFromName(name);

  return <RenderHumanAvatar avatarState={avatarState} />;
};

export default RenderNamedHumanAvatar;
