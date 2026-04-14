import { jsx as a } from "react/jsx-runtime";
import { Slot as n } from "@radix-ui/react-slot";
import { cva as o } from "class-variance-authority";
import "react";
import { cn as s } from "../../lib/utils.js";
const d = o(
  "inline-flex items-center justify-center rounded-full border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    defaultVariants: {
      variant: "default"
    },
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        destructive: "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        link: "text-primary underline-offset-4 hover:underline",
        outline: "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        secondary: "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90"
      }
    }
  }
);
function p({
  asChild: r = !1,
  className: e,
  variant: t,
  ...i
}) {
  return /* @__PURE__ */ a(
    r ? n : "span",
    {
      className: s(d({ variant: t }), e),
      "data-slot": "badge",
      ...i
    }
  );
}
export {
  p as Badge,
  d as badgeVariants
};
