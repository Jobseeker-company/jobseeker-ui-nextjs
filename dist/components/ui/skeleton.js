import { jsx as o } from "react/jsx-runtime";
import { cn as n } from "../../lib/utils.js";
function m({ className: e, ...t }) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: n("bg-accent animate-pulse rounded-md", e),
      "data-slot": "skeleton",
      ...t
    }
  );
}
export {
  m as Skeleton
};
