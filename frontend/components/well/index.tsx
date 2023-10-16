import styled, { css } from 'styled-components';
import { COLOR } from '@/theme/styles/color';
import React, { ElementType, ChangeEvent, MouseEvent } from 'react';
import BlueLight from '@/assets/images/blue.png';
import PinkLight from '@/assets/images/pink.png';
import Image from 'next/image';

const SWellContainer = styled.div<{
  $isActive: boolean;
  $resizeOnActive: boolean;
}>`
  background: ${({ theme }) => theme.COLOR.INDIGO_500};
  border: 2px solid ${({ theme }) => theme.COLOR.INDIGO_300};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.XL};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ $isActive, $resizeOnActive }) => ($isActive && $resizeOnActive ? '4rem 2rem 2rem 2rem' : '2rem')};
  transition: ${({ theme }) => theme.TRANSITION.MEDIUM_SMOOTH};
  position: relative;
  cursor: pointer;
  overflow: hidden;

  &:hover {
    transform: scale(1.1);
  }

  ${({ $isActive, $resizeOnActive }) => css`
    width: ${$isActive && $resizeOnActive ? '15rem' : '12rem'};
    height: ${$isActive && $resizeOnActive ? '15rem' : '12rem'};
    gap: ${$isActive && $resizeOnActive ? '2rem' : '0.5rem'};
    box-shadow: ${({ theme }) => ($isActive ? theme.SHADOW.PRIMARY_GLOW : 'none')};
  `};
`;

const STitle = styled.span<{
  $isActive: boolean;
  $resizeOnActive: boolean;
}>`
  transition: ${({ theme }) => theme.TRANSITION.MEDIUM_SMOOTH};
  color: ${({ theme, $isActive }) => ($isActive ? theme.COLOR.WHITE : theme.COLOR.INDIGO_200)};
  font-size: ${({ theme, $isActive, $resizeOnActive }) => ($isActive && $resizeOnActive ? theme.FONT.SIZE.LG : theme.FONT.SIZE.SM)};
  z-index: ${({ theme }) => theme.Z_INDEX.MEDIUM}};
`;

const SIconContainer = styled.div<{ $isActive: boolean, $resizeOnActive: boolean }>`
  transition: ${({ theme }) => theme.TRANSITION.MEDIUM_SMOOTH};
  transform: ${({ $isActive, $resizeOnActive }) => `scale(${$isActive && $resizeOnActive ? 3 : 1.5})`};
  z-index: ${({ theme }) => theme.Z_INDEX.MEDIUM}};
`;

const SBlueLight = styled(Image)<{ $isActive: boolean }>`
  transition: ${({ theme }) => theme.TRANSITION.SLOW};
  display: ${({ $isActive }) => ($isActive ? 'block' : 'none')};
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

const SVolumeSlider = styled.input`
  z-index: ${({ theme }) => theme.Z_INDEX.MEDIUM}};
`;

type Props = {
  icon: ElementType;
  title: string;
  isActive?: boolean;
  resizeOnActive?: boolean
  volume?: number;
  onClick(): void;
  onVolumeChange?(e: ChangeEvent<HTMLInputElement>): void;
};

export function Well({
  title,
  icon: Icon,
  onClick,
  isActive = false,
  resizeOnActive = false,
  volume = 0,
  onVolumeChange = () => {},
}: Props) {
  return (
    <SWellContainer $isActive={isActive} $resizeOnActive={resizeOnActive} onClick={onClick}>
      <SBlueLight src={BlueLight} alt="" $isActive={isActive} />
      <SPinkLight src={PinkLight} alt="" $isActive={isActive} />
      <SIconContainer $isActive={isActive} $resizeOnActive={resizeOnActive}>
        <Icon color={isActive ? COLOR.WHITE : COLOR.INDIGO_200} />
      </SIconContainer>
      <STitle $isActive={isActive} $resizeOnActive={resizeOnActive}>{title}</STitle>
      {volume > 0 && (
      <SVolumeSlider
        type="range"
        id="volume-slider"
        value={volume}
        onChange={onVolumeChange}
        onClick={(e: MouseEvent) => e.stopPropagation()}
      />
      )}
    </SWellContainer>
  );
}
