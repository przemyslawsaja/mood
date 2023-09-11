"use client";
import LoaderLottie from "@/assets/lotties/loader.json";
import { Player } from "@lottiefiles/react-lottie-player";
import styled from "styled-components";
import Image from "next/image";
import BlueLight from "@/assets/images/blue-light.png";
import PinkLight from "@/assets/images/pink-light.png";
import React from "react";

const SContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SBlueLight = styled(Image)`
  z-index: -1;
  position: absolute;
  top: 0;
  left: -5rem;
  width: 30rem;
  height: 30rem;
  transform: scale(2);
`;

const SPinkLight = styled(Image)`
  z-index: -1;
  position: absolute;
  top: -10rem;
  left: 10rem;
  width: 30rem;
  height: 30rem;
  transform: scale(2);
`;

export default function Loading() {
  return (
    <SContainer>
      <SBlueLight src={BlueLight} alt={""} />
      <SPinkLight src={PinkLight} alt={""} />
      <Player
        autoplay
        loop
        src={LoaderLottie}
        style={{ height: "300px", width: "300px" }}
      />
    </SContainer>
  );
}
