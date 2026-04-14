import { VariantProps } from 'class-variance-authority';
import { Separator } from './separator';
import * as React from 'react';
declare function ItemGroup({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function ItemSeparator({ className, ...props }: React.ComponentProps<typeof Separator>): import("react/jsx-runtime").JSX.Element;
declare const itemVariants: (props?: ({
    size?: "default" | "sm" | "xs" | null | undefined;
    variant?: "default" | "outline" | "muted" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function Item({ asChild, className, size, variant, ...props }: React.ComponentProps<'div'> & VariantProps<typeof itemVariants> & {
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
declare const itemMediaVariants: (props?: ({
    variant?: "image" | "default" | "icon" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function ItemMedia({ className, variant, ...props }: React.ComponentProps<'div'> & VariantProps<typeof itemMediaVariants>): import("react/jsx-runtime").JSX.Element;
declare function ItemContent({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function ItemTitle({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function ItemDescription({ className, ...props }: React.ComponentProps<'p'>): import("react/jsx-runtime").JSX.Element;
declare function ItemActions({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function ItemHeader({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare function ItemFooter({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
export { Item, ItemMedia, ItemContent, ItemActions, ItemGroup, ItemSeparator, ItemTitle, ItemDescription, ItemHeader, ItemFooter, };
