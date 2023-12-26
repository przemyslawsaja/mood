import styled from 'styled-components';
import React, { ReactNode } from 'react';

const SContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  color: ${({ theme }) => theme.COLOR.GRAY_400};
`;

type Props = {
  children?: ReactNode
};

export function EmptyData({ children }: Props) {
  return (
    <SContainer>
      {children || "Oops, it seems there's no data to display "}
    </SContainer>
  );
}
