import { jsx as r } from "react/jsx-runtime";
import * as a from "@radix-ui/react-radio-group";
import { CircleIcon as e } from "lucide-react";
import "react";
import { cn as t } from "../../lib/utils.js";
function c({
  className: i,
  ...o
}) {
  return /* @__PURE__ */ r(
    a.Root,
    {
      className: t("grid gap-3", i),
      "data-slot": "radio-group",
      ...o
    }
  );
}
function u({
  className: i,
  ...o
}) {
  return /* @__PURE__ */ r(
    a.Item,
    {
      className: t(
        "border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        i
      ),
      "data-slot": "radio-group-item",
      ...o,
      children: /* @__PURE__ */ r(
        a.Indicator,
        {
          className: "relative flex items-center justify-center",
          "data-slot": "radio-group-indicator",
          children: /* @__PURE__ */ r(e, { className: "fill-brand-600 absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" })
        }
      )
    }
  );
}
export {
  c as RadioGroup,
  u as RadioGroupItem
};
