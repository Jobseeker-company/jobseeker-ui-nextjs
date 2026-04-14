import { jsx as t, jsxs as p } from "react/jsx-runtime";
import { Slot as h } from "@radix-ui/react-slot";
import { cva as M } from "class-variance-authority";
import { PanelLeftIcon as z } from "lucide-react";
import * as s from "react";
import { Button as I } from "./button.js";
import { Input as E } from "./input.js";
import { Separator as D } from "./separator.js";
import { Sheet as T, SheetContent as B, SheetHeader as A, SheetTitle as O, SheetDescription as R } from "./sheet.js";
import { Skeleton as y } from "./skeleton.js";
import { Tooltip as H, TooltipTrigger as K, TooltipContent as j, TooltipProvider as G } from "./tooltip.js";
import { useIsMobile as L } from "../../hooks/use-mobile.js";
import { cn as r } from "../../lib/utils.js";
const W = "sidebar_state", $ = 3600 * 24 * 7, P = "16rem", V = "18rem", q = "3rem", F = "b", C = s.createContext(null);
function S() {
  const e = s.useContext(C);
  if (!e)
    throw new Error("useSidebar must be used within a SidebarProvider.");
  return e;
}
function de({
  children: e,
  className: a,
  defaultOpen: n = !0,
  onOpenChange: i,
  open: o,
  style: c,
  ...m
}) {
  const u = L(), [f, l] = s.useState(!1), [v, _] = s.useState(n), g = o ?? v, x = s.useCallback(
    (d) => {
      const b = typeof d == "function" ? d(g) : d;
      i ? i(b) : _(b), document.cookie = `${W}=${b}; path=/; max-age=${$}`;
    },
    [i, g]
  ), w = s.useCallback(() => u ? l((d) => !d) : x((d) => !d), [u, x, l]);
  s.useEffect(() => {
    const d = (b) => {
      b.key === F && (b.metaKey || b.ctrlKey) && (b.preventDefault(), w());
    };
    return window.addEventListener("keydown", d), () => window.removeEventListener("keydown", d);
  }, [w]);
  const N = g ? "expanded" : "collapsed", k = s.useMemo(
    () => ({
      isMobile: u,
      open: g,
      openMobile: f,
      setOpen: x,
      setOpenMobile: l,
      state: N,
      toggleSidebar: w
    }),
    [N, g, x, u, f, l, w]
  );
  return /* @__PURE__ */ t(C.Provider, { value: k, children: /* @__PURE__ */ t(G, { delayDuration: 0, children: /* @__PURE__ */ t(
    "div",
    {
      className: r(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        a
      ),
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": P,
        "--sidebar-width-icon": q,
        ...c
      },
      ...m,
      children: e
    }
  ) }) });
}
function se({
  children: e,
  className: a,
  collapsible: n = "offcanvas",
  side: i = "left",
  variant: o = "sidebar",
  ...c
}) {
  const { isMobile: m, openMobile: u, setOpenMobile: f, state: l } = S();
  return n === "none" ? /* @__PURE__ */ t(
    "div",
    {
      className: r(
        "bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col",
        a
      ),
      "data-slot": "sidebar",
      ...c,
      children: e
    }
  ) : m ? /* @__PURE__ */ t(T, { onOpenChange: f, open: u, ...c, children: /* @__PURE__ */ p(
    B,
    {
      className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
      "data-mobile": "true",
      "data-sidebar": "sidebar",
      "data-slot": "sidebar",
      side: i,
      style: {
        "--sidebar-width": V
      },
      children: [
        /* @__PURE__ */ p(A, { className: "sr-only", children: [
          /* @__PURE__ */ t(O, { children: "Sidebar" }),
          /* @__PURE__ */ t(R, { children: "Displays the mobile sidebar." })
        ] }),
        /* @__PURE__ */ t("div", { className: "flex h-full w-full flex-col", children: e })
      ]
    }
  ) }) : /* @__PURE__ */ p(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-collapsible": l === "collapsed" ? n : "",
      "data-side": i,
      "data-slot": "sidebar",
      "data-state": l,
      "data-variant": o,
      children: [
        /* @__PURE__ */ t(
          "div",
          {
            className: r(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              o === "floating" || o === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            ),
            "data-slot": "sidebar-gap"
          }
        ),
        /* @__PURE__ */ t(
          "div",
          {
            className: r(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              i === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              o === "floating" || o === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              a
            ),
            "data-slot": "sidebar-container",
            ...c,
            children: /* @__PURE__ */ t(
              "div",
              {
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm",
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                children: e
              }
            )
          }
        )
      ]
    }
  );
}
function le({
  className: e,
  onClick: a,
  ...n
}) {
  const { toggleSidebar: i } = S();
  return /* @__PURE__ */ p(
    I,
    {
      className: r("size-7", e),
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      onClick: (o) => {
        a?.(o), i();
      },
      size: "icon",
      variant: "ghost",
      ...n,
      children: [
        /* @__PURE__ */ t(z, {}),
        /* @__PURE__ */ t("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function ce({ className: e, ...a }) {
  const { toggleSidebar: n } = S();
  return /* @__PURE__ */ t(
    "button",
    {
      "aria-label": "Toggle Sidebar",
      className: r(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        e
      ),
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      onClick: n,
      tabIndex: -1,
      title: "Toggle Sidebar",
      ...a
    }
  );
}
function ue({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    "main",
    {
      className: r(
        "bg-background relative flex w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        e
      ),
      "data-slot": "sidebar-inset",
      ...a
    }
  );
}
function be({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t(
    E,
    {
      className: r("bg-background h-8 w-full shadow-none", e),
      "data-sidebar": "input",
      "data-slot": "sidebar-input",
      ...a
    }
  );
}
function fe({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: r("flex flex-col gap-2 p-2", e),
      "data-sidebar": "header",
      "data-slot": "sidebar-header",
      ...a
    }
  );
}
function pe({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: r("flex flex-col gap-2 p-2", e),
      "data-sidebar": "footer",
      "data-slot": "sidebar-footer",
      ...a
    }
  );
}
function me({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t(
    D,
    {
      className: r("bg-sidebar-border mx-2 w-auto", e),
      "data-sidebar": "separator",
      "data-slot": "sidebar-separator",
      ...a
    }
  );
}
function ge({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: r(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden",
        e
      ),
      "data-sidebar": "content",
      "data-slot": "sidebar-content",
      ...a
    }
  );
}
function he({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: r("relative flex w-full min-w-0 flex-col p-2", e),
      "data-sidebar": "group",
      "data-slot": "sidebar-group",
      ...a
    }
  );
}
function ve({
  asChild: e = !1,
  className: a,
  ...n
}) {
  return /* @__PURE__ */ t(
    e ? h : "div",
    {
      className: r(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        a
      ),
      "data-sidebar": "group-label",
      "data-slot": "sidebar-group-label",
      ...n
    }
  );
}
function xe({
  asChild: e = !1,
  className: a,
  ...n
}) {
  return /* @__PURE__ */ t(
    e ? h : "button",
    {
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        a
      ),
      "data-sidebar": "group-action",
      "data-slot": "sidebar-group-action",
      ...n
    }
  );
}
function we({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: r("w-full text-sm", e),
      "data-sidebar": "group-content",
      "data-slot": "sidebar-group-content",
      ...a
    }
  );
}
function Se({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    "ul",
    {
      className: r("flex w-full min-w-0 flex-col gap-1", e),
      "data-sidebar": "menu",
      "data-slot": "sidebar-menu",
      ...a
    }
  );
}
function Ne({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    "li",
    {
      className: r("group/menu-item relative", e),
      "data-sidebar": "menu-item",
      "data-slot": "sidebar-menu-item",
      ...a
    }
  );
}
const U = M(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    defaultVariants: {
      size: "default",
      variant: "default"
    },
    variants: {
      size: {
        default: "h-8 text-sm",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
        sm: "h-7 text-xs"
      },
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      }
    }
  }
);
function ye({
  asChild: e = !1,
  className: a,
  isActive: n = !1,
  size: i = "default",
  tooltip: o,
  variant: c = "default",
  ...m
}) {
  const u = e ? h : "button", { isMobile: f, state: l } = S(), v = /* @__PURE__ */ t(
    u,
    {
      className: r(U({ size: i, variant: c }), a),
      "data-active": n,
      "data-sidebar": "menu-button",
      "data-size": i,
      "data-slot": "sidebar-menu-button",
      ...m
    }
  );
  return o ? (typeof o == "string" && (o = {
    children: o
  }), /* @__PURE__ */ p(H, { children: [
    /* @__PURE__ */ t(K, { asChild: !0, children: v }),
    /* @__PURE__ */ t(
      j,
      {
        align: "center",
        hidden: l !== "collapsed" || f,
        side: "right",
        ...o
      }
    )
  ] })) : v;
}
function Ce({
  asChild: e = !1,
  className: a,
  showOnHover: n = !1,
  ...i
}) {
  return /* @__PURE__ */ t(
    e ? h : "button",
    {
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        n && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        a
      ),
      "data-sidebar": "menu-action",
      "data-slot": "sidebar-menu-action",
      ...i
    }
  );
}
function _e({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t(
    "div",
    {
      className: r(
        "text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      "data-sidebar": "menu-badge",
      "data-slot": "sidebar-menu-badge",
      ...a
    }
  );
}
function ke({
  className: e,
  showIcon: a = !1,
  ...n
}) {
  const [i, o] = s.useState("50%");
  return s.useEffect(() => {
    o(`${Math.floor(Math.random() * 40) + 50}%`);
  }, []), /* @__PURE__ */ p(
    "div",
    {
      className: r("flex h-8 items-center gap-2 rounded-md px-2", e),
      "data-sidebar": "menu-skeleton",
      "data-slot": "sidebar-menu-skeleton",
      ...n,
      children: [
        a && /* @__PURE__ */ t(
          y,
          {
            className: "size-4 rounded-md",
            "data-sidebar": "menu-skeleton-icon"
          }
        ),
        /* @__PURE__ */ t(
          y,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": i
            }
          }
        )
      ]
    }
  );
}
function Me({ className: e, ...a }) {
  return /* @__PURE__ */ t(
    "ul",
    {
      className: r(
        "border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        e
      ),
      "data-sidebar": "menu-sub",
      "data-slot": "sidebar-menu-sub",
      ...a
    }
  );
}
function ze({
  className: e,
  ...a
}) {
  return /* @__PURE__ */ t(
    "li",
    {
      className: r("group/menu-sub-item relative", e),
      "data-sidebar": "menu-sub-item",
      "data-slot": "sidebar-menu-sub-item",
      ...a
    }
  );
}
function Ie({
  asChild: e = !1,
  className: a,
  isActive: n = !1,
  size: i = "md",
  ...o
}) {
  return /* @__PURE__ */ t(
    e ? h : "a",
    {
      className: r(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        i === "sm" && "text-xs",
        i === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        a
      ),
      "data-active": n,
      "data-sidebar": "menu-sub-button",
      "data-size": i,
      "data-slot": "sidebar-menu-sub-button",
      ...o
    }
  );
}
export {
  se as Sidebar,
  ge as SidebarContent,
  pe as SidebarFooter,
  he as SidebarGroup,
  xe as SidebarGroupAction,
  we as SidebarGroupContent,
  ve as SidebarGroupLabel,
  fe as SidebarHeader,
  be as SidebarInput,
  ue as SidebarInset,
  Se as SidebarMenu,
  Ce as SidebarMenuAction,
  _e as SidebarMenuBadge,
  ye as SidebarMenuButton,
  Ne as SidebarMenuItem,
  ke as SidebarMenuSkeleton,
  Me as SidebarMenuSub,
  Ie as SidebarMenuSubButton,
  ze as SidebarMenuSubItem,
  de as SidebarProvider,
  ce as SidebarRail,
  me as SidebarSeparator,
  le as SidebarTrigger,
  S as useSidebar
};
