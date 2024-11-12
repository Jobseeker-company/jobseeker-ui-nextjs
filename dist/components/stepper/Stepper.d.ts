/// <reference types="react" />
declare const Stepper: import("react").ForwardRefExoticComponent<import("react").OlHTMLAttributes<HTMLOListElement> & {
    activeStep: number;
    onActivateStep?: ((step: number) => void) | undefined;
    steps: {
        title: string;
        details: string;
    }[];
} & import("react").RefAttributes<HTMLOListElement>>;
export default Stepper;
