/// <reference types="react" />
export declare const useSteps: (totalStep: number, options?: {
    onNext?: () => void;
    onPrev?: () => void;
}) => {
    activeStep: number;
    setActiveStep: import("react").Dispatch<import("react").SetStateAction<number>>;
    isLastStep: boolean;
    isFirstStep: boolean;
    handleNext: () => void;
    handlePrev: () => void;
};
export default useSteps;
