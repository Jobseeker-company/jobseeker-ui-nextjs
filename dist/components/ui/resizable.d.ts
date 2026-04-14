import * as React from 'react';
import * as ResizablePrimitive from 'react-resizable-panels';
declare function ResizableGroup({ className, ...props }: React.ComponentProps<typeof ResizablePrimitive.Group>): import("react/jsx-runtime").JSX.Element;
declare function ResizablePanel({ ...props }: React.ComponentProps<typeof ResizablePrimitive.Panel>): import("react/jsx-runtime").JSX.Element;
declare function ResizableSeparator({ withHandle, className, ...props }: React.ComponentProps<typeof ResizablePrimitive.Separator> & {
    withHandle?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export { ResizableGroup, ResizablePanel, ResizableSeparator };
