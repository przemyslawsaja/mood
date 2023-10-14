import LoaderLottie from '@/assets/lotties/loader.json';
import { Player } from '@lottiefiles/react-lottie-player';
import styled from 'styled-components';
import { hexWithAlpha } from '@/utils/styles';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => hexWithAlpha(theme.COLOR.NIGHTFALL_300, 10)};
  backdrop-filter: blur(0.2rem);
  position: fixed;
  z-index: ${({ theme }) => theme.Z_INDEX.HIGHEST};
  color: ${({ theme }) => theme.COLOR.PRIMARY_100};
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

export function Loader({ message = 'Loading...', isLoading = true }: Props) {
  if (!isLoading) {
    return null;
  }

  return (
    <SContainer>
      <Player
        autoplay
        loop
        src={LoaderLottie}
        style={{ height: '300px', width: '300px' }}
      />
      <SMessage>{message}</SMessage>
    </SContainer>
  );
}
