import { jsx as i } from "react/jsx-runtime";
import * as n from "@radix-ui/react-separator";
import "react";
import { cn as e } from "../../lib/utils.js";
function s({
  className: t,
  decorative: o = !0,
  orientation: r = "horizontal",
  ...a
}) {
  return /* @__PURE__ */ i(
    n.Root,
    {
      className: e(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
        t
      ),
      "data-slot": "separator",
      decorative: o,
      orientation: r,
      ...a
    }
  );
}
export {
  s as Separator
};
