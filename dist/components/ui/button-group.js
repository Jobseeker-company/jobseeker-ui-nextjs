import { jsx as e } from "react/jsx-runtime";
import { Slot as a } from "@radix-ui/react-slot";
import { cva as i } from "class-variance-authority";
import { Separator as s } from "./separator.js";
import { cn as n } from "../../lib/utils.js";
const l = i(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    defaultVariants: {
      orientation: "horizontal"
    },
    variants: {
      orientation: {
        horizontal: "[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none",
        vertical: "flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none"
      }
    }
  }
);
function h({
  className: o,
  orientation: t,
  ...r
}) {
  return /* @__PURE__ */ e(
    "div",
    {
      className: n(l({ orientation: t }), o),
      "data-orientation": t,
      "data-slot": "button-group",
      role: "group",
      ...r
    }
  );
}
function g({
  asChild: o = !1,
  className: t,
  ...r
}) {
  return /* @__PURE__ */ e(
    o ? a : "div",
    {
      className: n(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        t
      ),
      ...r
    }
  );
}
function v({
  className: o,
  orientation: t = "vertical",
  ...r
}) {
  return /* @__PURE__ */ e(
    s,
    {
      className: n(
        "bg-input relative m-0! self-stretch data-[orientation=vertical]:h-auto",
        o
      ),
      "data-slot": "button-group-separator",
      orientation: t,
      ...r
    }
  );
}
export {
  h as ButtonGroup,
  v as ButtonGroupSeparator,
  g as ButtonGroupText,
  l as buttonGroupVariants
};
