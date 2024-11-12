import type { ToastColor, ToastPosition } from '../components';
import React from 'react';
export type ToastContextProps = {
    toasts: Array<{
        id: number;
        color: ToastColor;
        message: string;
        position: ToastPosition;
        createdAt: Date;
    }>;
    toast: (message: string, options?: {
        color?: ToastColor;
        position?: ToastPosition;
    }) => void;
};
export declare const ToastProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useToast: () => (message: string, options?: {
    color?: ToastColor;
    position?: ToastPosition;
}) => void;
