import { Badge } from "@/components/badge";
import { BadgeVariant } from "@/components/badge/constants";
import styled from "styled-components";
import { useWizard } from "@/modules/wizard/hooks/use-wizard";
import { MeditationWizardStep } from "@/app/dashboard/meditation/constants";

const SContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
`;

const timeOptions = [
  { label: "5 min", value: 5 },
  { label: "10 min", value: 10 },
  { label: "15 min", value: 15 },
  { label: "20 min", value: 20 },
  { label: "30 min", value: 30 },
];

type Props = {
  setTimer(timestamp: Date): void;
};

export const SetTimeLimit = ({ setTimer }: Props) => {
  const { setStep, getStep } = useWizard();
  const nextStep = getStep(MeditationWizardStep.CHOOSE_POSITION);

  const selectTimeHandler = (minutes: number) => {
    if (nextStep) {
      setTimer(new Date(0, 0, 0, 0, minutes, 0));
      return setStep(nextStep);
    }

    throw new Error("Step not found");
  };

  return (
    <SContainer>
      {timeOptions.map((option, idx) => (
        <Badge
          key={idx}
          variant={BadgeVariant.OUTLINE}
          onClick={() => selectTimeHandler(option.value)}
        >
          {option.label}
        </Badge>
      ))}
    </SContainer>
  );
};
