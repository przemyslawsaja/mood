"use client";
import React from "react";
import BlueLight from "@/assets/images/blue-light.png";
import PinkLight from "@/assets/images/pink-light.png";
import styled, { css } from "styled-components";
import Image from "next/image";

const SBlueLight = styled(Image)`
  z-index: -1;
  position: absolute;
  top: 5rem;
  width: 100%;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      top: 5%;
      transform: rotate(5deg) scale(1.2);
    }
  `};
`;

const SPinkLight = styled(Image)`
  z-index: -1;
  position: fixed;
  width: 100%;
  height: 50%;
  top: 7rem;
  right: -5rem;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      top: 40%;
      opacity: 0.8;
      transform: rotate(5deg) scale(1.5);
    }
  `};
`;

const SContainer = styled.div`
  width: 100%;
  margin: auto;
  padding: 2rem;
  overflow: hidden;
  position: relative;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      max-width: 100rem;
      padding: 5rem;
      overflow: visible;
      height: 100%;
    }
  `};
`;

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SBlueLight src={BlueLight} alt={""} />
      <SPinkLight src={PinkLight} alt={""} />
      <SContainer>{children}</SContainer>;
    </>
  );
}
