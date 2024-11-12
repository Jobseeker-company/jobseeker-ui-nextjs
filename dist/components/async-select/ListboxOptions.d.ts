import type { OptionProps } from '../../types';
import React from 'react';
type ListboxOptionsProps = {
    options: Array<OptionProps>;
    isSingle?: boolean;
    open?: boolean;
    loading?: boolean;
    searchPlaceholder?: string;
    message?: string;
    endOfRoot?: React.ReactNode;
    value?: OptionProps | OptionProps[] | null;
    search?: {
        value: string;
        onValueChange: (value: string) => void;
    };
};
declare const ListboxOptions: React.ForwardRefExoticComponent<ListboxOptionsProps & React.RefAttributes<HTMLUListElement>>;
export default ListboxOptions;
