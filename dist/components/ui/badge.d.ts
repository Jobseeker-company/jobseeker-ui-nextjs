import { VariantProps } from 'class-variance-authority';
import * as React from 'react';
declare const badgeVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function Badge({ asChild, className, variant, ...props }: React.ComponentProps<'span'> & VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export { Badge, badgeVariants };
