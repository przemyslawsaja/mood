import { WizardState } from "@/modules/wizard/state/context";
import { WizardStep } from "@/modules/wizard/constants";
import { ReducerAction } from "@/types/common";

type Action =
  | ReducerAction<WizardActionType.INITIALIZE_STEPS, WizardStep[]>
  | ReducerAction<WizardActionType.SET_STEP, WizardStep>;

export enum WizardActionType {
  INITIALIZE_STEPS,
  SET_STEP,
}

/**
 * Initializes the state for a wizard based on the provided steps.
 * @param state - The current state of the wizard.
 * @param steps - All steps that are available in wizard
 * @returns {WizardState} The updated wizard state after initialization.
 */
const initializeSteps = (state: WizardState, steps?: WizardStep[]) => {
  if (!steps) {
    return state;
  }

  return {
    activeStep: steps[0],
    remainingSteps: steps.slice(1),
    completedSteps: [],
  };
};

/**
 * Sets the active step in a wizard and updates the state accordingly.
 *
 * @param {WizardState} state - The current state of the wizard.
 * @param {WizardStep} stepToSet - The step to set as the active step.
 * @returns {WizardState} The updated wizard state after setting the step.
 */
const setStep = (state: WizardState, stepToSet: WizardStep) => {
  if (!stepToSet) {
    return state;
  }

  return {
    ...state,
    activeStep: stepToSet,
    remainingSteps: state.remainingSteps.filter(
      (step) => step.name !== stepToSet.name,
    ),
    completedSteps: state.activeStep
      ? [...state.completedSteps, state.activeStep]
      : [...state.completedSteps],
  };
};

export const wizardReducer = (
  state: WizardState,
  action: Action,
): WizardState => {
  const { type, payload } = action;

  switch (type) {
    case WizardActionType.INITIALIZE_STEPS:
      return initializeSteps(state, payload as WizardStep[]);
    case WizardActionType.SET_STEP:
      return setStep(state, payload as WizardStep);
    default:
      throw new Error("Invalid wizard action type");
  }
};
