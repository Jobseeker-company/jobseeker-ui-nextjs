/// <reference types="react" />
declare const Breadcrumb: import("react").ForwardRefExoticComponent<import("react").HTMLAttributes<HTMLUListElement> & {
    wrapperClassName?: string | undefined;
    actionsWrapperClassName?: string | undefined;
    links: import("./types").BreadcrumbLinkProps<"span">[];
    actions?: import("react").ReactNode;
    separator?: import("react").ElementType<any, keyof import("react").JSX.IntrinsicElements> | undefined;
} & import("react").RefAttributes<HTMLDivElement>>;
export default Breadcrumb;
