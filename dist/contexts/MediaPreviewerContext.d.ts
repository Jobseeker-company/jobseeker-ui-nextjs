/// <reference types="react" />
export declare const MediaPreviewerProvider: React.FC<{
    children: React.ReactNode;
}>;
export declare const usePreviewImage: () => (url?: string | null) => void;
export declare const usePreviewVideo: () => (url?: string | null) => void;
