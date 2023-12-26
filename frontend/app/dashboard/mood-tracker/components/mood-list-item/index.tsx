import { MoodLogStatus, MoodImageMap } from '@/constants/mood-tracker';
import styled, { css } from 'styled-components';
import Image from 'next/image';
import { Button } from '@/components/button';
import RemoveSvg from '@/assets/icons/remove.svg';

const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px solid ${({ theme }) => theme.COLOR.INDIGO_300};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.XL};
  padding: 1rem;
  gap: 1rem;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      flex-direction: row;
      align-items: center;
    }
  `};
`;

const SContent = styled.div`
  color: ${({ theme }) => theme.COLOR.GRAY_300};
  width: 100%;
`;

const SDate = styled.div`
  font-weight: ${({ theme }) => theme.FONT.WEIGHT.BOLD};
  width: 7rem;
`;

const SDesktopStatusIcon = styled(Image)`
  display: none;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      display: block;
    }
  `};
`;

const SDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
`;

const SMobileStatusIcon = styled(Image)`
  display: block;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      display: none;
    }
  `};
`;

const SRemoveButton = styled(RemoveSvg)`
  cursor: pointer;
  color: ${({ theme }) => theme.COLOR.PRIMARY_200};
  
  &:hover {
      color: ${({ theme }) => theme.COLOR.PRIMARY_300};
  }
`;

type Props = {
  date: string,
  content: string,
  mood: MoodLogStatus,
  onRemove(): void;
};

export function MoodListItem({
  date, content, mood, onRemove,
}: Props) {
  return (
    <SContainer>
      <SDetails>
        <SDate>
          {date}
        </SDate>
        <SMobileStatusIcon src={MoodImageMap[mood]} alt={mood} width={24} height={24} />
      </SDetails>
      <SContent>
        {content}
      </SContent>
      <SDesktopStatusIcon src={MoodImageMap[mood]} alt={mood} width={24} height={24} />
      <SRemoveButton onClick={onRemove} />
    </SContainer>
  );
}
