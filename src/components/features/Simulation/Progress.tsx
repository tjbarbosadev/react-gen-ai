interface StepProgressProps {
  currentStep: number;
  totalSteps: number;
}

export default function StepProgress({
  currentStep,
  totalSteps,
}: StepProgressProps) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="mb-4">
      <div className="mb-2 text-sm text-muted-foreground">
        Passo {currentStep} de {totalSteps}
      </div>
      <div className="h-1 w-full overflow-hidden rounded-full bg-border">
        <div
          role="progressbar"
          aria-valuenow={currentStep}
          aria-valuemin={1}
          aria-valuemax={totalSteps}
          aria-label={`Progresso: Passo ${currentStep} de ${totalSteps}`}
          className="h-full rounded-full bg-primary transition-all duration-300"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}
