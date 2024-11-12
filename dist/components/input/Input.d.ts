/// <reference types="react" />
declare const Input: import("react").ForwardRefExoticComponent<import("react").InputHTMLAttributes<HTMLInputElement> & {
    error?: string | undefined;
} & {
    help?: string | undefined;
    label?: string | undefined;
    labelRequired?: boolean | undefined;
    inputClassName?: string | undefined;
    wrapperClassName?: string | undefined;
    leftChild?: import("react").ReactNode;
    rightChild?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export default Input;
