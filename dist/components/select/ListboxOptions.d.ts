import type { OptionProps } from '../../types';
import React from 'react';
type ListboxOptionsProps = {
    noResults?: string;
    options: Array<OptionProps>;
    searchPlaceholder?: string;
    open?: boolean;
    hideSearch?: boolean;
    isSingle?: boolean;
};
declare const ListboxOptions: React.FC<ListboxOptionsProps>;
export default ListboxOptions;
