'use client';

import styled, { css } from 'styled-components';
import { TopNavigation } from '@/components/top-navigation';
import { useRouter } from 'next/navigation';
import { RoutePath } from '@/constants/routing';
import { MoodListItem } from '@/app/dashboard/mood-tracker/components/mood-list-item';
import { Button } from '@/components/button';
import AddCircleSvg from '@/assets/icons/add-circle.svg';
import { AddMoodLogModal } from '@/app/dashboard/mood-tracker/components/add-mood-log-modal';
import { useToggle } from '@/hooks/use-toggle';
import { useMoodLogs } from '@/endpoints/swr/use-mood-logs';
import { Loader } from '@/components/loader';
import dayjs from 'dayjs';
import { removeMoodLog } from '@/endpoints/axios/mood-log';

const SDescription = styled.div`
  color: ${({ theme }) => theme.COLOR.GRAY_400};
  margin: 1rem 0;
`;

const SLogs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  flex-direction: column;
  justify-items: center;
  margin-bottom: 2rem;
  padding-top: 1rem;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      grid-template-columns: 3fr 1fr;
      justify-items: center;
      align-items: center;
      gap: 6rem;
      flex-direction: row;
    }
  `};
`;

const SAddLogButton = styled(Button)`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-self: end;
  white-space: nowrap;
  padding: 0 1rem;
`;

const SPrimaryText = styled.span`
  color: ${({ theme }) => theme.COLOR.PRIMARY_200};
`;

export default function Page() {
  const { push } = useRouter();
  const {
    isToggled: isModalToggled,
    enable: enableModal,
    disable: disableModal,
  } = useToggle();

  const { data, isLoading, mutate } = useMoodLogs();

  const handleRemove = async (id: string) => {
    await removeMoodLog(id);
    mutate();
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <TopNavigation name="Mood tracker " onBack={() => push(RoutePath.DASHBOARD)} />
      <AddMoodLogModal
        isOpen={isModalToggled}
        onClose={() => {
          disableModal();
          mutate();
        }}
      />
      <SHeader>
        <SDescription>
          Easily log and track your mood to uncover patterns in your emotional well-being.
          Reflect on
          <SPrimaryText> your feelings </SPrimaryText>
          ,
          <SPrimaryText> view trends over time </SPrimaryText>
          ,
          and
          <SPrimaryText> embark on a journey of self-discovery and mindfulness </SPrimaryText>
          .
          Simple, insightful, and perfect for everyday use. 🌿
        </SDescription>
        <SAddLogButton onClick={enableModal}>
          Add your mood status
          <AddCircleSvg />
        </SAddLogButton>
      </SHeader>
      <SLogs>
        {data?.map(({
          status, content, createdAt, _id,
        }) => (
          <MoodListItem
            date={dayjs(createdAt).format('DD/MM//YYYY')}
            content={content}
            onRemove={() => handleRemove(_id)}
            mood={status}
          />
        ))}
      </SLogs>
    </div>
  );
}
