import { ReactNode } from 'react';

export type ModalProps = {
  isOpen: boolean;
  title: string;
  children?: ReactNode;
  onClose(): void;
  onSubmit?(): void;
  submitLabel?: string;
  closeLabel?: string;
};
