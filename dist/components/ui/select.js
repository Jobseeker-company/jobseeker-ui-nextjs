import { jsx as t, jsxs as l } from "react/jsx-runtime";
import * as a from "@radix-ui/react-select";
import { CheckIcon as c, ChevronDownIcon as i, ChevronUpIcon as u } from "lucide-react";
import "react";
import { cn as s } from "../../lib/utils.js";
function h({
  ...e
}) {
  return /* @__PURE__ */ t(a.Root, { "data-slot": "select", ...e });
}
function b({
  ...e
}) {
  return /* @__PURE__ */ t(a.Group, { "data-slot": "select-group", ...e });
}
function w({
  ...e
}) {
  return /* @__PURE__ */ t(a.Value, { "data-slot": "select-value", ...e });
}
function y({
  children: e,
  className: r,
  size: o = "default",
  ...n
}) {
  return /* @__PURE__ */ l(
    a.Trigger,
    {
      className: s(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        r
      ),
      "data-size": o,
      "data-slot": "select-trigger",
      ...n,
      children: [
        e,
        /* @__PURE__ */ t(a.Icon, { asChild: !0, children: /* @__PURE__ */ t(i, { className: "size-4 opacity-50" }) })
      ]
    }
  );
}
function S({
  align: e = "center",
  children: r,
  className: o,
  position: n = "item-aligned",
  ...d
}) {
  return /* @__PURE__ */ t(a.Portal, { children: /* @__PURE__ */ l(
    a.Content,
    {
      align: e,
      className: s(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md",
        n === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        o
      ),
      "data-slot": "select-content",
      position: n,
      ...d,
      children: [
        /* @__PURE__ */ t(m, {}),
        /* @__PURE__ */ t(
          a.Viewport,
          {
            className: s(
              "p-1",
              n === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
            ),
            children: r
          }
        ),
        /* @__PURE__ */ t(p, {})
      ]
    }
  ) });
}
function z({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    a.Label,
    {
      className: s("text-muted-foreground px-2 py-1.5 text-xs", e),
      "data-slot": "select-label",
      ...r
    }
  );
}
function N({
  children: e,
  className: r,
  ...o
}) {
  return /* @__PURE__ */ l(
    a.Item,
    {
      className: s(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        r
      ),
      "data-slot": "select-item",
      ...o,
      children: [
        /* @__PURE__ */ t(
          "span",
          {
            className: "absolute right-2 flex size-3.5 items-center justify-center",
            "data-slot": "select-item-indicator",
            children: /* @__PURE__ */ t(a.ItemIndicator, { children: /* @__PURE__ */ t(c, { className: "size-4" }) })
          }
        ),
        /* @__PURE__ */ t(a.ItemText, { children: e })
      ]
    }
  );
}
function I({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    a.Separator,
    {
      className: s("bg-border pointer-events-none -mx-1 my-1 h-px", e),
      "data-slot": "select-separator",
      ...r
    }
  );
}
function m({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    a.ScrollUpButton,
    {
      className: s(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      "data-slot": "select-scroll-up-button",
      ...r,
      children: /* @__PURE__ */ t(u, { className: "size-4" })
    }
  );
}
function p({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    a.ScrollDownButton,
    {
      className: s(
        "flex cursor-default items-center justify-center py-1",
        e
      ),
      "data-slot": "select-scroll-down-button",
      ...r,
      children: /* @__PURE__ */ t(i, { className: "size-4" })
    }
  );
}
export {
  h as Select,
  S as SelectContent,
  b as SelectGroup,
  N as SelectItem,
  z as SelectLabel,
  p as SelectScrollDownButton,
  m as SelectScrollUpButton,
  I as SelectSeparator,
  y as SelectTrigger,
  w as SelectValue
};
