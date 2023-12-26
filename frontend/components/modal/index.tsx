import styled, { css } from 'styled-components';
import { Button } from '@/components/button';
import { ButtonVariant } from '@/components/button/constants';
import { ModalProps } from '@/components/modal/types';
import { hexWithAlpha } from '@/utils/styles';

const SModal = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: ${({ theme }) => theme.Z_INDEX.HIGHEST};
  background: ${({ theme }) => theme.COLOR.NIGHTFALL_500};
  box-shadow: ${({ theme }) => theme.SHADOW.LIGHT_PRIMARY_GLOW};
  border-radius: ${({ theme }) => theme.BORDER_RADIUS.XL};
  padding: 2rem;
  color: ${({ theme }) => theme.COLOR.GRAY_800};
  max-height: 80vh;
  overflow: auto;
  width: 90vw;

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.SM)} {
      max-width: 80vw;
    }
  `};
  
  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.LG)} {
      max-width: 60vw;
    }
  `};

  ${({ theme: { BREAKPOINTS, MEDIA } }) => css`
    ${MEDIA.MIN_WIDTH(BREAKPOINTS.XL)} {
      max-width: 40vw;
    }
  `};
`;

const SBackdrop = styled.div`
  background: ${({ theme }) => hexWithAlpha(theme.COLOR.BLACK, 40)};
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
  color: ${({ theme }) => theme.COLOR.GRAY_300};
`;

const SContent = styled.div`
  color: ${({ theme }) => theme.COLOR.GRAY_400};
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

export function Modal({
  title,
  children,
  isOpen,
  onSubmit,
  onClose,
  submitLabel,
  closeLabel,
}: ModalProps) {
  if (!isOpen) {
    return null;
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
