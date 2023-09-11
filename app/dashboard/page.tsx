"use client";
import styled, { css } from "styled-components";
import BlueLight from "@/assets/images/blue-light.png";
import PinkLight from "@/assets/images/pink-light.png";
import Image from "next/image";
import { Well } from "@/components/well";
import MeditateSvg from "@/assets/icons/meditate.svg";
import BookSvg from "@/assets/icons/book.svg";
import { useState } from "react";
import { Button } from "@/components/button";
import { RoutePath } from "@/constants/routes";
import { useRouter } from "next/navigation";

const SHeader = styled.h1`
  text-align: center;
  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      padding-top: 0rem;
    }
  `};
`;

const SDescription = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.COLOR.GRAY_400};

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      margin-bottom: 5rem;
    }
  `};
`;

const SWrapper = styled.div`
  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      justify-content: center;
    }
  `};
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

const SWellContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
  gap: 5rem;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      flex-direction: row;
      height: 15rem;
      gap: 8rem;
    }
  `};
`;

const SFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      margin-top: 8rem;
    }
  `};
`;

const SButton = styled(Button)`
  max-width: 15rem;
`;

const SJourneySpan = styled.span`
  color: ${({ theme }) => theme.COLOR.PRIMARY_200};
`;

export default function Page() {
  const { push } = useRouter();

  const [activeWellPath, setActiveWellPath] = useState<RoutePath>(
    RoutePath.MEDITATION,
  );

  return (
    <SWrapper>
      <SHeader>Where will your mind take you today?</SHeader>
      <SDescription>
        Welcome to our mindful oasis! 🌿 Take a moment to reflect on your mood
        and choose your path to inner balance. <br />
        <strong>Meditation</strong> for tranquility or <strong>Focus</strong>{" "}
        for heightened productivity.{" "}
        <SJourneySpan>Your journey begins here.</SJourneySpan>
      </SDescription>
      <SBlueLight src={BlueLight} alt={""} />
      <SPinkLight src={PinkLight} alt={""} />
      <SWellContainer>
        <Well
          icon={MeditateSvg}
          title={"Meditation"}
          isActive={activeWellPath === RoutePath.MEDITATION}
          onClick={() => setActiveWellPath(RoutePath.MEDITATION)}
        />
        <Well
          icon={BookSvg}
          title={"Focus"}
          isActive={activeWellPath === RoutePath.FOCUS}
          onClick={() => setActiveWellPath(RoutePath.FOCUS)}
        />
      </SWellContainer>
      <SFooter>
        <SButton onClick={() => push(activeWellPath)}> Continue </SButton>
      </SFooter>
    </SWrapper>
  );
}
