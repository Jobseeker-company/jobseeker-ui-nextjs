/// <reference types="react" />
export declare function ContainerFn<C extends React.ElementType = 'div'>(props: ContainerProps<C>): JSX.Element;
export type ContainerProps<C extends React.ElementType = 'div'> = {
    as?: C;
} & React.ComponentProps<C>;
