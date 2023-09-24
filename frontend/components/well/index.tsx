import styled, { css } from "styled-components";
import { COLOR } from "@/theme/styles/color";
import React, { ElementType } from "react";
import BlueLight from "@/assets/images/blue.png";
import PinkLight from "@/assets/images/pink.png";
import Image from "next/image";

const SWellContainer = styled.div<{
  $isActive: boolean;
}>`
  background: ${({ theme }) => theme.COLOR.INDIGO_500};
  border: 2px solid ${({ theme }) => theme.COLOR.INDIGO_300};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.XL};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ $isActive }) => ($isActive ? `4rem 2rem 2rem 2rem` : "2rem")};
  transition: ${({ theme }) => theme.TRANSITION.MEDIUM_SMOOTH};
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }

  ${({ $isActive }) => css`
    width: ${$isActive ? "15rem" : "12rem"};
    height: ${$isActive ? "15rem" : "12rem"};
    gap: ${$isActive ? "2rem" : "0.5rem"};
    box-shadow: ${({ theme }) =>
      $isActive ? theme.SHADOW.PRIMARY_GLOW : "none"};
  `};
`;

const STitle = styled.span<{
  $isActive: boolean;
}>`
  transition: ${({ theme }) => theme.TRANSITION.MEDIUM_SMOOTH};
  color: ${({ theme, $isActive }) =>
    $isActive ? theme.COLOR.WHITE : theme.COLOR.INDIGO_200};
  font-size: ${({ theme, $isActive }) =>
    $isActive ? theme.FONT.SIZE.LG : theme.FONT.SIZE.SM};
  z-index: ${({ theme }) => theme.Z_INDEX.MEDIUM}};
`;

const SIconContainer = styled.div<{ $isActive: boolean }>`
  transition: ${({ theme }) => theme.TRANSITION.MEDIUM_SMOOTH};
  transform: ${({ $isActive }) => `scale(${$isActive ? 3 : 1.5})`};
  z-index: ${({ theme }) => theme.Z_INDEX.MEDIUM}};
`;

const SBlueLight = styled(Image)<{ $isActive: boolean }>`
  transition: ${({ theme }) => theme.TRANSITION.SLOW};
  display: ${({ $isActive }) => ($isActive ? "block" : "none")};
  position: absolute;
  width: 30rem;
  height: 30rem;
  bottom: -10rem;
  left: -10rem;
  transform: scale(1);
`;

const SPinkLight = styled(Image)<{ $isActive: boolean }>`
  transition: ${({ theme }) => theme.TRANSITION.SLOW};
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  width: 30rem;
  height: 30rem;
  top: -10rem;
  right: -10rem;
  position: absolute;
`;

type Props = {
  icon: ElementType;
  title: string;
  isActive?: boolean;
  onClick(): void;
};

export const Well = ({
  title,
  icon: Icon,
  isActive = false,
  onClick,
}: Props) => {
  return (
    <SWellContainer $isActive={isActive} onClick={onClick}>
      <SBlueLight src={BlueLight} alt={""} $isActive={isActive} />
      <SPinkLight src={PinkLight} alt={""} $isActive={isActive} />
      <SIconContainer $isActive={isActive}>
        <Icon color={isActive ? COLOR.WHITE : COLOR.INDIGO_200} />
      </SIconContainer>
      <STitle $isActive={isActive}>{title}</STitle>
    </SWellContainer>
  );
};
