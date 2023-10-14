import styled from 'styled-components';
import { Wizard } from '@/modules/wizard';
import { useWizard } from '@/modules/wizard/hooks/use-wizard';
import {
  MeditationWizardStep,
  meditationWizardSteps,
} from '@/app/dashboard/meditation/constants';
import React, { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { RoutePath } from '@/constants/routing';
import { SetTimeLimit } from '@/app/dashboard/meditation/steps/set-time-limit-step';
import { BodyScan } from '@/app/dashboard/meditation/steps/body-scan';
import { useToggle } from '@/hooks/use-toggle';
import { Modal } from '@/components/modal';
import { FocusOnBreath } from '../../steps/focus-on-breath';

const SContainer = styled.div`
  margin-top: 2rem;
`;

const SModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.COLOR.GRAY_500};
`;

const SPrimary = styled.div`
  color: ${({ theme }) => theme.COLOR.WARNING_300};
`;

type Props = {
  setTimer(timestamp: Date): void;
  isFinished: boolean;
};

export function MeditationWizard({ setTimer, isFinished }: Props) {
  const { push } = useRouter();
  const {
    isToggled: isModalToggled,
    enable: enableModal,
    disable: disableModal,
  } = useToggle();

  const {
    remainingSteps, completedSteps, activeStep, initializeSteps,
  } = useWizard();

  const meditationWizardStepsComponentsMap: Record<string, ReactNode> = {
    [MeditationWizardStep.SET_TIME_LIMIT]: <SetTimeLimit {...{ setTimer }} />,
    [MeditationWizardStep.FOCUS_ON_BREATH]: <FocusOnBreath />,
    [MeditationWizardStep.BODY_SCAN]: <BodyScan />,
  };

  const steps = meditationWizardSteps.map((step) => ({
    ...step,
    component: meditationWizardStepsComponentsMap[step.name],
  }));

  const onFinishHandler = () => {
    if (isFinished) {
      return push(RoutePath.DASHBOARD);
    }

    enableModal();
  };

  useEffect(() => {
    initializeSteps(steps);
  }, []);

  return (
    <SContainer>
      <Wizard
        {...{ remainingSteps, completedSteps, activeStep }}
        onFinish={onFinishHandler}
      />
      <Modal
        isOpen={isModalToggled}
        title="Are you sure?"
        onClose={disableModal}
        onSubmit={() => push(RoutePath.DASHBOARD)}
        closeLabel="No, take me back"
        submitLabel="Yes, I want to finish the session"
      >
        <SModalContent>
          <div>
            It appears that you are attempting to finish your meditation session
            <SPrimary>
              before the timer you initially set has completed its countdown.
            </SPrimary>
          </div>
          <div>
            Please take a moment to reflect on your decision. If you still wish
            to end your session early, you may do so, but we recommend
            completing the timer for a more fulfilling meditation experience.
          </div>
        </SModalContent>
      </Modal>
    </SContainer>
  );
}
