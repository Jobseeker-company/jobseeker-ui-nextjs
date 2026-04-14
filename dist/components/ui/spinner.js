import { jsx as a } from "react/jsx-runtime";
import { Loader2Icon as i } from "lucide-react";
import { cn as n } from "../../lib/utils.js";
function s({ className: r, ...o }) {
  return /* @__PURE__ */ a(
    i,
    {
      "aria-label": "Loading",
      className: n("size-4 animate-spin", r),
      role: "status",
      ...o
    }
  );
}
export {
  s as Spinner
};
