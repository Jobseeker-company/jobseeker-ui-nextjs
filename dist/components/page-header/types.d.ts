/// <reference types="react" />
import { BreadcrumbProps } from '../breadcrumb';
export type PageHeaderProps = {
    actions?: React.ReactNode;
    breadcrumb?: BreadcrumbProps['links'];
    className?: string;
    subtitle?: React.ReactNode;
    title?: React.ReactNode;
};
