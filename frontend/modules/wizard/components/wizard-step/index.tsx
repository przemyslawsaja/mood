import styled, { css } from "styled-components";
import { COLOR } from "@/theme/styles/color";
import { WizardStep, WizardStepStatus } from "@/modules/wizard/constants";
import { Button } from "@/components/button";
import { useWizard } from "@/modules/wizard/hooks/use-wizard";

const SContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const SLeftSide = styled.div<{ $hideLine: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: ${({ $hideLine }) => ($hideLine ? "fit-content" : "auto")};
`;

const SPoint = styled.div<{ $statusColor: string }>`
  width: 1rem;
  height: 1rem;
  min-height: 1rem;
  border-radius: 50%;
  background: ${({ $statusColor }) => $statusColor};
`;

const SLine = styled.div<{ $statusColor: string }>`
  width: 2px;
  height: 100%;
  background: ${({ $statusColor }) => $statusColor};
`;

const STitle = styled.div<{ $statusColor: string }>`
  font-size: ${({ theme }) => theme.FONT.SIZE.LG};
  color: ${({ $statusColor }) => $statusColor};
  margin-bottom: 1rem;
`;

const SDescription = styled.div`
  color: ${({ theme }) => theme.COLOR.GRAY_400};
  margin-bottom: 1rem;
`;

const SRightSide = styled.div`
  margin-top: -0.5rem;
  width: 100%;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      max-width: 50rem;
    }
  `};
`;

const SButton = styled(Button)`
  margin: 2rem 0;
  max-width: 15rem;
`;

type Props = {
  step: WizardStep;
  status: WizardStepStatus;
  hideLine?: boolean;
  submitLabel?: string;
  onSubmit?(): void;
};

export const MeditationWizardStep = ({
  step,
  status,
  onSubmit,
  hideLine = false,
  submitLabel = "Next step",
}: Props) => {
  const { title, component, description, hideSubmitBtn } = step;
  const { setStep, remainingSteps } = useWizard();

  const stepStatusColorMap = {
    [WizardStepStatus.REMAINING]: COLOR.GRAY_600,
    [WizardStepStatus.ACTIVE]: COLOR.WARNING_300,
    [WizardStepStatus.COMPLETED]: COLOR.SUCCESS_300,
  };

  const statusColor = stepStatusColorMap[status];

  const onSubmitHandler = () =>
    onSubmit ? onSubmit() : setStep(remainingSteps[0]);

  return (
    <SContainer>
      <SLeftSide $hideLine={hideLine}>
        <SPoint $statusColor={statusColor} />
        {!hideLine && <SLine $statusColor={statusColor} />}
      </SLeftSide>
      <SRightSide>
        <STitle $statusColor={statusColor}>{title}</STitle>
        {status === WizardStepStatus.ACTIVE && (
          <>
            <SDescription>{description}</SDescription>
            <div>{component}</div>
            {!hideSubmitBtn && (
              <SButton onClick={onSubmitHandler}>{submitLabel}</SButton>
            )}
          </>
        )}
      </SRightSide>
    </SContainer>
  );
};
