import { jsx as a, jsxs as f } from "react/jsx-runtime";
import { cva as u } from "class-variance-authority";
import { useMemo as c } from "react";
import { Label as m } from "./label.js";
import { Separator as p } from "./separator.js";
import { cn as l } from "../../lib/utils.js";
function k({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "fieldset",
    {
      className: l(
        "flex flex-col gap-6",
        "has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3",
        e
      ),
      "data-slot": "field-set",
      ...t
    }
  );
}
function F({
  className: e,
  variant: t = "legend",
  ...o
}) {
  return /* @__PURE__ */ a(
    "legend",
    {
      className: l(
        "mb-3 font-medium",
        "data-[variant=legend]:text-base",
        "data-[variant=label]:text-sm",
        e
      ),
      "data-slot": "field-legend",
      "data-variant": t,
      ...o
    }
  );
}
function y({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: l(
        "group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4",
        e
      ),
      "data-slot": "field-group",
      ...t
    }
  );
}
const g = u(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    defaultVariants: {
      orientation: "vertical"
    },
    variants: {
      orientation: {
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ],
        responsive: [
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px"
        ],
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"]
      }
    }
  }
);
function L({
  className: e,
  orientation: t = "vertical",
  ...o
}) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: l(g({ orientation: t }), e),
      "data-orientation": t,
      "data-slot": "field",
      role: "group",
      ...o
    }
  );
}
function S({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: l(
        "group/field-content flex flex-1 flex-col gap-1.5 leading-snug",
        e
      ),
      "data-slot": "field-content",
      ...t
    }
  );
}
function j({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ a(
    m,
    {
      className: l(
        "group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50",
        "has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4",
        "has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10",
        e
      ),
      "data-slot": "field-label",
      ...t
    }
  );
}
function z({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: l(
        "flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50",
        e
      ),
      "data-slot": "field-label",
      ...t
    }
  );
}
function E({ className: e, ...t }) {
  return /* @__PURE__ */ a(
    "p",
    {
      className: l(
        "text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance",
        "last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5",
        "[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4",
        e
      ),
      "data-slot": "field-description",
      ...t
    }
  );
}
function M({
  children: e,
  className: t,
  ...o
}) {
  return /* @__PURE__ */ f(
    "div",
    {
      className: l(
        "relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2",
        t
      ),
      "data-content": !!e,
      "data-slot": "field-separator",
      ...o,
      children: [
        /* @__PURE__ */ a(p, { className: "absolute inset-0 top-1/2" }),
        e && /* @__PURE__ */ a(
          "span",
          {
            className: "bg-background text-muted-foreground relative mx-auto block w-fit px-2",
            "data-slot": "field-separator-content",
            children: e
          }
        )
      ]
    }
  );
}
function V({
  children: e,
  className: t,
  errors: o,
  ...n
}) {
  const i = c(() => {
    if (e)
      return e;
    if (!o?.length)
      return null;
    const r = [
      ...new Map(o.map((d) => [d?.message, d])).values()
    ];
    return r?.length == 1 ? r[0]?.message : /* @__PURE__ */ a("ul", { className: "ml-4 flex list-disc flex-col gap-1", children: r.map(
      (d, s) => d?.message && /* @__PURE__ */ a("li", { children: d.message }, s)
    ) });
  }, [e, o]);
  return i ? /* @__PURE__ */ a(
    "div",
    {
      className: l("text-destructive text-sm font-normal", t),
      "data-slot": "field-error",
      role: "alert",
      ...n,
      children: i
    }
  ) : null;
}
export {
  L as Field,
  S as FieldContent,
  E as FieldDescription,
  V as FieldError,
  y as FieldGroup,
  j as FieldLabel,
  F as FieldLegend,
  M as FieldSeparator,
  k as FieldSet,
  z as FieldTitle
};
