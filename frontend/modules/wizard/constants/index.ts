import { ReactNode } from "react";

export enum WizardStepStatus {
  COMPLETED = "completed",
  ACTIVE = "active",
  REMAINING = "remaining",
}

export type WizardStep = {
  name: string;
  title: string;
  description: string;
  component: ReactNode;
  hideSubmitBtn?: boolean;
};
