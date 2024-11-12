/// <reference types="react" />
declare const Dropzone: import("react").ForwardRefExoticComponent<Omit<import("react").InputHTMLAttributes<HTMLInputElement>, "type"> & {
    error?: string | undefined;
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLInputElement>>;
export default Dropzone;
