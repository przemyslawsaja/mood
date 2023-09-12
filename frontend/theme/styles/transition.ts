export type Transition = {
  MEDIUM_SMOOTH: string;
  GENTLE: string;
  SLOW: string;
};

export const TRANSITION: Transition = {
  MEDIUM_SMOOTH: "ease-in-out 0.25s",
  GENTLE: "ease-in-out 0.5s",
  SLOW: "ease-in-out 1s",
};
