import { jsxs as o, jsx as t } from "react/jsx-runtime";
import "react";
import { ChevronDownIcon as n } from "lucide-react";
import { cn as r } from "../../lib/utils.js";
function p({
  className: e,
  size: i = "default",
  ...a
}) {
  return /* @__PURE__ */ o(
    "div",
    {
      className: "group/native-select relative w-fit has-[select:disabled]:opacity-50",
      "data-slot": "native-select-wrapper",
      children: [
        /* @__PURE__ */ t(
          "select",
          {
            "data-slot": "native-select",
            "data-size": i,
            className: r(
              "border-input placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 dark:hover:bg-input/50 h-9 w-full min-w-0 appearance-none rounded-md border bg-transparent px-3 py-2 pr-9 text-sm shadow-xs transition-[color,box-shadow] outline-none disabled:pointer-events-none disabled:cursor-not-allowed data-[size=sm]:h-8 data-[size=sm]:py-1",
              "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
              "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
              e
            ),
            ...a
          }
        ),
        /* @__PURE__ */ t(
          n,
          {
            className: "text-muted-foreground pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 opacity-50 select-none",
            "aria-hidden": "true",
            "data-slot": "native-select-icon"
          }
        )
      ]
    }
  );
}
function u({ ...e }) {
  return /* @__PURE__ */ t("option", { "data-slot": "native-select-option", ...e });
}
function v({
  className: e,
  ...i
}) {
  return /* @__PURE__ */ t(
    "optgroup",
    {
      "data-slot": "native-select-optgroup",
      className: r(e),
      ...i
    }
  );
}
export {
  p as NativeSelect,
  v as NativeSelectOptGroup,
  u as NativeSelectOption
};
