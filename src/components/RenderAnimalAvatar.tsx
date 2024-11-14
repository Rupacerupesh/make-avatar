import { AnimalAvatarStateInterface } from "@/lib/types";

import { createSvg, createBackground } from "@/lib/svg";
import {
  animalEarsOptions,
  animalEyebrowsOptions,
  animalEyesOptions,
  animalFaceOptions,
  animalHairOptions,
  animalMuzzleOptions,
} from "./animal-shapes";

interface RenderAnimalAvatarProps {
  avatarState: AnimalAvatarStateInterface;
}

const RenderAnimalAvatar: React.FC<RenderAnimalAvatarProps> = ({
  avatarState,
}) => {
  const shapes = [
    animalFaceOptions[avatarState.animalFace](avatarState.avatarColor),
    animalEyesOptions[avatarState.animalEyes](avatarState.avatarColor),
    animalEyebrowsOptions[avatarState.animalEyebrows](avatarState.avatarColor),
    animalEarsOptions[avatarState.animalEars](avatarState.avatarColor),
    animalHairOptions[avatarState.animalHair](avatarState.avatarColor),
    animalMuzzleOptions[avatarState.animalMuzzle](avatarState.avatarColor),
  ];

  const gemeratedSVG = createSvg(
    130,
    avatarState.bgType !== "none"
      ? createBackground(avatarState.bgType === "circle", avatarState.bgColor)
      : "",
    shapes.join(""),
    ""
  );

  return <div dangerouslySetInnerHTML={{ __html: gemeratedSVG }} />;
};

export default RenderAnimalAvatar;
