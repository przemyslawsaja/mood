import styled from "styled-components";
import { MeditationWizardStep } from "@/modules/wizard/components/wizard-step";
import { WizardStep, WizardStepStatus } from "@/modules/wizard/constants";
import { Nullable } from "@/types/common";

const SContainer = styled.div`
  margin-top: 2rem;
`;

type Props = {
  activeStep: Nullable<WizardStep>;
  completedSteps: WizardStep[];
  remainingSteps: WizardStep[];
  onFinish(): void;
};

export const Wizard = ({
  activeStep,
  completedSteps,
  remainingSteps,
  onFinish,
}: Props) => {
  const isLastActiveStep = remainingSteps.length === 0;
  return (
    <SContainer>
      {completedSteps.map((step, idx) => (
        <MeditationWizardStep
          step={step}
          key={idx}
          status={WizardStepStatus.COMPLETED}
        />
      ))}
      {activeStep && (
        <MeditationWizardStep
          step={activeStep}
          status={WizardStepStatus.ACTIVE}
          {...(isLastActiveStep && {
            submitLabel: "Finish session",
            hideLine: true,
            onSubmit: onFinish,
          })}
        />
      )}
      {remainingSteps.map((step, idx) => (
        <MeditationWizardStep
          step={step}
          hideLine={
            remainingSteps[remainingSteps.length - 1].name === step.name
          }
          key={idx}
          status={WizardStepStatus.REMAINING}
        />
      ))}
    </SContainer>
  );
};
export { WizardActionType } from "@/modules/wizard/state/reducer";
