/// <reference types="react" />
export default function variants<T extends string, T2 extends React.ReactNode>(items: Record<T, T2>): (key?: T) => T2;
