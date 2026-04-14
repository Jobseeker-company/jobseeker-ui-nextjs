import { jsx as a } from "react/jsx-runtime";
import { Slot as l } from "@radix-ui/react-slot";
import { cva as o } from "class-variance-authority";
import "react";
import { Separator as m } from "./separator.js";
import { cn as i } from "../../lib/utils.js";
function I({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: i("group/item-group flex flex-col", e),
      "data-slot": "item-group",
      role: "list",
      ...t
    }
  );
}
function N({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    m,
    {
      className: i("my-0", e),
      "data-slot": "item-separator",
      orientation: "horizontal",
      ...t
    }
  );
}
const d = o(
  "group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a]:hover:bg-accent/50 [a]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    defaultVariants: {
      size: "default",
      variant: "default"
    },
    variants: {
      size: {
        default: "p-4 gap-4 ",
        sm: "py-3 px-4 gap-2.5",
        xs: "py-2 px-2.5 gap-2"
      },
      variant: {
        default: "bg-transparent",
        muted: "bg-muted/50",
        outline: "border-border"
      }
    }
  }
);
function h({
  asChild: e = !1,
  className: t,
  size: r = "default",
  variant: n = "default",
  ...s
}) {
  return /* @__PURE__ */ a(
    e ? l : "div",
    {
      className: i(d({ className: t, size: r, variant: n })),
      "data-size": r,
      "data-slot": "item",
      "data-variant": n,
      ...s
    }
  );
}
const u = o(
  "flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5",
  {
    defaultVariants: {
      variant: "default"
    },
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
        image: "size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover"
      }
    }
  }
);
function y({
  className: e,
  variant: t = "default",
  ...r
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: i(u({ className: e, variant: t })),
      "data-slot": "item-media",
      "data-variant": t,
      ...r
    }
  );
}
function z({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: i(
        "flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none",
        e
      ),
      "data-slot": "item-content",
      ...t
    }
  );
}
function j({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: i(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium",
        e
      ),
      "data-slot": "item-title",
      ...t
    }
  );
}
function w({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      className: i(
        "text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      "data-slot": "item-description",
      ...t
    }
  );
}
function V({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: i("flex items-center gap-2", e),
      "data-slot": "item-actions",
      ...t
    }
  );
}
function _({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: i(
        "flex basis-full items-center justify-between gap-2",
        e
      ),
      "data-slot": "item-header",
      ...t
    }
  );
}
function C({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: i(
        "flex basis-full items-center justify-between gap-2",
        e
      ),
      "data-slot": "item-footer",
      ...t
    }
  );
}
export {
  h as Item,
  V as ItemActions,
  z as ItemContent,
  w as ItemDescription,
  C as ItemFooter,
  I as ItemGroup,
  _ as ItemHeader,
  y as ItemMedia,
  N as ItemSeparator,
  j as ItemTitle
};
