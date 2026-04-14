import { jsx as i, jsxs as n } from "react/jsx-runtime";
import * as o from "@radix-ui/react-tooltip";
import "react";
import { cn as d } from "../../lib/utils.js";
function l({
  delayDuration: t = 0,
  ...r
}) {
  return /* @__PURE__ */ i(
    o.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration: t,
      ...r
    }
  );
}
function f({
  ...t
}) {
  return /* @__PURE__ */ i(l, { children: /* @__PURE__ */ i(o.Root, { "data-slot": "tooltip", ...t }) });
}
function c({
  ...t
}) {
  return /* @__PURE__ */ i(o.Trigger, { "data-slot": "tooltip-trigger", ...t });
}
function u({
  children: t,
  className: r,
  sideOffset: e = 0,
  ...a
}) {
  return /* @__PURE__ */ i(o.Portal, { children: /* @__PURE__ */ n(
    o.Content,
    {
      className: d(
        "bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance",
        r
      ),
      "data-slot": "tooltip-content",
      sideOffset: e,
      ...a,
      children: [
        t,
        /* @__PURE__ */ i(o.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}
export {
  f as Tooltip,
  u as TooltipContent,
  l as TooltipProvider,
  c as TooltipTrigger
};
