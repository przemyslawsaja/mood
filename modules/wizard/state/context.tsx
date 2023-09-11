import { Nullable } from "@/types/common";
import { createContext, ReactNode, useReducer } from "react";
import { WizardStep } from "@/modules/wizard/constants";
import {
  WizardActionType,
  wizardReducer,
} from "@/modules/wizard/state/reducer";

export type WizardState = {
  remainingSteps: WizardStep[];
  completedSteps: WizardStep[];
  activeStep: Nullable<WizardStep>;
};

type WizardContextType = {
  setStep: (step: WizardStep) => void;
  getStep: (name: string) => Nullable<WizardStep>;
  initializeSteps: (steps: WizardStep[]) => void;
};

const initialState: WizardState = {
  remainingSteps: [],
  completedSteps: [],
  activeStep: null,
};

export const WizardContext = createContext<WizardContextType & WizardState>({
  setStep: () => {},
  getStep: () => null,
  initializeSteps: () => {},
  ...initialState,
});

export const WizardProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(wizardReducer, initialState);
  const { activeStep, completedSteps, remainingSteps } = state;
  const setStep = (step: WizardStep) =>
    dispatch({ type: WizardActionType.SET_STEP, payload: step });

  const initializeSteps = (steps: WizardStep[]) =>
    dispatch({ type: WizardActionType.INITIALIZE_STEPS, payload: steps });

  const getStep = (name: string): Nullable<WizardStep> => {
    const { activeStep, completedSteps, remainingSteps } = state;
    const steps = [activeStep, ...completedSteps, ...remainingSteps];

    return steps.find((step) => step?.name === name) || null;
  };

  const value = {
    setStep,
    getStep,
    initializeSteps,
    activeStep,
    completedSteps,
    remainingSteps,
  };

  return (
    <WizardContext.Provider {...{ value }}>{children}</WizardContext.Provider>
  );
};
