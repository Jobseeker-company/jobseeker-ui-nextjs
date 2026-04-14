import { VariantProps } from 'class-variance-authority';
import { Button } from './button';
import * as React from 'react';
declare function InputGroup({ className, ...props }: React.ComponentProps<'div'>): import("react/jsx-runtime").JSX.Element;
declare const inputGroupAddonVariants: (props?: ({
    align?: "inline-start" | "block-end" | "block-start" | "inline-end" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function InputGroupAddon({ align, className, ...props }: React.ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>): import("react/jsx-runtime").JSX.Element;
declare const inputGroupButtonVariants: (props?: ({
    size?: "sm" | "icon-sm" | "xs" | "icon-xs" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
declare function InputGroupButton({ className, size, type, variant, ...props }: Omit<React.ComponentProps<typeof Button>, 'size'> & VariantProps<typeof inputGroupButtonVariants>): import("react/jsx-runtime").JSX.Element;
declare function InputGroupText({ className, ...props }: React.ComponentProps<'span'>): import("react/jsx-runtime").JSX.Element;
declare function InputGroupInput({ className, ...props }: React.ComponentProps<'input'>): import("react/jsx-runtime").JSX.Element;
declare function InputGroupTextarea({ className, ...props }: React.ComponentProps<'textarea'>): import("react/jsx-runtime").JSX.Element;
export { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupInput, InputGroupTextarea, };
