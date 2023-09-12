import { COLOR, Color } from "@/theme/styles/color";
import { Z_INDEX, ZIndex } from "@/theme/styles/z-index";
import { BORDER_RADIUS, BorderRadius } from "@/theme/styles/border-radius";
import { FONT, Font } from "@/theme/styles/font";
import { SHADOW, Shadow } from "@/theme/styles/shadow";
import { TRANSITION, Transition } from "@/theme/styles/transition";
import { MEDIA, Media } from "@/theme/styles/media";
import { BREAKPOINTS, Breakpoints } from "@/theme/styles/breakpoints";

type Theme = {
  COLOR: Color;
  Z_INDEX: ZIndex;
  BORDER_RADIUS: BorderRadius;
  FONT: Font;
  SHADOW: Shadow;
  TRANSITION: Transition;
  MEDIA: Media;
  BREAKPOINTS: Breakpoints;
};

export const theme: Theme = {
  COLOR,
  Z_INDEX,
  BORDER_RADIUS,
  FONT,
  SHADOW,
  TRANSITION,
  MEDIA,
  BREAKPOINTS,
};
