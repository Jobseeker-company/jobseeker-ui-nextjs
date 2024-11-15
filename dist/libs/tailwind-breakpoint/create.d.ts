export * from './utils';
export type CreatorReturnType = {
    /**
     * Use breakpoint value from given breakpoint token
     *
     * ---
     *
     * @param breakpoint Breakpoint value
     *
     * @param defaultValue Default value to be used before initializing breakpoint value
     *
     * @returns Boolean value whether current view is on valid breakpoint
     *
     * @example
     *
     * ```jsx
     * const isDesktop = useBreakpoint("md");
     * ```
     */
    useBreakpoint<B>(breakpoint: B, defaultValue?: boolean): boolean;
    /**
     * Use given breakpoint value to run an effect
     *
     * ---
     *
     * @param breakpoint Breakpoint value
     *
     * @param effect Effect callback/closure when current view is on valid breakpoint
     *
     * @example
     *
     * ```jsx
     * useBreakpointEffect("md", (match) => {
     *   if (match) {
     *     ...
     *   }
     * });
     * ```
     */
    useBreakpointEffect<B>(breakpoint: B, effect: (match: boolean) => void): void;
    /**
     * Resolve value from given breakpoint value
     *
     * ---
     *
     * @param breakpoint Breakpoint value
     *
     * @param valid Value if current view is on valid breakpoint
     *
     * @param invalid Value if current view is not on valid breakpoint
     *
     * @returns Resolved value depending from given breakpoint
     *
     * @example
     *
     * ```jsx
     * const message = useBreakpointValue("md", "Desktop view", "Mobile view");
     * ```
     */
    useBreakpointValue<B, T, U>(breakpoint: B, valid: T, invalid: U): T | U;
};
/**
 * Initialize breakpoint hooks from given configuration
 *
 * ---
 *
 * @param screens Breakpoints/screens object (`{ sm: "640px", md: "768px", ... }`)
 *
 * @returns Breakpoint hooks
 *
 * @example
 *
 * ```jsx
 * // hooks/breakpoint.ts
 *
 * import create from "@kodingdotninja/use-tailwind-breakpoint";
 *
 * export const { useBreakpoint, ... } = create({ sm: "640px", ... });
 * ```
 */
export declare function create(screens: object | undefined): CreatorReturnType;
export default create;
