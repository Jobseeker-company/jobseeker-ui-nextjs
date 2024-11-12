/// <reference types="react" />
import type { ConfirmProps } from '../components';
export type ConfirmContextProps = {
    data: Omit<ConfirmProps, 'isShow' | 'onConfirm' | 'onCancel'> | null;
    confirm: (data: Omit<ConfirmProps, 'isShow' | 'onConfirm' | 'onCancel'> | string) => Promise<boolean>;
};
export declare const ConfirmProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const useConfirm: () => (data: Omit<ConfirmProps, 'isShow' | 'onConfirm' | 'onCancel'> | string) => Promise<boolean>;
