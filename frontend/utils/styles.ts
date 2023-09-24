const percentToHex = (percentage: number): string => {
  return `0${Math.round((255 / 100) * percentage).toString(16)}`
    .slice(-2)
    .toUpperCase();
};

export const hexWithAlpha = (hex: string, percentage: number): string => {
  return `${hex}${percentToHex(percentage)}`;
};
