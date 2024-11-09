export const darken = (hex: string, amount: number) =>
  rgb2Hex(hex2Rgb(hex).map((x) => clamp(x - amount, 0, 255)));

const hex2Rgb = (hex: string): number[] => {
  const result = hex
    .replace(
      /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
      (_m, r, g, b) => "#" + r + r + g + g + b + b
    )
    .substring(1)
    .match(/.{2}/g);

  if (!result) {
    throw new Error("Invalid hex color format");
  }

  return result.map((x) => parseInt(x, 16));
};

const rgb2Hex = (rgb: number[]): string =>
  "#" + rgb.map((x) => `0${x.toString(16)}`.substr(-2)).join("");

const clamp = (value: number, min: number, max: number): number =>
  Math.min(max, Math.max(min, value));

export const humanSkinColors = [
  "#FFDFC4", // Very light beige
  "#F0D5BE", // Light peach
  "#FFDAB9", // Peach
  "#E7B98A", // Warm sand
  "#D1A68D", // Honey
  "#C68642", // Tan
  "#A8796B", // Warm tan
  "#8D5524", // Medium brown
  "#7D4E2D", // Chestnut
  "#5A3A2E", // Mocha
  "#4B2E2C", // Espresso
  "#3E2723", // Deep brown
];

export const backgroundColors = [
  "#fcf7d1",
  "#ece2e1",
  "#e4e3cd",
  "#c4ddd6",
  "#b5f4bc",
];
export const animalAvatarColors = [
  "#d7b89c",
  "#b18272",
  "#ec8a90",
  "#a1Ac88",
  "#99c9bd",
  "#50c8c6",

  "#FF766F",
  "#6B5B95", // Lavender Gray
  "#88B04B", // Moss Green
  "#F7CAC9", // Blush Pink
  "#92A8D1", // Light Periwinkle
  "#034F84", // Deep Blue
  "#B565A7", // Orchid Purple
  "#BC8F8F", // Rosy Brown
  "#C0C0C0", // Silver
  "#D5B9B2", // Warm Taupe
  "#E1A95F", // Sandstone
  "#4B3832", // Deep Coffee
  "#FFE5B4", // Peach Beige
  "#4682B4", // Steel Blue
];

export const humanClothesColors = [
  "#FF6F61", // Coral
  "#6B5B95", // Lavender Gray
  "#88B04B", // Moss Green
  "#F7CAC9", // Blush Pink
  "#92A8D1", // Light Periwinkle
  "#034F84", // Deep Blue
  "#B565A7", // Orchid Purple
  "#BC8F8F", // Rosy Brown
  "#C0C0C0", // Silver
  "#D5B9B2", // Warm Taupe
  "#E1A95F", // Sandstone
  "#4B3832", // Deep Coffee
  "#3C2F2F", // Charcoal Brown
  "#FFE5B4", // Peach Beige
  "#98FB98", // Pale Green
  "#4682B4", // Steel Blue
];
