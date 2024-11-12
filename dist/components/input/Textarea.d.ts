/// <reference types="react" />
declare const Textarea: import("react").ForwardRefExoticComponent<import("react").TextareaHTMLAttributes<HTMLTextAreaElement> & {
    error?: string | undefined;
} & {
    help?: string | undefined;
    label?: string | undefined;
    labelRequired?: boolean | undefined;
    textareaClassName?: string | undefined;
    wrapperClassName?: string | undefined;
} & import("react").RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
