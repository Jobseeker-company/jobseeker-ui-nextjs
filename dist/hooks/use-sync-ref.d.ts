import { MutableRefObject } from 'react';
export declare const useSyncRef: <T>(ref: MutableRefObject<T> | ((instance: T) => void) | null | undefined) => MutableRefObject<T | undefined>;
