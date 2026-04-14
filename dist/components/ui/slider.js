import { jsxs as h, jsx as e } from "react/jsx-runtime";
import * as a from "@radix-ui/react-slider";
import * as m from "react";
import { cn as n } from "../../lib/utils.js";
function v({
  className: l,
  defaultValue: r,
  max: i = 100,
  min: o = 0,
  value: t,
  ...s
}) {
  const d = m.useMemo(
    () => Array.isArray(t) ? t : Array.isArray(r) ? r : [o, i],
    [t, r, o, i]
  );
  return /* @__PURE__ */ h(
    a.Root,
    {
      className: n(
        "relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",
        l
      ),
      "data-slot": "slider",
      defaultValue: r,
      max: i,
      min: o,
      value: t,
      ...s,
      children: [
        /* @__PURE__ */ e(
          a.Track,
          {
            className: n(
              "bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"
            ),
            "data-slot": "slider-track",
            children: /* @__PURE__ */ e(
              a.Range,
              {
                className: n(
                  "bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full"
                ),
                "data-slot": "slider-range"
              }
            )
          }
        ),
        Array.from({ length: d.length }, (f, c) => /* @__PURE__ */ e(
          a.Thumb,
          {
            className: "border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50",
            "data-slot": "slider-thumb"
          },
          c
        ))
      ]
    }
  );
}
export {
  v as Slider
};
