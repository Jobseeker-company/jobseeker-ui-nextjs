import { jsx as a, jsxs as o } from "react/jsx-runtime";
import { Slot as s } from "@radix-ui/react-slot";
import { ChevronRight as i, MoreHorizontal as l } from "lucide-react";
import "react";
import { cn as t } from "../../lib/utils.js";
function f({ ...r }) {
  return /* @__PURE__ */ a("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", ...r });
}
function g({ className: r, ...e }) {
  return /* @__PURE__ */ a(
    "ol",
    {
      className: t(
        "text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm wrap-break-word sm:gap-2.5",
        r
      ),
      "data-slot": "breadcrumb-list",
      ...e
    }
  );
}
function x({ className: r, ...e }) {
  return /* @__PURE__ */ a(
    "li",
    {
      className: t("inline-flex items-center gap-1.5", r),
      "data-slot": "breadcrumb-item",
      ...e
    }
  );
}
function h({
  asChild: r,
  className: e,
  ...n
}) {
  return /* @__PURE__ */ a(
    r ? s : "a",
    {
      className: t("hover:text-foreground transition-colors", e),
      "data-slot": "breadcrumb-link",
      ...n
    }
  );
}
function N({ className: r, ...e }) {
  return /* @__PURE__ */ a(
    "span",
    {
      "aria-current": "page",
      "aria-disabled": "true",
      className: t("text-foreground font-normal", r),
      "data-slot": "breadcrumb-page",
      role: "link",
      ...e
    }
  );
}
function B({
  children: r,
  className: e,
  ...n
}) {
  return /* @__PURE__ */ a(
    "li",
    {
      "aria-hidden": "true",
      className: t("[&>svg]:size-3.5", e),
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      ...n,
      children: r ?? /* @__PURE__ */ a(i, {})
    }
  );
}
function k({
  className: r,
  ...e
}) {
  return /* @__PURE__ */ o(
    "span",
    {
      "aria-hidden": "true",
      className: t("flex size-9 items-center justify-center", r),
      "data-slot": "breadcrumb-ellipsis",
      role: "presentation",
      ...e,
      children: [
        /* @__PURE__ */ a(l, { className: "size-4" }),
        /* @__PURE__ */ a("span", { className: "sr-only", children: "More" })
      ]
    }
  );
}
export {
  f as Breadcrumb,
  k as BreadcrumbEllipsis,
  x as BreadcrumbItem,
  h as BreadcrumbLink,
  g as BreadcrumbList,
  N as BreadcrumbPage,
  B as BreadcrumbSeparator
};
