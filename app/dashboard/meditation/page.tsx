"use client";
import styled, { css } from "styled-components";
import ArrowBackSvg from "@/assets/icons/arrow-back.svg";
import { Button } from "@/components/button";
import { useRouter } from "next/navigation";
import { RoutePath } from "@/constants/routes";
import { COLOR } from "@/theme/styles/color";
import { MeditationIntroduction } from "@/app/dashboard/meditation/components/meditation-introduction";
import { MeditationWizard } from "@/app/dashboard/meditation/components/meditation-wizard";
import { useToggle } from "@/hooks/use-toggle";
import { useState } from "react";
import MeditationLottie from "@/assets/lotties/meditation.json";
import { Player } from "@lottiefiles/react-lottie-player";
import { MeditationTimer } from "@/app/dashboard/meditation/components/meditation-timer";

const SHeader = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SH1 = styled.h1`
  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      padding-top: 0rem;
    }
  `};
`;

const SContainer = styled.div`
  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      justify-content: center;
    }
  `};
`;

const SWizardContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const SArrowBackSvg = styled(ArrowBackSvg)`
  transform: scale(0.8);
`;

export default function Page() {
  const { push } = useRouter();
  const { isToggled: isMediationWizardEnabled, enable: enableMediationWizard } =
    useToggle(true);

  const [timerMinutes, setTimerMinutesMinutes] = useState(0);

  return (
    <SContainer>
      <SHeader>
        <Button icon onClick={() => push(RoutePath.DASHBOARD)}>
          <SArrowBackSvg color={COLOR.WHITE} />
        </Button>
        <SH1>Meditation</SH1>
        <MeditationTimer />
      </SHeader>
      {isMediationWizardEnabled ? (
        <SWizardContainer>
          <MeditationWizard {...{ setTimerMinutesMinutes }} />
          <Player
            autoplay
            loop
            src={MeditationLottie}
            style={{ height: "300px", width: "300px" }}
          />
        </SWizardContainer>
      ) : (
        <MeditationIntroduction onSubmit={enableMediationWizard} />
      )}
    </SContainer>
  );
}
