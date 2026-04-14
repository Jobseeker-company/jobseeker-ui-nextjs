import { jsx as a } from "react/jsx-runtime";
import "react";
import { cn as o } from "../../lib/utils.js";
function s({ className: t, ...r }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",
        t
      ),
      "data-slot": "card",
      ...r
    }
  );
}
function c({ className: t, ...r }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        t
      ),
      "data-slot": "card-header",
      ...r
    }
  );
}
function i({ className: t, ...r }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: o("leading-none font-semibold", t),
      "data-slot": "card-title",
      ...r
    }
  );
}
function l({ className: t, ...r }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: o("text-muted-foreground text-sm", t),
      "data-slot": "card-description",
      ...r
    }
  );
}
function u({ className: t, ...r }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: o(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        t
      ),
      "data-slot": "card-action",
      ...r
    }
  );
}
function f({ className: t, ...r }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: o("px-6", t),
      "data-slot": "card-content",
      ...r
    }
  );
}
function m({ className: t, ...r }) {
  return /* @__PURE__ */ a(
    "div",
    {
      className: o("flex items-center px-6 [.border-t]:pt-6", t),
      "data-slot": "card-footer",
      ...r
    }
  );
}
export {
  s as Card,
  u as CardAction,
  f as CardContent,
  l as CardDescription,
  m as CardFooter,
  c as CardHeader,
  i as CardTitle
};
