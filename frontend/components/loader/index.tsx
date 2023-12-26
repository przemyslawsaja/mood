import LoaderLottie from '@/assets/lotties/loader.json';
import styled from 'styled-components';
import { hexWithAlpha } from '@/utils/styles';
import { Player } from '@lottiefiles/react-lottie-player';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => hexWithAlpha(theme.COLOR.NIGHTFALL_300, 10)};
  backdrop-filter: blur(0.2rem);
  gap: 5rem;
  position: fixed;
  z-index: ${({ theme }) => theme.Z_INDEX.HIGHEST};
  color: ${({ theme }) => theme.COLOR.PRIMARY_100};
  top: 0;
  left: 0;
`;

const SMessage = styled.p`
  color: ${({ theme }) => theme.COLOR.GRAY_100};
  font-size: ${({ theme }) => theme.FONT.SIZE.SM};
  margin-top: -4rem;
`;

type Props = {
  message?: string;
  isLoading?: boolean;
};

export function Loader({ message, isLoading = true }: Props) {
  if (!isLoading) {
    return null;
  }

  return (
    <SContainer>
      <Player
        autoplay
        loop
        src={LoaderLottie}
        style={{ height: '60px', width: '60px' }}
      />
      {message && <SMessage>{message}</SMessage>}
    </SContainer>
  );
}
