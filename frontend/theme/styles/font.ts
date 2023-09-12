export type Size = {
  XS: string;
  SM: string;
  BASE: string;
  LG: string;
  XL: string;
  XL2: string;
  XL3: string;
  XL4: string;
  XL5: string;
  XL6: string;
  XL7: string;
  XL8: string;
  XL9: string;
};

const SIZE: Size = {
  XS: "0.75rem",
  SM: "0.875rem",
  BASE: "1rem",
  LG: "1.125rem",
  XL: "1.25rem",
  XL2: "1.5rem",
  XL3: "1.875rem",
  XL4: "2.25rem",
  XL5: "3rem",
  XL6: "3.75rem",
  XL7: "4.5rem",
  XL8: "6rem",
  XL9: "8rem",
};

type Tracking = {
  TIGHTER: string;
  TIGHT: string;
  NORMAL: string;
  WIDE: string;
  WIDER: string;
  WIDEST: string;
};

const TRACKING: Tracking = {
  TIGHTER: "-0.05em",
  TIGHT: "-0.025em",
  NORMAL: "0em",
  WIDE: "0.025em",
  WIDER: "0.05em",
  WIDEST: "0.1em",
};

type Weight = {
  LIGHT: number;
  NORMAL: number;
  MEDIUM: number;
  BOLD: number;
};

const WEIGHT: Weight = {
  LIGHT: 300,
  NORMAL: 400,
  MEDIUM: 500,
  BOLD: 700,
};

export type Font = {
  SIZE: Size;
  TRACKING: Tracking;
  WEIGHT: Weight;
};
export const FONT = {
  SIZE,
  TRACKING,
  WEIGHT,
};
