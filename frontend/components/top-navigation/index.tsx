import styled from 'styled-components';
import { Button } from '@/components/button';
import ArrowBackSvg from '@/assets/icons/arrow-back.svg';

const SNavigation = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  cursor: pointer;
`;

const SArrowBackSvg = styled(ArrowBackSvg)`
  transform: scale(0.8);
`;

const SName = styled.span`
  font-size: ${({ theme }) => theme.FONT.SIZE.XL3};
`;

type Props = {
  name: string,
  onBack(): void
};

export function TopNavigation({ name, onBack }: Props) {
  return (
    <SNavigation>
      <Button icon onClick={onBack}>
        <SArrowBackSvg />
      </Button>
      <SName>{name}</SName>
    </SNavigation>
  );
}
