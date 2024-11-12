/// <reference types="react" />
import type { BaseAction, CoreAsyncMultiSelectProps, CoreAsyncSelectProps } from '../types';
import { OptionProps } from '../../../types';
export default function useCoreAsyncSearch(props: CoreAsyncMultiSelectProps<BaseAction> | CoreAsyncSelectProps<BaseAction>): {
    infiniteRef: import("react-intersection-observer-hook/dist/useIntersectionObserver").IntersectionObserverHookRefCallback;
    rootRef: import("react-intersection-observer-hook/dist/useIntersectionObserver").IntersectionObserverHookRootRefCallback;
    typing: boolean;
    search: string;
    setSearch: import("react").Dispatch<import("react").SetStateAction<string>>;
    results: OptionProps[];
    message: string | undefined;
    loading: boolean;
    page: number;
};
