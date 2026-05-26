import React from 'react';

interface Step {
  title: string;
  description: string;
}

interface Steps7Props {
  steps?: Step[];
  currentStep?: number; // 1-based index
}

export default function Steps7({ steps, currentStep = 2 }: Steps7Props) {
  const defaultSteps: Step[] = [
    {
      title: 'Step 1',
      description: 'Add Bank Account',
    },
    {
      title: 'Step 2',
      description: 'Verify Identity',
    },
    {
      title: 'Step 3',
      description: 'Set Budget Goals',
    },
    {
      title: 'Step 4',
      description: 'Monitor Expenses',
    },
  ];

  const stepsToRender = steps || defaultSteps;
  const activeStepIndex = currentStep - 1;

  return (
    <div className="bg-background-50 flex h-screen items-center justify-center px-4 py-10">
      <div className="mx-auto w-full max-w-4xl px-4 md:px-0">
        <div className="relative flex w-full items-center justify-between">
          {stepsToRender.map((step, index) => {
            const isCompleted = index < activeStepIndex;
            const isLast = index === stepsToRender.length - 1;

            return (
              <React.Fragment key={index}>
                {/* Step Circle & Label Container */}
                <div className="relative flex flex-col items-center">
                  {/* Circle */}
                  <div
                    className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                      index <= activeStepIndex
                        ? 'bg-primary-500 border-primary-500' // Active/Completed: Blue filled
                        : 'bg-background-50 border-base-300' // Inactive: White with Gray border
                    }`}
                  >
                    {index <= activeStepIndex && (
                      <div className="bg-background-50 h-3 w-3 rounded-full" />
                    )}
                  </div>

                  {/* Labels */}
                  <div className="absolute top-10 flex w-32 flex-col items-center text-center">
                    <span className="text-text-100 mb-0.5 text-xs font-medium">
                      {step.title}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        index === activeStepIndex + 1 // "Next" pending step in image seems bold?
                          ? 'text-title-50'
                          : 'text-text-100'
                      }`}
                    >
                      {step.description}
                    </span>
                  </div>
                </div>

                {/* Connecting Line */}
                {!isLast && (
                  <div className="relative mx-2 h-1 flex-auto">
                    {/* Background Line */}
                    <div className="bg-background-soft-100 absolute top-0 left-0 h-full w-full rounded-full" />
                    {/* Progress Line */}
                    <div
                      className="bg-primary-500 absolute top-0 left-0 h-full rounded-full transition-all duration-300"
                      style={{
                        width: isCompleted ? '100%' : '0%',
                      }}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
