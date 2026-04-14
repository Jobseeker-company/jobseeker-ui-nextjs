import { jsx as t } from "react/jsx-runtime";
import "react";
import { GripVerticalIcon as l } from "lucide-react";
import * as a from "react-resizable-panels";
import { cn as i } from "../../lib/utils.js";
function c({
  className: e,
  ...r
}) {
  return /* @__PURE__ */ t(
    a.Group,
    {
      "data-slot": "resizable-group",
      className: i(
        "flex h-full w-full data-[group-orientation=vertical]:flex-col",
        e
      ),
      ...r
    }
  );
}
function p({
  ...e
}) {
  return /* @__PURE__ */ t(a.Panel, { "data-slot": "resizable-panel", ...e });
}
function d({
  withHandle: e,
  className: r,
  ...o
}) {
  return /* @__PURE__ */ t(
    a.Separator,
    {
      "data-slot": "resizable-separator",
      className: i(
        "bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[group-orientation=vertical]:h-px data-[group-orientation=vertical]:w-full data-[group-orientation=vertical]:after:left-0 data-[group-orientation=vertical]:after:h-1 data-[group-orientation=vertical]:after:w-full data-[group-orientation=vertical]:after:translate-x-0 data-[group-orientation=vertical]:after:-translate-y-1/2 [&[data-group-orientation=vertical]>div]:rotate-90",
        r
      ),
      ...o,
      children: e && /* @__PURE__ */ t("div", { className: "bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border", children: /* @__PURE__ */ t(l, { className: "size-2.5" }) })
    }
  );
}
export {
  c as ResizableGroup,
  p as ResizablePanel,
  d as ResizableSeparator
};
