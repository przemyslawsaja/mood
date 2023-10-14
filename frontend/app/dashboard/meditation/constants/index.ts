import { WizardStep } from '@/modules/wizard/constants';
import { Override } from '@/types/common';

export enum MeditationWizardStep {
  SET_TIME_LIMIT = 'set-time-limit',
  CHOOSE_POSITION = 'choose-position',
  FOCUS_ON_BREATH = 'focus-on-breath',
  BODY_SCAN = 'body-scan',
  END_MINDFULLY = 'end-mindfully',
}

export const meditationWizardSteps: Override<
  Omit<WizardStep, 'component'>,
  { name: MeditationWizardStep }
>[] = [
  {
    name: MeditationWizardStep.SET_TIME_LIMIT,
    hideSubmitBtn: true,
    title: 'Set time limit',
    description:
      "Setting a time limit for meditation is important because it promotes consistency, helps beginners start gradually, encourages focus, reduces anxiety, ensures effective use of time, and aids in integrating meditation into daily life. It's a practical way to make meditation a regular and manageable practice.",
  },
  {
    name: MeditationWizardStep.CHOOSE_POSITION,
    title: 'Find a Quiet Space and choose your position',
    description:
      "Choose a peaceful and quiet location where you won't be easily distracted. Sit or lie down in a comfortable position. Keep your back straight to maintain alertness.",
  },
  {
    name: MeditationWizardStep.FOCUS_ON_BREATH,
    title: 'Close your eyes and focus on Your Breath.',
    description:
      'Close your eyes gently to minimize visual distractions. Pay attention to your breath as it naturally flows in and out. Observe the sensation of each breath without trying to control it.',
  },
  {
    name: MeditationWizardStep.BODY_SCAN,
    title: 'Acknowledge thoughts and body scan',
    description:
      'Thoughts will inevitably arise. When they do, acknowledge them without judgment and gently bring your focus back to your breath.',
  },
  {
    name: MeditationWizardStep.END_MINDFULLY,
    title: 'End Mindfully',
    description:
      'When your meditation time is up, gradually become aware of your surroundings, and open your eyes if they were closed. Take a moment to transition back to your regular activities mindfully.',
  },
];
