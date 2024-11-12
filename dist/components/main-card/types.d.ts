/// <reference types="react" />
export type MainCardProps = {
    body: React.ReactNode;
    footer: React.ReactNode;
    header: ((isOpenFilter: boolean, toggleOpenFilter: () => void) => React.ReactNode) | React.ReactNode;
};
export type MainCardHeaderProps = {
    actions?: React.ReactNode;
    filter?: React.ReactNode;
    filterToogle?: () => void;
    onRefresh?: () => void;
    search?: {
        setValue: (value: string) => void;
        value: string;
    };
    subtitle?: React.ReactNode;
    subtitleLoading?: boolean;
    title: React.ReactNode;
};
