import styled, { css, RuleSet } from 'styled-components';
import { BadgeVariant } from '@/components/badge/constants';
import { ButtonHTMLAttributes, ReactNode } from 'react';

const filledVariantStyles = css`
  color: ${({ theme }) => theme.COLOR.WHITE};
  background: ${({ theme }) => theme.COLOR.PRIMARY_100};
  transition: ${({ theme }) => theme.TRANSITION.MEDIUM_SMOOTH};

  &:hover {
    color: ${({ theme }) => theme.COLOR.PRIMARY_500};
  }
`;

const outlineVariantStyles = css`
  border: ${({ theme }) => `2px solid ${theme.COLOR.PRIMARY_100}`};
  color: ${({ theme }) => theme.COLOR.PRIMARY_100};
  transition: ${({ theme }) => theme.TRANSITION.MEDIUM_SMOOTH};
  background: none;

  &:hover {
    background: ${({ theme }) => theme.COLOR.PRIMARY_100};
    color: ${({ theme }) => theme.COLOR.PRIMARY_500};
  }
`;

const SBadge = styled.button<{ $variantStyle: RuleSet<object> }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.XL};
  padding: 0.6rem 2.5rem;
  width: fit-content;

  ${({ $variantStyle }) => $variantStyle};
`;

type Props = {
  children: ReactNode;
  variant?: BadgeVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Badge({
  children,
  variant = BadgeVariant.FILLED,
  ...props
}: Props) {
  const badgeStylesMap = {
    [BadgeVariant.FILLED]: filledVariantStyles,
    [BadgeVariant.OUTLINE]: outlineVariantStyles,
  };

  return (
    <SBadge $variantStyle={badgeStylesMap[variant]} {...props}>
      {children}
    </SBadge>
  );
}
