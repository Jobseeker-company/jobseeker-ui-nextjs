/// <reference types="react" />
declare const Alert: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLDivElement> & {
    title?: string | undefined;
    color?: import("../..").Color | undefined;
    hideable?: boolean | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
export default Alert;
