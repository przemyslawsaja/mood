export type Media = {
  MIN_WIDTH: (breakpoint: number) => string;
};
export const MEDIA: Media = {
  MIN_WIDTH: (breakpoint: number) => `@media (min-width: ${breakpoint}px)`,
};
