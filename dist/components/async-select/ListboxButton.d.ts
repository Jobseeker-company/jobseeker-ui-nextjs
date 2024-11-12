/// <reference types="react" />
type ListboxButtonProps = {
    id?: string;
    value?: string;
    placeholder?: string;
    className?: string;
    error?: boolean;
    open?: boolean;
    disabled?: boolean;
    handleReset?: React.MouseEventHandler<HTMLSpanElement>;
};
declare const ListboxButton: import("react").ForwardRefExoticComponent<ListboxButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export default ListboxButton;
