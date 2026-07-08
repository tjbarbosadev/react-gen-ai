import { useState } from 'react';

import { simulationFormSteps } from '@/data/simulation';

import FormStep from './FormStep';
import StepProgress from './Progress';

export default function SimulationForm() {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const totalSteps = simulationFormSteps.length;
  const currentStep = simulationFormSteps[currentStepIndex];

  const handleNextStep = () => {
    if (currentStepIndex >= totalSteps - 1) return;
    setCurrentStepIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousStep = () => {
    if (currentStepIndex === 0) return;
    setCurrentStepIndex((prevIndex) => prevIndex - 1);
  };

  return (
    <>
      <StepProgress
        currentStep={currentStepIndex + 1}
        totalSteps={totalSteps}
      />
      <FormStep
        key={currentStep.id}
        {...currentStep}
        onPreviousStep={handlePreviousStep}
        onNextStep={handleNextStep}
        hidePreviousButton={currentStepIndex === 0}
      />
    </>
  );
}
