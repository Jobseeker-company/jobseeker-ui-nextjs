export declare const useTimeout: (delay: number, callback?: () => void) => {
    timeLeft: number;
    resetTimeout: () => void;
};
