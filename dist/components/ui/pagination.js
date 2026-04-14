import { jsx as i, jsxs as e } from "react/jsx-runtime";
import "react";
import { ChevronLeftIcon as l, ChevronRightIcon as c, MoreHorizontalIcon as p } from "lucide-react";
import { cn as t } from "../../lib/utils.js";
import { buttonVariants as m } from "./button.js";
function x({ className: a, ...n }) {
  return /* @__PURE__ */ i(
    "nav",
    {
      role: "navigation",
      "aria-label": "pagination",
      "data-slot": "pagination",
      className: t("mx-auto flex w-full justify-center", a),
      ...n
    }
  );
}
function N({
  className: a,
  ...n
}) {
  return /* @__PURE__ */ i(
    "ul",
    {
      "data-slot": "pagination-content",
      className: t("flex flex-row items-center gap-1", a),
      ...n
    }
  );
}
function P({ ...a }) {
  return /* @__PURE__ */ i("li", { "data-slot": "pagination-item", ...a });
}
function o({
  className: a,
  isActive: n,
  size: r = "icon",
  ...s
}) {
  return /* @__PURE__ */ i(
    "a",
    {
      "aria-current": n ? "page" : void 0,
      "data-slot": "pagination-link",
      "data-active": n,
      className: t(
        m({
          variant: n ? "outline" : "ghost",
          size: r
        }),
        a
      ),
      ...s
    }
  );
}
function v({
  className: a,
  ...n
}) {
  return /* @__PURE__ */ e(
    o,
    {
      "aria-label": "Go to previous page",
      size: "default",
      className: t("gap-1 px-2.5 sm:pl-2.5", a),
      ...n,
      children: [
        /* @__PURE__ */ i(l, {}),
        /* @__PURE__ */ i("span", { className: "hidden sm:block", children: "Previous" })
      ]
    }
  );
}
function b({
  className: a,
  ...n
}) {
  return /* @__PURE__ */ e(
    o,
    {
      "aria-label": "Go to next page",
      size: "default",
      className: t("gap-1 px-2.5 sm:pr-2.5", a),
      ...n,
      children: [
        /* @__PURE__ */ i("span", { className: "hidden sm:block", children: "Next" }),
        /* @__PURE__ */ i(c, {})
      ]
    }
  );
}
function z({
  className: a,
  ...n
}) {
  return /* @__PURE__ */ e(
    "span",
    {
      "aria-hidden": !0,
      "data-slot": "pagination-ellipsis",
      className: t("flex size-9 items-center justify-center", a),
      ...n,
      children: [
        /* @__PURE__ */ i(p, { className: "size-4" }),
        /* @__PURE__ */ i("span", { className: "sr-only", children: "More pages" })
      ]
    }
  );
}
export {
  x as Pagination,
  N as PaginationContent,
  z as PaginationEllipsis,
  P as PaginationItem,
  o as PaginationLink,
  b as PaginationNext,
  v as PaginationPrevious
};
