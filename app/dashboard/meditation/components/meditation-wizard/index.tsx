import styled from "styled-components";
import { Wizard } from "@/modules/wizard";
import { useWizard } from "@/modules/wizard/hooks/use-wizard";
import {
  MeditationWizardStep,
  meditationWizardSteps,
} from "@/app/dashboard/meditation/constants";
import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { RoutePath } from "@/constants/routes";
import { SetTimeLimitStep } from "@/app/dashboard/meditation/steps/set-time-limit-step";

const SContainer = styled.div`
  margin-top: 2rem;
`;

type Props = {
  setTimerMinutesMinutes(minutes: number): void;
};

export const MeditationWizard = ({ setTimerMinutesMinutes }: Props) => {
  const { push } = useRouter();
  const { remainingSteps, completedSteps, activeStep, initializeSteps } =
    useWizard();

  const meditationWizardStepsComponentsMap: Record<
    MeditationWizardStep,
    ReactNode
  > = {
    [MeditationWizardStep.SET_TIME_LIMIT]: (
      <SetTimeLimitStep {...{ setTimerMinutesMinutes }} />
    ),
    [MeditationWizardStep.CHOOSE_POSITION]: <div />,
    [MeditationWizardStep.FOCUS_ON_BREATH]: <div />,
    [MeditationWizardStep.BODY_SCAN]: <div />,
    [MeditationWizardStep.END_MINDFULLY]: <div />,
  };

  const steps = meditationWizardSteps.map((step) => ({
    ...step,
    component: meditationWizardStepsComponentsMap[step.name],
  }));

  useEffect(() => {
    initializeSteps(steps);
  }, []);

  return (
    <SContainer>
      <Wizard
        {...{ remainingSteps, completedSteps, activeStep }}
        onFinish={() => push(RoutePath.DASHBOARD)}
      />
    </SContainer>
  );
};
