/// <reference types="react" />
declare const InputFile: import("react").ForwardRefExoticComponent<Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "type"> & {
    error?: string | undefined;
    toggleText?: string | undefined;
} & {
    label?: string | undefined;
    labelRequired?: boolean | undefined;
    inputClassName?: string | undefined;
    wrapperClassName?: string | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
export default InputFile;
