import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled, { css, RuleSet } from 'styled-components';
import { className } from 'postcss-selector-parser';
import { ButtonVariant } from '@/components/button/constants';

const gradientVariantStyles = css`
  color: ${({ theme }) => theme.COLOR.WHITE};
  box-shadow: ${({ theme }) => theme.SHADOW.PRIMARY_GLOW};
  background: ${({ theme }) => theme.COLOR.ROSE_FADE};

  &:hover {
    box-shadow: none;
  }
`;

const outlineVariantStyles = css`
  border: ${({ theme }) => `2px solid ${theme.COLOR.PRIMARY_300}`};
  color: ${({ theme }) => theme.COLOR.PRIMARY_300};
  background: none;

  &:hover {
    background: ${({ theme }) => theme.COLOR.PRIMARY_300};
    color: ${({ theme }) => theme.COLOR.WHITE};
  }
`;

const SButton = styled.button<{
  $variantStyle: RuleSet<object>;
  $icon: boolean;
}>`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  border-radius: ${({ $icon }) => ($icon ? '50%' : '3rem')};
  border: 0;
  letter-spacing: ${({ theme }) => theme.FONT.TRACKING.WIDER};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
  width: ${({ $icon }) => ($icon ? '3rem' : '100%')};
  transition: ${({ theme }) => theme.TRANSITION.MEDIUM_SMOOTH};

  ${({ $variantStyle }) => $variantStyle};
`;

type Props = {
  variant?: ButtonVariant;
  children?: ReactNode;
  className?: string;
  icon?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = ButtonVariant.GRADIENT,
  children,
  icon = false,
  ...props
}: Props) {
  const buttonStylesMap = {
    [ButtonVariant.GRADIENT]: gradientVariantStyles,
    [ButtonVariant.OUTLINE]: outlineVariantStyles,
  };

  return (
    <SButton $variantStyle={buttonStylesMap[variant]} $icon={icon} {...props}>
      {children}
    </SButton>
  );
}
