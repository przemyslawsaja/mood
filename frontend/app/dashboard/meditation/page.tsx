'use client';

import styled, { css } from 'styled-components';
import { useRouter } from 'next/navigation';
import { RoutePath } from '@/constants/routing';
import { COLOR } from '@/theme/styles/color';
import { MeditationIntroduction } from '@/app/dashboard/meditation/components/meditation-introduction';
import { MeditationWizard } from '@/app/dashboard/meditation/components/meditation-wizard';
import { useToggle } from '@/hooks/use-toggle';
import { Player } from '@lottiefiles/react-lottie-player';
import { useTimer } from '@/hooks/use-timer';
import TimerSvg from '@/assets/icons/timer.svg';
import MeditationLottie from '@/assets/lotties/meditation.json';
import { TopNavigation } from '@/components/top-navigation';

const STimer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
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
  flex-direction: column-reverse;
  gap: 2rem;
  margin-top: 2rem;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      flex-direction: row;
    }
  `};
`;

const SFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Page() {
  const { push } = useRouter();
  const { isToggled: isMediationWizardEnabled, enable: enableMediationWizard } = useToggle(false);
  const { timer, setTimer, isFinished } = useTimer();
  const showTimer = isMediationWizardEnabled && !isFinished;

  return (
    <SContainer>
      <TopNavigation name="Meditation" onBack={() => push(RoutePath.DASHBOARD)} />
      {isMediationWizardEnabled ? (
        <SWizardContainer>
          <MeditationWizard {...{ setTimer, isFinished }} />
          <SFlex>
            <Player
              autoplay
              loop
              src={MeditationLottie}
              style={{ height: '300px', width: '300px' }}
            />
            {showTimer && (
              <STimer>
                <TimerSvg color={COLOR.GRAY_200} />
                <h1>{timer}</h1>
              </STimer>
            )}
          </SFlex>
        </SWizardContainer>
      ) : (
        <MeditationIntroduction onSubmit={enableMediationWizard} />
      )}
    </SContainer>
  );
}
