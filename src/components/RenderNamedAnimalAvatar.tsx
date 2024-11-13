import RenderAnimalAvatar from "./RenderAnimalAvatar";
import { generateAvatarStateFromName } from "@/lib/utils";

interface RenderNamedAnimalAvatarProps {
  name: string;
}

const RenderNamedAnimalAvatar: React.FC<RenderNamedAnimalAvatarProps> = ({
  name,
}) => {
  const avatarState = generateAvatarStateFromName(name);
  return <RenderAnimalAvatar avatarState={avatarState} />;
};

export default RenderNamedAnimalAvatar;
