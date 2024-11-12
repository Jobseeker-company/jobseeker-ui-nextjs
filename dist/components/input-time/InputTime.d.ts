/// <reference types="react" />
declare const InputTime: import("react").ForwardRefExoticComponent<Omit<import("..").InputProps, "onChange" | "type"> & {
    onValueChange?: ((value: string) => void) | undefined;
} & import("react").RefAttributes<HTMLInputElement>>;
export default InputTime;
