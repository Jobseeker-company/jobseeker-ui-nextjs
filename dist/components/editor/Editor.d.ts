/// <reference types="react" />
import type { Editor as MCE } from '@tinymce/tinymce-react';
declare const _default: import("react").ForwardRefExoticComponent<import("@tinymce/tinymce-react").IAllProps & {
    name?: string | undefined;
    error?: string | undefined;
    onValueChange?: ((value: string) => void) | undefined;
} & {
    help?: string | undefined;
    label?: string | undefined;
    labelRequired?: boolean | undefined;
    className?: string | undefined;
    wrapperClassName?: string | undefined;
} & import("react").RefAttributes<MCE>>;
export default _default;
