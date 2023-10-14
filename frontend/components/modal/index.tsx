import styled, { css } from 'styled-components';
import { ReactNode } from 'react';
import { Button } from '@/components/button';
import { ButtonVariant } from '@/components/button/constants';

const SModal = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: ${({ theme }) => theme.Z_INDEX.HIGHEST};
  background: ${({ theme }) => theme.COLOR.WHITE};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.XL};
  padding: 2rem;
  color: ${({ theme }) => theme.COLOR.GRAY_800};
  max-height: 80vh;
  overflow: auto;
  width: 90vw;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      max-width: 50vw;
    }
  `};
`;

const SBackdrop = styled.div`
  background: rgba(0, 0, 0, 0.45);
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: ${({ theme }) => theme.Z_INDEX.HIGHER};
  backdrop-filter: blur(0.1rem);
`;

const STitle = styled.h1`
  margin: 0;
  text-align: center;
`;

const SContent = styled.div`
  padding: 2rem 0;
`;

const SFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.MD)} {
      flex-direction: row;
    }
  `};
`;

type Props = {
  isOpen: boolean;
  title: string;
  children?: ReactNode;
  onClose(): void;
  onSubmit?(): void;
  submitLabel?: string;
  closeLabel?: string;
};

export function Modal({
  title,
  children,
  isOpen,
  onSubmit,
  onClose,
  submitLabel,
  closeLabel,
}: Props) {
  if (!isOpen) {
    return;
  }

  return (
    <SBackdrop>
      <SModal>
        <STitle>{title}</STitle>
        <SContent>{children}</SContent>
        <SFooter>
          <Button variant={ButtonVariant.OUTLINE} onClick={onClose}>
            {closeLabel || 'Close'}
          </Button>
          {onSubmit && (
          <Button onClick={onSubmit}>{submitLabel || 'Submit'}</Button>
          )}
        </SFooter>
      </SModal>
    </SBackdrop>
  );
}
