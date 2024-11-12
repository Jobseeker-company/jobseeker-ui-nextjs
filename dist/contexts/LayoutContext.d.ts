import React from 'react';
export type LayoutContextProps = {
    sidebarOpen: boolean;
    sidebarMini: boolean;
    sidebarActive: boolean;
    toggleSidebarOpen: (value?: boolean) => void;
    toggleSidebarMini: (value?: boolean) => void;
    toggleSidebarActive: (value?: boolean) => void;
};
export declare const LayoutProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useLayout: () => LayoutContextProps;
