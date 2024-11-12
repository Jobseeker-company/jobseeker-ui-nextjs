import * as React from 'react';
type UseEffectParams = Parameters<typeof React.useEffect>;
type EffectCallback = UseEffectParams[0];
type DependencyList = UseEffectParams[1];
type UseEffectReturn = ReturnType<typeof React.useEffect>;
/**
 * @param value the value to be memoized (usually a dependency list)
 * @returns a memoized version of the value as long as it remains deeply equal
 */
export declare const useDeepCompareMemoize: <T>(value: T) => T;
export declare const useDeepCompareEffect: (callback: EffectCallback, dependencies: DependencyList) => UseEffectReturn;
export {};
