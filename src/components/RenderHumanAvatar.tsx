import { HumanAvatarStateInterface } from "@/lib/types";
import {
  HumanHairComponent,
  HumanClothComponent,
  HumanEyebrowsComponent,
  HumanEyesComponent,
  HumanMouthComponent,
} from "./human-shapes";

const path1 = "react-path-1";
const path2 = "react-path-2";
const path3 = "react-path-3";
const mask1 = "react-mask-1";
const mask2 = "react-mask-2";
const mask3 = "react-mask-3";

interface ColorComponentProps {
  maskID: string;
  color: string;
}

const ColorComponent: React.FC<ColorComponentProps> = (props) => {
  return (
    <g id="Skin/👶🏽-03-Brown" mask={`url(#${props.maskID})`} fill={props.color}>
      <g transform="translate(0.000000, 0.000000)" id="Color">
        <rect x="0" y="0" width="264" height="280" />
      </g>
    </g>
  );
};

interface RenderAvatarProps {
  avatarState: HumanAvatarStateInterface;
}

const RenderHumanAvatar: React.FC<RenderAvatarProps> = ({ avatarState }) => {
  return (
    <svg
      width="132px"
      height="140px"
      viewBox="0 0 264 280"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <circle id={path1} cx="120" cy="120" r="120" />

        <path
          d="M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z"
          id={path2}
        />
        <path
          d="M124,144.610951 L124,163 L128,163 L128,163 C167.764502,163 200,195.235498 200,235 L200,244 L0,244 L0,235 C-4.86974701e-15,195.235498 32.235498,163 72,163 L72,163 L76,163 L76,144.610951 C58.7626345,136.422372 46.3722246,119.687011 44.3051388,99.8812385 C38.4803105,99.0577866 34,94.0521096 34,88 L34,74 C34,68.0540074 38.3245733,63.1180731 44,62.1659169 L44,56 L44,56 C44,25.072054 69.072054,5.68137151e-15 100,0 L100,0 L100,0 C130.927946,-5.68137151e-15 156,25.072054 156,56 L156,62.1659169 C161.675427,63.1180731 166,68.0540074 166,74 L166,88 C166,94.0521096 161.51969,99.0577866 155.694861,99.8812385 C153.627775,119.687011 141.237365,136.422372 124,144.610951 Z"
          id={path3}
        />
      </defs>

      <g
        id="Avataaar"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
      >
        <g
          transform="translate(-825.000000, -1100.000000)"
          id="Avataaar/Circle"
        >
          <g transform="translate(825.000000, 1100.000000)">
            <g
              id="Circle"
              strokeWidth="1"
              fillRule="evenodd"
              transform="translate(12.000000, 40.000000)"
            >
              <mask id={mask1} fill="white">
                <use xlinkHref={"#" + path1} />
              </mask>
              <use
                id="Circle-Background"
                fill="#E6E6E6"
                xlinkHref={"#" + path1}
              />
              <g
                id="Color/Palette/Blue-01"
                mask={"url(#" + mask1 + ")"}
                fill={avatarState.humanBgColor}
              >
                <rect id="🖍Color" x="0" y="0" width="264" height="260" />
              </g>
            </g>
            <mask id={mask2} fill="white">
              <use xlinkHref={"#" + path2} />
            </mask>
            <g id="Mask" />
            <g
              id="Avataaar"
              strokeWidth="1"
              fillRule="evenodd"
              mask={"url(#" + mask2 + ")"}
            >
              <g id="Body" transform="translate(32.000000, 36.000000)">
                <mask id={mask3} fill="white">
                  <use xlinkHref={"#" + path3} />
                </mask>
                <use fill="#D0C6AC" xlinkHref={"#" + path3} />

                <ColorComponent
                  color={avatarState.humanAvatarColor}
                  maskID={mask3}
                />

                <path
                  d="M156,79 L156,102 C156,132.927946 130.927946,158 100,158 C69.072054,158 44,132.927946 44,102 L44,79 L44,94 C44,124.927946 69.072054,150 100,150 C130.927946,150 156,124.927946 156,94 L156,79 Z"
                  id="Neck-Shadow"
                  fillOpacity="0.100000001"
                  fill="#000000"
                  mask={"url(#" + mask3 + ")"}
                />
              </g>

              <g
                id="Face"
                transform="translate(76.000000, 82.000000)"
                fill="#000000"
              >
                <HumanEyesComponent eyeKey={avatarState.humanEyes} />
                <g
                  id="Nose/Default"
                  transform="translate(28.000000, 40.000000)"
                  fillOpacity="0.16"
                >
                  <path
                    d="M16,8 C16,12.418278 21.372583,16 28,16 L28,16 C34.627417,16 40,12.418278 40,8"
                    id="Nose"
                  />
                </g>
                <HumanEyebrowsComponent
                  eyebrowsKey={avatarState.humanEyebrows}
                />
                <HumanMouthComponent mouthKey={avatarState.humanMouth} />
              </g>
              <HumanHairComponent hairKey={avatarState.humanHair} />
              <HumanClothComponent
                clothKey={avatarState.humanClothes}
                color={avatarState.humanClothesColor}
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default RenderHumanAvatar;
