"use client";
import styled, { css } from "styled-components";
import { Button } from "@/components/button";
import ArrowForwardSvg from "@/assets/icons/arrow-forward.svg";
import { COLOR } from "@/theme/styles/color";
import Link from "next/link";
import { RoutePath } from "@/constants/routing";
import { ButtonVariant } from "@/components/button/constants";

const SLogo = styled.h1`
  padding-top: 50%;
  opacity: 0.5;
  font-size: ${({ theme }) => theme.FONT.SIZE.XL5};

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      padding-top: 0rem;
      margin-bottom: 5rem;
    }
  `};
`;

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      justify-content: center;
    }
  `};
`;

const SActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      max-width: 25rem;
    }
  `};
`;

const SLink = styled(Link)`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.COLOR.GRAY_400};
  display: flex;
  align-items: center;
  justify-items: center;
  gap: 1rem;
  align-self: center;
`;

export default function Page() {
  return (
    <SWrapper>
      <SLogo>mood.</SLogo>

      <SActions>
        <Button>Sign In</Button>
        <Button variant={ButtonVariant.OUTLINE}>Create Account</Button>
        <SLink href={RoutePath.DASHBOARD}>
          I want to use it without account{" "}
          <ArrowForwardSvg color={COLOR.GRAY_400} />
        </SLink>
      </SActions>
    </SWrapper>
  );
}
