import { jsx as n } from "react/jsx-runtime";
import * as s from "react";
import * as d from "@radix-ui/react-toggle-group";
import "class-variance-authority";
import { cn as g } from "../../lib/utils.js";
import { toggleVariants as l } from "./toggle.js";
const p = s.createContext({
  size: "default",
  variant: "default",
  spacing: 0
});
function v({
  className: r,
  variant: e,
  size: o,
  spacing: t = 0,
  children: i,
  ...a
}) {
  return /* @__PURE__ */ n(
    d.Root,
    {
      "data-slot": "toggle-group",
      "data-variant": e,
      "data-size": o,
      "data-spacing": t,
      style: { "--gap": t },
      className: g(
        "group/toggle-group flex w-fit items-center gap-[--spacing(var(--gap))] rounded-md data-[spacing=default]:data-[variant=outline]:shadow-xs",
        r
      ),
      ...a,
      children: /* @__PURE__ */ n(p.Provider, { value: { variant: e, size: o, spacing: t }, children: i })
    }
  );
}
function x({
  className: r,
  children: e,
  variant: o,
  size: t,
  ...i
}) {
  const a = s.useContext(p);
  return /* @__PURE__ */ n(
    d.Item,
    {
      "data-slot": "toggle-group-item",
      "data-variant": a.variant || o,
      "data-size": a.size || t,
      "data-spacing": a.spacing,
      className: g(
        l({
          variant: a.variant || o,
          size: a.size || t
        }),
        "w-auto min-w-0 shrink-0 px-3 focus:z-10 focus-visible:z-10",
        "data-[spacing=0]:rounded-none data-[spacing=0]:shadow-none data-[spacing=0]:first:rounded-l-md data-[spacing=0]:last:rounded-r-md data-[spacing=0]:data-[variant=outline]:border-l-0 data-[spacing=0]:data-[variant=outline]:first:border-l",
        r
      ),
      ...i,
      children: e
    }
  );
}
export {
  v as ToggleGroup,
  x as ToggleGroupItem
};
