import { jsx as e } from "react/jsx-runtime";
import * as r from "@radix-ui/react-checkbox";
import { CheckIcon as a } from "lucide-react";
import "react";
import { cn as o } from "../../lib/utils.js";
function l({
  className: i,
  ...t
}) {
  return /* @__PURE__ */ e(
    r.Root,
    {
      className: o(
        "peer border-input dark:bg-input/30 data-[state=checked]:bg-brand-solid data-[state=checked]:fg-white dark:data-[state=checked]:bg-brand-solid data-[state=checked]:border-brand-alt focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        i
      ),
      "data-slot": "checkbox",
      ...t,
      children: /* @__PURE__ */ e(
        r.Indicator,
        {
          className: "grid place-content-center text-current transition-none",
          "data-slot": "checkbox-indicator",
          children: /* @__PURE__ */ e(a, { className: "size-3.5" })
        }
      )
    }
  );
}
export {
  l as Checkbox
};
