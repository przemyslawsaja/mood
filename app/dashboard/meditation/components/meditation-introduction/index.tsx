import { Player } from "@lottiefiles/react-lottie-player";
import MeditationLottie from "@/assets/lotties/meditation.json";
import styled, { css } from "styled-components";
import { Button } from "@/components/button";

const SContainer = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SButton = styled(Button)`
  max-width: 15rem;
`;

const SPrimarySpan = styled.span`
  color: ${({ theme }) => theme.COLOR.PRIMARY_200};
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
`;

const SDescription = styled.div`
  color: ${({ theme }) => theme.COLOR.GRAY_400};

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      margin-bottom: 2rem;
    }
  `};
`;

type Props = {
  onSubmit(): void;
};

export const MeditationIntroduction = ({ onSubmit }: Props) => {
  return (
    <>
      <SDescription>
        Meditation is a mindfulness practice that involves focusing your mind on
        a particular object, thought, or breath to achieve a state of{" "}
        <SPrimarySpan>
          {" "}
          mental clarity, relaxation, and heightened awareness.{" "}
        </SPrimarySpan>
        Its a centuries-old technique with numerous physical and mental
        benefits, including{" "}
        <strong>
          reduced stress, improved concentration, increased self-awareness
        </strong>
        , and <strong>enhanced emotional well-being </strong>. Through regular
        meditation, individuals can cultivate inner peace and balance, making it
        a valuable tool for managing the demands of modern life and promoting
        overall mental and physical health.
      </SDescription>
      <SContainer>
        <Player
          autoplay
          loop
          src={MeditationLottie}
          style={{ height: "300px", width: "300px" }}
        />
        <SButton onClick={onSubmit}> Start Meditation </SButton>
      </SContainer>
    </>
  );
};
