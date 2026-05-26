import { Modal } from '@/components/core/modal';
import { Button } from '@/components/core/button';

import { useState } from 'react';

interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  image: string;
}

const onboardingSteps: OnboardingStep[] = [
  {
    id: 1,
    title: "Let's Get You Set Up",
    description:
      'Follow the steps to complete your setup. It only takes a few moments and helps us personalize your experience.',
    image: 'https://cdn-tailgrids.b-cdn.net/3.0/building.png',
  },
  {
    id: 2,
    title: 'Customize Your Experience',
    description:
      'Tell us about your preferences so we can tailor the app to your needs and interests.',
    image: '/placeholder.svg?height=300&width=400',
  },
  {
    id: 3,
    title: "You're All Set!",
    description:
      'Everything is ready to go. Start exploring and make the most of your personalized experience.',
    image: '/placeholder.svg?height=300&width=400',
  },
];

interface OnboardingModalProps {
  isOpen?: boolean;
  onComplete?: () => void;
  onSkip?: () => void;
  onClose?: () => void;
}

function OnboardingModal({
  isOpen = true,
  onComplete,
  onSkip,
  onClose,
}: OnboardingModalProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < onboardingSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete?.();
    }
  };

  const handleSkip = () => {
    onSkip?.();
  };

  const handleClose = () => {
    onClose?.();
  };

  const currentStepData = onboardingSteps[currentStep];

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      className="bg-background-50 relative w-full max-w-md rounded-3xl p-5 shadow-xl"
    >
      {/* Image Container */}
      <div className="relative h-60 overflow-hidden rounded-xl">
        <img
          src="https://cdn-tailgrids.b-cdn.net/3.0/application/modal/image.jpg"
          alt="Building corner"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="my-6 text-center">
        <h1 className="text-title-50 mb-3 text-2xl font-semibold">
          {currentStepData.title}
        </h1>
        <p className="text-text-100 text-base leading-relaxed">
          {currentStepData.description}
        </p>
      </div>

      {/* Step Indicators */}
      <div className="mb-8 flex justify-center gap-2">
        {onboardingSteps.map((_, index) => (
          <div
            key={index}
            className={`block h-1.5 w-5 rounded-full transition-colors duration-200 ${
              index === currentStep
                ? 'bg-foreground-soft-500'
                : 'bg-background-soft-200'
            }`}
          />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button
          onClick={handleSkip}
          variant="primary"
          appearance="outline"
          className="flex-1"
        >
          Skip
        </Button>
        <Button
          onClick={handleNext}
          variant="primary"
          appearance="fill"
          className="flex-1"
        >
          {currentStep === onboardingSteps.length - 1
            ? 'Get Started'
            : 'Next step'}
        </Button>
      </div>
    </Modal>
  );
}

function Modals8() {
  const [showModal, setShowModal] = useState(false);
  // const [onboardingComplete, setOnboardingComplete] = useState(false);

  const handleSkip = () => {
    setShowModal(false);
  };
  return (
    <div className="bg-background-50 flex min-h-screen items-center justify-center px-4 py-10">
      <Button onClick={() => setShowModal(true)}>Open Modal Onboarding</Button>
      <OnboardingModal
        isOpen={showModal}
        onComplete={() => setShowModal(false)}
        onSkip={handleSkip}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
export default Modals8;
