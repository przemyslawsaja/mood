import { useState } from "react";

export const useToggle = (defaultState: boolean = false) => {
  const [isToggled, setIsToggled] = useState<boolean>(defaultState);

  const enable = (): void => setIsToggled(true);
  const disable = (): void => setIsToggled(false);
  const toggle = (): void => setIsToggled(!isToggled);

  return { isToggled, enable, disable, toggle };
};
