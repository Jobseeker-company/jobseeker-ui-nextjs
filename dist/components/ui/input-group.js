import { jsx as a } from "react/jsx-runtime";
import { cva as s } from "class-variance-authority";
import "react";
import { Button as u } from "./button.js";
import { Input as p } from "./input.js";
import { Textarea as l } from "./textarea.js";
import { cn as n } from "../../lib/utils.js";
function k({ className: t, ...r }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: n(
        "group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none",
        "h-9 min-w-0 has-[>textarea]:h-auto",
        // Variants based on alignment.
        "has-[>[data-align=inline-start]]:[&>input]:pl-2",
        "has-[>[data-align=inline-end]]:[&>input]:pr-2",
        "has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3",
        "has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3",
        // Focus state.
        "has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]",
        // Error state.
        "has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40",
        t
      ),
      "data-slot": "input-group",
      role: "group",
      ...r
    }
  );
}
const d = s(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    defaultVariants: {
      align: "inline-start"
    },
    variants: {
      align: {
        "block-end": "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5",
        "block-start": "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "inline-end": "order-last pr-3 has-[>button]:mr-[-0.45rem] has-[>kbd]:mr-[-0.35rem]",
        "inline-start": "order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]"
      }
    }
  }
);
function z({
  align: t = "inline-start",
  className: r,
  ...e
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: n(d({ align: t }), r),
      "data-align": t,
      "data-slot": "input-group-addon",
      onClick: (o) => {
        o.target.closest("button") || o.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      role: "group",
      ...e
    }
  );
}
const c = s(
  "text-sm shadow-none flex gap-2 items-center",
  {
    defaultVariants: {
      size: "xs"
    },
    variants: {
      size: {
        "icon-sm": "size-8 p-0 has-[>svg]:p-0",
        "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
        xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2"
      }
    }
  }
);
function w({
  className: t,
  size: r = "xs",
  type: e = "button",
  variant: o = "ghost",
  ...i
}) {
  return /* @__PURE__ */ a(
    u,
    {
      className: n(c({ size: r }), t),
      "data-size": r,
      type: e,
      variant: o,
      ...i
    }
  );
}
function G({ className: t, ...r }) {
  return /* @__PURE__ */ a(
    "span",
    {
      className: n(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        t
      ),
      ...r
    }
  );
}
function I({
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    p,
    {
      className: n(
        "flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent",
        t
      ),
      "data-slot": "input-group-control",
      ...r
    }
  );
}
function y({
  className: t,
  ...r
}) {
  return /* @__PURE__ */ a(
    l,
    {
      className: n(
        "flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent",
        t
      ),
      "data-slot": "input-group-control",
      ...r
    }
  );
}
export {
  k as InputGroup,
  z as InputGroupAddon,
  w as InputGroupButton,
  I as InputGroupInput,
  G as InputGroupText,
  y as InputGroupTextarea
};
