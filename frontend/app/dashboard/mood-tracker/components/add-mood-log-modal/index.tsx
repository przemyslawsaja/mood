import { Modal } from '@/components/modal';
import { Input } from '@/components/input';
import { useForm } from 'react-hook-form';
import { MoodImageMap, MoodLogStatus } from '@/constants/mood-tracker';
import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';
import { Nullable } from '@/types/common';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { createMoodLog, removeMoodLog } from '@/api/axios/mood-log';
import { Button } from '@/components/button';

const SContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SMoodStatusBox = styled.div<{
  $isActive: boolean;
}>`
  height: 9rem;
  width: 9rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  border: ${({ theme }) => `0.5px solid ${theme.COLOR.PRIMARY_300}`};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.XL};
  justify-content: center;
  cursor: pointer;
  background: ${({ theme, $isActive }) => ($isActive ? theme.COLOR.PRIMARY_300 : theme.COLOR.NIGHTFALL_500)};
  transition: ${({ theme }) => theme.TRANSITION.MEDIUM_SMOOTH};
  
  &:hover {
    scale: 1.05;
  }
`;

const SImage = styled(Image)`
  height: 4rem;
  width: 4rem;
`;

const SMoodStatusTitle = styled.div`
  margin-top: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.COLOR.GRAY_200};
`;

const SStatus = styled.span`
  color: ${({ theme }) => theme.COLOR.WHITE}
`;

type Props = {
  isOpen: boolean;
  onClose(): void;
};

type Form = {
  content: string
};

export function AddMoodLogModal({ isOpen, onClose }: Props) {
  const [moodStatus, setMoodStatus] = useState<MoodLogStatus>(MoodLogStatus.NEUTRAL);

  const {
    formState: { errors },
    control,
    handleSubmit,
  } = useForm<Form>({
    resolver: yupResolver(yup.object().shape({ content: yup.string().required('Field is required') })),
  });

  const onSubmit = async (form: Form) => {
    await createMoodLog({
      content: form.content,
      status: moodStatus,
    });
    onClose();
  };

  return (
    <Modal title="Add your mood status" isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit(onSubmit)} submitLabel="Log your mood">
      <Input {...{ control }} name="content" error={errors.content} label="Description" />
      <SMoodStatusTitle>Select your mood</SMoodStatusTitle>
      <SContainer>
        {Object.values(MoodLogStatus).map((status) => (
          <SMoodStatusBox onClick={() => setMoodStatus(status)} $isActive={moodStatus === status}>
            <SImage src={MoodImageMap[status]} alt={status} />
            <SStatus>{status}</SStatus>
          </SMoodStatusBox>
        ))}
      </SContainer>
    </Modal>
  );
}
