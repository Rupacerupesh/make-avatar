const path1 = "react-path1-mouth";
const mask1 = "react-mask1-mouth";

const defaultMouth = (
  <g
    id="Mouth/Default"
    transform="translate(2.000000, 52.000000)"
    fillOpacity="0.699999988"
  >
    <path
      d="M40,15 C40,22.7319865 46.2680135,29 54,29 L54,29 C61.7319865,29 68,22.7319865 68,15"
      id="Mouth"
    />
  </g>
);

const smile = (
  <g id="Mouth/Smile" transform="translate(2.000000, 52.000000)">
    <defs>
      <path
        d="M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z"
        id={path1}
      />
    </defs>
    <mask id={mask1} fill="white">
      <use xlinkHref={"#" + path1} />
    </mask>
    <use
      id="Mouth"
      fillOpacity="0.699999988"
      fill="#000000"
      fillRule="evenodd"
      xlinkHref={"#" + path1}
    />
    <rect
      id="Teeth"
      fill="#FFFFFF"
      fillRule="evenodd"
      mask={`url(#${mask1})`}
      x="39"
      y="2"
      width="31"
      height="16"
      rx="5"
    />
    <g
      id="Tongue"
      strokeWidth="1"
      fillRule="evenodd"
      mask={`url(#${mask1})`}
      fill="#FF4F6D"
    >
      <g transform="translate(38.000000, 24.000000)">
        <circle cx="11" cy="11" r="11" />
        <circle cx="21" cy="11" r="11" />
      </g>
    </g>
  </g>
);

const concerned = (
  <g id="Mouth/Concerned" transform="translate(2.000000, 52.000000)">
    <defs>
      <path
        d="M35.117844,15.1280772 C36.1757121,24.6198025 44.2259873,32 54,32 C63.8042055,32 71.8740075,24.574136 72.8917593,15.0400546 C72.9736685,14.272746 72.1167429,13 71.042767,13 C56.1487536,13 44.7379213,13 37.0868244,13 C36.0066168,13 35.0120058,14.1784435 35.117844,15.1280772 Z"
        id={path1}
      />
    </defs>
    <mask id={mask1} fill="white">
      <use
        xlinkHref={"#" + path1}
        transform="translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) "
      />
    </mask>
    <use
      id="Mouth"
      fillOpacity="0.699999988"
      fill="#000000"
      fillRule="evenodd"
      transform="translate(54.003637, 22.500000) scale(1, -1) translate(-54.003637, -22.500000) "
      xlinkHref={"#" + path1}
    />
    <rect
      id="Teeth"
      fill="#FFFFFF"
      fillRule="evenodd"
      mask={`url(#${mask1})`}
      x="39"
      y="2"
      width="31"
      height="16"
      rx="5"
    />
    <g
      id="Tongue"
      strokeWidth="1"
      fillRule="evenodd"
      mask={`url(#${mask1})`}
      fill="#FF4F6D"
    >
      <g transform="translate(38.000000, 24.000000)">
        <circle id="friend?" cx="11" cy="11" r="11" />
        <circle id="How-you-doing" cx="21" cy="11" r="11" />
      </g>
    </g>
  </g>
);

const disbelief = (
  <g
    id="Mouth/Disbelief"
    transform="translate(2.000000, 52.000000)"
    fillOpacity="0.699999988"
    fill="#000000"
  >
    <path
      d="M40,15 C40,22.7319865 46.2680135,29 54,29 L54,29 C61.7319865,29 68,22.7319865 68,15"
      id="Mouth"
      transform="translate(54.000000, 22.000000) scale(1, -1) translate(-54.000000, -22.000000) "
    />
  </g>
);

const eating = (
  <g id="Mouth/Eating" transform="translate(2.000000, 52.000000)">
    <g
      id="Om-Nom-Nom"
      opacity="0.599999964"
      strokeWidth="1"
      transform="translate(28.000000, 6.000000)"
      fillOpacity="0.599999964"
      fill="#000000"
    >
      <path
        d="M16.1906378,10.106319 C16.0179484,4.99553347 11.7923466,0.797193688 6.29352385,0 C9.66004124,1.95870633 11.9804619,5.49520667 11.9804619,9.67694348 C11.9804619,15.344608 6.50694731,20.2451296 0.176591694,20.2451296 C0.11761218,20.2451296 0.0587475828,20.2447983 0,20.244138 L8.8963743e-11,20.244138 C1.35764479,20.7317259 2.83995964,21 4.39225962,21 C9.71395931,21 14.2131224,17.8469699 15.6863572,13.5136402 C18.1609431,15.6698775 21.8629994,17.0394229 26,17.0394229 C30.1370006,17.0394229 33.8390569,15.6698775 36.3136428,13.5136402 C37.7868776,17.8469699 42.2860407,21 47.6077404,21 C49.1600404,21 50.6423552,20.7317259 52,20.244138 L52,20.244138 C51.9412524,20.2447983 51.8823878,20.2451296 51.8234083,20.2451296 C45.4930527,20.2451296 40.0195381,15.344608 40.0195381,9.67694348 C40.0195381,5.49520667 42.3399588,1.95870633 45.7064761,0 C40.2076534,0.797193688 35.9820516,4.99553347 35.8093622,10.106319 C33.2452605,11.8422828 29.7948543,12.9056086 26,12.9056086 C22.2051457,12.9056086 18.7547395,11.8422828 16.1906378,10.106319 Z"
        id="Delicious"
      />
    </g>
    <circle
      id="Redish"
      fillOpacity="0.2"
      fill="#FF4646"
      cx="17"
      cy="15"
      r="9"
    />
    <circle
      id="Redish"
      fillOpacity="0.2"
      fill="#FF4646"
      cx="91"
      cy="15"
      r="9"
    />
  </g>
);

export const humanMouthViewport = "-20 30 150 60";

export const humanMouthOptions = {
  smile,
  defaultMouth,
  eating,
  concerned,
  disbelief,
};
export const HumanMouthComponent: React.FC<{
  mouthKey: HumanMouthOptionsKeysType;
}> = ({ mouthKey }) => {
  return humanMouthOptions[mouthKey] || humanMouthOptions.smile;
};

export type HumanMouthOptionsKeysType = keyof typeof humanMouthOptions;

export const humanMouthKeys = Object.keys(
  humanMouthOptions
) as Array<HumanMouthOptionsKeysType>;
