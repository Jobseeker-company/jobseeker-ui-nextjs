import { jsx as o } from "react/jsx-runtime";
import * as a from "@radix-ui/react-label";
import "react";
import { cn as r } from "../../lib/utils.js";
function d({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ o(
    a.Root,
    {
      className: r(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        e
      ),
      "data-slot": "label",
      ...t
    }
  );
}
export {
  d as Label
};
