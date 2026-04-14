import { jsx as t } from "react/jsx-runtime";
import * as e from "@radix-ui/react-popover";
import "react";
import { cn as i } from "../../lib/utils.js";
function m({
  ...o
}) {
  return /* @__PURE__ */ t(e.Root, { "data-slot": "popover", ...o });
}
function f({
  ...o
}) {
  return /* @__PURE__ */ t(e.Trigger, { "data-slot": "popover-trigger", ...o });
}
function l({
  align: o = "center",
  className: r,
  sideOffset: a = 4,
  ...n
}) {
  return /* @__PURE__ */ t(e.Portal, { children: /* @__PURE__ */ t(
    e.Content,
    {
      align: o,
      className: i(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        r
      ),
      "data-slot": "popover-content",
      sideOffset: a,
      ...n
    }
  ) });
}
function c({
  ...o
}) {
  return /* @__PURE__ */ t(e.Anchor, { "data-slot": "popover-anchor", ...o });
}
export {
  m as Popover,
  c as PopoverAnchor,
  l as PopoverContent,
  f as PopoverTrigger
};
