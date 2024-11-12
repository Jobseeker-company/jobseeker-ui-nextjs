import * as Ce from "react";
import T, { useState as ae, forwardRef as le, useRef as Ee, useCallback as oe, useEffect as ve, useMemo as ze, Fragment as Je, useImperativeHandle as Rl, createContext as yt, useContext as De, useLayoutEffect as zl } from "react";
import { ChevronDown as Or, XCircle as Rr, XIcon as it, ChevronsUpDownIcon as zr, CheckIcon as Ir, ChevronRight as Il, XCircleIcon as Fl, HelpCircle as Dt, Eye as Jl, Check as Fr, Circle as Jr, CalendarDaysIcon as Br, UploadCloudIcon as Bl, ChevronUpIcon as dr, ChevronDownIcon as cr, RefreshCcwIcon as Wl, SearchIcon as Kl, FilterIcon as Vl, ArrowLeftIcon as ql, Info as Ul, CheckCircle as Gl, AlertTriangle as Zl } from "lucide-react";
import { twMerge as W, twJoin as xe } from "tailwind-merge";
import { Listbox as Be, Transition as Re, Dialog as Mt, Menu as St, Switch as Yt } from "@headlessui/react";
var Xl = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ql(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var zt = { exports: {} }, _t = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr;
function eu() {
  if (mr)
    return _t;
  mr = 1;
  var r = T, o = Symbol.for("react.element"), n = Symbol.for("react.fragment"), t = Object.prototype.hasOwnProperty, s = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function e(i, l, u) {
    var c, d = {}, m = null, y = null;
    u !== void 0 && (m = "" + u), l.key !== void 0 && (m = "" + l.key), l.ref !== void 0 && (y = l.ref);
    for (c in l)
      t.call(l, c) && !a.hasOwnProperty(c) && (d[c] = l[c]);
    if (i && i.defaultProps)
      for (c in l = i.defaultProps, l)
        d[c] === void 0 && (d[c] = l[c]);
    return { $$typeof: o, type: i, key: m, ref: y, props: d, _owner: s.current };
  }
  return _t.Fragment = n, _t.jsx = e, _t.jsxs = e, _t;
}
var dt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fr;
function tu() {
  return fr || (fr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = T, o = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), e = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), v = Symbol.iterator, M = "@@iterator";
    function w(p) {
      if (p === null || typeof p != "object")
        return null;
      var A = v && p[v] || p[M];
      return typeof A == "function" ? A : null;
    }
    var L = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(p) {
      {
        for (var A = arguments.length, U = new Array(A > 1 ? A - 1 : 0), ie = 1; ie < A; ie++)
          U[ie - 1] = arguments[ie];
        O("error", p, U);
      }
    }
    function O(p, A, U) {
      {
        var ie = L.ReactDebugCurrentFrame, pe = ie.getStackAddendum();
        pe !== "" && (A += "%s", U = U.concat([pe]));
        var Ye = U.map(function(me) {
          return String(me);
        });
        Ye.unshift("Warning: " + A), Function.prototype.apply.call(console[p], console, Ye);
      }
    }
    var q = !1, H = !1, J = !1, E = !1, C = !1, G;
    G = Symbol.for("react.module.reference");
    function Z(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === t || p === a || C || p === s || p === u || p === c || E || p === y || q || H || J || typeof p == "object" && p !== null && (p.$$typeof === m || p.$$typeof === d || p.$$typeof === e || p.$$typeof === i || p.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === G || p.getModuleId !== void 0));
    }
    function z(p, A, U) {
      var ie = p.displayName;
      if (ie)
        return ie;
      var pe = A.displayName || A.name || "";
      return pe !== "" ? U + "(" + pe + ")" : U;
    }
    function ne(p) {
      return p.displayName || "Context";
    }
    function ue(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case t:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case s:
          return "StrictMode";
        case u:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case i:
            var A = p;
            return ne(A) + ".Consumer";
          case e:
            var U = p;
            return ne(U._context) + ".Provider";
          case l:
            return z(p, p.render, "ForwardRef");
          case d:
            var ie = p.displayName || null;
            return ie !== null ? ie : ue(p.type) || "Memo";
          case m: {
            var pe = p, Ye = pe._payload, me = pe._init;
            try {
              return ue(me(Ye));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, x = 0, D, j, Y, R, h, S, B;
    function F() {
    }
    F.__reactDisabledLog = !0;
    function V() {
      {
        if (x === 0) {
          D = console.log, j = console.info, Y = console.warn, R = console.error, h = console.group, S = console.groupCollapsed, B = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: F,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        x++;
      }
    }
    function Q() {
      {
        if (x--, x === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, p, {
              value: D
            }),
            info: I({}, p, {
              value: j
            }),
            warn: I({}, p, {
              value: Y
            }),
            error: I({}, p, {
              value: R
            }),
            group: I({}, p, {
              value: h
            }),
            groupCollapsed: I({}, p, {
              value: S
            }),
            groupEnd: I({}, p, {
              value: B
            })
          });
        }
        x < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var re = L.ReactCurrentDispatcher, X;
    function ee(p, A, U) {
      {
        if (X === void 0)
          try {
            throw Error();
          } catch (pe) {
            var ie = pe.stack.trim().match(/\n( *(at )?)/);
            X = ie && ie[1] || "";
          }
        return `
` + X + p;
      }
    }
    var se = !1, te;
    {
      var ce = typeof WeakMap == "function" ? WeakMap : Map;
      te = new ce();
    }
    function P(p, A) {
      if (!p || se)
        return "";
      {
        var U = te.get(p);
        if (U !== void 0)
          return U;
      }
      var ie;
      se = !0;
      var pe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ye;
      Ye = re.current, re.current = null, V();
      try {
        if (A) {
          var me = function() {
            throw Error();
          };
          if (Object.defineProperty(me.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(me, []);
            } catch (qe) {
              ie = qe;
            }
            Reflect.construct(p, [], me);
          } else {
            try {
              me.call();
            } catch (qe) {
              ie = qe;
            }
            p.call(me.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (qe) {
            ie = qe;
          }
          p();
        }
      } catch (qe) {
        if (qe && ie && typeof qe.stack == "string") {
          for (var de = qe.stack.split(`
`), je = ie.stack.split(`
`), Le = de.length - 1, we = je.length - 1; Le >= 1 && we >= 0 && de[Le] !== je[we]; )
            we--;
          for (; Le >= 1 && we >= 0; Le--, we--)
            if (de[Le] !== je[we]) {
              if (Le !== 1 || we !== 1)
                do
                  if (Le--, we--, we < 0 || de[Le] !== je[we]) {
                    var $e = `
` + de[Le].replace(" at new ", " at ");
                    return p.displayName && $e.includes("<anonymous>") && ($e = $e.replace("<anonymous>", p.displayName)), typeof p == "function" && te.set(p, $e), $e;
                  }
                while (Le >= 1 && we >= 0);
              break;
            }
        }
      } finally {
        se = !1, re.current = Ye, Q(), Error.prepareStackTrace = pe;
      }
      var at = p ? p.displayName || p.name : "", _r = at ? ee(at) : "";
      return typeof p == "function" && te.set(p, _r), _r;
    }
    function fe(p, A, U) {
      return P(p, !1);
    }
    function He(p) {
      var A = p.prototype;
      return !!(A && A.isReactComponent);
    }
    function Se(p, A, U) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return P(p, He(p));
      if (typeof p == "string")
        return ee(p);
      switch (p) {
        case u:
          return ee("Suspense");
        case c:
          return ee("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case l:
            return fe(p.render);
          case d:
            return Se(p.type, A, U);
          case m: {
            var ie = p, pe = ie._payload, Ye = ie._init;
            try {
              return Se(Ye(pe), A, U);
            } catch {
            }
          }
        }
      return "";
    }
    var Ve = Object.prototype.hasOwnProperty, tt = {}, Ze = L.ReactDebugCurrentFrame;
    function Xe(p) {
      if (p) {
        var A = p._owner, U = Se(p.type, p._source, A ? A.type : null);
        Ze.setExtraStackFrame(U);
      } else
        Ze.setExtraStackFrame(null);
    }
    function rt(p, A, U, ie, pe) {
      {
        var Ye = Function.call.bind(Ve);
        for (var me in p)
          if (Ye(p, me)) {
            var de = void 0;
            try {
              if (typeof p[me] != "function") {
                var je = Error((ie || "React class") + ": " + U + " type `" + me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw je.name = "Invariant Violation", je;
              }
              de = p[me](A, me, ie, U, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Le) {
              de = Le;
            }
            de && !(de instanceof Error) && (Xe(pe), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ie || "React class", U, me, typeof de), Xe(null)), de instanceof Error && !(de.message in tt) && (tt[de.message] = !0, Xe(pe), $("Failed %s type: %s", U, de.message), Xe(null));
          }
      }
    }
    var K = Array.isArray;
    function _e(p) {
      return K(p);
    }
    function ye(p) {
      {
        var A = typeof Symbol == "function" && Symbol.toStringTag, U = A && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return U;
      }
    }
    function ke(p) {
      try {
        return be(p), !1;
      } catch {
        return !0;
      }
    }
    function be(p) {
      return "" + p;
    }
    function Qe(p) {
      if (ke(p))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ye(p)), be(p);
    }
    var Ie = L.ReactCurrentOwner, ut = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ue, nr, Lt;
    Lt = {};
    function xl(p) {
      if (Ve.call(p, "ref")) {
        var A = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function kl(p) {
      if (Ve.call(p, "key")) {
        var A = Object.getOwnPropertyDescriptor(p, "key").get;
        if (A && A.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function wl(p, A) {
      if (typeof p.ref == "string" && Ie.current && A && Ie.current.stateNode !== A) {
        var U = ue(Ie.current.type);
        Lt[U] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', ue(Ie.current.type), p.ref), Lt[U] = !0);
      }
    }
    function Dl(p, A) {
      {
        var U = function() {
          Ue || (Ue = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        U.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: U,
          configurable: !0
        });
      }
    }
    function Sl(p, A) {
      {
        var U = function() {
          nr || (nr = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", A));
        };
        U.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: U,
          configurable: !0
        });
      }
    }
    var jl = function(p, A, U, ie, pe, Ye, me) {
      var de = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: p,
        key: A,
        ref: U,
        props: me,
        // Record the component responsible for creating this element.
        _owner: Ye
      };
      return de._store = {}, Object.defineProperty(de._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(de, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ie
      }), Object.defineProperty(de, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: pe
      }), Object.freeze && (Object.freeze(de.props), Object.freeze(de)), de;
    };
    function Hl(p, A, U, ie, pe) {
      {
        var Ye, me = {}, de = null, je = null;
        U !== void 0 && (Qe(U), de = "" + U), kl(A) && (Qe(A.key), de = "" + A.key), xl(A) && (je = A.ref, wl(A, pe));
        for (Ye in A)
          Ve.call(A, Ye) && !ut.hasOwnProperty(Ye) && (me[Ye] = A[Ye]);
        if (p && p.defaultProps) {
          var Le = p.defaultProps;
          for (Ye in Le)
            me[Ye] === void 0 && (me[Ye] = Le[Ye]);
        }
        if (de || je) {
          var we = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          de && Dl(me, we), je && Sl(me, we);
        }
        return jl(p, de, je, pe, ie, Ie.current, me);
      }
    }
    var xt = L.ReactCurrentOwner, ar = L.ReactDebugCurrentFrame;
    function nt(p) {
      if (p) {
        var A = p._owner, U = Se(p.type, p._source, A ? A.type : null);
        ar.setExtraStackFrame(U);
      } else
        ar.setExtraStackFrame(null);
    }
    var kt;
    kt = !1;
    function wt(p) {
      return typeof p == "object" && p !== null && p.$$typeof === o;
    }
    function sr() {
      {
        if (xt.current) {
          var p = ue(xt.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function Tl(p) {
      return "";
    }
    var or = {};
    function El(p) {
      {
        var A = sr();
        if (!A) {
          var U = typeof p == "string" ? p : p.displayName || p.name;
          U && (A = `

Check the top-level render call using <` + U + ">.");
        }
        return A;
      }
    }
    function ir(p, A) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var U = El(A);
        if (or[U])
          return;
        or[U] = !0;
        var ie = "";
        p && p._owner && p._owner !== xt.current && (ie = " It was passed a child from " + ue(p._owner.type) + "."), nt(p), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', U, ie), nt(null);
      }
    }
    function lr(p, A) {
      {
        if (typeof p != "object")
          return;
        if (_e(p))
          for (var U = 0; U < p.length; U++) {
            var ie = p[U];
            wt(ie) && ir(ie, A);
          }
        else if (wt(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var pe = w(p);
          if (typeof pe == "function" && pe !== p.entries)
            for (var Ye = pe.call(p), me; !(me = Ye.next()).done; )
              wt(me.value) && ir(me.value, A);
        }
      }
    }
    function Nl(p) {
      {
        var A = p.type;
        if (A == null || typeof A == "string")
          return;
        var U;
        if (typeof A == "function")
          U = A.propTypes;
        else if (typeof A == "object" && (A.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        A.$$typeof === d))
          U = A.propTypes;
        else
          return;
        if (U) {
          var ie = ue(A);
          rt(U, p.props, "prop", ie, p);
        } else if (A.PropTypes !== void 0 && !kt) {
          kt = !0;
          var pe = ue(A);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", pe || "Unknown");
        }
        typeof A.getDefaultProps == "function" && !A.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $l(p) {
      {
        for (var A = Object.keys(p.props), U = 0; U < A.length; U++) {
          var ie = A[U];
          if (ie !== "children" && ie !== "key") {
            nt(p), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ie), nt(null);
            break;
          }
        }
        p.ref !== null && (nt(p), $("Invalid attribute `ref` supplied to `React.Fragment`."), nt(null));
      }
    }
    function ur(p, A, U, ie, pe, Ye) {
      {
        var me = Z(p);
        if (!me) {
          var de = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (de += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var je = Tl();
          je ? de += je : de += sr();
          var Le;
          p === null ? Le = "null" : _e(p) ? Le = "array" : p !== void 0 && p.$$typeof === o ? (Le = "<" + (ue(p.type) || "Unknown") + " />", de = " Did you accidentally export a JSX literal instead of a component?") : Le = typeof p, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Le, de);
        }
        var we = Hl(p, A, U, pe, Ye);
        if (we == null)
          return we;
        if (me) {
          var $e = A.children;
          if ($e !== void 0)
            if (ie)
              if (_e($e)) {
                for (var at = 0; at < $e.length; at++)
                  lr($e[at], p);
                Object.freeze && Object.freeze($e);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              lr($e, p);
        }
        return p === t ? $l(we) : Nl(we), we;
      }
    }
    function Cl(p, A, U) {
      return ur(p, A, U, !0);
    }
    function Al(p, A, U) {
      return ur(p, A, U, !1);
    }
    var Pl = Al, Ol = Cl;
    dt.Fragment = t, dt.jsx = Pl, dt.jsxs = Ol;
  }()), dt;
}
process.env.NODE_ENV === "production" ? zt.exports = eu() : zt.exports = tu();
var _ = zt.exports;
const Oh = ({ items: r, className: o, ...n }) => {
  const [t, s] = ae(null), a = (e) => {
    s(t === e ? null : e);
  };
  return /* @__PURE__ */ _.jsx("div", { className: W("divide-y overflow-hidden rounded-lg border", o), ...n, children: r.map(({ header: e, body: i }, l) => /* @__PURE__ */ _.jsxs("div", { className: "accordion-item", children: [
    /* @__PURE__ */ _.jsxs(
      "button",
      {
        type: "button",
        onClick: () => a(l),
        className: xe(
          t === l && "bg-gray-50 text-primary-600",
          "flex w-full items-center justify-between px-3 py-4 font-semibold transition-colors"
        ),
        children: [
          /* @__PURE__ */ _.jsx("span", { children: e }),
          /* @__PURE__ */ _.jsx(Or, { size: 16, className: xe(t === l && "rotate-180", "transition-transform") })
        ]
      }
    ),
    /* @__PURE__ */ _.jsx("div", { className: xe(t !== l && "h-0 overflow-hidden opacity-0", "transition-opacity"), children: /* @__PURE__ */ _.jsx("div", { className: "p-3 text-sm", children: i }) })
  ] }, l)) });
};
function Ke(r) {
  return (o) => r[o || Object.keys(r)[0]];
}
function Rh(r) {
  if (!r || typeof r != "object")
    return "";
  try {
    return JSON.stringify(r);
  } catch {
    return "";
  }
}
const ru = le(({ title: r, color: o, hideable: n, className: t, children: s, ...a }, e) => {
  const [i, l] = ae(!0);
  return i ? /* @__PURE__ */ _.jsxs(
    "div",
    {
      ref: e,
      className: W("relative rounded-lg border p-3 text-sm", n && "pr-8", nu(o), t),
      ...a,
      children: [
        !!r && /* @__PURE__ */ _.jsx("span", { className: "block text-base font-semibold", children: r }),
        s,
        n && /* @__PURE__ */ _.jsx("button", { type: "button", className: "absolute right-1 top-1", onClick: () => l(!1), children: /* @__PURE__ */ _.jsx(Rr, { size: 24, strokeWidth: 1 }) })
      ]
    }
  ) : null;
}), nu = Ke({
  default: "text-secondary-800 bg-secondary-100 border-secondary-200",
  primary: "text-primary-800 bg-primary-100 border-primary-200",
  success: "text-success-800 bg-success-100 border-success-200",
  warning: "text-warning-800 bg-warning-100 border-warning-200",
  error: "text-error-800 bg-error-100 border-error-200"
});
ru.displayName = "Alert";
const Pe = (r) => {
  const { htmlFor: o, label: n, labelRequired: t, onLabelClick: s, error: a, help: e, className: i, wrapperClassName: l, children: u, ...c } = r;
  return /* @__PURE__ */ _.jsxs("div", { className: i, ...c, children: [
    !!n && /* @__PURE__ */ _.jsxs("label", { htmlFor: o, className: "text-xs", onClick: s, children: [
      n,
      t && /* @__PURE__ */ _.jsx("span", { className: "text-red-600", children: "*" })
    ] }),
    /* @__PURE__ */ _.jsx("div", { className: l, children: u }),
    !!a && /* @__PURE__ */ _.jsx("span", { className: "block text-xs text-red-600", children: a }),
    !!e && /* @__PURE__ */ _.jsx("span", { className: "block text-xs italic", children: e })
  ] });
};
function au() {
  var r = /* @__PURE__ */ new Map();
  function o(n) {
    var t = n.root, s = n.rootMargin, a = n.threshold, e = r.get(t);
    e || (e = /* @__PURE__ */ new Map(), r.set(t, e));
    var i = JSON.stringify({
      rootMargin: s,
      threshold: a
    }), l = e.get(i);
    if (!l) {
      var u = /* @__PURE__ */ new Map(), c = new IntersectionObserver(function(d) {
        d.forEach(function(m) {
          var y = u.get(m.target);
          y == null || y(m);
        });
      }, {
        root: t,
        rootMargin: s,
        threshold: a
      });
      l = {
        observer: c,
        entryCallbacks: u
      }, e.set(i, l);
    }
    return {
      observe: function(m, y) {
        var v, M;
        (v = l) == null || v.entryCallbacks.set(m, y), (M = l) == null || M.observer.observe(m);
      },
      unobserve: function(m) {
        var y, v;
        (y = l) == null || y.entryCallbacks.delete(m), (v = l) == null || v.observer.unobserve(m);
      }
    };
  }
  return {
    getObserver: o
  };
}
var su = "0px", ou = [0], iu = /* @__PURE__ */ au();
function lu(r) {
  var o, n, t = (o = r == null ? void 0 : r.rootMargin) != null ? o : su, s = (n = r == null ? void 0 : r.threshold) != null ? n : ou, a = Ee(null), e = Ee(null), i = Ee(null), l = ae(), u = l[0], c = l[1], d = oe(function() {
    var M = a.current;
    if (!M) {
      c(void 0);
      return;
    }
    var w = iu.getObserver({
      root: e.current,
      rootMargin: t,
      threshold: s
    });
    w.observe(M, function(L) {
      c(L);
    }), i.current = w;
  }, [t, s]), m = oe(function() {
    var M = i.current, w = a.current;
    w && (M == null || M.unobserve(w)), i.current = null;
  }, []), y = oe(function(M) {
    m(), a.current = M, d();
  }, [d, m]), v = oe(function(M) {
    m(), e.current = M, d();
  }, [d, m]);
  return [y, {
    entry: u,
    rootRef: v
  }];
}
function It() {
  return It = Object.assign || function(r) {
    for (var o = 1; o < arguments.length; o++) {
      var n = arguments[o];
      for (var t in n)
        Object.prototype.hasOwnProperty.call(n, t) && (r[t] = n[t]);
    }
    return r;
  }, It.apply(this, arguments);
}
function uu(r) {
  var o, n = lu(r), t = n[0], s = n[1], a = !!((o = s.entry) != null && o.isIntersecting), e = ae(a), i = e[0], l = e[1];
  return a && !i && l(!0), [t, It({}, s, {
    isVisible: a,
    wasEverVisible: i
  })];
}
const _u = 100;
function du({
  loading: r,
  hasNextPage: o,
  onLoadMore: n,
  rootMargin: t,
  disabled: s,
  delayInMs: a = _u
}) {
  const [e, { rootRef: i, isVisible: l }] = uu({ rootMargin: t }), u = !s && !r && l && o;
  return ve(() => {
    if (u) {
      const c = setTimeout(() => {
        n();
      }, a);
      return () => {
        clearTimeout(c);
      };
    }
  }, [n, u, a]), [e, { rootRef: i }];
}
var pr = Object.prototype.hasOwnProperty;
function hr(r, o, n) {
  for (n of r.keys())
    if (ft(n, o))
      return n;
}
function ft(r, o) {
  var n, t, s;
  if (r === o)
    return !0;
  if (r && o && (n = r.constructor) === o.constructor) {
    if (n === Date)
      return r.getTime() === o.getTime();
    if (n === RegExp)
      return r.toString() === o.toString();
    if (n === Array) {
      if ((t = r.length) === o.length)
        for (; t-- && ft(r[t], o[t]); )
          ;
      return t === -1;
    }
    if (n === Set) {
      if (r.size !== o.size)
        return !1;
      for (t of r)
        if (s = t, s && typeof s == "object" && (s = hr(o, s), !s) || !o.has(s))
          return !1;
      return !0;
    }
    if (n === Map) {
      if (r.size !== o.size)
        return !1;
      for (t of r)
        if (s = t[0], s && typeof s == "object" && (s = hr(o, s), !s) || !ft(t[1], o.get(s)))
          return !1;
      return !0;
    }
    if (n === ArrayBuffer)
      r = new Uint8Array(r), o = new Uint8Array(o);
    else if (n === DataView) {
      if ((t = r.byteLength) === o.byteLength)
        for (; t-- && r.getInt8(t) === o.getInt8(t); )
          ;
      return t === -1;
    }
    if (ArrayBuffer.isView(r)) {
      if ((t = r.byteLength) === o.byteLength)
        for (; t-- && r[t] === o[t]; )
          ;
      return t === -1;
    }
    if (!n || typeof r == "object") {
      t = 0;
      for (n in r)
        if (pr.call(r, n) && ++t && !pr.call(o, n) || !(n in o) || !ft(r[n], o[n]))
          return !1;
      return Object.keys(o).length === t;
    }
  }
  return r !== r && o !== o;
}
var cu = { BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const mu = (r) => {
  if (!r || !r.length)
    throw new Error("useDeepCompareEffect should not be used with no dependencies. Use React.useEffect instead.");
  if (r.every(fu))
    throw new Error("useDeepCompareEffect should not be used with dependencies that are all primitive values. Use React.useEffect instead.");
}, fu = (r) => r == null || /^[sbn]/.test(typeof r), pu = (r) => {
  const o = Ce.useRef(r), n = Ce.useRef(0);
  return ft(r, o.current) || (o.current = r, n.current += 1), Ce.useMemo(() => o.current, [n.current]);
}, hu = (r, o) => (cu.NODE_ENV !== "production" && mu(o), Ce.useEffect(r, pu(o))), Mu = (r, o) => {
  const [n, t] = ae(() => {
    try {
      const s = window.localStorage.getItem(r);
      return s ? JSON.parse(s) : o;
    } catch (s) {
      return console.error(`Error retrieving ${r} from localStorage: `, s), o;
    }
  });
  return ve(() => {
    try {
      window.localStorage.setItem(r, JSON.stringify(n));
    } catch (s) {
      console.error(`Error setting ${r} to localStorage: `, s);
    }
  }, [r, n]), [n, t];
};
function zh(r) {
  const [o, n] = ae(r);
  return ve(() => {
    r && n(r);
  }, [r]), o;
}
const Ih = (r) => {
  const o = Ee();
  return ve(() => {
    r && (typeof r == "function" ? r(o.current) : r.current = o.current);
  }), o;
}, Fh = (r, o) => {
  const [n, t] = ae(!0), [s, a] = ae(r / 1e3);
  return ve(() => {
    if (n && s > 0) {
      const i = setTimeout(() => {
        a((l) => l - 1);
      }, 1e3);
      return () => clearTimeout(i);
    } else
      s === 0 && (o == null || o(), t(!1));
  }, [o, r, n, s]), { timeLeft: s, resetTimeout: () => {
    a(r / 1e3), t(!0);
  } };
};
function vu(r, o, n) {
  return ze(() => {
    const s = r.toLowerCase().replace(/\s+/g, ""), a = (e) => {
      var l;
      return (((l = e[n]) == null ? void 0 : l.toString()) || "").toLowerCase().replace(/\s+/g, "").includes(s);
    };
    return r ? o.filter(a) : o;
  }, [o, r, n]);
}
const Jh = (r, o) => {
  const [n, t] = ae(0), s = n === 0, a = r === n + 1;
  return { activeStep: n, setActiveStep: t, isLastStep: a, isFirstStep: s, handleNext: () => {
    var l;
    a || (t((u) => u + 1), (l = o == null ? void 0 : o.onNext) == null || l.call(o));
  }, handlePrev: () => {
    var l;
    s || (t((u) => u - 1), (l = o == null ? void 0 : o.onPrev) == null || l.call(o));
  } };
}, yu = () => {
  const [r, o] = ae(null);
  return ve(() => {
    let n = window.scrollY || document.documentElement.scrollTop;
    const t = () => {
      const s = window.scrollY || document.documentElement.scrollTop;
      s > n ? o("down") : o("up"), n = s <= 0 ? 0 : s;
    };
    return window.addEventListener("scroll", t), () => {
      window.removeEventListener("scroll", t);
    };
  }, []), { scrollDirection: r, setScrollDirection: o };
};
function Wr(r) {
  const {
    error: o,
    action: n,
    converter: t,
    params: s,
    open: a,
    searchMinCharacter: e = 0,
    limit: i = 20,
    searchQueryKey: l = "q",
    limitKey: u = "limit",
    hideSearch: c,
    disableInfiniteScroll: d
  } = r, [m, y] = ae(!1), [v, M] = ae(""), [w, L] = ae([]), [$, O] = ae(!1), [q, H] = ae(!0), [J, E] = ae(null), [C, G] = ae(!0), [Z, z] = ae(0);
  ve(() => {
    a && y(!0);
  }, [a]);
  const ne = oe(async (Y, R = {}) => {
    try {
      Y && (R = { ...R, [l]: Y }), typeof i == "number" && (R = { ...R, [u]: i });
      const h = await n(R), S = t(h);
      z(1), L(S), G(!(S.length < i));
    } catch (h) {
      console.error("Failed to search data", h);
    } finally {
      O(!1);
    }
  }, []), ue = async () => {
    try {
      O(!0);
      let Y = { ...s || {}, page: Z + 1 };
      v && (Y = { ...Y, [l]: v }), typeof i == "number" && (Y = { ...Y, [u]: i });
      const R = await n(Y), h = t(R);
      L((S) => [...S, ...h]), z((S) => S + 1), G(!(h.length < i));
    } catch (Y) {
      console.error("Failed to search data", Y);
    } finally {
      O(!1);
    }
  }, [I, { rootRef: x }] = du({
    loading: $,
    hasNextPage: C,
    onLoadMore: ue,
    disabled: !!o,
    rootMargin: "0px 0px 0px 0px"
  });
  ve(() => {
    if (d) {
      H(!1);
      return;
    }
    m && (L([]), z(0), G(!0), H(!0), J && clearTimeout(J), E(setTimeout(() => H(!1), 1e3)));
  }, [v, m, d]), hu(() => {
    !q && v.trim().length >= e && (O(!0), ne(v, s));
  }, [q, ne, s]);
  const D = vu(d ? v.trim() : "", d ? w : [], "label");
  return {
    infiniteRef: I,
    rootRef: x,
    typing: q,
    search: v,
    setSearch: M,
    results: d ? D : w,
    message: (() => {
      const Y = v.trim(), R = Y.length > 0, h = Y.length < e, S = R && d ? D.length === 0 : w.length === 0;
      if (!($ || q) && h && !c)
        return `Please enter at least ${e} characters to start searching.`;
      if (!($ || q) && S)
        return `No results found for "${Y}".`;
      if (!($ || q) && !d && !C)
        return "No more items.";
    })(),
    loading: $ || q,
    page: Z
  };
}
const Vt = le(
  ({ id: r, className: o, open: n, value: t, handleReset: s, placeholder: a, error: e, disabled: i }, l) => /* @__PURE__ */ _.jsxs(
    Be.Button,
    {
      ref: l,
      id: r,
      className: W(
        n && "open border-primary-600 bg-white",
        e ? "[&:not(.open)]:border-error-600 [&:not(.open)]:bg-error-50" : "[&:not(.open)]:border-gray-300 [&:not(.open)]:bg-white",
        "relative block h-10 w-full cursor-pointer rounded-lg border px-2 text-left text-sm text-gray-700 focus:outline-none",
        i && "!cursor-default !bg-gray-100",
        o
      ),
      children: [
        !!t && /* @__PURE__ */ _.jsx("span", { className: "block truncate", children: t }),
        !t && a && /* @__PURE__ */ _.jsx("span", { "aria-placeholder": a, className: "block truncate text-gray-400", children: a }),
        /* @__PURE__ */ _.jsxs(
          "span",
          {
            "aria-hidden": "true",
            className: W(
              "absolute inset-y-0 right-0 flex cursor-pointer items-center justify-center gap-2 px-2 text-gray-400",
              i && "cursor-default"
            ),
            children: [
              !!s && !!t && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
                /* @__PURE__ */ _.jsx(
                  "span",
                  {
                    className: W("flex items-center justify-center", !i && "hover:text-red-600"),
                    onClick: (u) => !i && (s == null ? void 0 : s(u)),
                    children: /* @__PURE__ */ _.jsx(it, { size: 18 })
                  }
                ),
                /* @__PURE__ */ _.jsx("span", { className: "block h-1/3 w-px bg-gray-400" })
              ] }),
              /* @__PURE__ */ _.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ _.jsx(zr, { size: 18 }) })
            ]
          }
        )
      ]
    }
  )
);
Vt.displayName = "ListboxButton";
const pt = ({ size: r, width: o, height: n, ...t }) => /* @__PURE__ */ _.jsx("svg", { viewBox: "0 0 24 24", stroke: "currentColor", strokeWidth: 3, width: r || o, height: r || n, ...t, children: /* @__PURE__ */ _.jsxs("g", { children: [
  /* @__PURE__ */ _.jsxs("circle", { cx: 12, cy: 12, r: 9.5, fill: "none", strokeLinecap: "round", children: [
    /* @__PURE__ */ _.jsx(
      "animate",
      {
        attributeName: "stroke-dasharray",
        calcMode: "spline",
        dur: "1.5s",
        keySplines: "0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1",
        keyTimes: "0;0.475;0.95;1",
        repeatCount: "indefinite",
        values: "0 150;42 150;42 150;42 150"
      }
    ),
    /* @__PURE__ */ _.jsx(
      "animate",
      {
        attributeName: "stroke-dashoffset",
        calcMode: "spline",
        dur: "1.5s",
        keySplines: "0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1",
        keyTimes: "0;0.475;0.95;1",
        repeatCount: "indefinite",
        values: "0;-16;-59;-59"
      }
    )
  ] }),
  /* @__PURE__ */ _.jsx("animateTransform", { attributeName: "transform", dur: "2s", repeatCount: "indefinite", type: "rotate", values: "0 12 12;360 12 12" })
] }) }), qt = le(
  ({ message: r, options: o, searchPlaceholder: n, isSingle: t, open: s, loading: a, value: e, search: i, endOfRoot: l }, u) => {
    const c = Ee(null);
    ve(() => {
      s && setTimeout(() => {
        var m;
        (m = c.current) == null || m.focus();
      }, 150);
    }, [s]);
    const d = (m) => {
      if (m.key === " ") {
        if (m.preventDefault(), !i)
          return;
        const y = m.target, { selectionStart: v, selectionEnd: M, value: w } = y, L = w.substring(0, v) + " " + w.substring(M);
        i.onValueChange(L);
        const $ = v + 1;
        setTimeout(() => {
          y.setSelectionRange($, $);
        });
      }
    };
    return /* @__PURE__ */ _.jsx(
      Re,
      {
        as: Je,
        leave: "transition ease-in",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ _.jsxs(Be.Options, { as: "div", className: "absolute z-20 mt-px w-full overflow-hidden rounded-lg border bg-white shadow-lg", children: [
          !!i && /* @__PURE__ */ _.jsx(
            "input",
            {
              ref: c,
              placeholder: n || "Search Option...",
              className: "block w-full border-b p-2 text-sm leading-6 outline-none",
              value: i == null ? void 0 : i.value,
              onClick: (m) => m.preventDefault(),
              onChange: (m) => i == null ? void 0 : i.onValueChange(m.currentTarget.value),
              onKeyDown: d
            }
          ),
          /* @__PURE__ */ _.jsxs("ul", { ref: u, className: "flex max-h-60 w-full flex-col overflow-auto focus:outline-none", children: [
            o.map((m, y) => {
              let v = !1;
              return e && (v = Array.isArray(e) ? e.map((M) => M.value).includes(m.value) : m.value === (e == null ? void 0 : e.value)), /* @__PURE__ */ _.jsx(
                Be.Option,
                {
                  className: ({ active: M }) => W(
                    "relative w-full cursor-default select-none py-2 text-sm",
                    v && "bg-primary-50",
                    M && "bg-primary-100",
                    t && "px-3",
                    !t && "pl-3 pr-10"
                  ),
                  value: m,
                  children: /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
                    /* @__PURE__ */ _.jsx("span", { className: "block truncate", children: m.label }),
                    v && !t ? /* @__PURE__ */ _.jsx("span", { className: "absolute inset-y-0 right-0 flex items-center pr-2 text-primary-600", children: /* @__PURE__ */ _.jsx(Ir, { className: "h-5 w-5", "aria-hidden": "true" }) }) : null
                  ] })
                },
                y
              );
            }),
            a && /* @__PURE__ */ _.jsx("li", { className: "flex flex-1 items-center justify-center py-12", children: /* @__PURE__ */ _.jsx(pt, { className: "block h-10 w-10 text-primary-600", strokeWidth: 1.5 }) }),
            r && /* @__PURE__ */ _.jsx("li", { className: "flex w-full flex-1 items-center justify-center px-2 py-8 text-center text-lg text-gray-600", children: r }),
            l
          ] })
        ] })
      }
    );
  }
);
qt.displayName = "ListboxOptions";
const Yu = (r) => {
  var G;
  const {
    className: o,
    error: n,
    id: t,
    onChange: s,
    placeholder: a,
    searchPlaceholder: e,
    toggleClassName: i,
    value: l = [],
    withReset: u,
    open: c,
    hideSearch: d,
    disableInfiniteScroll: m,
    disabled: y
  } = r, { infiniteRef: v, rootRef: M, results: w, search: L, setSearch: $, message: O, loading: q, page: H } = Wr(r), E = {
    id: t,
    error: !!n,
    className: i,
    handleReset: u ? (Z) => {
      Z.preventDefault(), s == null || s([]);
    } : void 0,
    value: ((G = l == null ? void 0 : l.map) == null ? void 0 : G.call(l, (Z) => (Z == null ? void 0 : Z.label) || (Z == null ? void 0 : Z.value) || "").filter((Z) => !!Z).join(", ")) || "",
    placeholder: a,
    disabled: y
  }, C = {
    options: w,
    searchPlaceholder: e,
    message: O,
    search: d ? void 0 : { value: L, onValueChange: $ },
    loading: q,
    value: l
  };
  return /* @__PURE__ */ _.jsxs("div", { className: W("relative", o), children: [
    /* @__PURE__ */ _.jsx(Vt, { open: c, ...E }),
    /* @__PURE__ */ _.jsx(
      qt,
      {
        ref: M,
        endOfRoot: H > 0 && !m && c && !q && /* @__PURE__ */ _.jsx("li", { className: "h-px w-full", ref: v }),
        open: c,
        ...C
      }
    )
  ] });
}, bu = (r) => {
  const { name: o, disabled: n, onChange: t, onValueChange: s, ...a } = r, e = (i) => {
    t == null || t(i), s == null || s(i);
  };
  return /* @__PURE__ */ _.jsx(Be, { multiple: !0, name: o, disabled: n, value: a.value || [], by: "value", onChange: e, children: ({ open: i }) => /* @__PURE__ */ _.jsx(Yu, { open: i, onChange: e, ...a }) });
}, Bh = (r) => {
  const { id: o, name: n, help: t, label: s, labelRequired: a, error: e, className: i, wrapperClassName: l, ...u } = r;
  return /* @__PURE__ */ _.jsx(
    Pe,
    {
      htmlFor: o || n,
      wrapperClassName: W("relative mb-1", l),
      label: s,
      labelRequired: a,
      error: e,
      className: i,
      help: t,
      children: /* @__PURE__ */ _.jsx(bu, { id: o || n, name: n, error: e, ...u })
    }
  );
}, gu = (r) => {
  const {
    className: o,
    error: n,
    id: t,
    onChange: s,
    placeholder: a,
    searchPlaceholder: e,
    toggleClassName: i,
    value: l,
    withReset: u,
    open: c,
    hideSearch: d,
    disableInfiniteScroll: m,
    disabled: y
  } = r, { infiniteRef: v, rootRef: M, results: w, search: L, setSearch: $, message: O, loading: q, page: H } = Wr(r), E = {
    id: t,
    error: !!n,
    className: i,
    handleReset: u ? (G) => {
      G.preventDefault(), s == null || s(null);
    } : void 0,
    value: (l == null ? void 0 : l.label) || (l == null ? void 0 : l.value) || "",
    placeholder: a,
    disabled: y
  }, C = {
    options: w,
    searchPlaceholder: e,
    message: O,
    search: d ? void 0 : { value: L, onValueChange: $ },
    loading: q,
    value: l
  };
  return /* @__PURE__ */ _.jsxs("div", { className: W("relative", o), children: [
    /* @__PURE__ */ _.jsx(Vt, { open: c, ...E }),
    /* @__PURE__ */ _.jsx(
      qt,
      {
        ref: M,
        endOfRoot: H > 0 && !m && c && !q && /* @__PURE__ */ _.jsx("li", { className: "h-px w-full", ref: v }),
        open: c,
        isSingle: !0,
        ...C
      }
    )
  ] });
}, Lu = (r) => {
  const { name: o, disabled: n, onChange: t, onValueChange: s, ...a } = r, e = (i) => {
    t == null || t(i), s == null || s(i);
  };
  return /* @__PURE__ */ _.jsx(Be, { name: o, disabled: n, value: a.value || null, by: "value", onChange: e, children: ({ open: i }) => /* @__PURE__ */ _.jsx(gu, { open: i, onChange: e, disabled: n, ...a }) });
}, Wh = (r) => {
  const { id: o, name: n, help: t, label: s, labelRequired: a, error: e, className: i, wrapperClassName: l, ...u } = r;
  return /* @__PURE__ */ _.jsx(
    Pe,
    {
      htmlFor: o || n,
      wrapperClassName: W("relative mb-1", l),
      label: s,
      labelRequired: a,
      error: e,
      className: i,
      help: t,
      children: /* @__PURE__ */ _.jsx(Lu, { id: o || n, name: n, error: e, ...u })
    }
  );
}, xu = le(({ name: r, src: o, size: n = 40, className: t, ...s }, a) => {
  let e = "";
  if (!o) {
    let i = "";
    const l = r.split(/[ -]/);
    for (let u = 0; u < l.length && !(i.length >= 2); u++) {
      const c = l[u].charAt(0);
      i += c;
    }
    e = i.toUpperCase();
  }
  return /* @__PURE__ */ _.jsx(
    "span",
    {
      ref: a,
      className: W("relative flex items-center justify-center rounded-lg text-center font-semibold", t),
      style: { height: n, width: n },
      ...s,
      children: o ? /* @__PURE__ */ _.jsx("img", { alt: r, height: n, width: n, src: o, className: "block h-full w-full rounded object-cover" }) : e
    }
  );
});
xu.displayName = "Avatar";
const bt = le((r, o) => {
  const { as: n = "span", size: t, color: s, className: a, children: e, ...i } = r;
  return /* @__PURE__ */ _.jsx(n, { ref: o, className: W(wu(t), ku(s), "inline-block rounded", a), ...i, children: e });
}), ku = Ke({
  default: "text-secondary-800 bg-secondary-100",
  primary: "text-primary-800 bg-primary-100",
  success: "text-success-800 bg-success-100",
  warning: "text-warning-800 bg-warning-100",
  error: "text-error-800 bg-error-100"
}), wu = Ke({
  default: "px-2 py-0.5 text-sm",
  small: "px-1 py-0.5 text-xs",
  large: "px-3 py-1"
});
bt.displayName = "Badge";
const Kr = le((r, o) => {
  const { as: n = "span", text: t, active: s, hoverable: a, className: e, ...i } = r;
  return /* @__PURE__ */ _.jsx(
    n,
    {
      ref: o,
      className: W(
        a && "hoverable",
        s && "active",
        "text-gray-500 [&.active]:text-primary-600 [&.hoverable]:cursor-pointer hover:[&.hoverable]:text-primary-600",
        e
      ),
      ...i,
      children: t
    }
  );
});
Kr.displayName = "BreadcrumbLink";
const Vr = le(
  ({ separator: r = Il, className: o, wrapperClassName: n, actions: t, actionsWrapperClassName: s, links: a, ...e }, i) => /* @__PURE__ */ _.jsxs("nav", { ref: i, className: W("flex items-center justify-between", o), children: [
    /* @__PURE__ */ _.jsx("ul", { className: W("flex gap-3", n), ...e, children: a.map((l, u) => /* @__PURE__ */ _.jsxs("ol", { className: "flex items-center justify-center gap-2 text-sm", children: [
      /* @__PURE__ */ _.jsx(Kr, { ...l }),
      u < a.length - 1 && /* @__PURE__ */ _.jsx(r, { className: "block h-4 w-4 text-gray-400" })
    ] }, u)) }),
    !!t && /* @__PURE__ */ _.jsx("div", { className: s, children: t })
  ] })
);
Vr.displayName = "Breadcrumb";
const ot = le((r, o) => {
  const {
    as: n = "button",
    size: t,
    color: s,
    variant: a,
    loading: e,
    block: i,
    className: l,
    disabled: u,
    iconOnly: c,
    leftChild: d,
    rightChild: m,
    children: y,
    ...v
  } = r;
  return /* @__PURE__ */ _.jsxs(
    n,
    {
      ref: o,
      disabled: u,
      className: W(
        Mr(t).btn,
        Du(s)[a || "default"],
        u && "disabled",
        e && "loading",
        c && "icon-only",
        i ? "flex w-full" : "inline-flex",
        "relative items-center justify-center rounded-lg border text-center font-semibold transition-all disabled:opacity-80 [&.disabled]:cursor-default [&.disabled]:opacity-80",
        l
      ),
      ...v,
      children: [
        d,
        /* @__PURE__ */ _.jsx("span", { className: xe(e && "text-transparent"), children: y }),
        m,
        e && /* @__PURE__ */ _.jsx("span", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ _.jsx(pt, { className: xe(Mr(t).spinner, "block") }) })
      ]
    }
  );
}), Du = Ke({
  default: {
    default: "border-secondary-600 bg-secondary-600 text-white hover:[&:not(:disabled)]:[&:not(.disabled)]:border-secondary-700 hover:[&:not(:disabled)]:[&:not(.disabled)]:bg-secondary-700 hover:[&:not(:disabled)]:[&:not(.disabled)]:text-white",
    light: "border-secondary-100 bg-secondary-100 text-secondary-600 hover:[&:not(:disabled)]:[&:not(.disabled)]:border-secondary-200 hover:[&:not(:disabled)]:[&:not(.disabled)]:bg-secondary-200",
    outline: "border-secondary-300 text-secondary-600 hover:[&:not(:disabled)]:[&:not(.disabled)]:border-secondary-200 hover:[&:not(:disabled)]:[&:not(.disabled)]:bg-secondary-100"
  },
  primary: {
    default: "border-primary-600 bg-primary-600 text-white hover:[&:not(:disabled)]:[&:not(.disabled)]:border-primary-700 hover:[&:not(:disabled)]:[&:not(.disabled)]:bg-primary-700 hover:[&:not(:disabled)]:[&:not(.disabled)]:text-white",
    light: "border-primary-100 bg-primary-100 text-primary-600 hover:[&:not(:disabled)]:[&:not(.disabled)]:border-primary-200 hover:[&:not(:disabled)]:[&:not(.disabled)]:bg-primary-200",
    outline: "border-primary-300  text-primary-600 hover:[&:not(:disabled)]:[&:not(.disabled)]:border-primary-200 hover:[&:not(:disabled)]:[&:not(.disabled)]:bg-primary-100"
  },
  success: {
    default: "border-success-600 bg-success-600 text-white hover:[&:not(:disabled)]:[&:not(.disabled)]:border-success-700 hover:[&:not(:disabled)]:[&:not(.disabled)]:bg-success-700 hover:[&:not(:disabled)]:[&:not(.disabled)]:text-white",
    light: "border-success-100 bg-success-100 text-success-600 hover:[&:not(:disabled)]:[&:not(.disabled)]:border-success-200 hover:[&:not(:disabled)]:[&:not(.disabled)]:bg-success-200",
    outline: "border-success-300 text-success-600 hover:[&:not(:disabled)]:[&:not(.disabled)]:border-success-200 hover:[&:not(:disabled)]:[&:not(.disabled)]:bg-success-100"
  },
  warning: {
    default: "border-warning-600 bg-warning-600 text-white hover:[&:not(:disabled)]:[&:not(.disabled)]:border-warning-700 hover:[&:not(:disabled)]:[&:not(.disabled)]:bg-warning-700 hover:[&:not(:disabled)]:[&:not(.disabled)]:text-white",
    light: "border-warning-100 bg-warning-100 text-warning-600 hover:[&:not(:disabled)]:[&:not(.disabled)]:border-warning-200 hover:[&:not(:disabled)]:[&:not(.disabled)]:bg-warning-200",
    outline: "border-warning-300 text-warning-600 hover:[&:not(:disabled)]:[&:not(.disabled)]:border-warning-200 hover:[&:not(:disabled)]:[&:not(.disabled)]:bg-warning-100"
  },
  error: {
    default: "border-error-600 bg-error-600 text-white hover:[&:not(:disabled)]:[&:not(.disabled)]:border-error-700 hover:[&:not(:disabled)]:[&:not(.disabled)]:bg-error-700 hover:[&:not(:disabled)]:[&:not(.disabled)]:text-white",
    light: "border-error-100 bg-error-100 text-error-600 hover:[&:not(:disabled)]:[&:not(.disabled)]:border-error-200 hover:[&:not(:disabled)]:[&:not(.disabled)]:bg-error-200",
    outline: "border-error-300 text-error-600 hover:[&:not(:disabled)]:[&:not(.disabled)]:border-error-200 hover:[&:not(:disabled)]:[&:not(.disabled)]:bg-error-100"
  }
}), Mr = Ke({
  default: {
    btn: "px-3 text-sm gap-1 h-10 [&.icon-only]:w-10 [&.icon-only]:px-0",
    spinner: "h-5 w-5"
  },
  small: {
    btn: "px-2 text-sm gap-1 h-8 [&.icon-only]:w-8 [&.icon-only]:px-0",
    spinner: "h-4 w-4"
  },
  large: {
    btn: "px-4 gap-2 h-12 [&.icon-only]:w-12 [&.icon-only]:px-0",
    spinner: "h-6 w-6"
  }
});
ot.displayName = "Button";
const qr = le(({ as: r = "div", hoverable: o, className: n, ...t }, s) => {
  const a = typeof o == "string" ? o : "default";
  return /* @__PURE__ */ _.jsx(
    r,
    {
      ref: s,
      className: W(
        "block divide-y rounded-lg border bg-white transition-colors [&>*]:transition-colors",
        !!o && Su(a),
        n
      ),
      ...t
    }
  );
}), Su = Ke({
  default: "border-secondary-200 divide-secondary-200 bg-secondary-100 hover:bg-secondary-200 hover:border-secondary-300 hover:divide-secondary-300",
  primary: "border-primary-200 divide-primary-200 bg-primary-100 hover:bg-primary-200 hover:border-primary-300 hover:divide-primary-300",
  success: "border-success-200 divide-success-200 bg-success-100 hover:bg-success-200 hover:border-success-300 hover:divide-success-300",
  warning: "border-warning-200 divide-warning-200 bg-warning-100 hover:bg-warning-200 hover:border-warning-300 hover:divide-warning-300",
  error: "border-error-200 divide-error-200 bg-error-100 hover:bg-error-200 hover:border-error-300 hover:divide-error-300"
});
qr.displayName = "Card";
const Ur = le(({ as: r = "div", className: o, ...n }, t) => /* @__PURE__ */ _.jsx(r, { ref: t, className: W("block p-3", o), ...n }));
Ur.displayName = "CardBody";
const Gr = le(({ as: r = "div", className: o, ...n }, t) => /* @__PURE__ */ _.jsx(r, { ref: t, className: W("flex justify-end gap-3 p-3", o), ...n }));
Gr.displayName = "CardFooter";
const ju = le((r, o) => {
  const {
    as: n = "div",
    titleAs: t = "div",
    className: s,
    titleClassName: a,
    actionsWrapperClassName: e,
    actions: i,
    children: l,
    ...u
  } = r;
  return /* @__PURE__ */ _.jsxs(n, { ref: o, className: W("flex items-center p-3", s), ...u, children: [
    /* @__PURE__ */ _.jsx(t, { className: W("flex-1", a), children: l }),
    !!i && /* @__PURE__ */ _.jsx("div", { className: W("flex items-center justify-center gap-3", e), children: i })
  ] });
});
ju.displayName = "CardHeader";
const Ut = le(
  ({ className: r, disableBackdropClick: o, hideBackdrop: n, hideCloseButton: t, onClose: s, show: a, wrapperClassName: e, children: i, ...l }, u) => /* @__PURE__ */ _.jsx(Re, { appear: !0, show: a, as: Je, children: /* @__PURE__ */ _.jsxs(Mt, { as: "div", className: "relative z-[99]", onClose: () => !o && (s == null ? void 0 : s()), children: [
    !n && /* @__PURE__ */ _.jsx(
      Re.Child,
      {
        as: Je,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ _.jsx("div", { className: "fixed inset-0 bg-black/25" })
      }
    ),
    !t && s && /* @__PURE__ */ _.jsx(
      Re.Child,
      {
        as: Je,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-95",
        children: /* @__PURE__ */ _.jsx("button", { className: "fixed right-3 top-3 z-[999] text-error-600 hover:text-error-700 focus:outline-none", onClick: s, children: /* @__PURE__ */ _.jsx(Fl, { size: 32, fill: "white" }) })
      }
    ),
    /* @__PURE__ */ _.jsx("div", { className: "fixed inset-0 overflow-y-auto", children: /* @__PURE__ */ _.jsx("div", { className: W("flex min-h-full items-center justify-center p-4 text-center", e), children: /* @__PURE__ */ _.jsx(
      Re.Child,
      {
        as: Je,
        enter: "ease-out duration-300",
        enterFrom: "opacity-0 scale-95",
        enterTo: "opacity-100 scale-100",
        leave: "ease-in duration-200",
        leaveFrom: "opacity-100 scale-100",
        leaveTo: "opacity-0 scale-95",
        children: /* @__PURE__ */ _.jsx(
          Mt.Panel,
          {
            ref: u,
            className: W(
              "relative w-full max-w-2xl divide-y rounded-lg bg-white text-left shadow-xl transition-all",
              r
            ),
            ...l,
            children: i
          }
        )
      }
    ) }) })
  ] }) })
);
Ut.displayName = "Modal";
const Hu = le(({ as: r = "div", className: o, ...n }, t) => /* @__PURE__ */ _.jsx(r, { ref: t, className: W("flex justify-end gap-3 p-3", o), ...n }));
Hu.displayName = "ModalFooter";
const Tu = le(({ as: r = "div", subTitle: o, children: n, className: t, onClose: s, ...a }, e) => /* @__PURE__ */ _.jsxs(
  r,
  {
    ref: e,
    className: W("flex items-center justify-between p-3", !s && "justify-center py-6 text-center", t),
    ...a,
    children: [
      /* @__PURE__ */ _.jsxs("div", { className: "flex min-h-12 flex-col justify-center leading-none", children: [
        /* @__PURE__ */ _.jsx("h3", { className: "text-lg font-semibold", children: n }),
        o && /* @__PURE__ */ _.jsx("span", { className: "block text-sm", children: o })
      ] }),
      s && /* @__PURE__ */ _.jsx(ot, { title: "Close modal", type: "button", iconOnly: !0, color: "error", variant: "light", onClick: s, children: /* @__PURE__ */ _.jsx(it, { size: 18 }) })
    ]
  }
));
Tu.displayName = "ModalHeader";
const Eu = le(({ as: r = "div", children: o, className: n, onClose: t, show: s, ...a }, e) => /* @__PURE__ */ _.jsx(Re, { as: Je, show: !!s, children: /* @__PURE__ */ _.jsxs(Mt, { as: "div", className: "relative z-50", onClose: () => t == null ? void 0 : t(), children: [
  /* @__PURE__ */ _.jsx(
    Re.Child,
    {
      as: Je,
      enter: "ease-in-out duration-200",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leave: "ease-in-out duration-200",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
      children: /* @__PURE__ */ _.jsx("div", { className: "fixed inset-0 bg-black/25" })
    }
  ),
  /* @__PURE__ */ _.jsx("div", { className: "fixed inset-0 flex h-full justify-end", children: /* @__PURE__ */ _.jsx(
    Re.Child,
    {
      as: Je,
      enter: "ease-in-out duration-200",
      enterFrom: "-right-full",
      enterTo: "right-0",
      leave: "ease-in-out duration-200",
      leaveFrom: "right-0",
      leaveTo: "-right-full",
      children: /* @__PURE__ */ _.jsx(
        Mt.Panel,
        {
          as: r,
          ref: e,
          className: W(
            "relative flex h-full w-full max-w-5xl transform flex-col overflow-hidden bg-gray-200 shadow-xl transition-all",
            n
          ),
          ...a,
          children: o
        }
      )
    }
  ) })
] }) }));
Eu.displayName = "SideModal";
const Nu = (r) => /* @__PURE__ */ _.jsxs(Ut, { show: !!r.isShow, className: "max-w-md divide-y-0 p-6", children: [
  /* @__PURE__ */ _.jsx("div", { className: "mb-3 flex justify-center pt-8", children: $u(r.icon || "primary") }),
  /* @__PURE__ */ _.jsxs("div", { className: "mb-3", children: [
    /* @__PURE__ */ _.jsx("h3", { className: "text-center text-2xl font-bold", children: r.title || "Are you sure?" }),
    !!r.text && /* @__PURE__ */ _.jsx("p", { className: "text-center text-sm", children: r.text })
  ] }),
  /* @__PURE__ */ _.jsxs("div", { className: "flex items-center justify-center gap-3 p-3", children: [
    /* @__PURE__ */ _.jsx(
      ot,
      {
        type: "button",
        color: r.confirmBtnColor || "primary",
        variant: r.confirmBtnVariant,
        className: W("w-32", r.confirmBtnClass),
        onClick: r.onConfirm,
        children: r.confirmBtnText || "Yes, do it!"
      }
    ),
    /* @__PURE__ */ _.jsx(
      ot,
      {
        type: "button",
        color: r.cancelBtnColor || "error",
        variant: r.cancelBtnVariant,
        className: W("w-32", r.cancelBtnClass),
        onClick: r.onCancel,
        children: r.cancelBtnText || "Cancel"
      }
    )
  ] })
] }), $u = Ke({
  primary: /* @__PURE__ */ _.jsx(Dt, { className: "text-primary-500", size: 100 }),
  warning: /* @__PURE__ */ _.jsx(Dt, { className: "text-warning-500", size: 100 }),
  error: /* @__PURE__ */ _.jsx(Dt, { className: "text-error-500", size: 100 })
}), vt = le(({ as: r = "div", className: o, ...n }, t) => /* @__PURE__ */ _.jsx(r, { className: W("mx-auto block w-full px-3 xl:px-8", o), ref: t, ...n }));
vt.displayName = "Container";
var Ft = { exports: {} }, ht = { exports: {} }, he = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vr;
function Cu() {
  if (vr)
    return he;
  vr = 1;
  var r = typeof Symbol == "function" && Symbol.for, o = r ? Symbol.for("react.element") : 60103, n = r ? Symbol.for("react.portal") : 60106, t = r ? Symbol.for("react.fragment") : 60107, s = r ? Symbol.for("react.strict_mode") : 60108, a = r ? Symbol.for("react.profiler") : 60114, e = r ? Symbol.for("react.provider") : 60109, i = r ? Symbol.for("react.context") : 60110, l = r ? Symbol.for("react.async_mode") : 60111, u = r ? Symbol.for("react.concurrent_mode") : 60111, c = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, m = r ? Symbol.for("react.suspense_list") : 60120, y = r ? Symbol.for("react.memo") : 60115, v = r ? Symbol.for("react.lazy") : 60116, M = r ? Symbol.for("react.block") : 60121, w = r ? Symbol.for("react.fundamental") : 60117, L = r ? Symbol.for("react.responder") : 60118, $ = r ? Symbol.for("react.scope") : 60119;
  function O(H) {
    if (typeof H == "object" && H !== null) {
      var J = H.$$typeof;
      switch (J) {
        case o:
          switch (H = H.type, H) {
            case l:
            case u:
            case t:
            case a:
            case s:
            case d:
              return H;
            default:
              switch (H = H && H.$$typeof, H) {
                case i:
                case c:
                case v:
                case y:
                case e:
                  return H;
                default:
                  return J;
              }
          }
        case n:
          return J;
      }
    }
  }
  function q(H) {
    return O(H) === u;
  }
  return he.AsyncMode = l, he.ConcurrentMode = u, he.ContextConsumer = i, he.ContextProvider = e, he.Element = o, he.ForwardRef = c, he.Fragment = t, he.Lazy = v, he.Memo = y, he.Portal = n, he.Profiler = a, he.StrictMode = s, he.Suspense = d, he.isAsyncMode = function(H) {
    return q(H) || O(H) === l;
  }, he.isConcurrentMode = q, he.isContextConsumer = function(H) {
    return O(H) === i;
  }, he.isContextProvider = function(H) {
    return O(H) === e;
  }, he.isElement = function(H) {
    return typeof H == "object" && H !== null && H.$$typeof === o;
  }, he.isForwardRef = function(H) {
    return O(H) === c;
  }, he.isFragment = function(H) {
    return O(H) === t;
  }, he.isLazy = function(H) {
    return O(H) === v;
  }, he.isMemo = function(H) {
    return O(H) === y;
  }, he.isPortal = function(H) {
    return O(H) === n;
  }, he.isProfiler = function(H) {
    return O(H) === a;
  }, he.isStrictMode = function(H) {
    return O(H) === s;
  }, he.isSuspense = function(H) {
    return O(H) === d;
  }, he.isValidElementType = function(H) {
    return typeof H == "string" || typeof H == "function" || H === t || H === u || H === a || H === s || H === d || H === m || typeof H == "object" && H !== null && (H.$$typeof === v || H.$$typeof === y || H.$$typeof === e || H.$$typeof === i || H.$$typeof === c || H.$$typeof === w || H.$$typeof === L || H.$$typeof === $ || H.$$typeof === M);
  }, he.typeOf = O, he;
}
var Me = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yr;
function Au() {
  return yr || (yr = 1, process.env.NODE_ENV !== "production" && function() {
    var r = typeof Symbol == "function" && Symbol.for, o = r ? Symbol.for("react.element") : 60103, n = r ? Symbol.for("react.portal") : 60106, t = r ? Symbol.for("react.fragment") : 60107, s = r ? Symbol.for("react.strict_mode") : 60108, a = r ? Symbol.for("react.profiler") : 60114, e = r ? Symbol.for("react.provider") : 60109, i = r ? Symbol.for("react.context") : 60110, l = r ? Symbol.for("react.async_mode") : 60111, u = r ? Symbol.for("react.concurrent_mode") : 60111, c = r ? Symbol.for("react.forward_ref") : 60112, d = r ? Symbol.for("react.suspense") : 60113, m = r ? Symbol.for("react.suspense_list") : 60120, y = r ? Symbol.for("react.memo") : 60115, v = r ? Symbol.for("react.lazy") : 60116, M = r ? Symbol.for("react.block") : 60121, w = r ? Symbol.for("react.fundamental") : 60117, L = r ? Symbol.for("react.responder") : 60118, $ = r ? Symbol.for("react.scope") : 60119;
    function O(P) {
      return typeof P == "string" || typeof P == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      P === t || P === u || P === a || P === s || P === d || P === m || typeof P == "object" && P !== null && (P.$$typeof === v || P.$$typeof === y || P.$$typeof === e || P.$$typeof === i || P.$$typeof === c || P.$$typeof === w || P.$$typeof === L || P.$$typeof === $ || P.$$typeof === M);
    }
    function q(P) {
      if (typeof P == "object" && P !== null) {
        var fe = P.$$typeof;
        switch (fe) {
          case o:
            var He = P.type;
            switch (He) {
              case l:
              case u:
              case t:
              case a:
              case s:
              case d:
                return He;
              default:
                var Se = He && He.$$typeof;
                switch (Se) {
                  case i:
                  case c:
                  case v:
                  case y:
                  case e:
                    return Se;
                  default:
                    return fe;
                }
            }
          case n:
            return fe;
        }
      }
    }
    var H = l, J = u, E = i, C = e, G = o, Z = c, z = t, ne = v, ue = y, I = n, x = a, D = s, j = d, Y = !1;
    function R(P) {
      return Y || (Y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), h(P) || q(P) === l;
    }
    function h(P) {
      return q(P) === u;
    }
    function S(P) {
      return q(P) === i;
    }
    function B(P) {
      return q(P) === e;
    }
    function F(P) {
      return typeof P == "object" && P !== null && P.$$typeof === o;
    }
    function V(P) {
      return q(P) === c;
    }
    function Q(P) {
      return q(P) === t;
    }
    function re(P) {
      return q(P) === v;
    }
    function X(P) {
      return q(P) === y;
    }
    function ee(P) {
      return q(P) === n;
    }
    function se(P) {
      return q(P) === a;
    }
    function te(P) {
      return q(P) === s;
    }
    function ce(P) {
      return q(P) === d;
    }
    Me.AsyncMode = H, Me.ConcurrentMode = J, Me.ContextConsumer = E, Me.ContextProvider = C, Me.Element = G, Me.ForwardRef = Z, Me.Fragment = z, Me.Lazy = ne, Me.Memo = ue, Me.Portal = I, Me.Profiler = x, Me.StrictMode = D, Me.Suspense = j, Me.isAsyncMode = R, Me.isConcurrentMode = h, Me.isContextConsumer = S, Me.isContextProvider = B, Me.isElement = F, Me.isForwardRef = V, Me.isFragment = Q, Me.isLazy = re, Me.isMemo = X, Me.isPortal = ee, Me.isProfiler = se, Me.isStrictMode = te, Me.isSuspense = ce, Me.isValidElementType = O, Me.typeOf = q;
  }()), Me;
}
var Yr;
function Zr() {
  return Yr || (Yr = 1, process.env.NODE_ENV === "production" ? ht.exports = Cu() : ht.exports = Au()), ht.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var jt, br;
function Pu() {
  if (br)
    return jt;
  br = 1;
  var r = Object.getOwnPropertySymbols, o = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function t(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var e = {}, i = 0; i < 10; i++)
        e["_" + String.fromCharCode(i)] = i;
      var l = Object.getOwnPropertyNames(e).map(function(c) {
        return e[c];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var u = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        u[c] = c;
      }), Object.keys(Object.assign({}, u)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return jt = s() ? Object.assign : function(a, e) {
    for (var i, l = t(a), u, c = 1; c < arguments.length; c++) {
      i = Object(arguments[c]);
      for (var d in i)
        o.call(i, d) && (l[d] = i[d]);
      if (r) {
        u = r(i);
        for (var m = 0; m < u.length; m++)
          n.call(i, u[m]) && (l[u[m]] = i[u[m]]);
      }
    }
    return l;
  }, jt;
}
var Ht, gr;
function Gt() {
  if (gr)
    return Ht;
  gr = 1;
  var r = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ht = r, Ht;
}
var Tt, Lr;
function Xr() {
  return Lr || (Lr = 1, Tt = Function.call.bind(Object.prototype.hasOwnProperty)), Tt;
}
var Et, xr;
function Ou() {
  if (xr)
    return Et;
  xr = 1;
  var r = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var o = Gt(), n = {}, t = Xr();
    r = function(a) {
      var e = "Warning: " + a;
      typeof console < "u" && console.error(e);
      try {
        throw new Error(e);
      } catch {
      }
    };
  }
  function s(a, e, i, l, u) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in a)
        if (t(a, c)) {
          var d;
          try {
            if (typeof a[c] != "function") {
              var m = Error(
                (l || "React class") + ": " + i + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            d = a[c](e, c, l, i, null, o);
          } catch (v) {
            d = v;
          }
          if (d && !(d instanceof Error) && r(
            (l || "React class") + ": type specification of " + i + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var y = u ? u() : "";
            r(
              "Failed " + i + " type: " + d.message + (y ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Et = s, Et;
}
var Nt, kr;
function Ru() {
  if (kr)
    return Nt;
  kr = 1;
  var r = Zr(), o = Pu(), n = Gt(), t = Xr(), s = Ou(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(i) {
    var l = "Warning: " + i;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function e() {
    return null;
  }
  return Nt = function(i, l) {
    var u = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function d(h) {
      var S = h && (u && h[u] || h[c]);
      if (typeof S == "function")
        return S;
    }
    var m = "<<anonymous>>", y = {
      array: L("array"),
      bigint: L("bigint"),
      bool: L("boolean"),
      func: L("function"),
      number: L("number"),
      object: L("object"),
      string: L("string"),
      symbol: L("symbol"),
      any: $(),
      arrayOf: O,
      element: q(),
      elementType: H(),
      instanceOf: J,
      node: Z(),
      objectOf: C,
      oneOf: E,
      oneOfType: G,
      shape: ne,
      exact: ue
    };
    function v(h, S) {
      return h === S ? h !== 0 || 1 / h === 1 / S : h !== h && S !== S;
    }
    function M(h, S) {
      this.message = h, this.data = S && typeof S == "object" ? S : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function w(h) {
      if (process.env.NODE_ENV !== "production")
        var S = {}, B = 0;
      function F(Q, re, X, ee, se, te, ce) {
        if (ee = ee || m, te = te || X, ce !== n) {
          if (l) {
            var P = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw P.name = "Invariant Violation", P;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var fe = ee + ":" + X;
            !S[fe] && // Avoid spamming the console because they are often not actionable except for lib authors
            B < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + te + "` prop on `" + ee + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), S[fe] = !0, B++);
          }
        }
        return re[X] == null ? Q ? re[X] === null ? new M("The " + se + " `" + te + "` is marked as required " + ("in `" + ee + "`, but its value is `null`.")) : new M("The " + se + " `" + te + "` is marked as required in " + ("`" + ee + "`, but its value is `undefined`.")) : null : h(re, X, ee, se, te);
      }
      var V = F.bind(null, !1);
      return V.isRequired = F.bind(null, !0), V;
    }
    function L(h) {
      function S(B, F, V, Q, re, X) {
        var ee = B[F], se = D(ee);
        if (se !== h) {
          var te = j(ee);
          return new M(
            "Invalid " + Q + " `" + re + "` of type " + ("`" + te + "` supplied to `" + V + "`, expected ") + ("`" + h + "`."),
            { expectedType: h }
          );
        }
        return null;
      }
      return w(S);
    }
    function $() {
      return w(e);
    }
    function O(h) {
      function S(B, F, V, Q, re) {
        if (typeof h != "function")
          return new M("Property `" + re + "` of component `" + V + "` has invalid PropType notation inside arrayOf.");
        var X = B[F];
        if (!Array.isArray(X)) {
          var ee = D(X);
          return new M("Invalid " + Q + " `" + re + "` of type " + ("`" + ee + "` supplied to `" + V + "`, expected an array."));
        }
        for (var se = 0; se < X.length; se++) {
          var te = h(X, se, V, Q, re + "[" + se + "]", n);
          if (te instanceof Error)
            return te;
        }
        return null;
      }
      return w(S);
    }
    function q() {
      function h(S, B, F, V, Q) {
        var re = S[B];
        if (!i(re)) {
          var X = D(re);
          return new M("Invalid " + V + " `" + Q + "` of type " + ("`" + X + "` supplied to `" + F + "`, expected a single ReactElement."));
        }
        return null;
      }
      return w(h);
    }
    function H() {
      function h(S, B, F, V, Q) {
        var re = S[B];
        if (!r.isValidElementType(re)) {
          var X = D(re);
          return new M("Invalid " + V + " `" + Q + "` of type " + ("`" + X + "` supplied to `" + F + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return w(h);
    }
    function J(h) {
      function S(B, F, V, Q, re) {
        if (!(B[F] instanceof h)) {
          var X = h.name || m, ee = R(B[F]);
          return new M("Invalid " + Q + " `" + re + "` of type " + ("`" + ee + "` supplied to `" + V + "`, expected ") + ("instance of `" + X + "`."));
        }
        return null;
      }
      return w(S);
    }
    function E(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), e;
      function S(B, F, V, Q, re) {
        for (var X = B[F], ee = 0; ee < h.length; ee++)
          if (v(X, h[ee]))
            return null;
        var se = JSON.stringify(h, function(ce, P) {
          var fe = j(P);
          return fe === "symbol" ? String(P) : P;
        });
        return new M("Invalid " + Q + " `" + re + "` of value `" + String(X) + "` " + ("supplied to `" + V + "`, expected one of " + se + "."));
      }
      return w(S);
    }
    function C(h) {
      function S(B, F, V, Q, re) {
        if (typeof h != "function")
          return new M("Property `" + re + "` of component `" + V + "` has invalid PropType notation inside objectOf.");
        var X = B[F], ee = D(X);
        if (ee !== "object")
          return new M("Invalid " + Q + " `" + re + "` of type " + ("`" + ee + "` supplied to `" + V + "`, expected an object."));
        for (var se in X)
          if (t(X, se)) {
            var te = h(X, se, V, Q, re + "." + se, n);
            if (te instanceof Error)
              return te;
          }
        return null;
      }
      return w(S);
    }
    function G(h) {
      if (!Array.isArray(h))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), e;
      for (var S = 0; S < h.length; S++) {
        var B = h[S];
        if (typeof B != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Y(B) + " at index " + S + "."
          ), e;
      }
      function F(V, Q, re, X, ee) {
        for (var se = [], te = 0; te < h.length; te++) {
          var ce = h[te], P = ce(V, Q, re, X, ee, n);
          if (P == null)
            return null;
          P.data && t(P.data, "expectedType") && se.push(P.data.expectedType);
        }
        var fe = se.length > 0 ? ", expected one of type [" + se.join(", ") + "]" : "";
        return new M("Invalid " + X + " `" + ee + "` supplied to " + ("`" + re + "`" + fe + "."));
      }
      return w(F);
    }
    function Z() {
      function h(S, B, F, V, Q) {
        return I(S[B]) ? null : new M("Invalid " + V + " `" + Q + "` supplied to " + ("`" + F + "`, expected a ReactNode."));
      }
      return w(h);
    }
    function z(h, S, B, F, V) {
      return new M(
        (h || "React class") + ": " + S + " type `" + B + "." + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + V + "`."
      );
    }
    function ne(h) {
      function S(B, F, V, Q, re) {
        var X = B[F], ee = D(X);
        if (ee !== "object")
          return new M("Invalid " + Q + " `" + re + "` of type `" + ee + "` " + ("supplied to `" + V + "`, expected `object`."));
        for (var se in h) {
          var te = h[se];
          if (typeof te != "function")
            return z(V, Q, re, se, j(te));
          var ce = te(X, se, V, Q, re + "." + se, n);
          if (ce)
            return ce;
        }
        return null;
      }
      return w(S);
    }
    function ue(h) {
      function S(B, F, V, Q, re) {
        var X = B[F], ee = D(X);
        if (ee !== "object")
          return new M("Invalid " + Q + " `" + re + "` of type `" + ee + "` " + ("supplied to `" + V + "`, expected `object`."));
        var se = o({}, B[F], h);
        for (var te in se) {
          var ce = h[te];
          if (t(h, te) && typeof ce != "function")
            return z(V, Q, re, te, j(ce));
          if (!ce)
            return new M(
              "Invalid " + Q + " `" + re + "` key `" + te + "` supplied to `" + V + "`.\nBad object: " + JSON.stringify(B[F], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(h), null, "  ")
            );
          var P = ce(X, te, V, Q, re + "." + te, n);
          if (P)
            return P;
        }
        return null;
      }
      return w(S);
    }
    function I(h) {
      switch (typeof h) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !h;
        case "object":
          if (Array.isArray(h))
            return h.every(I);
          if (h === null || i(h))
            return !0;
          var S = d(h);
          if (S) {
            var B = S.call(h), F;
            if (S !== h.entries) {
              for (; !(F = B.next()).done; )
                if (!I(F.value))
                  return !1;
            } else
              for (; !(F = B.next()).done; ) {
                var V = F.value;
                if (V && !I(V[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function x(h, S) {
      return h === "symbol" ? !0 : S ? S["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && S instanceof Symbol : !1;
    }
    function D(h) {
      var S = typeof h;
      return Array.isArray(h) ? "array" : h instanceof RegExp ? "object" : x(S, h) ? "symbol" : S;
    }
    function j(h) {
      if (typeof h > "u" || h === null)
        return "" + h;
      var S = D(h);
      if (S === "object") {
        if (h instanceof Date)
          return "date";
        if (h instanceof RegExp)
          return "regexp";
      }
      return S;
    }
    function Y(h) {
      var S = j(h);
      switch (S) {
        case "array":
        case "object":
          return "an " + S;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + S;
        default:
          return S;
      }
    }
    function R(h) {
      return !h.constructor || !h.constructor.name ? m : h.constructor.name;
    }
    return y.checkPropTypes = s, y.resetWarningCache = s.resetWarningCache, y.PropTypes = y, y;
  }, Nt;
}
var $t, wr;
function zu() {
  if (wr)
    return $t;
  wr = 1;
  var r = Gt();
  function o() {
  }
  function n() {
  }
  return n.resetWarningCache = o, $t = function() {
    function t(e, i, l, u, c, d) {
      if (d !== r) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    t.isRequired = t;
    function s() {
      return t;
    }
    var a = {
      array: t,
      bigint: t,
      bool: t,
      func: t,
      number: t,
      object: t,
      string: t,
      symbol: t,
      any: t,
      arrayOf: s,
      element: t,
      elementType: t,
      instanceOf: s,
      node: t,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: n,
      resetWarningCache: o
    };
    return a.PropTypes = a, a;
  }, $t;
}
if (process.env.NODE_ENV !== "production") {
  var Iu = Zr(), Fu = !0;
  Ft.exports = Ru()(Iu.isElement, Fu);
} else
  Ft.exports = zu()();
var N = Ft.exports, Jt = function() {
  return Jt = Object.assign || function(r) {
    for (var o, n = 1, t = arguments.length; n < t; n++) {
      o = arguments[n];
      for (var s in o)
        Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
    }
    return r;
  }, Jt.apply(this, arguments);
}, Qr = {
  onActivate: N.func,
  onAddUndo: N.func,
  onBeforeAddUndo: N.func,
  onBeforeExecCommand: N.func,
  onBeforeGetContent: N.func,
  onBeforeRenderUI: N.func,
  onBeforeSetContent: N.func,
  onBeforePaste: N.func,
  onBlur: N.func,
  onChange: N.func,
  onClearUndos: N.func,
  onClick: N.func,
  onContextMenu: N.func,
  onCommentChange: N.func,
  onCompositionEnd: N.func,
  onCompositionStart: N.func,
  onCompositionUpdate: N.func,
  onCopy: N.func,
  onCut: N.func,
  onDblclick: N.func,
  onDeactivate: N.func,
  onDirty: N.func,
  onDrag: N.func,
  onDragDrop: N.func,
  onDragEnd: N.func,
  onDragGesture: N.func,
  onDragOver: N.func,
  onDrop: N.func,
  onExecCommand: N.func,
  onFocus: N.func,
  onFocusIn: N.func,
  onFocusOut: N.func,
  onGetContent: N.func,
  onHide: N.func,
  onInit: N.func,
  onInput: N.func,
  onKeyDown: N.func,
  onKeyPress: N.func,
  onKeyUp: N.func,
  onLoadContent: N.func,
  onMouseDown: N.func,
  onMouseEnter: N.func,
  onMouseLeave: N.func,
  onMouseMove: N.func,
  onMouseOut: N.func,
  onMouseOver: N.func,
  onMouseUp: N.func,
  onNodeChange: N.func,
  onObjectResizeStart: N.func,
  onObjectResized: N.func,
  onObjectSelected: N.func,
  onPaste: N.func,
  onPostProcess: N.func,
  onPostRender: N.func,
  onPreProcess: N.func,
  onProgressState: N.func,
  onRedo: N.func,
  onRemove: N.func,
  onReset: N.func,
  onSaveContent: N.func,
  onSelectionChange: N.func,
  onSetAttrib: N.func,
  onSetContent: N.func,
  onShow: N.func,
  onSubmit: N.func,
  onUndo: N.func,
  onVisualAid: N.func,
  onSkinLoadError: N.func,
  onThemeLoadError: N.func,
  onModelLoadError: N.func,
  onPluginLoadError: N.func,
  onIconsLoadError: N.func,
  onLanguageLoadError: N.func,
  onScriptsLoad: N.func,
  onScriptsLoadError: N.func
}, Ju = Jt({ apiKey: N.string, licenseKey: N.string, id: N.string, inline: N.bool, init: N.object, initialValue: N.string, onEditorChange: N.func, value: N.string, tagName: N.string, cloudChannel: N.string, plugins: N.oneOfType([N.string, N.array]), toolbar: N.oneOfType([N.string, N.array]), disabled: N.bool, textareaName: N.string, tinymceScriptSrc: N.oneOfType([
  N.string,
  N.arrayOf(N.string),
  N.arrayOf(N.shape({
    src: N.string,
    async: N.bool,
    defer: N.bool
  }))
]), rollback: N.oneOfType([N.number, N.oneOf([!1])]), scriptLoading: N.shape({
  async: N.bool,
  defer: N.bool,
  delay: N.number
}) }, Qr), Ct = function(r) {
  return typeof r == "function";
}, Dr = function(r) {
  return r in Qr;
}, Sr = function(r) {
  return r.substr(2);
}, Bu = function(r, o, n, t, s, a, e) {
  var i = Object.keys(s).filter(Dr), l = Object.keys(a).filter(Dr), u = i.filter(function(d) {
    return a[d] === void 0;
  }), c = l.filter(function(d) {
    return s[d] === void 0;
  });
  u.forEach(function(d) {
    var m = Sr(d), y = e[m];
    n(m, y), delete e[m];
  }), c.forEach(function(d) {
    var m = t(r, d), y = Sr(d);
    e[y] = m, o(y, m);
  });
}, Wu = function(r, o, n, t, s) {
  return Bu(
    s,
    r.on.bind(r),
    r.off.bind(r),
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    function(a, e) {
      return function(i) {
        var l;
        return (l = a(e)) === null || l === void 0 ? void 0 : l(i, r);
      };
    },
    o,
    n,
    t
  );
}, jr = 0, en = function(r) {
  var o = Date.now(), n = Math.floor(Math.random() * 1e9);
  return jr++, r + "_" + n + jr + String(o);
}, Hr = function(r) {
  return r !== null && (r.tagName.toLowerCase() === "textarea" || r.tagName.toLowerCase() === "input");
}, Tr = function(r) {
  return typeof r > "u" || r === "" ? [] : Array.isArray(r) ? r : r.split(" ");
}, Ku = function(r, o) {
  return Tr(r).concat(Tr(o));
}, Vu = function() {
  return window.InputEvent && typeof InputEvent.prototype.getTargetRanges == "function";
}, qu = function(r) {
  if (!("isConnected" in Node.prototype)) {
    for (var o = r, n = r.parentNode; n != null; )
      o = n, n = o.parentNode;
    return o === r.ownerDocument;
  }
  return r.isConnected;
}, Er = function(r, o) {
  r !== void 0 && (r.mode != null && typeof r.mode == "object" && typeof r.mode.set == "function" ? r.mode.set(o) : r.setMode(o));
}, Bt = function() {
  return Bt = Object.assign || function(r) {
    for (var o, n = 1, t = arguments.length; n < t; n++) {
      o = arguments[n];
      for (var s in o)
        Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
    }
    return r;
  }, Bt.apply(this, arguments);
}, Uu = function(r, o, n) {
  var t, s, a = r.createElement("script");
  a.referrerPolicy = "origin", a.type = "application/javascript", a.id = o.id, a.src = o.src, a.async = (t = o.async) !== null && t !== void 0 ? t : !1, a.defer = (s = o.defer) !== null && s !== void 0 ? s : !1;
  var e = function() {
    a.removeEventListener("load", e), a.removeEventListener("error", i), n(o.src);
  }, i = function(l) {
    a.removeEventListener("load", e), a.removeEventListener("error", i), n(o.src, l);
  };
  a.addEventListener("load", e), a.addEventListener("error", i), r.head && r.head.appendChild(a);
}, Gu = function(r) {
  var o = {}, n = function(e, i) {
    var l = o[e];
    l.done = !0, l.error = i;
    for (var u = 0, c = l.handlers; u < c.length; u++) {
      var d = c[u];
      d(e, i);
    }
    l.handlers = [];
  }, t = function(e, i, l) {
    var u = function($) {
      return l !== void 0 ? l($) : console.error($);
    };
    if (e.length === 0) {
      u(new Error("At least one script must be provided"));
      return;
    }
    for (var c = 0, d = !1, m = function($, O) {
      d || (O ? (d = !0, u(O)) : ++c === e.length && i());
    }, y = 0, v = e; y < v.length; y++) {
      var M = v[y], w = o[M.src];
      if (w)
        w.done ? m(M.src, w.error) : w.handlers.push(m);
      else {
        var L = en("tiny-");
        o[M.src] = {
          id: L,
          src: M.src,
          done: !1,
          error: null,
          handlers: [m]
        }, Uu(r, Bt({ id: L }, M), n);
      }
    }
  }, s = function() {
    for (var e, i = 0, l = Object.values(o); i < l.length; i++) {
      var u = l[i], c = r.getElementById(u.id);
      c != null && c.tagName === "SCRIPT" && ((e = c.parentNode) === null || e === void 0 || e.removeChild(c));
    }
    o = {};
  }, a = function() {
    return r;
  };
  return {
    loadScripts: t,
    deleteScripts: s,
    getDocument: a
  };
}, Zu = function() {
  var r = [], o = function(s) {
    var a = r.find(function(e) {
      return e.getDocument() === s;
    });
    return a === void 0 && (a = Gu(s), r.push(a)), a;
  }, n = function(s, a, e, i, l) {
    var u = function() {
      return o(s).loadScripts(a, i, l);
    };
    e > 0 ? setTimeout(u, e) : u();
  }, t = function() {
    for (var s = r.pop(); s != null; s = r.pop())
      s.deleteScripts();
  };
  return {
    loadList: n,
    reinitialize: t
  };
}, Xu = Zu(), At = function(r) {
  var o = r;
  return o && o.tinymce ? o.tinymce : null;
}, Qu = /* @__PURE__ */ function() {
  var r = function(o, n) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, s) {
      t.__proto__ = s;
    } || function(t, s) {
      for (var a in s)
        Object.prototype.hasOwnProperty.call(s, a) && (t[a] = s[a]);
    }, r(o, n);
  };
  return function(o, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    r(o, n);
    function t() {
      this.constructor = o;
    }
    o.prototype = n === null ? Object.create(n) : (t.prototype = n.prototype, new t());
  };
}(), st = function() {
  return st = Object.assign || function(r) {
    for (var o, n = 1, t = arguments.length; n < t; n++) {
      o = arguments[n];
      for (var s in o)
        Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
    }
    return r;
  }, st.apply(this, arguments);
}, e_ = (
  /** @class */
  function(r) {
    Qu(o, r);
    function o(n) {
      var t, s, a, e = r.call(this, n) || this;
      return e.rollbackTimer = void 0, e.valueCursor = void 0, e.rollbackChange = function() {
        var i = e.editor, l = e.props.value;
        i && l && l !== e.currentContent && i.undoManager.ignore(function() {
          if (i.setContent(l), e.valueCursor && (!e.inline || i.hasFocus()))
            try {
              i.selection.moveToBookmark(e.valueCursor);
            } catch {
            }
        }), e.rollbackTimer = void 0;
      }, e.handleBeforeInput = function(i) {
        if (e.props.value !== void 0 && e.props.value === e.currentContent && e.editor && (!e.inline || e.editor.hasFocus()))
          try {
            e.valueCursor = e.editor.selection.getBookmark(3);
          } catch {
          }
      }, e.handleBeforeInputSpecial = function(i) {
        (i.key === "Enter" || i.key === "Backspace" || i.key === "Delete") && e.handleBeforeInput(i);
      }, e.handleEditorChange = function(i) {
        var l = e.editor;
        if (l && l.initialized) {
          var u = l.getContent();
          e.props.value !== void 0 && e.props.value !== u && e.props.rollback !== !1 && (e.rollbackTimer || (e.rollbackTimer = window.setTimeout(e.rollbackChange, typeof e.props.rollback == "number" ? e.props.rollback : 200))), u !== e.currentContent && (e.currentContent = u, Ct(e.props.onEditorChange) && e.props.onEditorChange(u, l));
        }
      }, e.handleEditorChangeSpecial = function(i) {
        (i.key === "Backspace" || i.key === "Delete") && e.handleEditorChange(i);
      }, e.initialise = function(i) {
        var l, u, c;
        i === void 0 && (i = 0);
        var d = e.elementRef.current;
        if (d) {
          if (!qu(d)) {
            if (i === 0)
              setTimeout(function() {
                return e.initialise(1);
              }, 1);
            else if (i < 100)
              setTimeout(function() {
                return e.initialise(i + 1);
              }, 100);
            else
              throw new Error("tinymce can only be initialised when in a document");
            return;
          }
          var m = At(e.view);
          if (!m)
            throw new Error("tinymce should have been loaded into global scope");
          var y = st(st(st(st({}, e.props.init), { selector: void 0, target: d, readonly: e.props.disabled, inline: e.inline, plugins: Ku((l = e.props.init) === null || l === void 0 ? void 0 : l.plugins, e.props.plugins), toolbar: (u = e.props.toolbar) !== null && u !== void 0 ? u : (c = e.props.init) === null || c === void 0 ? void 0 : c.toolbar }), e.props.licenseKey ? { license_key: e.props.licenseKey } : {}), { setup: function(v) {
            e.editor = v, e.bindHandlers({}), e.inline && !Hr(d) && v.once("PostRender", function(M) {
              v.setContent(e.getInitialValue(), { no_events: !0 });
            }), e.props.init && Ct(e.props.init.setup) && e.props.init.setup(v);
          }, init_instance_callback: function(v) {
            var M, w, L = e.getInitialValue();
            e.currentContent = (M = e.currentContent) !== null && M !== void 0 ? M : v.getContent(), e.currentContent !== L && (e.currentContent = L, v.setContent(L), v.undoManager.clear(), v.undoManager.add(), v.setDirty(!1));
            var $ = (w = e.props.disabled) !== null && w !== void 0 ? w : !1;
            Er(e.editor, $ ? "readonly" : "design"), e.props.init && Ct(e.props.init.init_instance_callback) && e.props.init.init_instance_callback(v);
          } });
          e.inline || (d.style.visibility = ""), Hr(d) && (d.value = e.getInitialValue()), m.init(y);
        }
      }, e.id = e.props.id || en("tiny-react"), e.elementRef = Ce.createRef(), e.inline = (a = (t = e.props.inline) !== null && t !== void 0 ? t : (s = e.props.init) === null || s === void 0 ? void 0 : s.inline) !== null && a !== void 0 ? a : !1, e.boundHandlers = {}, e;
    }
    return Object.defineProperty(o.prototype, "view", {
      get: function() {
        var n, t;
        return (t = (n = this.elementRef.current) === null || n === void 0 ? void 0 : n.ownerDocument.defaultView) !== null && t !== void 0 ? t : window;
      },
      enumerable: !1,
      configurable: !0
    }), o.prototype.componentDidUpdate = function(n) {
      var t = this, s, a;
      if (this.rollbackTimer && (clearTimeout(this.rollbackTimer), this.rollbackTimer = void 0), this.editor && (this.bindHandlers(n), this.editor.initialized)) {
        if (this.currentContent = (s = this.currentContent) !== null && s !== void 0 ? s : this.editor.getContent(), typeof this.props.initialValue == "string" && this.props.initialValue !== n.initialValue)
          this.editor.setContent(this.props.initialValue), this.editor.undoManager.clear(), this.editor.undoManager.add(), this.editor.setDirty(!1);
        else if (typeof this.props.value == "string" && this.props.value !== this.currentContent) {
          var e = this.editor;
          e.undoManager.transact(function() {
            var l;
            if (!t.inline || e.hasFocus())
              try {
                l = e.selection.getBookmark(3);
              } catch {
              }
            var u = t.valueCursor;
            if (e.setContent(t.props.value), !t.inline || e.hasFocus())
              for (var c = 0, d = [l, u]; c < d.length; c++) {
                var m = d[c];
                if (m)
                  try {
                    e.selection.moveToBookmark(m), t.valueCursor = m;
                    break;
                  } catch {
                  }
              }
          });
        }
        if (this.props.disabled !== n.disabled) {
          var i = (a = this.props.disabled) !== null && a !== void 0 ? a : !1;
          Er(this.editor, i ? "readonly" : "design");
        }
      }
    }, o.prototype.componentDidMount = function() {
      var n = this, t, s, a, e, i;
      if (At(this.view) !== null)
        this.initialise();
      else if (Array.isArray(this.props.tinymceScriptSrc) && this.props.tinymceScriptSrc.length === 0)
        (s = (t = this.props).onScriptsLoadError) === null || s === void 0 || s.call(t, new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));
      else if (!((a = this.elementRef.current) === null || a === void 0) && a.ownerDocument) {
        var l = function() {
          var c, d;
          (d = (c = n.props).onScriptsLoad) === null || d === void 0 || d.call(c), n.initialise();
        }, u = function(c) {
          var d, m;
          (m = (d = n.props).onScriptsLoadError) === null || m === void 0 || m.call(d, c);
        };
        Xu.loadList(this.elementRef.current.ownerDocument, this.getScriptSources(), (i = (e = this.props.scriptLoading) === null || e === void 0 ? void 0 : e.delay) !== null && i !== void 0 ? i : 0, l, u);
      }
    }, o.prototype.componentWillUnmount = function() {
      var n = this, t = this.editor;
      t && (t.off(this.changeEvents(), this.handleEditorChange), t.off(this.beforeInputEvent(), this.handleBeforeInput), t.off("keypress", this.handleEditorChangeSpecial), t.off("keydown", this.handleBeforeInputSpecial), t.off("NewBlock", this.handleEditorChange), Object.keys(this.boundHandlers).forEach(function(s) {
        t.off(s, n.boundHandlers[s]);
      }), this.boundHandlers = {}, t.remove(), this.editor = void 0);
    }, o.prototype.render = function() {
      return this.inline ? this.renderInline() : this.renderIframe();
    }, o.prototype.changeEvents = function() {
      var n, t, s, a = (s = (t = (n = At(this.view)) === null || n === void 0 ? void 0 : n.Env) === null || t === void 0 ? void 0 : t.browser) === null || s === void 0 ? void 0 : s.isIE();
      return a ? "change keyup compositionend setcontent CommentChange" : "change input compositionend setcontent CommentChange";
    }, o.prototype.beforeInputEvent = function() {
      return Vu() ? "beforeinput SelectionChange" : "SelectionChange";
    }, o.prototype.renderInline = function() {
      var n = this.props.tagName, t = n === void 0 ? "div" : n;
      return Ce.createElement(t, {
        ref: this.elementRef,
        id: this.id
      });
    }, o.prototype.renderIframe = function() {
      return Ce.createElement("textarea", {
        ref: this.elementRef,
        style: { visibility: "hidden" },
        name: this.props.textareaName,
        id: this.id
      });
    }, o.prototype.getScriptSources = function() {
      var n, t, s = (n = this.props.scriptLoading) === null || n === void 0 ? void 0 : n.async, a = (t = this.props.scriptLoading) === null || t === void 0 ? void 0 : t.defer;
      if (this.props.tinymceScriptSrc !== void 0)
        return typeof this.props.tinymceScriptSrc == "string" ? [{ src: this.props.tinymceScriptSrc, async: s, defer: a }] : this.props.tinymceScriptSrc.map(function(u) {
          return typeof u == "string" ? { src: u, async: s, defer: a } : u;
        });
      var e = this.props.cloudChannel, i = this.props.apiKey ? this.props.apiKey : "no-api-key", l = "https://cdn.tiny.cloud/1/".concat(i, "/tinymce/").concat(e, "/tinymce.min.js");
      return [{ src: l, async: s, defer: a }];
    }, o.prototype.getInitialValue = function() {
      return typeof this.props.initialValue == "string" ? this.props.initialValue : typeof this.props.value == "string" ? this.props.value : "";
    }, o.prototype.bindHandlers = function(n) {
      var t = this;
      if (this.editor !== void 0) {
        Wu(this.editor, n, this.props, this.boundHandlers, function(i) {
          return t.props[i];
        });
        var s = function(i) {
          return i.onEditorChange !== void 0 || i.value !== void 0;
        }, a = s(n), e = s(this.props);
        !a && e ? (this.editor.on(this.changeEvents(), this.handleEditorChange), this.editor.on(this.beforeInputEvent(), this.handleBeforeInput), this.editor.on("keydown", this.handleBeforeInputSpecial), this.editor.on("keyup", this.handleEditorChangeSpecial), this.editor.on("NewBlock", this.handleEditorChange)) : a && !e && (this.editor.off(this.changeEvents(), this.handleEditorChange), this.editor.off(this.beforeInputEvent(), this.handleBeforeInput), this.editor.off("keydown", this.handleBeforeInputSpecial), this.editor.off("keyup", this.handleEditorChangeSpecial), this.editor.off("NewBlock", this.handleEditorChange));
      }
    }, o.propTypes = Ju, o.defaultProps = {
      cloudChannel: "7"
    }, o;
  }(Ce.Component)
);
const t_ = ({ apiKey: r, init: o, onEditorChange: n, onValueChange: t, onInit: s, ...a }, e) => {
  const [i, l] = ae(!1), { height: u = 400, ...c } = o || {}, d = (y, v) => {
    n == null || n(y, v), t == null || t(y);
  }, m = (...y) => {
    s == null || s(...y), l(!0);
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "relative", style: { height: u }, children: [
    /* @__PURE__ */ _.jsx(
      e_,
      {
        ref: e,
        apiKey: r,
        init: {
          plugins: "link lists table",
          toolbar: "undo redo | blocks | bold italic underline strikethrough | link table align numlist bullist | removeformat",
          tinycomments_mode: "embedded",
          skin_url: "/tinymce-theme",
          menubar: !1,
          branding: !1,
          height: u,
          ...c
        },
        onEditorChange: d,
        onInit: m,
        ...a
      }
    ),
    /* @__PURE__ */ _.jsx(
      "div",
      {
        className: W(
          "absolute inset-0 z-50 flex items-center justify-center rounded-lg bg-gray-200 transition-all",
          i && "pointer-events-none opacity-0"
        ),
        children: /* @__PURE__ */ _.jsx(pt, { className: "h-20 w-20 text-primary-600", strokeWidth: 1 })
      }
    )
  ] });
}, r_ = le(t_), n_ = (r, o) => {
  const { id: n, name: t, help: s, label: a, labelRequired: e, error: i, wrapperClassName: l, className: u, ...c } = r, d = { label: a, labelRequired: e, error: i, className: u, help: s };
  return /* @__PURE__ */ _.jsx(
    Pe,
    {
      htmlFor: n || t,
      wrapperClassName: W(
        "relative mb-1 [&_.tox-tinymce]:border [&_.tox-tinymce]:border-gray-300",
        !!i && "[&_.tox-tinymce]:border-red-600",
        l
      ),
      ...d,
      children: /* @__PURE__ */ _.jsx(r_, { ref: o, id: n || t, name: t, error: i, ...c })
    }
  );
}, Kh = le(n_), gt = le(({ error: r, className: o, ...n }, t) => /* @__PURE__ */ _.jsx(
  "input",
  {
    ref: t,
    className: W(
      "peer block h-10 w-full rounded-lg border px-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none disabled:bg-gray-50",
      n.type === "number" && "[&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none",
      r ? "border-error-600 bg-error-50 focus:bg-white" : "border-gray-300 bg-white focus:border-primary-600",
      o
    ),
    onWheel: (s) => {
      n.type === "number" && s.currentTarget.blur();
    },
    ...n
  }
));
gt.displayName = "BaseInput";
const tn = le(({ error: r, className: o, ...n }, t) => /* @__PURE__ */ _.jsx(
  "textarea",
  {
    ref: t,
    className: W(
      "peer block w-full rounded-lg border p-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none  disabled:bg-gray-50",
      r ? "border-error-600 bg-error-50 focus:bg-white" : "border-gray-300 bg-white focus:border-primary-600",
      o
    ),
    ...n
  }
));
tn.displayName = "BaseTextarea";
const rn = le((r, o) => {
  const { id: n, name: t, type: s, help: a, label: e, labelRequired: i, error: l, className: u, inputClassName: c, wrapperClassName: d, leftChild: m, rightChild: y, ...v } = r, M = { label: e, labelRequired: i, error: l, className: u, help: a }, [w, L] = ae(!1);
  return /* @__PURE__ */ _.jsxs(Pe, { htmlFor: n || t, wrapperClassName: W("relative mb-1", d), ...M, children: [
    m,
    /* @__PURE__ */ _.jsx(
      gt,
      {
        ref: o,
        id: n || t,
        type: w ? "text" : s,
        name: t,
        error: l,
        className: W(s === "password" && "pr-8", c),
        ...v
      }
    ),
    s === "password" && /* @__PURE__ */ _.jsx(
      "button",
      {
        type: "button",
        className: xe(
          "absolute bottom-0 right-0 top-0 flex items-center justify-center px-2",
          w ? "text-primary-600" : "text-gray-400"
        ),
        onClick: () => L(($) => !$),
        children: /* @__PURE__ */ _.jsx(Jl, { size: 18 })
      }
    ),
    y
  ] });
});
rn.displayName = "Input";
const a_ = le((r, o) => {
  const { children: n, className: t, ...s } = r;
  return /* @__PURE__ */ _.jsxs("div", { className: W("flex items-center", t), children: [
    /* @__PURE__ */ _.jsx("input", { ref: o, type: "checkbox", className: "peer hidden", ...s }),
    /* @__PURE__ */ _.jsxs(
      "label",
      {
        htmlFor: r.id,
        className: "flex cursor-pointer items-center gap-2 text-xs peer-checked:[&>.box]:border-primary-600 peer-checked:[&>.box]:bg-primary-600 peer-checked:[&>.box]:text-white",
        children: [
          /* @__PURE__ */ _.jsx("span", { className: "box flex h-4 w-4 items-center justify-center rounded border border-gray-300 text-transparent transition-colors", children: /* @__PURE__ */ _.jsx(Fr, { className: "block h-2 w-2", strokeWidth: 5 }) }),
          n
        ]
      }
    )
  ] });
});
a_.displayName = "InputCheckbox";
const s_ = le((r, o) => {
  const { children: n, className: t, ...s } = r;
  return /* @__PURE__ */ _.jsxs("div", { className: W("flex items-center", t), children: [
    /* @__PURE__ */ _.jsx("input", { ref: o, type: "radio", className: "peer hidden", ...s }),
    /* @__PURE__ */ _.jsxs(
      "label",
      {
        htmlFor: r.id,
        className: "flex cursor-pointer items-center gap-2 text-xs peer-checked:[&>.box]:border-primary-600 peer-checked:[&>.box]:bg-primary-600 peer-checked:[&>.box]:text-white",
        children: [
          /* @__PURE__ */ _.jsx("span", { className: "box flex h-4 w-4 items-center justify-center rounded-full border border-gray-300 text-transparent transition-colors", children: /* @__PURE__ */ _.jsx(Jr, { className: "block h-1.5 w-1.5", fill: "currentColor", strokeWidth: 4 }) }),
          n
        ]
      }
    )
  ] });
});
s_.displayName = "InputRadio";
const o_ = le((r, o) => {
  const { id: n, name: t, help: s, label: a, labelRequired: e, error: i, className: l, textareaClassName: u, wrapperClassName: c, ...d } = r, m = { label: a, labelRequired: e, error: i, className: l, help: s };
  return /* @__PURE__ */ _.jsx(Pe, { htmlFor: n || t, wrapperClassName: W("relative mb-1", c), ...m, children: /* @__PURE__ */ _.jsx(tn, { ref: o, id: n || t, name: t, error: i, className: u, ...d }) });
});
o_.displayName = "Textarea";
const We = (r) => r.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&"), i_ = { k: 1e3, m: 1e6, b: 1e9 }, l_ = (r, o = ".") => {
  const n = new RegExp(`(\\d+(${We(o)}\\d*)?)([kmb])$`, "i"), t = r.match(n);
  if (t) {
    const [, s, , a] = t, e = i_[a.toLowerCase()];
    return Number(s.replace(o, ".")) * e;
  }
}, u_ = (r, o) => {
  const n = We(o.join("")), t = new RegExp(`[^\\d${n}]`, "gi");
  return r.replace(t, "");
}, __ = (r, o = ",") => {
  const n = new RegExp(We(o), "g");
  return r.replace(n, "");
}, Pt = ({
  value: r,
  groupSeparator: o = ",",
  decimalSeparator: n = ".",
  allowDecimals: t = !0,
  decimalsLimit: s = 2,
  allowNegativeValue: a = !0,
  disableAbbreviations: e = !1,
  prefix: i = "",
  transformRawValue: l = (u) => u
}) => {
  const u = l(r);
  if (u === "-")
    return u;
  const c = e ? [] : ["k", "m", "b"], m = new RegExp(`((^|\\D)-\\d)|(-${We(i)})`).test(u), [y, v] = RegExp(`(\\d+)-?${We(i)}`).exec(r) || [], M = i ? y ? u.replace(y, "").concat(v) : u.replace(i, "") : u, w = __(M, o), L = u_(w, [o, n, ...c]);
  let $ = L;
  if (!e) {
    if (c.some((H) => H === L.toLowerCase().replace(n, "")))
      return "";
    const q = l_(L, n);
    q && ($ = String(q));
  }
  const O = m && a ? "-" : "";
  if (n && $.includes(n)) {
    const [q, H] = L.split(n), J = s && H ? H.slice(0, s) : H, E = t ? `${n}${J}` : "";
    return `${O}${q}${E}`;
  }
  return `${O}${$}`;
}, d_ = (r, o, n) => {
  if (n !== void 0 && r.length > 1) {
    if (n === 0)
      return r.replace(o, "");
    if (r.includes(o)) {
      const [a, e] = r.split(o);
      if (e.length === n)
        return r;
      if (e.length > n)
        return `${a}${o}${e.slice(0, n)}`;
    }
    const t = r.length > n ? new RegExp(`(\\d+)(\\d{${n}})`) : new RegExp("(\\d)(\\d+)"), s = r.match(t);
    if (s) {
      const [, a, e] = s;
      return `${a}${o}${e}`;
    }
  }
  return r;
}, nn = (r, { groupSeparator: o = ",", decimalSeparator: n = "." }) => {
  const t = new RegExp(`\\d([^${We(o)}${We(n)}0-9]+)`), s = r.match(t);
  return s ? s[1] : void 0;
}, ct = (r) => {
  const { value: o, decimalSeparator: n, intlConfig: t, decimalScale: s, prefix: a = "", suffix: e = "" } = r;
  if (o === "" || o === void 0)
    return "";
  if (o === "-")
    return "-";
  const i = new RegExp(`^\\d?-${a ? `${We(a)}?` : ""}\\d`).test(o), l = n !== "." ? c_(o, n, i) : o, u = {
    minimumFractionDigits: s || 0,
    maximumFractionDigits: 20
  }, d = (t ? new Intl.NumberFormat(
    t.locale,
    t.currency ? {
      ...u,
      style: "currency",
      currency: t.currency
    } : u
  ) : new Intl.NumberFormat(void 0, u)).formatToParts(Number(l));
  let m = m_(d, r);
  const y = nn(m, { ...r }), v = o.slice(-1) === n ? n : "", [, M] = l.match(RegExp("\\d+\\.(\\d+)")) || [];
  return s === void 0 && M && n && (m.includes(n) ? m = m.replace(RegExp(`(\\d+)(${We(n)})(\\d+)`, "g"), `$1$2${M}`) : y && !e ? m = m.replace(y, `${n}${M}${y}`) : m = `${m}${n}${M}`), e && v ? `${m}${v}${e}` : y && v ? m.replace(y, `${v}${y}`) : y && e ? m.replace(y, `${v}${e}`) : [m, v, e].join("");
}, c_ = (r, o, n) => {
  let t = r;
  return o && o !== "." && (t = t.replace(RegExp(We(o), "g"), "."), n && o === "-" && (t = `-${t.slice(1)}`)), t;
}, m_ = (r, {
  prefix: o,
  groupSeparator: n,
  decimalSeparator: t,
  decimalScale: s,
  disableGroupSeparators: a = !1
}) => r.reduce(
  (e, { type: i, value: l }, u) => u === 0 && o ? i === "minusSign" ? [l, o] : i === "currency" ? [...e, o] : [o, l] : i === "currency" ? o ? e : [...e, l] : i === "group" ? a ? e : [...e, n !== void 0 ? n : l] : i === "decimal" ? s !== void 0 && s === 0 ? e : [...e, t !== void 0 ? t : l] : i === "fraction" ? [...e, s !== void 0 ? l.slice(0, s) : l] : [...e, l],
  [""]
).join(""), f_ = {
  currencySymbol: "",
  groupSeparator: "",
  decimalSeparator: "",
  prefix: "",
  suffix: ""
}, p_ = (r) => {
  const { locale: o, currency: n } = r || {};
  return (o ? new Intl.NumberFormat(o, n ? { currency: n, style: "currency" } : void 0) : new Intl.NumberFormat()).formatToParts(1000.1).reduce((s, a, e) => a.type === "currency" ? e === 0 ? { ...s, currencySymbol: a.value, prefix: a.value } : { ...s, currencySymbol: a.value, suffix: a.value } : a.type === "group" ? { ...s, groupSeparator: a.value } : a.type === "decimal" ? { ...s, decimalSeparator: a.value } : s, f_);
}, Nr = (r) => RegExp(/\d/, "gi").test(r), h_ = (r, o = ".", n) => {
  if (n === void 0 || r === "" || r === void 0)
    return r;
  if (!r.match(/\d/g))
    return "";
  const [t, s] = r.split(o);
  if (n === 0)
    return t;
  let a = s || "";
  if (a.length < n)
    for (; a.length < n; )
      a += "0";
  else
    a = a.slice(0, n);
  return `${t}${o}${a}`;
}, M_ = ({
  selectionStart: r,
  value: o,
  lastKeyStroke: n,
  stateValue: t,
  groupSeparator: s
}) => {
  let a = r, e = o;
  if (t && a) {
    const i = o.split("");
    return n === "Backspace" && t[a] === s && (i.splice(a - 1, 1), a -= 1), n === "Delete" && t[a] === s && (i.splice(a, 1), a += 1), e = i.join(""), { modifiedValue: e, cursorPosition: a };
  }
  return { modifiedValue: e, cursorPosition: r };
}, an = le(
  ({
    allowDecimals: r = !0,
    allowNegativeValue: o = !0,
    id: n,
    name: t,
    className: s,
    customInput: a,
    decimalsLimit: e,
    defaultValue: i,
    disabled: l = !1,
    maxLength: u,
    value: c,
    onValueChange: d,
    fixedDecimalLength: m,
    placeholder: y,
    decimalScale: v,
    prefix: M,
    suffix: w,
    intlConfig: L,
    step: $,
    min: O,
    max: q,
    disableGroupSeparators: H = !1,
    disableAbbreviations: J = !1,
    decimalSeparator: E,
    groupSeparator: C,
    onChange: G,
    onFocus: Z,
    onBlur: z,
    onKeyDown: ne,
    onKeyUp: ue,
    transformRawValue: I,
    ...x
  }, D) => {
    if (E && Nr(E))
      throw new Error("decimalSeparator cannot be a number");
    if (C && Nr(C))
      throw new Error("groupSeparator cannot be a number");
    const j = ze(() => p_(L), [L]), Y = E || j.decimalSeparator || "", R = C || j.groupSeparator || "";
    if (Y && R && Y === R && H === !1)
      throw new Error("decimalSeparator cannot be the same as groupSeparator");
    const h = {
      decimalSeparator: Y,
      groupSeparator: R,
      disableGroupSeparators: H,
      intlConfig: L,
      prefix: M || j.prefix,
      suffix: w
    }, S = {
      decimalSeparator: Y,
      groupSeparator: R,
      allowDecimals: r,
      decimalsLimit: e || m || 2,
      allowNegativeValue: o,
      disableAbbreviations: J,
      prefix: M || j.prefix,
      transformRawValue: I
    }, [B, F] = ae(
      () => i != null ? ct({ ...h, decimalScale: v, value: String(i) }) : c != null ? ct({ ...h, decimalScale: v, value: String(c) }) : ""
    ), [V, Q] = ae(!1), [re, X] = ae(0), [ee, se] = ae(0), [te, ce] = ae(null), P = Ee(null);
    Rl(D, () => P.current);
    const fe = (K, _e) => {
      Q(!0);
      const { modifiedValue: ye, cursorPosition: ke } = M_({
        selectionStart: _e,
        value: K,
        lastKeyStroke: te,
        stateValue: B,
        groupSeparator: R
      }), be = Pt({ value: ye, ...S });
      if (u && be.replace(/-/g, "").length > u)
        return;
      if (be === "" || be === "-" || be === Y) {
        d && d(void 0, t, { float: null, formatted: "", value: "" }), F(be), X(1);
        return;
      }
      const Qe = Y ? be.replace(Y, ".") : be, Ie = parseFloat(Qe), ut = ct({
        value: be,
        ...h
      });
      if (ke != null) {
        let Ue = ke + (ut.length - K.length);
        Ue = Ue <= 0 ? M ? M.length : 0 : Ue, X(Ue), se(ee + 1);
      }
      F(ut), d && d(be, t, {
        float: Ie,
        formatted: ut,
        value: be
      });
    }, He = (K) => {
      const {
        target: { value: _e, selectionStart: ye }
      } = K;
      fe(_e, ye), G && G(K);
    }, Se = (K) => (Z && Z(K), B ? B.length : 0), Ve = (K) => {
      const {
        target: { value: _e }
      } = K, ye = Pt({ value: _e, ...S });
      if (ye === "-" || ye === Y || !ye) {
        F(""), z && z(K);
        return;
      }
      const ke = d_(ye, Y, m), be = h_(ke, Y, v !== void 0 ? v : m), Qe = parseFloat(be.replace(Y, ".")), Ie = ct({
        ...h,
        value: be
      });
      d && d(be, t, {
        float: Qe,
        formatted: Ie,
        value: be
      }), F(Ie), z && z(K);
    }, tt = (K) => {
      const { key: _e } = K;
      if (ce(_e), $ && (_e === "ArrowUp" || _e === "ArrowDown")) {
        K.preventDefault(), X(B.length);
        const ye = parseFloat(
          c != null ? String(c).replace(Y, ".") : Pt({ value: B, ...S })
        ) || 0, ke = _e === "ArrowUp" ? ye + $ : ye - $;
        if (O !== void 0 && ke < Number(O) || q !== void 0 && ke > Number(q))
          return;
        const be = String($).includes(".") ? Number(String($).split(".")[1].length) : void 0;
        fe(String(be ? ke.toFixed(be) : ke).replace(".", Y));
      }
      ne && ne(K);
    }, Ze = (K) => {
      const {
        key: _e,
        currentTarget: { selectionStart: ye }
      } = K;
      if (_e !== "ArrowUp" && _e !== "ArrowDown" && B !== "-") {
        const ke = nn(B, { groupSeparator: R, decimalSeparator: Y });
        if (ke && ye && ye > B.length - ke.length && P.current) {
          const be = B.length - ke.length;
          P.current.setSelectionRange(be, be);
        }
      }
      ue && ue(K);
    };
    ve(() => {
      c == null && i == null && F("");
    }, [i, c]), ve(() => {
      V && B !== "-" && P.current && document.activeElement === P.current && P.current.setSelectionRange(re, re);
    }, [B, re, P, V, ee]);
    const rt = {
      type: "text",
      inputMode: "decimal",
      id: n,
      name: t,
      className: s,
      onChange: He,
      onBlur: Ve,
      onFocus: Se,
      onKeyDown: tt,
      onKeyUp: Ze,
      placeholder: y,
      disabled: l,
      value: c != null && B !== "-" && (!Y || B !== Y) ? ct({
        ...h,
        decimalScale: V ? void 0 : v,
        value: String(c)
      }) : B,
      ref: P,
      ...x
    };
    if (a) {
      const K = a;
      return /* @__PURE__ */ _.jsx(K, { ...rt });
    }
    return /* @__PURE__ */ _.jsx(gt, { ...rt });
  }
);
an.displayName = "InputCurrency";
const v_ = le((r, o) => {
  const { id: n, name: t, help: s, label: a, labelRequired: e, error: i, className: l, inputClassName: u, wrapperClassName: c, ...d } = r, m = { label: a, labelRequired: e, error: i, className: l, help: s };
  return /* @__PURE__ */ _.jsx(Pe, { htmlFor: n || t, wrapperClassName: W("relative mb-1", c), ...m, children: /* @__PURE__ */ _.jsx(an, { ref: o, id: n || t, name: t, error: i, className: u, ...d }) });
});
v_.displayName = "InputCurrency";
var sn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t();
  })(Xl, function() {
    var n = 1e3, t = 6e4, s = 36e5, a = "millisecond", e = "second", i = "minute", l = "hour", u = "day", c = "week", d = "month", m = "quarter", y = "year", v = "date", M = "Invalid Date", w = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, L = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, $ = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(I) {
      var x = ["th", "st", "nd", "rd"], D = I % 100;
      return "[" + I + (x[(D - 20) % 10] || x[D] || x[0]) + "]";
    } }, O = function(I, x, D) {
      var j = String(I);
      return !j || j.length >= x ? I : "" + Array(x + 1 - j.length).join(D) + I;
    }, q = { s: O, z: function(I) {
      var x = -I.utcOffset(), D = Math.abs(x), j = Math.floor(D / 60), Y = D % 60;
      return (x <= 0 ? "+" : "-") + O(j, 2, "0") + ":" + O(Y, 2, "0");
    }, m: function I(x, D) {
      if (x.date() < D.date())
        return -I(D, x);
      var j = 12 * (D.year() - x.year()) + (D.month() - x.month()), Y = x.clone().add(j, d), R = D - Y < 0, h = x.clone().add(j + (R ? -1 : 1), d);
      return +(-(j + (D - Y) / (R ? Y - h : h - Y)) || 0);
    }, a: function(I) {
      return I < 0 ? Math.ceil(I) || 0 : Math.floor(I);
    }, p: function(I) {
      return { M: d, y, w: c, d: u, D: v, h: l, m: i, s: e, ms: a, Q: m }[I] || String(I || "").toLowerCase().replace(/s$/, "");
    }, u: function(I) {
      return I === void 0;
    } }, H = "en", J = {};
    J[H] = $;
    var E = "$isDayjsObject", C = function(I) {
      return I instanceof ne || !(!I || !I[E]);
    }, G = function I(x, D, j) {
      var Y;
      if (!x)
        return H;
      if (typeof x == "string") {
        var R = x.toLowerCase();
        J[R] && (Y = R), D && (J[R] = D, Y = R);
        var h = x.split("-");
        if (!Y && h.length > 1)
          return I(h[0]);
      } else {
        var S = x.name;
        J[S] = x, Y = S;
      }
      return !j && Y && (H = Y), Y || !j && H;
    }, Z = function(I, x) {
      if (C(I))
        return I.clone();
      var D = typeof x == "object" ? x : {};
      return D.date = I, D.args = arguments, new ne(D);
    }, z = q;
    z.l = G, z.i = C, z.w = function(I, x) {
      return Z(I, { locale: x.$L, utc: x.$u, x: x.$x, $offset: x.$offset });
    };
    var ne = function() {
      function I(D) {
        this.$L = G(D.locale, null, !0), this.parse(D), this.$x = this.$x || D.x || {}, this[E] = !0;
      }
      var x = I.prototype;
      return x.parse = function(D) {
        this.$d = function(j) {
          var Y = j.date, R = j.utc;
          if (Y === null)
            return /* @__PURE__ */ new Date(NaN);
          if (z.u(Y))
            return /* @__PURE__ */ new Date();
          if (Y instanceof Date)
            return new Date(Y);
          if (typeof Y == "string" && !/Z$/i.test(Y)) {
            var h = Y.match(w);
            if (h) {
              var S = h[2] - 1 || 0, B = (h[7] || "0").substring(0, 3);
              return R ? new Date(Date.UTC(h[1], S, h[3] || 1, h[4] || 0, h[5] || 0, h[6] || 0, B)) : new Date(h[1], S, h[3] || 1, h[4] || 0, h[5] || 0, h[6] || 0, B);
            }
          }
          return new Date(Y);
        }(D), this.init();
      }, x.init = function() {
        var D = this.$d;
        this.$y = D.getFullYear(), this.$M = D.getMonth(), this.$D = D.getDate(), this.$W = D.getDay(), this.$H = D.getHours(), this.$m = D.getMinutes(), this.$s = D.getSeconds(), this.$ms = D.getMilliseconds();
      }, x.$utils = function() {
        return z;
      }, x.isValid = function() {
        return this.$d.toString() !== M;
      }, x.isSame = function(D, j) {
        var Y = Z(D);
        return this.startOf(j) <= Y && Y <= this.endOf(j);
      }, x.isAfter = function(D, j) {
        return Z(D) < this.startOf(j);
      }, x.isBefore = function(D, j) {
        return this.endOf(j) < Z(D);
      }, x.$g = function(D, j, Y) {
        return z.u(D) ? this[j] : this.set(Y, D);
      }, x.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, x.valueOf = function() {
        return this.$d.getTime();
      }, x.startOf = function(D, j) {
        var Y = this, R = !!z.u(j) || j, h = z.p(D), S = function(se, te) {
          var ce = z.w(Y.$u ? Date.UTC(Y.$y, te, se) : new Date(Y.$y, te, se), Y);
          return R ? ce : ce.endOf(u);
        }, B = function(se, te) {
          return z.w(Y.toDate()[se].apply(Y.toDate("s"), (R ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(te)), Y);
        }, F = this.$W, V = this.$M, Q = this.$D, re = "set" + (this.$u ? "UTC" : "");
        switch (h) {
          case y:
            return R ? S(1, 0) : S(31, 11);
          case d:
            return R ? S(1, V) : S(0, V + 1);
          case c:
            var X = this.$locale().weekStart || 0, ee = (F < X ? F + 7 : F) - X;
            return S(R ? Q - ee : Q + (6 - ee), V);
          case u:
          case v:
            return B(re + "Hours", 0);
          case l:
            return B(re + "Minutes", 1);
          case i:
            return B(re + "Seconds", 2);
          case e:
            return B(re + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, x.endOf = function(D) {
        return this.startOf(D, !1);
      }, x.$set = function(D, j) {
        var Y, R = z.p(D), h = "set" + (this.$u ? "UTC" : ""), S = (Y = {}, Y[u] = h + "Date", Y[v] = h + "Date", Y[d] = h + "Month", Y[y] = h + "FullYear", Y[l] = h + "Hours", Y[i] = h + "Minutes", Y[e] = h + "Seconds", Y[a] = h + "Milliseconds", Y)[R], B = R === u ? this.$D + (j - this.$W) : j;
        if (R === d || R === y) {
          var F = this.clone().set(v, 1);
          F.$d[S](B), F.init(), this.$d = F.set(v, Math.min(this.$D, F.daysInMonth())).$d;
        } else
          S && this.$d[S](B);
        return this.init(), this;
      }, x.set = function(D, j) {
        return this.clone().$set(D, j);
      }, x.get = function(D) {
        return this[z.p(D)]();
      }, x.add = function(D, j) {
        var Y, R = this;
        D = Number(D);
        var h = z.p(j), S = function(V) {
          var Q = Z(R);
          return z.w(Q.date(Q.date() + Math.round(V * D)), R);
        };
        if (h === d)
          return this.set(d, this.$M + D);
        if (h === y)
          return this.set(y, this.$y + D);
        if (h === u)
          return S(1);
        if (h === c)
          return S(7);
        var B = (Y = {}, Y[i] = t, Y[l] = s, Y[e] = n, Y)[h] || 1, F = this.$d.getTime() + D * B;
        return z.w(F, this);
      }, x.subtract = function(D, j) {
        return this.add(-1 * D, j);
      }, x.format = function(D) {
        var j = this, Y = this.$locale();
        if (!this.isValid())
          return Y.invalidDate || M;
        var R = D || "YYYY-MM-DDTHH:mm:ssZ", h = z.z(this), S = this.$H, B = this.$m, F = this.$M, V = Y.weekdays, Q = Y.months, re = Y.meridiem, X = function(te, ce, P, fe) {
          return te && (te[ce] || te(j, R)) || P[ce].slice(0, fe);
        }, ee = function(te) {
          return z.s(S % 12 || 12, te, "0");
        }, se = re || function(te, ce, P) {
          var fe = te < 12 ? "AM" : "PM";
          return P ? fe.toLowerCase() : fe;
        };
        return R.replace(L, function(te, ce) {
          return ce || function(P) {
            switch (P) {
              case "YY":
                return String(j.$y).slice(-2);
              case "YYYY":
                return z.s(j.$y, 4, "0");
              case "M":
                return F + 1;
              case "MM":
                return z.s(F + 1, 2, "0");
              case "MMM":
                return X(Y.monthsShort, F, Q, 3);
              case "MMMM":
                return X(Q, F);
              case "D":
                return j.$D;
              case "DD":
                return z.s(j.$D, 2, "0");
              case "d":
                return String(j.$W);
              case "dd":
                return X(Y.weekdaysMin, j.$W, V, 2);
              case "ddd":
                return X(Y.weekdaysShort, j.$W, V, 3);
              case "dddd":
                return V[j.$W];
              case "H":
                return String(S);
              case "HH":
                return z.s(S, 2, "0");
              case "h":
                return ee(1);
              case "hh":
                return ee(2);
              case "a":
                return se(S, B, !0);
              case "A":
                return se(S, B, !1);
              case "m":
                return String(B);
              case "mm":
                return z.s(B, 2, "0");
              case "s":
                return String(j.$s);
              case "ss":
                return z.s(j.$s, 2, "0");
              case "SSS":
                return z.s(j.$ms, 3, "0");
              case "Z":
                return h;
            }
            return null;
          }(te) || h.replace(":", "");
        });
      }, x.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, x.diff = function(D, j, Y) {
        var R, h = this, S = z.p(j), B = Z(D), F = (B.utcOffset() - this.utcOffset()) * t, V = this - B, Q = function() {
          return z.m(h, B);
        };
        switch (S) {
          case y:
            R = Q() / 12;
            break;
          case d:
            R = Q();
            break;
          case m:
            R = Q() / 3;
            break;
          case c:
            R = (V - F) / 6048e5;
            break;
          case u:
            R = (V - F) / 864e5;
            break;
          case l:
            R = V / s;
            break;
          case i:
            R = V / t;
            break;
          case e:
            R = V / n;
            break;
          default:
            R = V;
        }
        return Y ? R : z.a(R);
      }, x.daysInMonth = function() {
        return this.endOf(d).$D;
      }, x.$locale = function() {
        return J[this.$L];
      }, x.locale = function(D, j) {
        if (!D)
          return this.$L;
        var Y = this.clone(), R = G(D, j, !0);
        return R && (Y.$L = R), Y;
      }, x.clone = function() {
        return z.w(this.$d, this);
      }, x.toDate = function() {
        return new Date(this.valueOf());
      }, x.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, x.toISOString = function() {
        return this.$d.toISOString();
      }, x.toString = function() {
        return this.$d.toUTCString();
      }, I;
    }(), ue = ne.prototype;
    return Z.prototype = ue, [["$ms", a], ["$s", e], ["$m", i], ["$H", l], ["$W", u], ["$M", d], ["$y", y], ["$D", v]].forEach(function(I) {
      ue[I[1]] = function(x) {
        return this.$g(x, I[0], I[1]);
      };
    }), Z.extend = function(I, x) {
      return I.$i || (I(x, ne, Z), I.$i = !0), Z;
    }, Z.locale = G, Z.isDayjs = C, Z.unix = function(I) {
      return Z(1e3 * I);
    }, Z.en = J[H], Z.Ls = J, Z.p = {}, Z;
  });
})(sn);
var y_ = sn.exports;
const f = /* @__PURE__ */ Ql(y_);
function k(r, o) {
  return o.forEach(function(n) {
    n && typeof n != "string" && !Array.isArray(n) && Object.keys(n).forEach(function(t) {
      if (t !== "default" && !(t in r)) {
        var s = Object.getOwnPropertyDescriptor(n, t);
        Object.defineProperty(r, t, s.get ? s : {
          enumerable: !0,
          get: function() {
            return n[t];
          }
        });
      }
    });
  }), Object.freeze(r);
}
const Y_ = [
  "blue",
  "orange",
  "yellow",
  "red",
  "purple",
  "amber",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose"
], b_ = "blue", Zt = "en", Te = "YYYY-MM-DD", g_ = "sun", L_ = [0, 1, 2, 3, 4, 5, 6], x_ = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], k_ = 42, Fe = {
  100: {
    blue: "bg-blue-100",
    orange: "bg-orange-100",
    yellow: "bg-yellow-100",
    red: "bg-red-100",
    purple: "bg-purple-100",
    amber: "bg-amber-100",
    lime: "bg-lime-100",
    green: "bg-green-100",
    emerald: "bg-emerald-100",
    teal: "bg-teal-100",
    cyan: "bg-cyan-100",
    sky: "bg-sky-100",
    indigo: "bg-indigo-100",
    violet: "bg-violet-100",
    fuchsia: "bg-fuchsia-100",
    pink: "bg-pink-100",
    rose: "bg-rose-100"
  },
  200: {
    blue: "bg-blue-200",
    orange: "bg-orange-200",
    yellow: "bg-yellow-200",
    red: "bg-red-200",
    purple: "bg-purple-200",
    amber: "bg-amber-200",
    lime: "bg-lime-200",
    green: "bg-green-200",
    emerald: "bg-emerald-200",
    teal: "bg-teal-200",
    cyan: "bg-cyan-200",
    sky: "bg-sky-200",
    indigo: "bg-indigo-200",
    violet: "bg-violet-200",
    fuchsia: "bg-fuchsia-200",
    pink: "bg-pink-200",
    rose: "bg-rose-200"
  },
  500: {
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    yellow: "bg-yellow-500",
    red: "bg-red-500",
    purple: "bg-purple-500",
    amber: "bg-amber-500",
    lime: "bg-lime-500",
    green: "bg-green-500",
    emerald: "bg-emerald-500",
    teal: "bg-teal-500",
    cyan: "bg-cyan-500",
    sky: "bg-sky-500",
    indigo: "bg-indigo-500",
    violet: "bg-violet-500",
    fuchsia: "bg-fuchsia-500",
    pink: "bg-pink-500",
    rose: "bg-rose-500"
  },
  hover: {
    blue: "hover:bg-blue-600",
    orange: "hover:bg-orange-600",
    yellow: "hover:bg-yellow-600",
    red: "hover:bg-red-600",
    purple: "hover:bg-purple-600",
    amber: "hover:bg-amber-600",
    lime: "hover:bg-lime-600",
    green: "hover:bg-green-600",
    emerald: "hover:bg-emerald-600",
    teal: "hover:bg-teal-600",
    cyan: "hover:bg-cyan-600",
    sky: "hover:bg-sky-600",
    indigo: "hover:bg-indigo-600",
    violet: "hover:bg-violet-600",
    fuchsia: "hover:bg-fuchsia-600",
    pink: "hover:bg-pink-600",
    rose: "hover:bg-rose-600"
  }
}, Wt = {
  500: {
    blue: "text-blue-500",
    orange: "text-orange-500",
    yellow: "text-yellow-500",
    red: "text-red-500",
    purple: "text-purple-500",
    amber: "text-amber-500",
    lime: "text-lime-500",
    green: "text-green-500",
    emerald: "text-emerald-500",
    teal: "text-teal-500",
    cyan: "text-cyan-500",
    sky: "text-sky-500",
    indigo: "text-indigo-500",
    violet: "text-violet-500",
    fuchsia: "text-fuchsia-500",
    pink: "text-pink-500",
    rose: "text-rose-500"
  },
  600: {
    blue: "text-blue-600 dark:text-blue-400 dark:hover:text-blue-400",
    orange: "text-orange-600 dark:text-orange-400 dark:hover:text-orange-400",
    yellow: "text-yellow-600 dark:text-yellow-400 dark:hover:text-yellow-400",
    red: "text-red-600 dark:text-red-400 dark:hover:text-red-400",
    purple: "text-purple-600 dark:text-purple-400 dark:hover:text-purple-400",
    amber: "text-amber-600 dark:text-amber-400 dark:hover:text-amber-400",
    lime: "text-lime-600 dark:text-lime-400 dark:hover:text-lime-400",
    green: "text-green-600 dark:text-green-400 dark:hover:text-green-400",
    emerald: "text-emerald-600 dark:text-emerald-400 dark:hover:text-emerald-400",
    teal: "text-teal-600 dark:text-teal-400 dark:hover:text-teal-400",
    cyan: "text-cyan-600 dark:text-cyan-400 dark:hover:text-cyan-400",
    sky: "text-sky-600 dark:text-sky-400 dark:hover:text-sky-400",
    indigo: "text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-400",
    violet: "text-violet-600 dark:text-violet-400 dark:hover:text-violet-400",
    fuchsia: "text-fuchsia-600 dark:text-fuchsia-400 dark:hover:text-fuchsia-400",
    pink: "text-pink-600 dark:text-pink-400 dark:hover:text-pink-400",
    rose: "text-rose-600 dark:text-rose-400 dark:hover:text-rose-400"
  },
  hover: {
    blue: "hover:text-blue-700",
    orange: "hover:text-orange-700",
    yellow: "hover:text-yellow-700",
    red: "hover:text-red-700",
    purple: "hover:text-purple-700",
    amber: "hover:text-amber-700",
    lime: "hover:text-lime-700",
    green: "hover:text-green-700",
    emerald: "hover:text-emerald-700",
    teal: "hover:text-teal-700",
    cyan: "hover:text-cyan-700",
    sky: "hover:text-sky-700",
    indigo: "hover:text-indigo-700",
    violet: "hover:text-violet-700",
    fuchsia: "hover:text-fuchsia-700",
    pink: "hover:text-pink-700",
    rose: "hover:text-rose-700"
  }
}, on = {
  500: {
    blue: "border-blue-500",
    orange: "border-orange-500",
    yellow: "border-yellow-500",
    red: "border-red-500",
    purple: "border-purple-500",
    amber: "border-amber-500",
    lime: "border-lime-500",
    green: "border-green-500",
    emerald: "border-emerald-500",
    teal: "border-teal-500",
    cyan: "border-cyan-500",
    sky: "border-sky-500",
    indigo: "border-indigo-500",
    violet: "border-violet-500",
    fuchsia: "border-fuchsia-500",
    pink: "border-pink-500",
    rose: "border-rose-500"
  },
  focus: {
    blue: "focus:border-blue-500",
    orange: "focus:border-orange-500",
    yellow: "focus:border-yellow-500",
    red: "focus:border-red-500",
    purple: "focus:border-purple-500",
    amber: "focus:border-amber-500",
    lime: "focus:border-lime-500",
    green: "focus:border-green-500",
    emerald: "focus:border-emerald-500",
    teal: "focus:border-teal-500",
    cyan: "focus:border-cyan-500",
    sky: "focus:border-sky-500",
    indigo: "focus:border-indigo-500",
    violet: "focus:border-violet-500",
    fuchsia: "focus:border-fuchsia-500",
    pink: "focus:border-pink-500",
    rose: "focus:border-rose-500"
  }
}, Xt = {
  focus: {
    blue: "focus:ring-blue-500",
    orange: "focus:ring-orange-500",
    yellow: "focus:ring-yellow-500",
    red: "focus:ring-red-500",
    purple: "focus:ring-purple-500",
    amber: "focus:ring-amber-500",
    lime: "focus:ring-lime-500",
    green: "focus:ring-green-500",
    emerald: "focus:ring-emerald-500",
    teal: "focus:ring-teal-500",
    cyan: "focus:ring-cyan-500",
    sky: "focus:ring-sky-500",
    indigo: "focus:ring-indigo-500",
    violet: "focus:ring-violet-500",
    fuchsia: "focus:ring-fuchsia-500",
    pink: "focus:ring-pink-500",
    rose: "focus:ring-rose-500"
  },
  "second-focus": {
    blue: "focus:ring-blue-500/20",
    orange: "focus:ring-orange-500/20",
    yellow: "focus:ring-yellow-500/20",
    red: "focus:ring-red-500/20",
    purple: "focus:ring-purple-500/20",
    amber: "focus:ring-amber-500/20",
    lime: "focus:ring-lime-500/20",
    green: "focus:ring-green-500/20",
    emerald: "focus:ring-emerald-500/20",
    teal: "focus:ring-teal-500/20",
    cyan: "focus:ring-cyan-500/20",
    sky: "focus:ring-sky-500/20",
    indigo: "focus:ring-indigo-500/20",
    violet: "focus:ring-violet-500/20",
    fuchsia: "focus:ring-fuchsia-500/20",
    pink: "focus:ring-pink-500/20",
    rose: "focus:ring-rose-500/20"
  }
}, w_ = {
  focus: {
    blue: "focus:ring-blue-500/50 focus:bg-blue-100/50",
    orange: "focus:ring-orange-500/50 focus:bg-orange-100/50",
    yellow: "focus:ring-yellow-500/50 focus:bg-yellow-100/50",
    red: "focus:ring-red-500/50 focus:bg-red-100/50",
    purple: "focus:ring-purple-500/50 focus:bg-purple-100/50",
    amber: "focus:ring-amber-500/50 focus:bg-amber-100/50",
    lime: "focus:ring-lime-500/50 focus:bg-lime-100/50",
    green: "focus:ring-green-500/50 focus:bg-green-100/50",
    emerald: "focus:ring-emerald-500/50 focus:bg-emerald-100/50",
    teal: "focus:ring-teal-500/50 focus:bg-teal-100/50",
    cyan: "focus:ring-cyan-500/50 focus:bg-cyan-100/50",
    sky: "focus:ring-sky-500/50 focus:bg-sky-100/50",
    indigo: "focus:ring-indigo-500/50 focus:bg-indigo-100/50",
    violet: "focus:ring-violet-500/50 focus:bg-violet-100/50",
    fuchsia: "focus:ring-fuchsia-500/50 focus:bg-fuchsia-100/50",
    pink: "focus:ring-pink-500/50 focus:bg-pink-100/50",
    rose: "focus:ring-rose-500/50 focus:bg-rose-100/50"
  }
}, Ne = yt({
  input: void 0,
  primaryColor: "blue",
  configs: void 0,
  calendarContainer: null,
  arrowContainer: null,
  period: { start: null, end: null },
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changePeriod: (r) => {
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  hideDatepicker: () => {
  },
  dayHover: null,
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changeDayHover: (r) => {
  },
  inputText: "",
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changeInputText: (r) => {
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  updateFirstDate: (r) => {
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function,@typescript-eslint/no-unused-vars
  changeDatepickerValue: (r, o) => {
  },
  showFooter: !1,
  value: null,
  i18n: Zt,
  disabled: !1,
  inputClassName: "",
  containerClassName: "",
  toggleClassName: "",
  readOnly: !1,
  displayFormat: Te,
  minDate: null,
  maxDate: null,
  dateLooking: "forward",
  disabledDates: null,
  inputId: void 0,
  inputName: void 0,
  startWeekOn: g_,
  toggleIcon: void 0,
  classNames: void 0,
  popoverDirection: void 0,
  separator: "~"
});
var b = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function g(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var ln = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t();
  })(b, function() {
    var n = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, t = /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g, s = /\d\d/, a = /\d\d?/, e = /\d*[^-_:/,()\s\d]+/, i = {}, l = function(M) {
      return (M = +M) + (M > 68 ? 1900 : 2e3);
    }, u = function(M) {
      return function(w) {
        this[M] = +w;
      };
    }, c = [/[+-]\d\d:?(\d\d)?|Z/, function(M) {
      (this.zone || (this.zone = {})).offset = function(w) {
        if (!w || w === "Z")
          return 0;
        var L = w.match(/([+-]|\d\d)/g), $ = 60 * L[1] + (+L[2] || 0);
        return $ === 0 ? 0 : L[0] === "+" ? -$ : $;
      }(M);
    }], d = function(M) {
      var w = i[M];
      return w && (w.indexOf ? w : w.s.concat(w.f));
    }, m = function(M, w) {
      var L, $ = i.meridiem;
      if ($) {
        for (var O = 1; O <= 24; O += 1)
          if (M.indexOf($(O, 0, w)) > -1) {
            L = O > 12;
            break;
          }
      } else
        L = M === (w ? "pm" : "PM");
      return L;
    }, y = { A: [e, function(M) {
      this.afternoon = m(M, !1);
    }], a: [e, function(M) {
      this.afternoon = m(M, !0);
    }], S: [/\d/, function(M) {
      this.milliseconds = 100 * +M;
    }], SS: [s, function(M) {
      this.milliseconds = 10 * +M;
    }], SSS: [/\d{3}/, function(M) {
      this.milliseconds = +M;
    }], s: [a, u("seconds")], ss: [a, u("seconds")], m: [a, u("minutes")], mm: [a, u("minutes")], H: [a, u("hours")], h: [a, u("hours")], HH: [a, u("hours")], hh: [a, u("hours")], D: [a, u("day")], DD: [s, u("day")], Do: [e, function(M) {
      var w = i.ordinal, L = M.match(/\d+/);
      if (this.day = L[0], w)
        for (var $ = 1; $ <= 31; $ += 1)
          w($).replace(/\[|\]/g, "") === M && (this.day = $);
    }], M: [a, u("month")], MM: [s, u("month")], MMM: [e, function(M) {
      var w = d("months"), L = (d("monthsShort") || w.map(function($) {
        return $.slice(0, 3);
      })).indexOf(M) + 1;
      if (L < 1)
        throw new Error();
      this.month = L % 12 || L;
    }], MMMM: [e, function(M) {
      var w = d("months").indexOf(M) + 1;
      if (w < 1)
        throw new Error();
      this.month = w % 12 || w;
    }], Y: [/[+-]?\d+/, u("year")], YY: [s, function(M) {
      this.year = l(M);
    }], YYYY: [/\d{4}/, u("year")], Z: c, ZZ: c };
    function v(M) {
      var w, L;
      w = M, L = i && i.formats;
      for (var $ = (M = w.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(G, Z, z) {
        var ne = z && z.toUpperCase();
        return Z || L[z] || n[z] || L[ne].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(ue, I, x) {
          return I || x.slice(1);
        });
      })).match(t), O = $.length, q = 0; q < O; q += 1) {
        var H = $[q], J = y[H], E = J && J[0], C = J && J[1];
        $[q] = C ? { regex: E, parser: C } : H.replace(/^\[|\]$/g, "");
      }
      return function(G) {
        for (var Z = {}, z = 0, ne = 0; z < O; z += 1) {
          var ue = $[z];
          if (typeof ue == "string")
            ne += ue.length;
          else {
            var I = ue.regex, x = ue.parser, D = G.slice(ne), j = I.exec(D)[0];
            x.call(Z, j), G = G.replace(j, "");
          }
        }
        return function(Y) {
          var R = Y.afternoon;
          if (R !== void 0) {
            var h = Y.hours;
            R ? h < 12 && (Y.hours += 12) : h === 12 && (Y.hours = 0), delete Y.afternoon;
          }
        }(Z), Z;
      };
    }
    return function(M, w, L) {
      L.p.customParseFormat = !0, M && M.parseTwoDigitYear && (l = M.parseTwoDigitYear);
      var $ = w.prototype, O = $.parse;
      $.parse = function(q) {
        var H = q.date, J = q.utc, E = q.args;
        this.$u = J;
        var C = E[1];
        if (typeof C == "string") {
          var G = E[2] === !0, Z = E[3] === !0, z = G || Z, ne = E[2];
          Z && (ne = E[2]), i = this.$locale(), !G && ne && (i = L.Ls[ne]), this.$d = function(D, j, Y) {
            try {
              if (["x", "X"].indexOf(j) > -1)
                return new Date((j === "X" ? 1e3 : 1) * D);
              var R = v(j)(D), h = R.year, S = R.month, B = R.day, F = R.hours, V = R.minutes, Q = R.seconds, re = R.milliseconds, X = R.zone, ee = /* @__PURE__ */ new Date(), se = B || (h || S ? 1 : ee.getDate()), te = h || ee.getFullYear(), ce = 0;
              h && !S || (ce = S > 0 ? S - 1 : ee.getMonth());
              var P = F || 0, fe = V || 0, He = Q || 0, Se = re || 0;
              return X ? new Date(Date.UTC(te, ce, se, P, fe, He, Se + 60 * X.offset * 1e3)) : Y ? new Date(Date.UTC(te, ce, se, P, fe, He, Se)) : new Date(te, ce, se, P, fe, He, Se);
            } catch {
              return /* @__PURE__ */ new Date("");
            }
          }(H, C, J), this.init(), ne && ne !== !0 && (this.$L = this.locale(ne).$L), z && H != this.format(C) && (this.$d = /* @__PURE__ */ new Date("")), i = {};
        } else if (C instanceof Array)
          for (var ue = C.length, I = 1; I <= ue; I += 1) {
            E[1] = C[I - 1];
            var x = L.apply(this, E);
            if (x.isValid()) {
              this.$d = x.$d, this.$L = x.$L, this.init();
              break;
            }
            I === ue && (this.$d = /* @__PURE__ */ new Date(""));
          }
        else
          O.call(this, q);
      };
    };
  });
})(ln);
var D_ = ln.exports, S_ = /* @__PURE__ */ g(D_), un = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t();
  })(b, function() {
    return function(n, t) {
      t.prototype.weekday = function(s) {
        var a = this.$locale().weekStart || 0, e = this.$W, i = (e < a ? e + 7 : e) - a;
        return this.$utils().u(s) ? i : this.subtract(i, "day").add(s, "day");
      };
    };
  });
})(un);
var j_ = un.exports, H_ = /* @__PURE__ */ g(j_);
f.extend(H_);
f.extend(S_);
function $r(...r) {
  return r.filter(Boolean).join(" ");
}
function _n(r = 0, o = 0) {
  const n = [];
  for (let t = r; t <= o; t++)
    n.push(t);
  return n;
}
function T_(r, o = 3) {
  return r.slice(0, o);
}
function E_(r) {
  return `${r[0].toUpperCase()}${r.slice(1, r.length)}`;
}
function ge(r, o = Te) {
  return r.format(o);
}
function mt(r, o = Te) {
  return f(r, o);
}
function N_(r) {
  return {
    ddd: ge(f(r).startOf("month"), "ddd"),
    basic: ge(f(r).startOf("month")),
    object: f(r).startOf("month")
  };
}
function Qt(r) {
  return isNaN(f(r).daysInMonth()) ? [] : [..._n(1, f(r).daysInMonth())];
}
function Oe(r) {
  return r.date(1).hour(0).minute(0).second(0).month(r.month() + 1);
}
function Ae(r) {
  return r.date(1).hour(0).minute(0).second(0).month(r.month() - 1);
}
function $_(r = [], o = 0) {
  return r.slice(0, o);
}
function C_(r = [], o = 0) {
  const n = [];
  if (Array.isArray(r) && o > 0) {
    if (o >= r.length)
      return r;
    let t = r.length - 1;
    for (let s = 0; s < o; s++)
      n.push(r[t]), t--;
  }
  return n.reverse();
}
function A_(r, o) {
  let n = 0, t = 0;
  if (o)
    switch (o) {
      case "mon":
        t = 6;
        break;
      case "tue":
        t = 5;
        break;
      case "wed":
        t = 4;
        break;
      case "thu":
        t = 3;
        break;
      case "fri":
        t = 2;
        break;
      case "sat":
        t = 1;
        break;
      case "sun":
        t = 0;
        break;
    }
  return ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].forEach((s, a) => {
    s.includes(r) && (n = (a + t) % 7);
  }), n;
}
function P_(r, o = 0) {
  return C_(Qt(r), o);
}
function O_(r, o = 0) {
  return $_(Qt(r), o);
}
function er(r = Zt) {
  switch (r) {
    case "af":
      Promise.resolve().then(function() {
        return id;
      });
      break;
    case "am":
      Promise.resolve().then(function() {
        return ud;
      });
      break;
    case "ar-dz":
      Promise.resolve().then(function() {
        return dd;
      });
      break;
    case "ar-iq":
      Promise.resolve().then(function() {
        return md;
      });
      break;
    case "ar-kw":
      Promise.resolve().then(function() {
        return pd;
      });
      break;
    case "ar-ly":
      Promise.resolve().then(function() {
        return Md;
      });
      break;
    case "ar-ma":
      Promise.resolve().then(function() {
        return yd;
      });
      break;
    case "ar-sa":
      Promise.resolve().then(function() {
        return bd;
      });
      break;
    case "ar-tn":
      Promise.resolve().then(function() {
        return Ld;
      });
      break;
    case "ar":
      Promise.resolve().then(function() {
        return kd;
      });
      break;
    case "az":
      Promise.resolve().then(function() {
        return Dd;
      });
      break;
    case "bg":
      Promise.resolve().then(function() {
        return jd;
      });
      break;
    case "bi":
      Promise.resolve().then(function() {
        return Td;
      });
      break;
    case "bm":
      Promise.resolve().then(function() {
        return Nd;
      });
      break;
    case "bn-bd":
      Promise.resolve().then(function() {
        return Cd;
      });
      break;
    case "bn":
      Promise.resolve().then(function() {
        return Pd;
      });
      break;
    case "bo":
      Promise.resolve().then(function() {
        return Rd;
      });
      break;
    case "br":
      Promise.resolve().then(function() {
        return Id;
      });
      break;
    case "ca":
      Promise.resolve().then(function() {
        return Jd;
      });
      break;
    case "cs":
      Promise.resolve().then(function() {
        return Wd;
      });
      break;
    case "cv":
      Promise.resolve().then(function() {
        return Vd;
      });
      break;
    case "cy":
      Promise.resolve().then(function() {
        return Ud;
      });
      break;
    case "da":
      Promise.resolve().then(function() {
        return Zd;
      });
      break;
    case "de-at":
      Promise.resolve().then(function() {
        return Qd;
      });
      break;
    case "de-ch":
      Promise.resolve().then(function() {
        return tc;
      });
      break;
    case "de":
      Promise.resolve().then(function() {
        return nc;
      });
      break;
    case "dv":
      Promise.resolve().then(function() {
        return sc;
      });
      break;
    case "el":
      Promise.resolve().then(function() {
        return ic;
      });
      break;
    case "en-au":
      Promise.resolve().then(function() {
        return uc;
      });
      break;
    case "en-gb":
      Promise.resolve().then(function() {
        return dc;
      });
      break;
    case "en-ie":
      Promise.resolve().then(function() {
        return mc;
      });
      break;
    case "en-il":
      Promise.resolve().then(function() {
        return pc;
      });
      break;
    case "en-in":
      Promise.resolve().then(function() {
        return Mc;
      });
      break;
    case "en-nz":
      Promise.resolve().then(function() {
        return yc;
      });
      break;
    case "en-sg":
      Promise.resolve().then(function() {
        return bc;
      });
      break;
    case "en-tt":
      Promise.resolve().then(function() {
        return Lc;
      });
      break;
    case "en":
      Promise.resolve().then(function() {
        return Pr;
      });
      break;
    case "eo":
      Promise.resolve().then(function() {
        return wc;
      });
      break;
    case "es-do":
      Promise.resolve().then(function() {
        return Sc;
      });
      break;
    case "es-mx":
      Promise.resolve().then(function() {
        return Hc;
      });
      break;
    case "es-pr":
      Promise.resolve().then(function() {
        return Ec;
      });
      break;
    case "es-us":
      Promise.resolve().then(function() {
        return $c;
      });
      break;
    case "es":
      Promise.resolve().then(function() {
        return Ac;
      });
      break;
    case "et":
      Promise.resolve().then(function() {
        return Oc;
      });
      break;
    case "eu":
      Promise.resolve().then(function() {
        return zc;
      });
      break;
    case "fa":
      Promise.resolve().then(function() {
        return Fc;
      });
      break;
    case "fi":
      Promise.resolve().then(function() {
        return Bc;
      });
      break;
    case "fo":
      Promise.resolve().then(function() {
        return Kc;
      });
      break;
    case "fr-ch":
      Promise.resolve().then(function() {
        return qc;
      });
      break;
    case "fr":
      Promise.resolve().then(function() {
        return Gc;
      });
      break;
    case "fy":
      Promise.resolve().then(function() {
        return Xc;
      });
      break;
    case "ga":
      Promise.resolve().then(function() {
        return em;
      });
      break;
    case "gd":
      Promise.resolve().then(function() {
        return rm;
      });
      break;
    case "gl":
      Promise.resolve().then(function() {
        return am;
      });
      break;
    case "gom-latn":
      Promise.resolve().then(function() {
        return om;
      });
      break;
    case "gu":
      Promise.resolve().then(function() {
        return lm;
      });
      break;
    case "he":
      Promise.resolve().then(function() {
        return _m;
      });
      break;
    case "hi":
      Promise.resolve().then(function() {
        return cm;
      });
      break;
    case "hr":
      Promise.resolve().then(function() {
        return fm;
      });
      break;
    case "ht":
      Promise.resolve().then(function() {
        return hm;
      });
      break;
    case "hu":
      Promise.resolve().then(function() {
        return vm;
      });
      break;
    case "hy-am":
      Promise.resolve().then(function() {
        return Ym;
      });
      break;
    case "id":
      Promise.resolve().then(function() {
        return gm;
      });
      break;
    case "is":
      Promise.resolve().then(function() {
        return xm;
      });
      break;
    case "it-ch":
      Promise.resolve().then(function() {
        return wm;
      });
      break;
    case "it":
      Promise.resolve().then(function() {
        return Sm;
      });
      break;
    case "ja":
      Promise.resolve().then(function() {
        return Hm;
      });
      break;
    case "jv":
      Promise.resolve().then(function() {
        return Em;
      });
      break;
    case "ka":
      Promise.resolve().then(function() {
        return $m;
      });
      break;
    case "kk":
      Promise.resolve().then(function() {
        return Am;
      });
      break;
    case "ko":
      Promise.resolve().then(function() {
        return Om;
      });
      break;
    case "ku":
      Promise.resolve().then(function() {
        return zm;
      });
      break;
    case "ky":
      Promise.resolve().then(function() {
        return Fm;
      });
      break;
    case "lb":
      Promise.resolve().then(function() {
        return Bm;
      });
      break;
    case "lo":
      Promise.resolve().then(function() {
        return Km;
      });
      break;
    case "lt":
      Promise.resolve().then(function() {
        return qm;
      });
      break;
    case "lv":
      Promise.resolve().then(function() {
        return Gm;
      });
      break;
    case "me":
      Promise.resolve().then(function() {
        return Xm;
      });
      break;
    case "mi":
      Promise.resolve().then(function() {
        return ef;
      });
      break;
    case "mk":
      Promise.resolve().then(function() {
        return rf;
      });
      break;
    case "ml":
      Promise.resolve().then(function() {
        return af;
      });
      break;
    case "mn":
      Promise.resolve().then(function() {
        return of;
      });
      break;
    case "ms-my":
      Promise.resolve().then(function() {
        return uf;
      });
      break;
    case "ms":
      Promise.resolve().then(function() {
        return df;
      });
      break;
    case "mt":
      Promise.resolve().then(function() {
        return mf;
      });
      break;
    case "my":
      Promise.resolve().then(function() {
        return pf;
      });
      break;
    case "nb":
      Promise.resolve().then(function() {
        return Mf;
      });
      break;
    case "ne":
      Promise.resolve().then(function() {
        return yf;
      });
      break;
    case "nl-be":
      Promise.resolve().then(function() {
        return bf;
      });
      break;
    case "nl":
      Promise.resolve().then(function() {
        return Lf;
      });
      break;
    case "nn":
      Promise.resolve().then(function() {
        return kf;
      });
      break;
    case "oc-lnc":
      Promise.resolve().then(function() {
        return Df;
      });
      break;
    case "pa-in":
      Promise.resolve().then(function() {
        return jf;
      });
      break;
    case "pl":
      Promise.resolve().then(function() {
        return Tf;
      });
      break;
    case "pt-br":
      Promise.resolve().then(function() {
        return Nf;
      });
      break;
    case "pt":
      Promise.resolve().then(function() {
        return Cf;
      });
      break;
    case "rn":
      Promise.resolve().then(function() {
        return Pf;
      });
      break;
    case "ro":
      Promise.resolve().then(function() {
        return Rf;
      });
      break;
    case "ru":
      Promise.resolve().then(function() {
        return If;
      });
      break;
    case "rw":
      Promise.resolve().then(function() {
        return Jf;
      });
      break;
    case "sd":
      Promise.resolve().then(function() {
        return Wf;
      });
      break;
    case "se":
      Promise.resolve().then(function() {
        return Vf;
      });
      break;
    case "si":
      Promise.resolve().then(function() {
        return Uf;
      });
      break;
    case "sk":
      Promise.resolve().then(function() {
        return Zf;
      });
      break;
    case "sl":
      Promise.resolve().then(function() {
        return Qf;
      });
      break;
    case "sq":
      Promise.resolve().then(function() {
        return tp;
      });
      break;
    case "sr":
      Promise.resolve().then(function() {
        return np;
      });
      break;
    case "sr-cyrl":
      Promise.resolve().then(function() {
        return sp;
      });
      break;
    case "ss":
      Promise.resolve().then(function() {
        return ip;
      });
      break;
    case "sv-fi":
      Promise.resolve().then(function() {
        return up;
      });
      break;
    case "sv":
      Promise.resolve().then(function() {
        return dp;
      });
      break;
    case "sw":
      Promise.resolve().then(function() {
        return mp;
      });
      break;
    case "ta":
      Promise.resolve().then(function() {
        return pp;
      });
      break;
    case "te":
      Promise.resolve().then(function() {
        return Mp;
      });
      break;
    case "tg":
      Promise.resolve().then(function() {
        return yp;
      });
      break;
    case "th":
      Promise.resolve().then(function() {
        return bp;
      });
      break;
    case "tk":
      Promise.resolve().then(function() {
        return Lp;
      });
      break;
    case "tl-ph":
      Promise.resolve().then(function() {
        return kp;
      });
      break;
    case "tlh":
      Promise.resolve().then(function() {
        return Dp;
      });
      break;
    case "tr":
      Promise.resolve().then(function() {
        return jp;
      });
      break;
    case "tzl":
      Promise.resolve().then(function() {
        return Tp;
      });
      break;
    case "tzm-latn":
      Promise.resolve().then(function() {
        return Np;
      });
      break;
    case "tzm":
      Promise.resolve().then(function() {
        return Cp;
      });
      break;
    case "ug-cn":
      Promise.resolve().then(function() {
        return Pp;
      });
      break;
    case "uk":
      Promise.resolve().then(function() {
        return Rp;
      });
      break;
    case "ur":
      Promise.resolve().then(function() {
        return Ip;
      });
      break;
    case "uz-latn":
      Promise.resolve().then(function() {
        return Jp;
      });
      break;
    case "uz":
      Promise.resolve().then(function() {
        return Wp;
      });
      break;
    case "vi":
      Promise.resolve().then(function() {
        return Vp;
      });
      break;
    case "x-pseudo":
      Promise.resolve().then(function() {
        return Up;
      });
      break;
    case "yo":
      Promise.resolve().then(function() {
        return Zp;
      });
      break;
    case "zh-cn":
      Promise.resolve().then(function() {
        return Qp;
      });
      break;
    case "zh-hk":
      Promise.resolve().then(function() {
        return th;
      });
      break;
    case "zh-tw":
      Promise.resolve().then(function() {
        return nh;
      });
      break;
    case "zh":
      Promise.resolve().then(function() {
        return sh;
      });
      break;
    default:
      Promise.resolve().then(function() {
        return Pr;
      });
      break;
  }
}
function Ot(r) {
  return r instanceof Date && !isNaN(r.getTime());
}
const R_ = ({ className: r = "w-6 h-6" }) => T.createElement(
  "svg",
  { className: r, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
  T.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" })
), z_ = ({ className: r = "w-6 h-6" }) => T.createElement(
  "svg",
  { className: r, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
  T.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" })
), I_ = ({ className: r = "w-6 h-6" }) => T.createElement(
  "svg",
  { className: r, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
  T.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15.75 19.5L8.25 12l7.5-7.5" })
), F_ = ({ className: r = "w-6 h-6" }) => T.createElement(
  "svg",
  { className: r, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
  T.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" })
), J_ = ({ className: r = "w-6 h-6" }) => T.createElement(
  "svg",
  { className: r, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
  T.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M8.25 4.5l7.5 7.5-7.5 7.5" })
), B_ = ({ className: r = "w-6 h-6" }) => T.createElement(
  "svg",
  { className: r, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor" },
  T.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" })
), W_ = T.forwardRef((r, o) => T.createElement("div", { ref: o, className: "absolute z-20 h-4 w-4 rotate-45 mt-0.5 ml-[1.2rem] border-l border-t border-gray-300 bg-white dark:bg-slate-800 dark:border-slate-600" })), K_ = ({ children: r, onClick: o, disabled: n = !1 }) => {
  const { primaryColor: t } = De(Ne), s = oe(() => `w-full transition-all duration-300 bg-white dark:text-gray-700 font-medium border border-gray-300 px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-offset-2 hover:bg-gray-50 ${Xt.focus[t]}`, [t]);
  return T.createElement("button", { type: "button", className: s(), onClick: o, disabled: n }, r);
}, V_ = ({ children: r, onClick: o, disabled: n = !1 }) => {
  const { primaryColor: t } = De(Ne), s = Fe[500][t], a = on[500][t], e = Fe.hover[t], i = Xt.focus[t], l = oe(() => `w-full transition-all duration-300 ${s} ${a} text-white font-medium border px-4 py-2 text-sm rounded-md focus:ring-2 focus:ring-offset-2 ${e} ${i} ${n ? " cursor-no-drop" : ""}`, [s, e, a, n, i]);
  return T.createElement("button", { type: "button", className: l(), onClick: o, disabled: n }, r);
}, Ge = ({ children: r, onClick: o, disabled: n, roundedFull: t = !1, padding: s = "py-[0.55rem]", active: a = !1 }) => {
  const { primaryColor: e } = De(Ne), i = oe(() => {
    const l = "dark:text-white/70 dark:hover:bg-white/10 dark:focus:bg-white/10", u = a ? "font-semibold bg-gray-50 dark:bg-white/5" : "", c = t ? `${l} ${u} transition-all duration-300 hover:bg-gray-100 rounded-full p-[0.45rem] focus:ring-1` : `w-full tracking-wide ${l} ${u} transition-all duration-300 px-3 ${s} uppercase hover:bg-gray-100 rounded-md focus:ring-1`, d = w_.focus[e];
    return `${c} ${d} ${n ? "line-through" : ""}`;
  }, [n, s, e, t, a]);
  return T.createElement("button", { type: "button", className: i(), onClick: o, disabled: n }, r);
}, q_ = () => {
  const { primaryColor: r } = De(Ne), o = Fe[500][r];
  return T.createElement("div", { className: `bg-blue-500 h-7 w-1 rounded-full hidden md:block ${o}` });
};
var dn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t();
  })(b, function() {
    return function(n, t, s) {
      t.prototype.isBetween = function(a, e, i, l) {
        var u = s(a), c = s(e), d = (l = l || "()")[0] === "(", m = l[1] === ")";
        return (d ? this.isAfter(u, i) : !this.isBefore(u, i)) && (m ? this.isBefore(c, i) : !this.isAfter(c, i)) || (d ? this.isBefore(u, i) : !this.isAfter(u, i)) && (m ? this.isAfter(c, i) : !this.isBefore(c, i));
      };
    };
  });
})(dn);
var U_ = dn.exports, G_ = /* @__PURE__ */ g(U_);
f.extend(G_);
const Z_ = ({ calendarData: r, onClickPreviousDays: o, onClickDay: n, onClickNextDays: t }) => {
  const { primaryColor: s, period: a, changePeriod: e, dayHover: i, changeDayHover: l, minDate: u, maxDate: c, disabledDates: d } = De(Ne), m = oe((E) => {
    const C = `${r.date.year()}-${r.date.month() + 1}-${E >= 10 ? E : "0" + E}`;
    return ge(f()) === ge(f(C)) ? Wt[500][s] : "";
  }, [r.date, s]), y = oe((E) => {
    const C = `${r.date.year()}-${r.date.month() + 1}-${E}`;
    let G = "";
    return f(C).isSame(a.start) && f(C).isSame(a.end) ? G = ` ${Fe[500][s]} text-white font-medium rounded-full` : f(C).isSame(a.start) ? G = ` ${Fe[500][s]} text-white font-medium ${f(C).isSame(i) && !a.end ? "rounded-full" : "rounded-l-full"}` : f(C).isSame(a.end) && (G = ` ${Fe[500][s]} text-white font-medium ${f(C).isSame(i) && !a.start ? "rounded-full" : "rounded-r-full"}`), {
      active: f(C).isSame(a.start) || f(C).isSame(a.end),
      className: G
    };
  }, [r.date, i, a.end, a.start, s]), v = oe((E) => {
    let C = m(E);
    const G = `${r.date.year()}-${r.date.month() + 1}-${E >= 10 ? E : "0" + E}`;
    return a.start && a.end && f(G).isBetween(a.start, a.end, "day", "[)") ? ` ${Fe[100][s]} ${m(E)} dark:bg-white/10` : (i && (a.start && f(G).isBetween(a.start, i, "day", "[)") && (C = ` ${Fe[100][s]} ${m(E)} dark:bg-white/10`), a.end && f(G).isBetween(i, a.end, "day", "[)") && (C = ` ${Fe[100][s]} ${m(E)} dark:bg-white/10`), i === G && (C = ` transition-all duration-500 text-white font-medium ${Fe[500][s]} ${a.start ? "rounded-r-full" : "rounded-l-full"}`)), C);
  }, [r.date, m, i, a.end, a.start, s]), M = oe((E, C) => {
    if (!u)
      return !1;
    const z = {
      previous: Ae(r.date),
      current: r.date,
      next: Oe(r.date)
    }[C].set("date", E);
    return f(z).isSame(f(u), "day") ? !1 : f(z).isBefore(f(u));
  }, [r.date, u]), w = oe((E, C) => {
    if (!c)
      return !1;
    const z = {
      previous: Ae(r.date),
      current: r.date,
      next: Oe(r.date)
    }[C].set("date", E);
    return f(z).isSame(f(c), "day") ? !1 : f(z).isAfter(f(c));
  }, [r.date, c]), L = oe((E, C) => {
    if (M(E, C) || w(E, C))
      return !0;
    const Z = {
      previous: Ae(r.date),
      current: r.date,
      next: Oe(r.date)
    }[C], z = `${Z.year()}-${Z.month() + 1}-${E >= 10 ? E : "0" + E}`;
    if (!d || Array.isArray(d) && !d.length)
      return !1;
    let ne = 0;
    return d == null || d.forEach((ue) => {
      f(z).isAfter(ue.startDate) && f(z).isBefore(ue.endDate) && ne++, (f(z).isSame(ue.startDate) || f(z).isSame(ue.endDate)) && ne++;
    }), ne > 0;
  }, [r.date, M, w, d]), $ = oe((E, C) => {
    const G = "flex items-center justify-center w-12 h-12 lg:w-10 lg:h-10";
    return C === "current" ? $r(G, y(E).active ? y(E).className : v(E), L(E, C) && "line-through") : $r(G, L(E, C) && "line-through", "text-gray-400");
  }, [y, v, L]), O = oe((E) => {
    if (!Array.isArray(d))
      return !1;
    for (let C = 0; C < d.length; C++)
      if (f(E.start).isBefore(d[C].startDate) && f(E.end).isAfter(d[C].endDate))
        return !0;
    return !1;
  }, [d]), q = oe(() => ({
    previous: Ae(r.date),
    current: r.date,
    next: Oe(r.date)
  }), [r.date]), H = oe((E, C) => {
    const Z = q()[C], z = `${Z.year()}-${Z.month() + 1}-${E >= 10 ? E : "0" + E}`;
    if (a.start && !a.end) {
      const ne = { ...a, end: z };
      f(z).isBefore(f(a.start)) && (ne.start = z, ne.end = a.start, O(ne) || e({
        start: null,
        end: a.start
      })), O(ne) || l(z);
    }
    if (!a.start && a.end) {
      const ne = { ...a, start: z };
      f(z).isAfter(f(a.end)) && (ne.start = a.end, ne.end = z, O(ne) || e({
        start: a.end,
        end: null
      })), O(ne) || l(z);
    }
  }, [
    l,
    e,
    O,
    q,
    a
  ]), J = oe((E, C) => {
    function G() {
      C === "previous" && o(E), C === "current" && n(E), C === "next" && t(E);
    }
    if (d != null && d.length) {
      const z = q()[C], ne = `${z.year()}-${z.month() + 1}-${E >= 10 ? E : "0" + E}`;
      a.start && !a.end || !a.start && a.end ? f(ne).isSame(i) && G() : G();
    } else
      G();
  }, [
    i,
    d == null ? void 0 : d.length,
    q,
    n,
    t,
    o,
    a.end,
    a.start
  ]);
  return T.createElement(
    "div",
    { className: "grid grid-cols-7 gap-y-0.5 my-1" },
    r.days.previous.map((E, C) => T.createElement("button", { type: "button", key: C, disabled: L(E, "previous"), className: `${$(E, "previous")}`, onClick: () => J(E, "previous"), onMouseOver: () => {
      H(E, "previous");
    } }, E)),
    r.days.current.map((E, C) => T.createElement("button", { type: "button", key: C, disabled: L(E, "current"), className: `${$(E, "current")}`, onClick: () => J(E, "current"), onMouseOver: () => {
      H(E, "current");
    } }, E)),
    r.days.next.map((E, C) => T.createElement("button", { type: "button", key: C, disabled: L(E, "next"), className: `${$(E, "next")}`, onClick: () => J(E, "next"), onMouseOver: () => {
      H(E, "next");
    } }, E))
  );
}, X_ = ({ currentMonth: r, clickMonth: o }) => {
  const { i18n: n } = De(Ne);
  return er(n), T.createElement("div", { className: "w-full grid grid-cols-2 gap-2 mt-2" }, x_.map((t) => T.createElement(
    Ge,
    { key: t, padding: "py-3", onClick: () => {
      o(t);
    }, active: r === t },
    T.createElement(T.Fragment, null, f(`2022-${t}-01`).locale(n).format("MMM"))
  )));
}, Q_ = () => {
  const { i18n: r, startWeekOn: o } = De(Ne);
  er(r);
  const n = ze(() => {
    if (o)
      switch (o) {
        case "mon":
          return 1;
        case "tue":
          return 2;
        case "wed":
          return 3;
        case "thu":
          return 4;
        case "fri":
          return 5;
        case "sat":
          return 6;
        case "sun":
          return 0;
        default:
          return 0;
      }
    return 0;
  }, [o]);
  return T.createElement("div", { className: "grid grid-cols-7 border-b border-gray-300 dark:border-gray-700 py-2" }, L_.map((t) => T.createElement("div", { key: t, className: "tracking-wide text-gray-500 text-center" }, E_(T_(f(`2022-11-${6 + (t + n)}`).locale(r).format("ddd"))))));
}, ed = ({ year: r, currentYear: o, minYear: n, maxYear: t, clickYear: s }) => {
  const { dateLooking: a } = De(Ne);
  let e = 0, i = 0;
  switch (a) {
    case "backward":
      e = r - 11, i = r;
      break;
    case "middle":
      e = r - 4, i = r + 7;
      break;
    case "forward":
    default:
      e = r, i = r + 11;
      break;
  }
  return T.createElement("div", { className: "w-full grid grid-cols-2 gap-2 mt-2" }, _n(e, i).map((l, u) => T.createElement(
    Ge,
    { key: u, padding: "py-3", onClick: () => {
      s(l);
    }, active: o === l, disabled: t !== null && l > t || n !== null && l < n },
    T.createElement(T.Fragment, null, l)
  )));
}, Cr = ({ date: r, minDate: o, maxDate: n, onClickPrevious: t, onClickNext: s, changeMonth: a, changeYear: e }) => {
  const { period: i, changePeriod: l, changeDayHover: u, showFooter: c, changeDatepickerValue: d, hideDatepicker: m, asSingle: y, i18n: v, startWeekOn: M, input: w } = De(Ne);
  er(v);
  const [L, $] = ae(!1), [O, q] = ae(!1), [H, J] = ae(r.year()), E = oe(() => P_(Ae(r), A_(N_(r).ddd, M)), [r, M]), C = oe(() => Qt(ge(r)), [r]), G = oe(() => O_(Ae(r), k_ - (E().length + C().length)), [C, r, E]), Z = oe(() => {
    L && $(!1);
  }, [L]), z = oe(() => {
    O && q(!1);
  }, [O]), ne = oe((h) => {
    setTimeout(() => {
      a(h), $(!L);
    }, 250);
  }, [a, L]), ue = oe((h) => {
    setTimeout(() => {
      e(h), q(!O);
    }, 250);
  }, [e, O]), I = oe((h, S = r.month() + 1, B = r.year()) => {
    const F = `${B}-${S}-${h}`;
    let V, Q = null;
    function re(X, ee) {
      const se = w == null ? void 0 : w.current;
      d({
        startDate: f(X).format(Te),
        endDate: f(ee).format(Te)
      }, se), m();
    }
    if (i.start && i.end && (u && u(null), l({
      start: null,
      end: null
    })), !i.start && !i.end || i.start && i.end)
      !i.start && !i.end && u(F), V = F, y && (Q = F, re(F, F));
    else {
      if (i.start && !i.end) {
        const X = f(F).isSame(f(i.start)) || f(F).isAfter(f(i.start));
        V = X ? i.start : F, Q = X ? F : i.start;
      } else {
        const X = f(F).isSame(f(i.end)) || f(F).isBefore(f(i.end));
        V = X ? F : i.start, Q = X ? i.end : F;
      }
      c || V && Q && re(V, Q);
    }
    (!(Q && V) || c) && l({
      start: V,
      end: Q
    });
  }, [
    y,
    d,
    u,
    l,
    r,
    m,
    i.end,
    i.start,
    c,
    w
  ]), x = oe((h) => {
    const S = Ae(r);
    I(h, S.month() + 1, S.year()), t();
  }, [I, r, t]), D = oe((h) => {
    const S = Oe(r);
    I(h, S.month() + 1, S.year()), s();
  }, [I, r, s]);
  ve(() => {
    J(r.year());
  }, [r]);
  const j = ze(() => ({
    date: r,
    days: {
      previous: E(),
      current: C(),
      next: G()
    }
  }), [C, r, G, E]), Y = T.useMemo(() => o && f(o).isValid() ? f(o).year() : null, [o]), R = T.useMemo(() => n && f(n).isValid() ? f(n).year() : null, [n]);
  return T.createElement(
    "div",
    { className: "w-full md:w-[296px] md:min-w-[296px]" },
    T.createElement(
      "div",
      { className: "flex items-center space-x-1.5 border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1.5" },
      !L && !O && T.createElement(
        "div",
        { className: "flex-none" },
        T.createElement(
          Ge,
          { roundedFull: !0, onClick: t },
          T.createElement(I_, { className: "h-5 w-5" })
        )
      ),
      O && T.createElement(
        "div",
        { className: "flex-none" },
        T.createElement(
          Ge,
          { roundedFull: !0, onClick: () => {
            J(H - 12);
          } },
          T.createElement(F_, { className: "h-5 w-5" })
        )
      ),
      T.createElement(
        "div",
        { className: "flex flex-1 items-center space-x-1.5" },
        T.createElement(
          "div",
          { className: "w-1/2" },
          T.createElement(
            Ge,
            { onClick: () => {
              $(!L), z();
            } },
            T.createElement(T.Fragment, null, j.date.locale(v).format("MMM"))
          )
        ),
        T.createElement(
          "div",
          { className: "w-1/2" },
          T.createElement(
            Ge,
            { onClick: () => {
              q(!O), Z();
            } },
            T.createElement(T.Fragment, null, j.date.year())
          )
        )
      ),
      O && T.createElement(
        "div",
        { className: "flex-none" },
        T.createElement(
          Ge,
          { roundedFull: !0, onClick: () => {
            J(H + 12);
          } },
          T.createElement(B_, { className: "h-5 w-5" })
        )
      ),
      !L && !O && T.createElement(
        "div",
        { className: "flex-none" },
        T.createElement(
          Ge,
          { roundedFull: !0, onClick: s },
          T.createElement(J_, { className: "h-5 w-5" })
        )
      )
    ),
    T.createElement(
      "div",
      { className: "px-0.5 sm:px-2 mt-0.5 min-h-[285px]" },
      L && T.createElement(X_, { currentMonth: j.date.month() + 1, clickMonth: ne }),
      O && T.createElement(ed, { year: H, minYear: Y, maxYear: R, currentYear: j.date.year(), clickYear: ue }),
      !L && !O && T.createElement(
        T.Fragment,
        null,
        T.createElement(Q_, null),
        T.createElement(Z_, { calendarData: j, onClickPreviousDays: x, onClickDay: I, onClickNextDays: D })
      )
    )
  );
}, td = () => {
  var e, i;
  const { hideDatepicker: r, period: o, changeDatepickerValue: n, configs: t, classNames: s } = De(Ne), a = oe(() => typeof s < "u" && typeof (s == null ? void 0 : s.footer) == "function" ? s.footer() : "flex items-center justify-end pb-2.5 pt-3 border-t border-gray-300 dark:border-gray-700", [s]);
  return T.createElement(
    "div",
    { className: a() },
    T.createElement(
      "div",
      { className: "w-full md:w-auto flex items-center justify-center space-x-3" },
      T.createElement(
        K_,
        { onClick: () => {
          r();
        } },
        T.createElement(T.Fragment, null, (e = t == null ? void 0 : t.footer) != null && e.cancel ? t.footer.cancel : "Cancel")
      ),
      T.createElement(
        V_,
        { onClick: () => {
          o.start && o.end && (n({
            startDate: f(o.start).format(Te),
            endDate: f(o.end).format(Te)
          }), r());
        }, disabled: !(o.start && o.end) },
        T.createElement(T.Fragment, null, (i = t == null ? void 0 : t.footer) != null && i.apply ? t.footer.apply : "Apply")
      )
    )
  );
}, rd = (r) => r.isEmpty ? T.createElement(R_, { className: "h-5 w-5" }) : T.createElement(z_, { className: "h-5 w-5" }), nd = (r) => {
  const { primaryColor: o, period: n, dayHover: t, changeDayHover: s, calendarContainer: a, arrowContainer: e, inputText: i, changeInputText: l, hideDatepicker: u, changeDatepickerValue: c, asSingle: d, placeholder: m, separator: y, disabled: v, inputClassName: M, toggleClassName: w, toggleIcon: L, readOnly: $, displayFormat: O, inputId: q, inputName: H, classNames: J, popoverDirection: E } = De(Ne), C = Ee(null), G = Ee(null), Z = oe(() => {
    const x = G.current;
    if (x && typeof J < "u" && typeof (J == null ? void 0 : J.input) == "function")
      return J.input(x);
    const D = on.focus[o], j = Xt["second-focus"][o], Y = `relative transition-all duration-300 py-2.5 pl-4 pr-14 w-full border-gray-300 dark:bg-slate-800 dark:text-white/80 dark:border-slate-600 rounded-lg tracking-wide font-light text-sm placeholder-gray-400 bg-white focus:ring disabled:opacity-40 disabled:cursor-not-allowed ${D} ${j}`;
    return typeof M == "function" ? M(Y) : typeof M == "string" && M !== "" ? M : Y;
  }, [G, J, o, M]), z = oe((x) => {
    const D = x.target.value, j = [];
    if (d) {
      const Y = mt(D, O);
      Ot(Y.toDate()) && j.push(Y.format(Te));
    } else {
      const Y = D.split(y);
      let R = null, h = null;
      if (Y.length === 2)
        R = mt(Y[0], O), h = mt(Y[1], O);
      else {
        const S = Math.floor(D.length / 2);
        R = mt(D.slice(0, S), O), h = mt(D.slice(S), O);
      }
      Ot(R.toDate()) && Ot(h.toDate()) && R.isBefore(h) && (j.push(R.format(Te)), j.push(h.format(Te)));
    }
    j[0] && (c({
      startDate: j[0],
      endDate: j[1] || j[0]
    }, x.target), j[1] ? s(f(j[1]).add(-1, "day").format(Te)) : s(j[0])), l(x.target.value);
  }, [d, O, y, c, s, l]), ne = oe((x) => {
    if (x.key === "Enter") {
      const D = G.current;
      D && D.blur(), u();
    }
  }, [u]), ue = oe((x) => typeof L > "u" ? T.createElement(rd, { isEmpty: x }) : L(x), [L]), I = oe(() => {
    const x = C.current;
    if (x && typeof J < "u" && typeof (J == null ? void 0 : J.toggleButton) == "function")
      return J.toggleButton(x);
    const D = "absolute right-0 h-full px-3 text-gray-400 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed";
    return typeof w == "function" ? w(D) : typeof w == "string" && w !== "" ? w : D;
  }, [w, C, J]);
  return ve(() => {
    G && r.setContextRef && typeof r.setContextRef == "function" && r.setContextRef(G);
  }, [r, G]), ve(() => {
    const x = C == null ? void 0 : C.current;
    function D(j) {
      j.stopPropagation();
      const Y = G.current;
      Y && (Y.focus(), i && (l(""), t && s(null), n.start && n.end && c({
        startDate: null,
        endDate: null
      }, Y)));
    }
    return x && x.addEventListener("click", D), () => {
      x && x.removeEventListener("click", D);
    };
  }, [
    c,
    s,
    l,
    t,
    i,
    n.end,
    n.start,
    G
  ]), ve(() => {
    const x = a == null ? void 0 : a.current, D = G.current, j = e == null ? void 0 : e.current;
    function Y() {
      if (j && x && x.classList.contains("hidden")) {
        x.classList.remove("hidden"), x.classList.add("block");
        const R = E == "up", h = E === "down";
        (R || window.innerWidth > 767 && window.screen.height - 100 < x.getBoundingClientRect().bottom && !h) && (x.classList.add("bottom-full"), x.classList.add("mb-2.5"), x.classList.remove("mt-2.5"), j.classList.add("-bottom-2"), j.classList.add("border-r"), j.classList.add("border-b"), j.classList.remove("border-l"), j.classList.remove("border-t")), setTimeout(() => {
          x.classList.remove("translate-y-4"), x.classList.remove("opacity-0"), x.classList.add("translate-y-0"), x.classList.add("opacity-1");
        }, 1);
      }
    }
    return x && D && D.addEventListener("focus", Y), () => {
      D && D.removeEventListener("focus", Y);
    };
  }, [a, e, E]), T.createElement(
    T.Fragment,
    null,
    T.createElement("input", { ref: G, type: "text", className: Z(), disabled: v, readOnly: $, placeholder: m || `${O}${d ? "" : ` ${y} ${O}`}`, value: i, id: q, name: H, autoComplete: "off", role: "presentation", onChange: z, onKeyDown: ne }),
    T.createElement("button", { type: "button", ref: C, disabled: v, className: I() }, ue(i == null || !(i != null && i.length)))
  );
}, Rt = {
  today: {
    text: "Today",
    period: {
      start: ge(f()),
      end: ge(f())
    }
  },
  yesterday: {
    text: "Yesterday",
    period: {
      start: ge(f().subtract(1, "d")),
      end: ge(f().subtract(1, "d"))
    }
  },
  past: [
    {
      daysNumber: 7,
      text: "Last 7 days",
      period: {
        start: ge(f().subtract(7, "d")),
        end: ge(f())
      }
    },
    {
      daysNumber: 30,
      text: "Last 30 days",
      period: {
        start: ge(f().subtract(30, "d")),
        end: ge(f())
      }
    }
  ],
  currentMonth: {
    text: "This month",
    period: {
      start: ge(f().startOf("month")),
      end: ge(f().endOf("month"))
    }
  },
  pastMonth: {
    text: "Last month",
    period: {
      start: ge(Ae(f()).startOf("month")),
      end: ge(Ae(f()).endOf("month"))
    }
  }
}, Ar = T.memo((r) => {
  const { primaryColor: o, period: n, changePeriod: t, updateFirstDate: s, dayHover: a, changeDayHover: e, hideDatepicker: i, changeDatepickerValue: l } = De(Ne), u = oe(() => {
    const m = Wt[600][o], y = Wt.hover[o];
    return `whitespace-nowrap w-1/2 md:w-1/3 lg:w-auto transition-all duration-300 hover:bg-gray-100 dark:hover:bg-white/10 p-2 rounded cursor-pointer ${m} ${y}`;
  }, [o]), c = oe((m) => {
    a && e(null), (n.start || n.end) && t({
      start: null,
      end: null
    }), t(m), l({
      startDate: m.start,
      endDate: m.end
    }), s(f(m.start)), i();
  }, [
    l,
    e,
    t,
    a,
    i,
    n.end,
    n.start,
    s
  ]), d = r == null ? void 0 : r.children;
  return T.createElement("li", { className: u(), onClick: () => {
    c(r == null ? void 0 : r.item.period);
  } }, d);
}), ad = () => {
  const { configs: r } = De(Ne), o = oe((s, a) => typeof s == "function" ? s(a) : null, []), n = ze(() => r != null && r.shortcuts ? Object.entries(r.shortcuts).flatMap(([s, a]) => {
    if (Object.prototype.hasOwnProperty.call(Rt, s))
      return [[s, Rt[s]]];
    const { text: e, period: i } = a;
    if (!e || !i)
      return [];
    const l = f(i.start), u = f(i.end);
    return l.isValid() && u.isValid() && (l.isBefore(u) || l.isSame(u)) ? [
      [
        e,
        {
          text: e,
          period: {
            start: l.format(Te),
            end: u.format(Te)
          }
        }
      ]
    ] : [];
  }) : Object.entries(Rt), [r]), t = oe((s) => (s == null ? void 0 : s.text) ?? null, []);
  return n != null && n.length ? T.createElement(
    "div",
    { className: "md:border-b mb-3 lg:mb-0 lg:border-r lg:border-b-0 border-gray-300 dark:border-gray-700 pr-1" },
    T.createElement("ul", { className: "w-full tracking-wide flex flex-wrap lg:flex-col pb-1 lg:pb-0" }, n.map(([s, a], e) => Array.isArray(a) ? a.map((i, l) => T.createElement(
      Ar,
      { key: l, item: i },
      T.createElement(T.Fragment, null, s === "past" && (r != null && r.shortcuts) && s in r.shortcuts && i.daysNumber ? o(r.shortcuts[s], i.daysNumber) : i.text)
    )) : T.createElement(
      Ar,
      { key: e, item: a },
      T.createElement(T.Fragment, null, r != null && r.shortcuts && s in r.shortcuts ? typeof r.shortcuts[s] == "object" ? t(a) : r.shortcuts[s] : t(a))
    )))
  ) : null;
};
function sd(r, o) {
  ve(() => {
    const n = (t) => {
      !r.current || r.current.contains(t.target) || o(t);
    };
    return document.addEventListener("mousedown", n), document.addEventListener("touchstart", n), () => {
      document.removeEventListener("mousedown", n), document.removeEventListener("touchstart", n);
    };
  }, [r, o]);
}
const cn = ({ primaryColor: r = "blue", value: o = null, onChange: n, useRange: t = !0, showFooter: s = !1, showShortcuts: a = !1, configs: e = void 0, asSingle: i = !1, placeholder: l = null, separator: u = "~", startFrom: c = null, i18n: d = Zt, disabled: m = !1, inputClassName: y = null, containerClassName: v = null, toggleClassName: M = null, toggleIcon: w = void 0, displayFormat: L = Te, readOnly: $ = !1, minDate: O = null, maxDate: q = null, dateLooking: H = "forward", disabledDates: J = null, inputId: E, inputName: C, startWeekOn: G = "sun", classNames: Z = void 0, popoverDirection: z = void 0 }) => {
  const ne = Ee(null), ue = Ee(null), I = Ee(null), [x, D] = ae(c && f(c).isValid() ? f(c) : f()), [j, Y] = ae(Oe(x)), [R, h] = ae({
    start: null,
    end: null
  }), [S, B] = ae(null), [F, V] = ae(""), [Q, re] = ae(T.createRef());
  sd(ne, () => {
    ne.current && X();
  });
  const X = oe(() => {
    const K = ue.current, _e = I.current;
    _e && K && K.classList.contains("block") && (K.classList.remove("block"), K.classList.remove("translate-y-0"), K.classList.remove("opacity-1"), K.classList.add("translate-y-4"), K.classList.add("opacity-0"), setTimeout(() => {
      K.classList.remove("bottom-full"), K.classList.add("hidden"), K.classList.add("mb-2.5"), K.classList.add("mt-2.5"), _e.classList.remove("-bottom-2"), _e.classList.remove("border-r"), _e.classList.remove("border-b"), _e.classList.add("border-l"), _e.classList.add("border-t");
    }, 300));
  }, []), ee = oe((K) => {
    const _e = f(ge(K)), ye = f(ge(j));
    (_e.isSame(ye) || _e.isAfter(ye)) && Y(Oe(K)), D(K);
  }, [j]), se = oe(() => {
    D(Ae(x));
  }, [x]), te = oe(() => {
    ee(Oe(x));
  }, [x, ee]), ce = oe((K) => {
    ee(f(`${x.year()}-${K < 10 ? "0" : ""}${K}-01`));
  }, [x, ee]), P = oe((K) => {
    ee(f(`${K}-${x.month() + 1}-01`));
  }, [x, ee]), fe = oe((K) => {
    const _e = f(ge(K, L)), ye = f(ge(x, L));
    (_e.isSame(ye) || _e.isBefore(ye)) && D(Ae(K)), Y(K);
  }, [x, L]), He = oe(() => {
    fe(Ae(j));
  }, [j, fe]), Se = oe(() => {
    Y(Oe(j));
  }, [j]), Ve = oe((K) => {
    fe(f(`${j.year()}-${K < 10 ? "0" : ""}${K}-01`));
  }, [j, fe]), tt = oe((K) => {
    fe(f(`${K}-${j.month() + 1}-01`));
  }, [j, fe]);
  ve(() => {
    const K = ne.current, _e = ue.current, ye = I.current;
    if (K && _e && ye) {
      const ke = K.getBoundingClientRect(), be = window.innerWidth / 2;
      (ke.right - ke.x) / 2 + ke.x > be && (ye.classList.add("right-0"), ye.classList.add("mr-3.5"), _e.classList.add("right-0"));
    }
  }, []), ve(() => {
    if (o && o.startDate && o.endDate) {
      const K = f(o.startDate), _e = f(o.endDate);
      K.isValid() && _e.isValid() && (K.isSame(_e) || K.isBefore(_e)) && (h({
        start: ge(K),
        end: ge(_e)
      }), V(`${ge(K, L)}${i ? "" : ` ${u} ${ge(_e, L)}`}`));
    }
    o && o.startDate === null && o.endDate === null && (h({
      start: null,
      end: null
    }), V(""));
  }, [i, o, L, u]), ve(() => {
    if (c && f(c).isValid()) {
      const K = o == null ? void 0 : o.startDate, _e = o == null ? void 0 : o.endDate;
      K && f(K).isValid() ? (D(f(K)), i || (_e && f(_e).isValid() && f(_e).startOf("month").isAfter(f(K)) ? Y(f(_e)) : Y(Oe(f(K))))) : (D(f(c)), Y(Oe(f(c))));
    }
  }, [i, c, o]);
  const Ze = ze(() => Y_.includes(r) ? r : b_, [r]), Xe = ze(() => ({
    asSingle: i,
    primaryColor: Ze,
    configs: e,
    calendarContainer: ue,
    arrowContainer: I,
    hideDatepicker: X,
    period: R,
    changePeriod: (K) => h(K),
    dayHover: S,
    changeDayHover: (K) => B(K),
    inputText: F,
    changeInputText: (K) => V(K),
    updateFirstDate: (K) => ee(K),
    changeDatepickerValue: n,
    showFooter: s,
    placeholder: l,
    separator: u,
    i18n: d,
    value: o,
    disabled: m,
    inputClassName: y,
    containerClassName: v,
    toggleClassName: M,
    toggleIcon: w,
    readOnly: $,
    displayFormat: L,
    minDate: O,
    maxDate: q,
    dateLooking: H,
    disabledDates: J,
    inputId: E,
    inputName: C,
    startWeekOn: G,
    classNames: Z,
    onChange: n,
    input: Q,
    popoverDirection: z
  }), [
    i,
    Ze,
    e,
    X,
    R,
    S,
    F,
    n,
    s,
    l,
    u,
    d,
    o,
    m,
    y,
    v,
    M,
    w,
    $,
    L,
    O,
    q,
    H,
    J,
    E,
    C,
    G,
    Z,
    Q,
    z,
    ee
  ]), rt = ze(() => {
    const K = "relative w-full text-gray-700";
    return typeof v == "function" ? v(K) : typeof v == "string" && v !== "" ? v : K;
  }, [v]);
  return T.createElement(
    Ne.Provider,
    { value: Xe },
    T.createElement(
      "div",
      { className: rt, ref: ne },
      T.createElement(nd, { setContextRef: re }),
      T.createElement(
        "div",
        { className: "transition-all ease-out duration-300 absolute z-10 mt-[1px] text-sm lg:text-xs 2xl:text-sm translate-y-4 opacity-0 hidden", ref: ue },
        T.createElement(W_, { ref: I }),
        T.createElement(
          "div",
          { className: "mt-2.5 shadow-sm border border-gray-300 px-1 py-0.5 bg-white dark:bg-slate-800 dark:text-white dark:border-slate-600 rounded-lg" },
          T.createElement(
            "div",
            { className: "flex flex-col lg:flex-row py-2" },
            a && T.createElement(ad, null),
            T.createElement(
              "div",
              { className: `flex items-stretch flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-1.5 ${a ? "md:pl-2" : "md:pl-1"} pr-2 lg:pr-1` },
              T.createElement(Cr, { date: x, onClickPrevious: se, onClickNext: te, changeMonth: ce, changeYear: P, minDate: O, maxDate: q }),
              t && T.createElement(
                T.Fragment,
                null,
                T.createElement(
                  "div",
                  { className: "flex items-center" },
                  T.createElement(q_, null)
                ),
                T.createElement(Cr, { date: j, onClickPrevious: He, onClickNext: Se, changeMonth: Ve, changeYear: tt, minDate: O, maxDate: q })
              )
            )
          ),
          s && T.createElement(td, null)
        )
      )
    )
  );
};
var mn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "af", weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), weekStart: 1, weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" } };
    return s.default.locale(a, null, !0), a;
  });
})(mn);
var fn = mn.exports, od = /* @__PURE__ */ g(fn), id = /* @__PURE__ */ k({
  __proto__: null,
  default: od
}, [fn]), pn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "am", weekdays: "እሑድ_ሰኞ_ማክሰኞ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ".split("_"), weekdaysShort: "እሑድ_ሰኞ_ማክሰ_ረቡዕ_ሐሙስ_አርብ_ቅዳሜ".split("_"), weekdaysMin: "እሑ_ሰኞ_ማክ_ረቡ_ሐሙ_አር_ቅዳ".split("_"), months: "ጃንዋሪ_ፌብሯሪ_ማርች_ኤፕሪል_ሜይ_ጁን_ጁላይ_ኦገስት_ሴፕቴምበር_ኦክቶበር_ኖቬምበር_ዲሴምበር".split("_"), monthsShort: "ጃንዋ_ፌብሯ_ማርች_ኤፕሪ_ሜይ_ጁን_ጁላይ_ኦገስ_ሴፕቴ_ኦክቶ_ኖቬም_ዲሴም".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "በ%s", past: "%s በፊት", s: "ጥቂት ሰከንዶች", m: "አንድ ደቂቃ", mm: "%d ደቂቃዎች", h: "አንድ ሰዓት", hh: "%d ሰዓታት", d: "አንድ ቀን", dd: "%d ቀናት", M: "አንድ ወር", MM: "%d ወራት", y: "አንድ ዓመት", yy: "%d ዓመታት" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM D ፣ YYYY", LLL: "MMMM D ፣ YYYY HH:mm", LLLL: "dddd ፣ MMMM D ፣ YYYY HH:mm" }, ordinal: function(e) {
      return e + "ኛ";
    } };
    return s.default.locale(a, null, !0), a;
  });
})(pn);
var hn = pn.exports, ld = /* @__PURE__ */ g(hn), ud = /* @__PURE__ */ k({
  __proto__: null,
  default: ld
}, [hn]), Mn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ar-dz", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(e) {
      return e > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return s.default.locale(a, null, !0), a;
  });
})(Mn);
var vn = Mn.exports, _d = /* @__PURE__ */ g(vn), dd = /* @__PURE__ */ k({
  __proto__: null,
  default: _d
}, [vn]), yn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ar-iq", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "كانون الثاني_شباط_آذار_نيسان_أيار_حزيران_تموز_آب_أيلول_تشرين الأول_ تشرين الثاني_كانون الأول".split("_"), weekStart: 1, weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "كانون الثاني_شباط_آذار_نيسان_أيار_حزيران_تموز_آب_أيلول_تشرين الأول_ تشرين الثاني_كانون الأول".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(e) {
      return e > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return s.default.locale(a, null, !0), a;
  });
})(yn);
var Yn = yn.exports, cd = /* @__PURE__ */ g(Yn), md = /* @__PURE__ */ k({
  __proto__: null,
  default: cd
}, [Yn]), bn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ar-kw", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(e) {
      return e > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return s.default.locale(a, null, !0), a;
  });
})(bn);
var gn = bn.exports, fd = /* @__PURE__ */ g(gn), pd = /* @__PURE__ */ k({
  __proto__: null,
  default: fd
}, [gn]), Ln = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ar-ly", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekStart: 6, weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(e) {
      return e;
    }, meridiem: function(e) {
      return e > 12 ? "م" : "ص";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" } };
    return s.default.locale(a, null, !0), a;
  });
})(Ln);
var xn = Ln.exports, hd = /* @__PURE__ */ g(xn), Md = /* @__PURE__ */ k({
  __proto__: null,
  default: hd
}, [xn]), kn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ar-ma", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekStart: 6, weekdaysShort: "احد_إثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(e) {
      return e > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return s.default.locale(a, null, !0), a;
  });
})(kn);
var wn = kn.exports, vd = /* @__PURE__ */ g(wn), yd = /* @__PURE__ */ k({
  __proto__: null,
  default: vd
}, [wn]), Dn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ar-sa", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(e) {
      return e > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return s.default.locale(a, null, !0), a;
  });
})(Dn);
var Sn = Dn.exports, Yd = /* @__PURE__ */ g(Sn), bd = /* @__PURE__ */ k({
  __proto__: null,
  default: Yd
}, [Sn]), jn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ar-tn", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekStart: 1, weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiem: function(e) {
      return e > 12 ? "م" : "ص";
    }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" } };
    return s.default.locale(a, null, !0), a;
  });
})(jn);
var Hn = jn.exports, gd = /* @__PURE__ */ g(Hn), Ld = /* @__PURE__ */ k({
  __proto__: null,
  default: gd
}, [Hn]), Tn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(u) {
      return u && typeof u == "object" && "default" in u ? u : { default: u };
    }
    var s = t(n), a = "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), e = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" }, i = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" }, l = { name: "ar", weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), months: a, monthsShort: a, weekStart: 6, relativeTime: { future: "بعد %s", past: "منذ %s", s: "ثانية واحدة", m: "دقيقة واحدة", mm: "%d دقائق", h: "ساعة واحدة", hh: "%d ساعات", d: "يوم واحد", dd: "%d أيام", M: "شهر واحد", MM: "%d أشهر", y: "عام واحد", yy: "%d أعوام" }, preparse: function(u) {
      return u.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(c) {
        return i[c];
      }).replace(/،/g, ",");
    }, postformat: function(u) {
      return u.replace(/\d/g, function(c) {
        return e[c];
      }).replace(/,/g, "،");
    }, ordinal: function(u) {
      return u;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" } };
    return s.default.locale(l, null, !0), l;
  });
})(Tn);
var En = Tn.exports, xd = /* @__PURE__ */ g(En), kd = /* @__PURE__ */ k({
  __proto__: null,
  default: xd
}, [En]), Nn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "az", weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "bir neçə saniyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, ordinal: function(e) {
      return e;
    } };
    return s.default.locale(a, null, !0), a;
  });
})(Nn);
var $n = Nn.exports, wd = /* @__PURE__ */ g($n), Dd = /* @__PURE__ */ k({
  __proto__: null,
  default: wd
}, [$n]), Cn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "bg", weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"), weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"), monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"), weekStart: 1, ordinal: function(e) {
      var i = e % 100;
      if (i > 10 && i < 20)
        return e + "-ти";
      var l = e % 10;
      return l === 1 ? e + "-ви" : l === 2 ? e + "-ри" : l === 7 || l === 8 ? e + "-ми" : e + "-ти";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" } };
    return s.default.locale(a, null, !0), a;
  });
})(Cn);
var An = Cn.exports, Sd = /* @__PURE__ */ g(An), jd = /* @__PURE__ */ k({
  __proto__: null,
  default: Sd
}, [An]), Pn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "bi", weekdays: "Sande_Mande_Tusde_Wenesde_Tosde_Fraede_Sarade".split("_"), months: "Januari_Februari_Maj_Eprel_Mei_Jun_Julae_Okis_Septemba_Oktoba_Novemba_Disemba".split("_"), weekStart: 1, weekdaysShort: "San_Man_Tus_Wen_Tos_Frae_Sar".split("_"), monthsShort: "Jan_Feb_Maj_Epr_Mai_Jun_Jul_Oki_Sep_Okt_Nov_Dis".split("_"), weekdaysMin: "San_Ma_Tu_We_To_Fr_Sar".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "lo %s", past: "%s bifo", s: "sam seken", m: "wan minit", mm: "%d minit", h: "wan haoa", hh: "%d haoa", d: "wan dei", dd: "%d dei", M: "wan manis", MM: "%d manis", y: "wan yia", yy: "%d yia" } };
    return s.default.locale(a, null, !0), a;
  });
})(Pn);
var On = Pn.exports, Hd = /* @__PURE__ */ g(On), Td = /* @__PURE__ */ k({
  __proto__: null,
  default: Hd
}, [On]), Rn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "bm", weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"), months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"), weekStart: 1, weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"), monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"), weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM [tile] D [san] YYYY", LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm", LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm" }, relativeTime: { future: "%s kɔnɔ", past: "a bɛ %s bɔ", s: "sanga dama dama", m: "miniti kelen", mm: "miniti %d", h: "lɛrɛ kelen", hh: "lɛrɛ %d", d: "tile kelen", dd: "tile %d", M: "kalo kelen", MM: "kalo %d", y: "san kelen", yy: "san %d" } };
    return s.default.locale(a, null, !0), a;
  });
})(Rn);
var zn = Rn.exports, Ed = /* @__PURE__ */ g(zn), Nd = /* @__PURE__ */ k({
  __proto__: null,
  default: Ed
}, [zn]), In = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = t(n), a = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" }, e = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" }, i = { name: "bn-bd", weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"), months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"), monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"), weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"), weekStart: 0, preparse: function(l) {
      return l.replace(/[১২৩৪৫৬৭৮৯০]/g, function(u) {
        return e[u];
      });
    }, postformat: function(l) {
      return l.replace(/\d/g, function(u) {
        return a[u];
      });
    }, ordinal: function(l) {
      var u = ["ই", "লা", "রা", "ঠা", "শে"], c = l % 100;
      return "[" + l + (u[(c - 20) % 10] || u[c] || u[0]) + "]";
    }, formats: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY খ্রিস্টাব্দ", LL: "D MMMM YYYY খ্রিস্টাব্দ", LLL: "D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়", LLLL: "dddd, D MMMM YYYY খ্রিস্টাব্দ, A h:mm সময়" }, meridiem: function(l) {
      return l < 4 ? "রাত" : l < 6 ? "ভোর" : l < 12 ? "সকাল" : l < 15 ? "দুপুর" : l < 18 ? "বিকাল" : l < 20 ? "সন্ধ্যা" : "রাত";
    }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" } };
    return s.default.locale(i, null, !0), i;
  });
})(In);
var Fn = In.exports, $d = /* @__PURE__ */ g(Fn), Cd = /* @__PURE__ */ k({
  __proto__: null,
  default: $d
}, [Fn]), Jn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = t(n), a = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" }, e = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" }, i = { name: "bn", weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"), months: "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"), monthsShort: "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split("_"), weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"), preparse: function(l) {
      return l.replace(/[১২৩৪৫৬৭৮৯০]/g, function(u) {
        return e[u];
      });
    }, postformat: function(l) {
      return l.replace(/\d/g, function(u) {
        return a[u];
      });
    }, ordinal: function(l) {
      return l;
    }, formats: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm সময়", LLLL: "dddd, D MMMM YYYY, A h:mm সময়" }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" } };
    return s.default.locale(i, null, !0), i;
  });
})(Jn);
var Bn = Jn.exports, Ad = /* @__PURE__ */ g(Bn), Pd = /* @__PURE__ */ k({
  __proto__: null,
  default: Ad
}, [Bn]), Wn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "bo", weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"), weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), monthsShort: "ཟླ་དང་པོ_ཟླ་གཉིས་པ_ཟླ་གསུམ་པ_ཟླ་བཞི་པ_ཟླ་ལྔ་པ_ཟླ་དྲུག་པ_ཟླ་བདུན་པ_ཟླ་བརྒྱད་པ_ཟླ་དགུ་པ_ཟླ་བཅུ་པ_ཟླ་བཅུ་གཅིག་པ_ཟླ་བཅུ་གཉིས་པ".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, relativeTime: { future: "%s ལ་", past: "%s སྔོན་ལ་", s: "ཏོག་ཙམ་", m: "སྐར་མ་གཅིག་", mm: "སྐར་མ་ %d", h: "ཆུ་ཚོད་གཅིག་", hh: "ཆུ་ཚོད་ %d", d: "ཉིན་གཅིག་", dd: "ཉིན་ %d", M: "ཟླ་བ་གཅིག་", MM: "ཟླ་བ་ %d", y: "ལོ་གཅིག་", yy: "ལོ་ %d" } };
    return s.default.locale(a, null, !0), a;
  });
})(Wn);
var Kn = Wn.exports, Od = /* @__PURE__ */ g(Kn), Rd = /* @__PURE__ */ k({
  __proto__: null,
  default: Od
}, [Kn]), Vn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = t(n);
    function a(l) {
      return l > 9 ? a(l % 10) : l;
    }
    function e(l, u, c) {
      return l + " " + function(d, m) {
        return m === 2 ? function(y) {
          return { m: "v", b: "v", d: "z" }[y.charAt(0)] + y.substring(1);
        }(d) : d;
      }({ mm: "munutenn", MM: "miz", dd: "devezh" }[c], l);
    }
    var i = { name: "br", weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"), months: "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), weekStart: 1, weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), monthsShort: "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), ordinal: function(l) {
      return l;
    }, formats: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" }, relativeTime: { future: "a-benn %s", past: "%s ʼzo", s: "un nebeud segondennoù", m: "ur vunutenn", mm: e, h: "un eur", hh: "%d eur", d: "un devezh", dd: e, M: "ur miz", MM: e, y: "ur bloaz", yy: function(l) {
      switch (a(l)) {
        case 1:
        case 3:
        case 4:
        case 5:
        case 9:
          return l + " bloaz";
        default:
          return l + " vloaz";
      }
    } }, meridiem: function(l) {
      return l < 12 ? "a.m." : "g.m.";
    } };
    return s.default.locale(i, null, !0), i;
  });
})(Vn);
var qn = Vn.exports, zd = /* @__PURE__ */ g(qn), Id = /* @__PURE__ */ k({
  __proto__: null,
  default: zd
}, [qn]), Un = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ca", weekdays: "Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"), weekdaysShort: "Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), months: "Gener_Febrer_Març_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"), monthsShort: "Gen._Febr._Març_Abr._Maig_Juny_Jul._Ag._Set._Oct._Nov._Des.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", LLL: "D MMMM [de] YYYY [a les] H:mm", LLLL: "dddd D MMMM [de] YYYY [a les] H:mm", ll: "D MMM YYYY", lll: "D MMM YYYY, H:mm", llll: "ddd D MMM YYYY, H:mm" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, ordinal: function(e) {
      return "" + e + (e === 1 || e === 3 ? "r" : e === 2 ? "n" : e === 4 ? "t" : "è");
    } };
    return s.default.locale(a, null, !0), a;
  });
})(Un);
var Gn = Un.exports, Fd = /* @__PURE__ */ g(Gn), Jd = /* @__PURE__ */ k({
  __proto__: null,
  default: Fd
}, [Gn]), Zn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = t(n);
    function a(l) {
      return l > 1 && l < 5 && ~~(l / 10) != 1;
    }
    function e(l, u, c, d) {
      var m = l + " ";
      switch (c) {
        case "s":
          return u || d ? "pár sekund" : "pár sekundami";
        case "m":
          return u ? "minuta" : d ? "minutu" : "minutou";
        case "mm":
          return u || d ? m + (a(l) ? "minuty" : "minut") : m + "minutami";
        case "h":
          return u ? "hodina" : d ? "hodinu" : "hodinou";
        case "hh":
          return u || d ? m + (a(l) ? "hodiny" : "hodin") : m + "hodinami";
        case "d":
          return u || d ? "den" : "dnem";
        case "dd":
          return u || d ? m + (a(l) ? "dny" : "dní") : m + "dny";
        case "M":
          return u || d ? "měsíc" : "měsícem";
        case "MM":
          return u || d ? m + (a(l) ? "měsíce" : "měsíců") : m + "měsíci";
        case "y":
          return u || d ? "rok" : "rokem";
        case "yy":
          return u || d ? m + (a(l) ? "roky" : "let") : m + "lety";
      }
    }
    var i = { name: "cs", weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"), weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"), weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"), months: "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"), monthsShort: "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"), weekStart: 1, yearStart: 4, ordinal: function(l) {
      return l + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "za %s", past: "před %s", s: e, m: e, mm: e, h: e, hh: e, d: e, dd: e, M: e, MM: e, y: e, yy: e } };
    return s.default.locale(i, null, !0), i;
  });
})(Zn);
var Xn = Zn.exports, Bd = /* @__PURE__ */ g(Xn), Wd = /* @__PURE__ */ k({
  __proto__: null,
  default: Bd
}, [Xn]), Qn = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "cv", weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"), months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"), weekStart: 1, weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"), monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"), weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]", LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm", LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm" } };
    return s.default.locale(a, null, !0), a;
  });
})(Qn);
var ea = Qn.exports, Kd = /* @__PURE__ */ g(ea), Vd = /* @__PURE__ */ k({
  __proto__: null,
  default: Kd
}, [ea]), ta = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "cy", weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), weekStart: 1, weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "mewn %s", past: "%s yn ôl", s: "ychydig eiliadau", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" } };
    return s.default.locale(a, null, !0), a;
  });
})(ta);
var ra = ta.exports, qd = /* @__PURE__ */ g(ra), Ud = /* @__PURE__ */ k({
  __proto__: null,
  default: qd
}, [ra]), na = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "da", weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn._man._tirs._ons._tors._fre._lør.".split("_"), weekdaysMin: "sø._ma._ti._on._to._fr._lø.".split("_"), months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.".split("_"), weekStart: 1, ordinal: function(e) {
      return e + ".";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" } };
    return s.default.locale(a, null, !0), a;
  });
})(na);
var aa = na.exports, Gd = /* @__PURE__ */ g(aa), Zd = /* @__PURE__ */ k({
  __proto__: null,
  default: Gd
}, [aa]), sa = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = t(n), a = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function e(l, u, c) {
      var d = a[c];
      return Array.isArray(d) && (d = d[u ? 0 : 1]), d.replace("%d", l);
    }
    var i = { name: "de-at", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: e, m: e, mm: e, h: e, hh: e, d: e, dd: e, M: e, MM: e, y: e, yy: e } };
    return s.default.locale(i, null, !0), i;
  });
})(sa);
var oa = sa.exports, Xd = /* @__PURE__ */ g(oa), Qd = /* @__PURE__ */ k({
  __proto__: null,
  default: Xd
}, [oa]), ia = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = t(n), a = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function e(l, u, c) {
      var d = a[c];
      return Array.isArray(d) && (d = d[u ? 0 : 1]), d.replace("%d", l);
    }
    var i = { name: "de-ch", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: e, m: e, mm: e, h: e, hh: e, d: e, dd: e, M: e, MM: e, y: e, yy: e } };
    return s.default.locale(i, null, !0), i;
  });
})(ia);
var la = ia.exports, ec = /* @__PURE__ */ g(la), tc = /* @__PURE__ */ k({
  __proto__: null,
  default: ec
}, [la]), ua = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = t(n), a = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function e(l, u, c) {
      var d = a[c];
      return Array.isArray(d) && (d = d[u ? 0 : 1]), d.replace("%d", l);
    }
    var i = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: e, m: e, mm: e, h: e, hh: e, d: e, dd: e, M: e, MM: e, y: e, yy: e } };
    return s.default.locale(i, null, !0), i;
  });
})(ua);
var _a = ua.exports, rc = /* @__PURE__ */ g(_a), nc = /* @__PURE__ */ k({
  __proto__: null,
  default: rc
}, [_a]), da = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "dv", weekdays: "އާދިއްތަ_ހޯމަ_އަންގާރަ_ބުދަ_ބުރާސްފަތި_ހުކުރު_ހޮނިހިރު".split("_"), months: "ޖެނުއަރީ_ފެބްރުއަރީ_މާރިޗު_އޭޕްރީލު_މޭ_ޖޫން_ޖުލައި_އޯގަސްޓު_ސެޕްޓެމްބަރު_އޮކްޓޯބަރު_ނޮވެމްބަރު_ޑިސެމްބަރު".split("_"), weekStart: 7, weekdaysShort: "އާދިއްތަ_ހޯމަ_އަންގާރަ_ބުދަ_ބުރާސްފަތި_ހުކުރު_ހޮނިހިރު".split("_"), monthsShort: "ޖެނުއަރީ_ފެބްރުއަރީ_މާރިޗު_އޭޕްރީލު_މޭ_ޖޫން_ޖުލައި_އޯގަސްޓު_ސެޕްޓެމްބަރު_އޮކްޓޯބަރު_ނޮވެމްބަރު_ޑިސެމްބަރު".split("_"), weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "ތެރޭގައި %s", past: "ކުރިން %s", s: "ސިކުންތުކޮޅެއް", m: "މިނިޓެއް", mm: "މިނިޓު %d", h: "ގަޑިއިރެއް", hh: "ގަޑިއިރު %d", d: "ދުވަހެއް", dd: "ދުވަސް %d", M: "މަހެއް", MM: "މަސް %d", y: "އަހަރެއް", yy: "އަހަރު %d" } };
    return s.default.locale(a, null, !0), a;
  });
})(da);
var ca = da.exports, ac = /* @__PURE__ */ g(ca), sc = /* @__PURE__ */ k({
  __proto__: null,
  default: ac
}, [ca]), ma = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "el", weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), months: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαι_Ιουν_Ιουλ_Αυγ_Σεπτ_Οκτ_Νοε_Δεκ".split("_"), ordinal: function(e) {
      return e;
    }, weekStart: 1, relativeTime: { future: "σε %s", past: "πριν %s", s: "μερικά δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένα μήνα", MM: "%d μήνες", y: "ένα χρόνο", yy: "%d χρόνια" }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" } };
    return s.default.locale(a, null, !0), a;
  });
})(ma);
var fa = ma.exports, oc = /* @__PURE__ */ g(fa), ic = /* @__PURE__ */ k({
  __proto__: null,
  default: oc
}, [fa]), pa = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "en-au", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(a, null, !0), a;
  });
})(pa);
var ha = pa.exports, lc = /* @__PURE__ */ g(ha), uc = /* @__PURE__ */ k({
  __proto__: null,
  default: lc
}, [ha]), Ma = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "en-gb", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(e) {
      var i = ["th", "st", "nd", "rd"], l = e % 100;
      return "[" + e + (i[(l - 20) % 10] || i[l] || i[0]) + "]";
    } };
    return s.default.locale(a, null, !0), a;
  });
})(Ma);
var va = Ma.exports, _c = /* @__PURE__ */ g(va), dc = /* @__PURE__ */ k({
  __proto__: null,
  default: _c
}, [va]), ya = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "en-ie", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(a, null, !0), a;
  });
})(ya);
var Ya = ya.exports, cc = /* @__PURE__ */ g(Ya), mc = /* @__PURE__ */ k({
  __proto__: null,
  default: cc
}, [Ya]), ba = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "en-il", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(a, null, !0), a;
  });
})(ba);
var ga = ba.exports, fc = /* @__PURE__ */ g(ga), pc = /* @__PURE__ */ k({
  __proto__: null,
  default: fc
}, [ga]), La = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "en-in", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(e) {
      var i = ["th", "st", "nd", "rd"], l = e % 100;
      return "[" + e + (i[(l - 20) % 10] || i[l] || i[0]) + "]";
    } };
    return s.default.locale(a, null, !0), a;
  });
})(La);
var xa = La.exports, hc = /* @__PURE__ */ g(xa), Mc = /* @__PURE__ */ k({
  __proto__: null,
  default: hc
}, [xa]), ka = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "en-nz", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(e) {
      var i = ["th", "st", "nd", "rd"], l = e % 100;
      return "[" + e + (i[(l - 20) % 10] || i[l] || i[0]) + "]";
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(a, null, !0), a;
  });
})(ka);
var wa = ka.exports, vc = /* @__PURE__ */ g(wa), yc = /* @__PURE__ */ k({
  __proto__: null,
  default: vc
}, [wa]), Da = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "en-sg", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), weekStart: 1, weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" } };
    return s.default.locale(a, null, !0), a;
  });
})(Da);
var Sa = Da.exports, Yc = /* @__PURE__ */ g(Sa), bc = /* @__PURE__ */ k({
  __proto__: null,
  default: Yc
}, [Sa]), ja = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "en-tt", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekStart: 1, yearStart: 4, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(e) {
      var i = ["th", "st", "nd", "rd"], l = e % 100;
      return "[" + e + (i[(l - 20) % 10] || i[l] || i[0]) + "]";
    } };
    return s.default.locale(a, null, !0), a;
  });
})(ja);
var Ha = ja.exports, gc = /* @__PURE__ */ g(Ha), Lc = /* @__PURE__ */ k({
  __proto__: null,
  default: gc
}, [Ha]), Ta = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t();
  })(b, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(n) {
      var t = ["th", "st", "nd", "rd"], s = n % 100;
      return "[" + n + (t[(s - 20) % 10] || t[s] || t[0]) + "]";
    } };
  });
})(Ta);
var Ea = Ta.exports, xc = /* @__PURE__ */ g(Ea), Pr = /* @__PURE__ */ k({
  __proto__: null,
  default: xc
}, [Ea]), Na = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "eo", weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"), months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), weekStart: 1, weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, relativeTime: { future: "post %s", past: "antaŭ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" } };
    return s.default.locale(a, null, !0), a;
  });
})(Na);
var $a = Na.exports, kc = /* @__PURE__ */ g($a), wc = /* @__PURE__ */ k({
  __proto__: null,
  default: kc
}, [$a]), Ca = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "es-do", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekStart: 1, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(e) {
      return e + "º";
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" } };
    return s.default.locale(a, null, !0), a;
  });
})(Ca);
var Aa = Ca.exports, Dc = /* @__PURE__ */ g(Aa), Sc = /* @__PURE__ */ k({
  __proto__: null,
  default: Dc
}, [Aa]), Pa = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "es-mx", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(e) {
      return e + "º";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" } };
    return s.default.locale(a, null, !0), a;
  });
})(Pa);
var Oa = Pa.exports, jc = /* @__PURE__ */ g(Oa), Hc = /* @__PURE__ */ k({
  __proto__: null,
  default: jc
}, [Oa]), Ra = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "es-pr", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(e) {
      return e + "º";
    } };
    return s.default.locale(a, null, !0), a;
  });
})(Ra);
var za = Ra.exports, Tc = /* @__PURE__ */ g(za), Ec = /* @__PURE__ */ k({
  __proto__: null,
  default: Tc
}, [za]), Ia = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "es-us", weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(e) {
      return e + "º";
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" } };
    return s.default.locale(a, null, !0), a;
  });
})(Ia);
var Fa = Ia.exports, Nc = /* @__PURE__ */ g(Fa), $c = /* @__PURE__ */ k({
  __proto__: null,
  default: Nc
}, [Fa]), Ja = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "es", monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"), weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinal: function(e) {
      return e + "º";
    } };
    return s.default.locale(a, null, !0), a;
  });
})(Ja);
var Ba = Ja.exports, Cc = /* @__PURE__ */ g(Ba), Ac = /* @__PURE__ */ k({
  __proto__: null,
  default: Cc
}, [Ba]), Wa = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var s = t(n);
    function a(i, l, u, c) {
      var d = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], m: ["ühe minuti", "üks minut"], mm: ["%d minuti", "%d minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: ["%d tunni", "%d tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: ["%d kuu", "%d kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: ["%d aasta", "%d aastat"] };
      return l ? (d[u][2] ? d[u][2] : d[u][1]).replace("%d", i) : (c ? d[u][0] : d[u][1]).replace("%d", i);
    }
    var e = { name: "et", weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), ordinal: function(i) {
      return i + ".";
    }, weekStart: 1, relativeTime: { future: "%s pärast", past: "%s tagasi", s: a, m: a, mm: a, h: a, hh: a, d: a, dd: "%d päeva", M: a, MM: a, y: a, yy: a }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" } };
    return s.default.locale(e, null, !0), e;
  });
})(Wa);
var Ka = Wa.exports, Pc = /* @__PURE__ */ g(Ka), Oc = /* @__PURE__ */ k({
  __proto__: null,
  default: Pc
}, [Ka]), Va = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "eu", weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), weekStart: 1, weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" } };
    return s.default.locale(a, null, !0), a;
  });
})(Va);
var qa = Va.exports, Rc = /* @__PURE__ */ g(qa), zc = /* @__PURE__ */ k({
  __proto__: null,
  default: Rc
}, [qa]), Ua = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "fa", weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysShort: "یک‌_دو_سه‌_چه_پن_جم_شن".split("_"), weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"), weekStart: 6, months: "فروردین_اردیبهشت_خرداد_تیر_مرداد_شهریور_مهر_آبان_آذر_دی_بهمن_اسفند".split("_"), monthsShort: "فرو_ارد_خرد_تیر_مرد_شهر_مهر_آبا_آذر_دی_بهم_اسف".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "در %s", past: "%s قبل", s: "چند ثانیه", m: "یک دقیقه", mm: "%d دقیقه", h: "یک ساعت", hh: "%d ساعت", d: "یک روز", dd: "%d روز", M: "یک ماه", MM: "%d ماه", y: "یک سال", yy: "%d سال" } };
    return s.default.locale(a, null, !0), a;
  });
})(Ua);
var Ga = Ua.exports, Ic = /* @__PURE__ */ g(Ga), Fc = /* @__PURE__ */ k({
  __proto__: null,
  default: Ic
}, [Ga]), Za = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var s = t(n);
    function a(i, l, u, c) {
      var d = { s: "muutama sekunti", m: "minuutti", mm: "%d minuuttia", h: "tunti", hh: "%d tuntia", d: "päivä", dd: "%d päivää", M: "kuukausi", MM: "%d kuukautta", y: "vuosi", yy: "%d vuotta", numbers: "nolla_yksi_kaksi_kolme_neljä_viisi_kuusi_seitsemän_kahdeksan_yhdeksän".split("_") }, m = { s: "muutaman sekunnin", m: "minuutin", mm: "%d minuutin", h: "tunnin", hh: "%d tunnin", d: "päivän", dd: "%d päivän", M: "kuukauden", MM: "%d kuukauden", y: "vuoden", yy: "%d vuoden", numbers: "nollan_yhden_kahden_kolmen_neljän_viiden_kuuden_seitsemän_kahdeksan_yhdeksän".split("_") }, y = c && !l ? m : d, v = y[u];
      return i < 10 ? v.replace("%d", y.numbers[i]) : v.replace("%d", i);
    }
    var e = { name: "fi", weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), ordinal: function(i) {
      return i + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "%s päästä", past: "%s sitten", s: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM[ta] YYYY", LLL: "D. MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, D. MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "D. MMM YYYY", lll: "D. MMM YYYY, [klo] HH.mm", llll: "ddd, D. MMM YYYY, [klo] HH.mm" } };
    return s.default.locale(e, null, !0), e;
  });
})(Za);
var Xa = Za.exports, Jc = /* @__PURE__ */ g(Xa), Bc = /* @__PURE__ */ k({
  __proto__: null,
  default: Jc
}, [Xa]), Qa = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "fo", weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), weekStart: 1, weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", m: "ein minuttur", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaður", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" } };
    return s.default.locale(a, null, !0), a;
  });
})(Qa);
var es = Qa.exports, Wc = /* @__PURE__ */ g(es), Kc = /* @__PURE__ */ k({
  __proto__: null,
  default: Wc
}, [es]), ts = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "fr-ch", weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), weekStart: 1, weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" } };
    return s.default.locale(a, null, !0), a;
  });
})(ts);
var rs = ts.exports, Vc = /* @__PURE__ */ g(rs), qc = /* @__PURE__ */ k({
  __proto__: null,
  default: Vc
}, [rs]), ns = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "fr", weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinal: function(e) {
      return "" + e + (e === 1 ? "er" : "");
    } };
    return s.default.locale(a, null, !0), a;
  });
})(ns);
var as = ns.exports, Uc = /* @__PURE__ */ g(as), Gc = /* @__PURE__ */ k({
  __proto__: null,
  default: Uc
}, [as]), ss = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "fy", weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"), weekStart: 1, weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" } };
    return s.default.locale(a, null, !0), a;
  });
})(ss);
var os = ss.exports, Zc = /* @__PURE__ */ g(os), Xc = /* @__PURE__ */ k({
  __proto__: null,
  default: Zc
}, [os]), is = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ga", weekdays: "Dé Domhnaigh_Dé Luain_Dé Máirt_Dé Céadaoin_Déardaoin_Dé hAoine_Dé Satharn".split("_"), months: "Eanáir_Feabhra_Márta_Aibreán_Bealtaine_Méitheamh_Iúil_Lúnasa_Meán Fómhair_Deaireadh Fómhair_Samhain_Nollaig".split("_"), weekStart: 1, weekdaysShort: "Dom_Lua_Mái_Céa_Déa_hAo_Sat".split("_"), monthsShort: "Eaná_Feab_Márt_Aibr_Beal_Méit_Iúil_Lúna_Meán_Deai_Samh_Noll".split("_"), weekdaysMin: "Do_Lu_Má_Ce_Dé_hA_Sa".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "i %s", past: "%s ó shin", s: "cúpla soicind", m: "nóiméad", mm: "%d nóiméad", h: "uair an chloig", hh: "%d uair an chloig", d: "lá", dd: "%d lá", M: "mí", MM: "%d mí", y: "bliain", yy: "%d bliain" } };
    return s.default.locale(a, null, !0), a;
  });
})(is);
var ls = is.exports, Qc = /* @__PURE__ */ g(ls), em = /* @__PURE__ */ k({
  __proto__: null,
  default: Qc
}, [ls]), us = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "gd", weekdays: "Didòmhnaich_Diluain_Dimàirt_Diciadain_Diardaoin_Dihaoine_Disathairne".split("_"), months: "Am Faoilleach_An Gearran_Am Màrt_An Giblean_An Cèitean_An t-Ògmhios_An t-Iuchar_An Lùnastal_An t-Sultain_An Dàmhair_An t-Samhain_An Dùbhlachd".split("_"), weekStart: 1, weekdaysShort: "Did_Dil_Dim_Dic_Dia_Dih_Dis".split("_"), monthsShort: "Faoi_Gear_Màrt_Gibl_Cèit_Ògmh_Iuch_Lùn_Sult_Dàmh_Samh_Dùbh".split("_"), weekdaysMin: "Dò_Lu_Mà_Ci_Ar_Ha_Sa".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "mìos", MM: "%d mìosan", y: "bliadhna", yy: "%d bliadhna" } };
    return s.default.locale(a, null, !0), a;
  });
})(us);
var _s = us.exports, tm = /* @__PURE__ */ g(_s), rm = /* @__PURE__ */ k({
  __proto__: null,
  default: tm
}, [_s]), ds = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "gl", weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"), months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), weekStart: 1, weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"), monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"), weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"), ordinal: function(e) {
      return e + "º";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, relativeTime: { future: "en %s", past: "fai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" } };
    return s.default.locale(a, null, !0), a;
  });
})(ds);
var cs = ds.exports, nm = /* @__PURE__ */ g(cs), am = /* @__PURE__ */ k({
  __proto__: null,
  default: nm
}, [cs]), ms = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "gom-latn", weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"), months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), weekStart: 1, weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"), monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"), weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" } };
    return s.default.locale(a, null, !0), a;
  });
})(ms);
var fs = ms.exports, sm = /* @__PURE__ */ g(fs), om = /* @__PURE__ */ k({
  __proto__: null,
  default: sm
}, [fs]), ps = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "gu", weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"), months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"), weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"), monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"), weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "A h:mm વાગ્યે", LTS: "A h:mm:ss વાગ્યે", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm વાગ્યે", LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે" }, relativeTime: { future: "%s મા", past: "%s પેહલા", s: "અમુક પળો", m: "એક મિનિટ", mm: "%d મિનિટ", h: "એક કલાક", hh: "%d કલાક", d: "એક દિવસ", dd: "%d દિવસ", M: "એક મહિનો", MM: "%d મહિનો", y: "એક વર્ષ", yy: "%d વર્ષ" } };
    return s.default.locale(a, null, !0), a;
  });
})(ps);
var hs = ps.exports, im = /* @__PURE__ */ g(hs), lm = /* @__PURE__ */ k({
  __proto__: null,
  default: im
}, [hs]), Ms = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = t(n), a = { s: "מספר שניות", ss: "%d שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: "%d שעות", hh2: "שעתיים", d: "יום", dd: "%d ימים", dd2: "יומיים", M: "חודש", MM: "%d חודשים", MM2: "חודשיים", y: "שנה", yy: "%d שנים", yy2: "שנתיים" };
    function e(l, u, c) {
      return (a[c + (l === 2 ? "2" : "")] || a[c]).replace("%d", l);
    }
    var i = { name: "he", weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "א׳_ב׳_ג׳_ד׳_ה׳_ו_ש׳".split("_"), months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו_פבר_מרץ_אפר_מאי_יונ_יול_אוג_ספט_אוק_נוב_דצמ".split("_"), relativeTime: { future: "בעוד %s", past: "לפני %s", s: e, m: e, mm: e, h: e, hh: e, d: e, dd: e, M: e, MM: e, y: e, yy: e }, ordinal: function(l) {
      return l;
    }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" } };
    return s.default.locale(i, null, !0), i;
  });
})(Ms);
var vs = Ms.exports, um = /* @__PURE__ */ g(vs), _m = /* @__PURE__ */ k({
  __proto__: null,
  default: um
}, [vs]), ys = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "hi", weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm बजे", LLLL: "dddd, D MMMM YYYY, A h:mm बजे" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" } };
    return s.default.locale(a, null, !0), a;
  });
})(ys);
var Ys = ys.exports, dm = /* @__PURE__ */ g(Ys), cm = /* @__PURE__ */ k({
  __proto__: null,
  default: dm
}, [Ys]), bs = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(c) {
      return c && typeof c == "object" && "default" in c ? c : { default: c };
    }
    var s = t(n), a = "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), e = "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"), i = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/, l = function(c, d) {
      return i.test(d) ? a[c.month()] : e[c.month()];
    };
    l.s = e, l.f = a;
    var u = { name: "hr", weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), months: l, monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, relativeTime: { future: "za %s", past: "prije %s", s: "sekunda", m: "minuta", mm: "%d minuta", h: "sat", hh: "%d sati", d: "dan", dd: "%d dana", M: "mjesec", MM: "%d mjeseci", y: "godina", yy: "%d godine" }, ordinal: function(c) {
      return c + ".";
    } };
    return s.default.locale(u, null, !0), u;
  });
})(bs);
var gs = bs.exports, mm = /* @__PURE__ */ g(gs), fm = /* @__PURE__ */ k({
  __proto__: null,
  default: mm
}, [gs]), Ls = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ht", weekdays: "dimanch_lendi_madi_mèkredi_jedi_vandredi_samdi".split("_"), months: "janvye_fevriye_mas_avril_me_jen_jiyè_out_septanm_oktòb_novanm_desanm".split("_"), weekdaysShort: "dim._len._mad._mèk._jed._van._sam.".split("_"), monthsShort: "jan._fev._mas_avr._me_jen_jiyè._out_sept._okt._nov._des.".split("_"), weekdaysMin: "di_le_ma_mè_je_va_sa".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "nan %s", past: "sa gen %s", s: "kèk segond", m: "yon minit", mm: "%d minit", h: "inèdtan", hh: "%d zè", d: "yon jou", dd: "%d jou", M: "yon mwa", MM: "%d mwa", y: "yon ane", yy: "%d ane" } };
    return s.default.locale(a, null, !0), a;
  });
})(Ls);
var xs = Ls.exports, pm = /* @__PURE__ */ g(xs), hm = /* @__PURE__ */ k({
  __proto__: null,
  default: pm
}, [xs]), ks = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "hu", weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), ordinal: function(e) {
      return e + ".";
    }, weekStart: 1, relativeTime: { future: "%s múlva", past: "%s", s: function(e, i, l, u) {
      return "néhány másodperc" + (u || i ? "" : "e");
    }, m: function(e, i, l, u) {
      return "egy perc" + (u || i ? "" : "e");
    }, mm: function(e, i, l, u) {
      return e + " perc" + (u || i ? "" : "e");
    }, h: function(e, i, l, u) {
      return "egy " + (u || i ? "óra" : "órája");
    }, hh: function(e, i, l, u) {
      return e + " " + (u || i ? "óra" : "órája");
    }, d: function(e, i, l, u) {
      return "egy " + (u || i ? "nap" : "napja");
    }, dd: function(e, i, l, u) {
      return e + " " + (u || i ? "nap" : "napja");
    }, M: function(e, i, l, u) {
      return "egy " + (u || i ? "hónap" : "hónapja");
    }, MM: function(e, i, l, u) {
      return e + " " + (u || i ? "hónap" : "hónapja");
    }, y: function(e, i, l, u) {
      return "egy " + (u || i ? "év" : "éve");
    }, yy: function(e, i, l, u) {
      return e + " " + (u || i ? "év" : "éve");
    } }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" } };
    return s.default.locale(a, null, !0), a;
  });
})(ks);
var ws = ks.exports, Mm = /* @__PURE__ */ g(ws), vm = /* @__PURE__ */ k({
  __proto__: null,
  default: Mm
}, [ws]), Ds = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "hy-am", weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"), months: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"), weekStart: 1, weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"), weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., HH:mm", LLLL: "dddd, D MMMM YYYY թ., HH:mm" }, relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" } };
    return s.default.locale(a, null, !0), a;
  });
})(Ds);
var Ss = Ds.exports, ym = /* @__PURE__ */ g(Ss), Ym = /* @__PURE__ */ k({
  __proto__: null,
  default: ym
}, [Ss]), js = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "id", weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), weekStart: 1, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, ordinal: function(e) {
      return e + ".";
    } };
    return s.default.locale(a, null, !0), a;
  });
})(js);
var Hs = js.exports, bm = /* @__PURE__ */ g(Hs), gm = /* @__PURE__ */ k({
  __proto__: null,
  default: bm
}, [Hs]), Ts = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = t(n), a = { s: ["nokkrar sekúndur", "nokkrar sekúndur", "nokkrum sekúndum"], m: ["mínúta", "mínútu", "mínútu"], mm: ["mínútur", "mínútur", "mínútum"], h: ["klukkustund", "klukkustund", "klukkustund"], hh: ["klukkustundir", "klukkustundir", "klukkustundum"], d: ["dagur", "dag", "degi"], dd: ["dagar", "daga", "dögum"], M: ["mánuður", "mánuð", "mánuði"], MM: ["mánuðir", "mánuði", "mánuðum"], y: ["ár", "ár", "ári"], yy: ["ár", "ár", "árum"] };
    function e(l, u, c, d) {
      var m = function(y, v, M, w) {
        var L = w ? 0 : M ? 1 : 2, $ = y.length === 2 && v % 10 == 1 ? y[0] : y, O = a[$][L];
        return y.length === 1 ? O : "%d " + O;
      }(c, l, d, u);
      return m.replace("%d", l);
    }
    var i = { name: "is", weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"), months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"), weekStart: 1, weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"), monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"), weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"), ordinal: function(l) {
      return l;
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, relativeTime: { future: "eftir %s", past: "fyrir %s síðan", s: e, m: e, mm: e, h: e, hh: e, d: e, dd: e, M: e, MM: e, y: e, yy: e } };
    return s.default.locale(i, null, !0), i;
  });
})(Ts);
var Es = Ts.exports, Lm = /* @__PURE__ */ g(Es), xm = /* @__PURE__ */ k({
  __proto__: null,
  default: Lm
}, [Es]), Ns = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "it-ch", weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), weekStart: 1, weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "tra %s", past: "%s fa", s: "alcuni secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" } };
    return s.default.locale(a, null, !0), a;
  });
})(Ns);
var $s = Ns.exports, km = /* @__PURE__ */ g($s), wm = /* @__PURE__ */ k({
  __proto__: null,
  default: km
}, [$s]), Cs = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "it", weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), weekStart: 1, monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "tra %s", past: "%s fa", s: "qualche secondo", m: "un minuto", mm: "%d minuti", h: "un' ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, ordinal: function(e) {
      return e + "º";
    } };
    return s.default.locale(a, null, !0), a;
  });
})(Cs);
var As = Cs.exports, Dm = /* @__PURE__ */ g(As), Sm = /* @__PURE__ */ k({
  __proto__: null,
  default: Dm
}, [As]), Ps = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ja", weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"), weekdaysShort: "日_月_火_水_木_金_土".split("_"), weekdaysMin: "日_月_火_水_木_金_土".split("_"), months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(e) {
      return e + "日";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日(ddd) HH:mm" }, meridiem: function(e) {
      return e < 12 ? "午前" : "午後";
    }, relativeTime: { future: "%s後", past: "%s前", s: "数秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" } };
    return s.default.locale(a, null, !0), a;
  });
})(Ps);
var Os = Ps.exports, jm = /* @__PURE__ */ g(Os), Hm = /* @__PURE__ */ k({
  __proto__: null,
  default: jm
}, [Os]), Rs = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "jv", weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), weekStart: 1, weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" } };
    return s.default.locale(a, null, !0), a;
  });
})(Rs);
var zs = Rs.exports, Tm = /* @__PURE__ */ g(zs), Em = /* @__PURE__ */ k({
  __proto__: null,
  default: Tm
}, [zs]), Is = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ka", weekdays: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"), weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"), months: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"), weekStart: 1, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "%s შემდეგ", past: "%s წინ", s: "წამი", m: "წუთი", mm: "%d წუთი", h: "საათი", hh: "%d საათის", d: "დღეს", dd: "%d დღის განმავლობაში", M: "თვის", MM: "%d თვის", y: "წელი", yy: "%d წლის" }, ordinal: function(e) {
      return e;
    } };
    return s.default.locale(a, null, !0), a;
  });
})(Is);
var Fs = Is.exports, Nm = /* @__PURE__ */ g(Fs), $m = /* @__PURE__ */ k({
  __proto__: null,
  default: Nm
}, [Fs]), Js = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "kk", weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"), weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"), weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"), months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"), monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"), weekStart: 1, relativeTime: { future: "%s ішінде", past: "%s бұрын", s: "бірнеше секунд", m: "бір минут", mm: "%d минут", h: "бір сағат", hh: "%d сағат", d: "бір күн", dd: "%d күн", M: "бір ай", MM: "%d ай", y: "бір жыл", yy: "%d жыл" }, ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(a, null, !0), a;
  });
})(Js);
var Bs = Js.exports, Cm = /* @__PURE__ */ g(Bs), Am = /* @__PURE__ */ k({
  __proto__: null,
  default: Cm
}, [Bs]), Ws = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ko", weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 A h:mm", LLLL: "YYYY년 MMMM D일 dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY년 MMMM D일", lll: "YYYY년 MMMM D일 A h:mm", llll: "YYYY년 MMMM D일 dddd A h:mm" }, meridiem: function(e) {
      return e < 12 ? "오전" : "오후";
    }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇 초", m: "1분", mm: "%d분", h: "한 시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한 달", MM: "%d달", y: "일 년", yy: "%d년" } };
    return s.default.locale(a, null, !0), a;
  });
})(Ws);
var Ks = Ws.exports, Pm = /* @__PURE__ */ g(Ks), Om = /* @__PURE__ */ k({
  __proto__: null,
  default: Pm
}, [Ks]), Kt = { exports: {} };
(function(r, o) {
  (function(n, t) {
    t(o, f);
  })(b, function(n, t) {
    function s(c) {
      return c && typeof c == "object" && "default" in c ? c : { default: c };
    }
    var a = s(t), e = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" }, i = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" }, l = ["کانوونی دووەم", "شوبات", "ئادار", "نیسان", "ئایار", "حوزەیران", "تەممووز", "ئاب", "ئەیلوول", "تشرینی یەکەم", "تشرینی دووەم", "کانوونی یەکەم"], u = { name: "ku", months: l, monthsShort: l, weekdays: "یەکشەممە_دووشەممە_سێشەممە_چوارشەممە_پێنجشەممە_هەینی_شەممە".split("_"), weekdaysShort: "یەکشەم_دووشەم_سێشەم_چوارشەم_پێنجشەم_هەینی_شەممە".split("_"), weekStart: 6, weekdaysMin: "ی_د_س_چ_پ_هـ_ش".split("_"), preparse: function(c) {
      return c.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(d) {
        return i[d];
      }).replace(/،/g, ",");
    }, postformat: function(c) {
      return c.replace(/\d/g, function(d) {
        return e[d];
      }).replace(/,/g, "،");
    }, ordinal: function(c) {
      return c;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiem: function(c) {
      return c < 12 ? "پ.ن" : "د.ن";
    }, relativeTime: { future: "لە %s", past: "لەمەوپێش %s", s: "چەند چرکەیەک", m: "یەک خولەک", mm: "%d خولەک", h: "یەک کاتژمێر", hh: "%d کاتژمێر", d: "یەک ڕۆژ", dd: "%d ڕۆژ", M: "یەک مانگ", MM: "%d مانگ", y: "یەک ساڵ", yy: "%d ساڵ" } };
    a.default.locale(u, null, !0), n.default = u, n.englishToArabicNumbersMap = e, Object.defineProperty(n, "__esModule", { value: !0 });
  });
})(Kt, Kt.exports);
var Vs = Kt.exports, Rm = /* @__PURE__ */ g(Vs), zm = /* @__PURE__ */ k({
  __proto__: null,
  default: Rm
}, [Vs]), qs = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ky", weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"), months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), weekStart: 1, weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"), monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"), weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s ичинде", past: "%s мурун", s: "бирнече секунд", m: "бир мүнөт", mm: "%d мүнөт", h: "бир саат", hh: "%d саат", d: "бир күн", dd: "%d күн", M: "бир ай", MM: "%d ай", y: "бир жыл", yy: "%d жыл" } };
    return s.default.locale(a, null, !0), a;
  });
})(qs);
var Us = qs.exports, Im = /* @__PURE__ */ g(Us), Fm = /* @__PURE__ */ k({
  __proto__: null,
  default: Im
}, [Us]), Gs = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "lb", weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), weekStart: 1, weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" } };
    return s.default.locale(a, null, !0), a;
  });
})(Gs);
var Zs = Gs.exports, Jm = /* @__PURE__ */ g(Zs), Bm = /* @__PURE__ */ k({
  __proto__: null,
  default: Jm
}, [Zs]), Xs = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "lo", weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "ວັນdddd D MMMM YYYY HH:mm" }, relativeTime: { future: "ອີກ %s", past: "%sຜ່ານມາ", s: "ບໍ່ເທົ່າໃດວິນາທີ", m: "1 ນາທີ", mm: "%d ນາທີ", h: "1 ຊົ່ວໂມງ", hh: "%d ຊົ່ວໂມງ", d: "1 ມື້", dd: "%d ມື້", M: "1 ເດືອນ", MM: "%d ເດືອນ", y: "1 ປີ", yy: "%d ປີ" } };
    return s.default.locale(a, null, !0), a;
  });
})(Xs);
var Qs = Xs.exports, Wm = /* @__PURE__ */ g(Qs), Km = /* @__PURE__ */ k({
  __proto__: null,
  default: Wm
}, [Qs]), eo = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(c) {
      return c && typeof c == "object" && "default" in c ? c : { default: c };
    }
    var s = t(n), a = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), e = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), i = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, l = function(c, d) {
      return i.test(d) ? a[c.month()] : e[c.month()];
    };
    l.s = e, l.f = a;
    var u = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: l, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(c) {
      return c + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return s.default.locale(u, null, !0), u;
  });
})(eo);
var to = eo.exports, Vm = /* @__PURE__ */ g(to), qm = /* @__PURE__ */ k({
  __proto__: null,
  default: Vm
}, [to]), ro = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "lv", weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), weekStart: 1, weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, relativeTime: { future: "pēc %s", past: "pirms %s", s: "dažām sekundēm", m: "minūtes", mm: "%d minūtēm", h: "stundas", hh: "%d stundām", d: "dienas", dd: "%d dienām", M: "mēneša", MM: "%d mēnešiem", y: "gada", yy: "%d gadiem" } };
    return s.default.locale(a, null, !0), a;
  });
})(ro);
var no = ro.exports, Um = /* @__PURE__ */ g(no), Gm = /* @__PURE__ */ k({
  __proto__: null,
  default: Um
}, [no]), ao = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "me", weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), weekStart: 1, weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" } };
    return s.default.locale(a, null, !0), a;
  });
})(ao);
var so = ao.exports, Zm = /* @__PURE__ */ g(so), Xm = /* @__PURE__ */ k({
  __proto__: null,
  default: Zm
}, [so]), oo = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "mi", weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"), months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"), weekStart: 1, weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te hēkona ruarua", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" } };
    return s.default.locale(a, null, !0), a;
  });
})(oo);
var io = oo.exports, Qm = /* @__PURE__ */ g(io), ef = /* @__PURE__ */ k({
  __proto__: null,
  default: Qm
}, [io]), lo = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "mk", weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"), months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"), weekStart: 1, weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"), monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"), weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "после %s", past: "пред %s", s: "неколку секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години" } };
    return s.default.locale(a, null, !0), a;
  });
})(lo);
var uo = lo.exports, tf = /* @__PURE__ */ g(uo), rf = /* @__PURE__ */ k({
  __proto__: null,
  default: tf
}, [uo]), _o = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ml", weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"), months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"), weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"), monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"), weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -നു", LLLL: "dddd, D MMMM YYYY, A h:mm -നു" }, relativeTime: { future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം" } };
    return s.default.locale(a, null, !0), a;
  });
})(_o);
var co = _o.exports, nf = /* @__PURE__ */ g(co), af = /* @__PURE__ */ k({
  __proto__: null,
  default: nf
}, [co]), mo = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "mn", weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"), months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"), weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"), monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"), weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY оны MMMMын D", LLL: "YYYY оны MMMMын D HH:mm", LLLL: "dddd, YYYY оны MMMMын D HH:mm" }, relativeTime: { future: "%s", past: "%s", s: "саяхан", m: "м", mm: "%dм", h: "1ц", hh: "%dц", d: "1ө", dd: "%dө", M: "1с", MM: "%dс", y: "1ж", yy: "%dж" } };
    return s.default.locale(a, null, !0), a;
  });
})(mo);
var fo = mo.exports, sf = /* @__PURE__ */ g(fo), of = /* @__PURE__ */ k({
  __proto__: null,
  default: sf
}, [fo]), po = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ms-my", weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), weekStart: 1, weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" } };
    return s.default.locale(a, null, !0), a;
  });
})(po);
var ho = po.exports, lf = /* @__PURE__ */ g(ho), uf = /* @__PURE__ */ k({
  __proto__: null,
  default: lf
}, [ho]), Mo = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ms", weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekStart: 1, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH.mm", LLLL: "dddd, D MMMM YYYY HH.mm" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, ordinal: function(e) {
      return e + ".";
    } };
    return s.default.locale(a, null, !0), a;
  });
})(Mo);
var vo = Mo.exports, _f = /* @__PURE__ */ g(vo), df = /* @__PURE__ */ k({
  __proto__: null,
  default: _f
}, [vo]), yo = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "mt", weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"), months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"), weekStart: 1, weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"), monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"), weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "f’ %s", past: "%s ilu", s: "ftit sekondi", m: "minuta", mm: "%d minuti", h: "siegħa", hh: "%d siegħat", d: "ġurnata", dd: "%d ġranet", M: "xahar", MM: "%d xhur", y: "sena", yy: "%d sni" } };
    return s.default.locale(a, null, !0), a;
  });
})(yo);
var Yo = yo.exports, cf = /* @__PURE__ */ g(Yo), mf = /* @__PURE__ */ k({
  __proto__: null,
  default: cf
}, [Yo]), bo = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "my", weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"), months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"), weekStart: 1, weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"), weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်" } };
    return s.default.locale(a, null, !0), a;
  });
})(bo);
var go = bo.exports, ff = /* @__PURE__ */ g(go), pf = /* @__PURE__ */ k({
  __proto__: null,
  default: ff
}, [go]), Lo = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "nb", weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), ordinal: function(e) {
      return e + ".";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" } };
    return s.default.locale(a, null, !0), a;
  });
})(Lo);
var xo = Lo.exports, hf = /* @__PURE__ */ g(xo), Mf = /* @__PURE__ */ k({
  __proto__: null,
  default: hf
}, [xo]), ko = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ne", weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"), weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"), weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"), months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मे_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"), monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"), relativeTime: { future: "%s पछि", past: "%s अघि", s: "सेकेन्ड", m: "एक मिनेट", mm: "%d मिनेट", h: "घन्टा", hh: "%d घन्टा", d: "एक दिन", dd: "%d दिन", M: "एक महिना", MM: "%d महिना", y: "एक वर्ष", yy: "%d वर्ष" }, ordinal: function(e) {
      return ("" + e).replace(/\d/g, function(i) {
        return "०१२३४५६७८९"[i];
      });
    }, formats: { LT: "Aको h:mm बजे", LTS: "Aको h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, Aको h:mm बजे", LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे" } };
    return s.default.locale(a, null, !0), a;
  });
})(ko);
var wo = ko.exports, vf = /* @__PURE__ */ g(wo), yf = /* @__PURE__ */ k({
  __proto__: null,
  default: vf
}, [wo]), Do = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "nl-be", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), weekStart: 1, weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" } };
    return s.default.locale(a, null, !0), a;
  });
})(Do);
var So = Do.exports, Yf = /* @__PURE__ */ g(So), bf = /* @__PURE__ */ k({
  __proto__: null,
  default: Yf
}, [So]), jo = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "nl", weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"), ordinal: function(e) {
      return "[" + e + (e === 1 || e === 8 || e >= 20 ? "ste" : "de") + "]";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "een minuut", mm: "%d minuten", h: "een uur", hh: "%d uur", d: "een dag", dd: "%d dagen", M: "een maand", MM: "%d maanden", y: "een jaar", yy: "%d jaar" } };
    return s.default.locale(a, null, !0), a;
  });
})(jo);
var Ho = jo.exports, gf = /* @__PURE__ */ g(Ho), Lf = /* @__PURE__ */ k({
  __proto__: null,
  default: gf
}, [Ho]), To = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "nn", weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_la".split("_"), months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), ordinal: function(e) {
      return e + ".";
    }, weekStart: 1, relativeTime: { future: "om %s", past: "for %s sidan", s: "nokre sekund", m: "eitt minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månadar", y: "eitt år", yy: "%d år" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" } };
    return s.default.locale(a, null, !0), a;
  });
})(To);
var Eo = To.exports, xf = /* @__PURE__ */ g(Eo), kf = /* @__PURE__ */ k({
  __proto__: null,
  default: xf
}, [Eo]), No = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "oc-lnc", weekdays: "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split("_"), weekdaysShort: "Dg_Dl_Dm_Dc_Dj_Dv_Ds".split("_"), weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"), months: "genièr_febrièr_març_abrial_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split("_"), monthsShort: "gen_feb_març_abr_mai_junh_julh_ago_set_oct_nov_dec".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", LLL: "D MMMM [de] YYYY [a] H:mm", LLLL: "dddd D MMMM [de] YYYY [a] H:mm" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "unas segondas", m: "una minuta", mm: "%d minutas", h: "una ora", hh: "%d oras", d: "un jorn", dd: "%d jorns", M: "un mes", MM: "%d meses", y: "un an", yy: "%d ans" }, ordinal: function(e) {
      return e + "º";
    } };
    return s.default.locale(a, null, !0), a;
  });
})(No);
var $o = No.exports, wf = /* @__PURE__ */ g($o), Df = /* @__PURE__ */ k({
  __proto__: null,
  default: wf
}, [$o]), Co = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "pa-in", weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"), months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "A h:mm ਵਜੇ", LTS: "A h:mm:ss ਵਜੇ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm ਵਜੇ", LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ" }, relativeTime: { future: "%s ਵਿੱਚ", past: "%s ਪਿਛਲੇ", s: "ਕੁਝ ਸਕਿੰਟ", m: "ਇਕ ਮਿੰਟ", mm: "%d ਮਿੰਟ", h: "ਇੱਕ ਘੰਟਾ", hh: "%d ਘੰਟੇ", d: "ਇੱਕ ਦਿਨ", dd: "%d ਦਿਨ", M: "ਇੱਕ ਮਹੀਨਾ", MM: "%d ਮਹੀਨੇ", y: "ਇੱਕ ਸਾਲ", yy: "%d ਸਾਲ" } };
    return s.default.locale(a, null, !0), a;
  });
})(Co);
var Ao = Co.exports, Sf = /* @__PURE__ */ g(Ao), jf = /* @__PURE__ */ k({
  __proto__: null,
  default: Sf
}, [Ao]), Po = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(m) {
      return m && typeof m == "object" && "default" in m ? m : { default: m };
    }
    var s = t(n);
    function a(m) {
      return m % 10 < 5 && m % 10 > 1 && ~~(m / 10) % 10 != 1;
    }
    function e(m, y, v) {
      var M = m + " ";
      switch (v) {
        case "m":
          return y ? "minuta" : "minutę";
        case "mm":
          return M + (a(m) ? "minuty" : "minut");
        case "h":
          return y ? "godzina" : "godzinę";
        case "hh":
          return M + (a(m) ? "godziny" : "godzin");
        case "MM":
          return M + (a(m) ? "miesiące" : "miesięcy");
        case "yy":
          return M + (a(m) ? "lata" : "lat");
      }
    }
    var i = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), u = /D MMMM/, c = function(m, y) {
      return u.test(y) ? i[m.month()] : l[m.month()];
    };
    c.s = l, c.f = i;
    var d = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: c, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(m) {
      return m + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: e, mm: e, h: e, hh: e, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: e, y: "rok", yy: e }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(d, null, !0), d;
  });
})(Po);
var Oo = Po.exports, Hf = /* @__PURE__ */ g(Oo), Tf = /* @__PURE__ */ k({
  __proto__: null,
  default: Hf
}, [Oo]), Ro = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "pt-br", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(e) {
      return e + "º";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
    return s.default.locale(a, null, !0), a;
  });
})(Ro);
var zo = Ro.exports, Ef = /* @__PURE__ */ g(zo), Nf = /* @__PURE__ */ k({
  __proto__: null,
  default: Ef
}, [zo]), Io = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "pt", weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sab".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sa".split("_"), months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), ordinal: function(e) {
      return e + "º";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, relativeTime: { future: "em %s", past: "há %s", s: "alguns segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" } };
    return s.default.locale(a, null, !0), a;
  });
})(Io);
var Fo = Io.exports, $f = /* @__PURE__ */ g(Fo), Cf = /* @__PURE__ */ k({
  __proto__: null,
  default: $f
}, [Fo]), Jo = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "rn", weekdays: "Ku wa Mungu_Ku wa Mbere_Ku wa Kabiri_Ku wa Gatatu_Ku wa Kane_Ku wa Gatanu_Ku wa Gatandatu".split("_"), weekdaysShort: "Kngu_Kmbr_Kbri_Ktat_Kkan_Ktan_Kdat".split("_"), weekdaysMin: "K7_K1_K2_K3_K4_K5_K6".split("_"), months: "Nzero_Ruhuhuma_Ntwarante_Ndamukiza_Rusama_Ruhenshi_Mukakaro_Myandagaro_Nyakanga_Gitugutu_Munyonyo_Kigarama".split("_"), monthsShort: "Nzer_Ruhuh_Ntwar_Ndam_Rus_Ruhen_Muk_Myand_Nyak_Git_Muny_Kig".split("_"), weekStart: 1, ordinal: function(e) {
      return e;
    }, relativeTime: { future: "mu %s", past: "%s", s: "amasegonda", m: "Umunota", mm: "%d iminota", h: "isaha", hh: "%d amasaha", d: "Umunsi", dd: "%d iminsi", M: "ukwezi", MM: "%d amezi", y: "umwaka", yy: "%d imyaka" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(a, null, !0), a;
  });
})(Jo);
var Bo = Jo.exports, Af = /* @__PURE__ */ g(Bo), Pf = /* @__PURE__ */ k({
  __proto__: null,
  default: Af
}, [Bo]), Wo = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ro", weekdays: "Duminică_Luni_Marți_Miercuri_Joi_Vineri_Sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), months: "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"), monthsShort: "Ian._Febr._Mart._Apr._Mai_Iun._Iul._Aug._Sept._Oct._Nov._Dec.".split("_"), weekStart: 1, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, relativeTime: { future: "peste %s", past: "acum %s", s: "câteva secunde", m: "un minut", mm: "%d minute", h: "o oră", hh: "%d ore", d: "o zi", dd: "%d zile", M: "o lună", MM: "%d luni", y: "un an", yy: "%d ani" }, ordinal: function(e) {
      return e;
    } };
    return s.default.locale(a, null, !0), a;
  });
})(Wo);
var Ko = Wo.exports, Of = /* @__PURE__ */ g(Ko), Rf = /* @__PURE__ */ k({
  __proto__: null,
  default: Of
}, [Ko]), Vo = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(v) {
      return v && typeof v == "object" && "default" in v ? v : { default: v };
    }
    var s = t(n), a = "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), e = "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), i = "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), l = "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_"), u = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function c(v, M, w) {
      var L, $;
      return w === "m" ? M ? "минута" : "минуту" : v + " " + (L = +v, $ = { mm: M ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }[w].split("_"), L % 10 == 1 && L % 100 != 11 ? $[0] : L % 10 >= 2 && L % 10 <= 4 && (L % 100 < 10 || L % 100 >= 20) ? $[1] : $[2]);
    }
    var d = function(v, M) {
      return u.test(M) ? a[v.month()] : e[v.month()];
    };
    d.s = e, d.f = a;
    var m = function(v, M) {
      return u.test(M) ? i[v.month()] : l[v.month()];
    };
    m.s = l, m.f = i;
    var y = { name: "ru", weekdays: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), weekdaysShort: "вск_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), months: d, monthsShort: m, weekStart: 1, yearStart: 4, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: c, mm: c, h: "час", hh: c, d: "день", dd: c, M: "месяц", MM: c, y: "год", yy: c }, ordinal: function(v) {
      return v;
    }, meridiem: function(v) {
      return v < 4 ? "ночи" : v < 12 ? "утра" : v < 17 ? "дня" : "вечера";
    } };
    return s.default.locale(y, null, !0), y;
  });
})(Vo);
var qo = Vo.exports, zf = /* @__PURE__ */ g(qo), If = /* @__PURE__ */ k({
  __proto__: null,
  default: zf
}, [qo]), Uo = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "rw", weekdays: "Ku Cyumweru_Kuwa Mbere_Kuwa Kabiri_Kuwa Gatatu_Kuwa Kane_Kuwa Gatanu_Kuwa Gatandatu".split("_"), months: "Mutarama_Gashyantare_Werurwe_Mata_Gicurasi_Kamena_Nyakanga_Kanama_Nzeri_Ukwakira_Ugushyingo_Ukuboza".split("_"), relativeTime: { future: "mu %s", past: "%s", s: "amasegonda", m: "Umunota", mm: "%d iminota", h: "isaha", hh: "%d amasaha", d: "Umunsi", dd: "%d iminsi", M: "ukwezi", MM: "%d amezi", y: "umwaka", yy: "%d imyaka" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, ordinal: function(e) {
      return e;
    } };
    return s.default.locale(a, null, !0), a;
  });
})(Uo);
var Go = Uo.exports, Ff = /* @__PURE__ */ g(Go), Jf = /* @__PURE__ */ k({
  __proto__: null,
  default: Ff
}, [Go]), Zo = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "sd", weekdays: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), months: "جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر".split("_"), weekStart: 1, weekdaysShort: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), monthsShort: "جنوري_فيبروري_مارچ_اپريل_مئي_جون_جولاءِ_آگسٽ_سيپٽمبر_آڪٽوبر_نومبر_ڊسمبر".split("_"), weekdaysMin: "آچر_سومر_اڱارو_اربع_خميس_جمع_ڇنڇر".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, relativeTime: { future: "%s پوء", past: "%s اڳ", s: "چند سيڪنڊ", m: "هڪ منٽ", mm: "%d منٽ", h: "هڪ ڪلاڪ", hh: "%d ڪلاڪ", d: "هڪ ڏينهن", dd: "%d ڏينهن", M: "هڪ مهينو", MM: "%d مهينا", y: "هڪ سال", yy: "%d سال" } };
    return s.default.locale(a, null, !0), a;
  });
})(Zo);
var Xo = Zo.exports, Bf = /* @__PURE__ */ g(Xo), Wf = /* @__PURE__ */ k({
  __proto__: null,
  default: Bf
}, [Xo]), Qo = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "se", weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"), months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"), weekStart: 1, weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"), monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, relativeTime: { future: "%s geažes", past: "maŋit %s", s: "moadde sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta mánnu", MM: "%d mánut", y: "okta jahki", yy: "%d jagit" } };
    return s.default.locale(a, null, !0), a;
  });
})(Qo);
var ei = Qo.exports, Kf = /* @__PURE__ */ g(ei), Vf = /* @__PURE__ */ k({
  __proto__: null,
  default: Kf
}, [ei]), ti = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "si", weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"), months: "දුරුතු_නවම්_මැදින්_බක්_වෙසක්_පොසොන්_ඇසළ_නිකිණි_බිනර_වප්_ඉල්_උඳුවප්".split("_"), weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"), monthsShort: "දුරු_නව_මැදි_බක්_වෙස_පොසො_ඇස_නිකි_බින_වප්_ඉල්_උඳු".split("_"), weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss" }, relativeTime: { future: "%sකින්", past: "%sකට පෙර", s: "තත්පර කිහිපය", m: "විනාඩිය", mm: "විනාඩි %d", h: "පැය", hh: "පැය %d", d: "දිනය", dd: "දින %d", M: "මාසය", MM: "මාස %d", y: "වසර", yy: "වසර %d" } };
    return s.default.locale(a, null, !0), a;
  });
})(ti);
var ri = ti.exports, qf = /* @__PURE__ */ g(ri), Uf = /* @__PURE__ */ k({
  __proto__: null,
  default: qf
}, [ri]), ni = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var s = t(n);
    function a(l) {
      return l > 1 && l < 5 && ~~(l / 10) != 1;
    }
    function e(l, u, c, d) {
      var m = l + " ";
      switch (c) {
        case "s":
          return u || d ? "pár sekúnd" : "pár sekundami";
        case "m":
          return u ? "minúta" : d ? "minútu" : "minútou";
        case "mm":
          return u || d ? m + (a(l) ? "minúty" : "minút") : m + "minútami";
        case "h":
          return u ? "hodina" : d ? "hodinu" : "hodinou";
        case "hh":
          return u || d ? m + (a(l) ? "hodiny" : "hodín") : m + "hodinami";
        case "d":
          return u || d ? "deň" : "dňom";
        case "dd":
          return u || d ? m + (a(l) ? "dni" : "dní") : m + "dňami";
        case "M":
          return u || d ? "mesiac" : "mesiacom";
        case "MM":
          return u || d ? m + (a(l) ? "mesiace" : "mesiacov") : m + "mesiacmi";
        case "y":
          return u || d ? "rok" : "rokom";
        case "yy":
          return u || d ? m + (a(l) ? "roky" : "rokov") : m + "rokmi";
      }
    }
    var i = { name: "sk", weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), months: "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"), monthsShort: "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(l) {
      return l + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, relativeTime: { future: "za %s", past: "pred %s", s: e, m: e, mm: e, h: e, hh: e, d: e, dd: e, M: e, MM: e, y: e, yy: e } };
    return s.default.locale(i, null, !0), i;
  });
})(ni);
var ai = ni.exports, Gf = /* @__PURE__ */ g(ai), Zf = /* @__PURE__ */ k({
  __proto__: null,
  default: Gf
}, [ai]), si = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "sl", weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), weekStart: 1, weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), ordinal: function(e) {
      return e + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, relativeTime: { future: "čez %s", past: "pred %s", s: "nekaj sekund", m: "minuta", mm: "%d minut", h: "ura", hh: "%d ur", d: "dan", dd: "%d dni", M: "mesec", MM: "%d mesecev", y: "leto", yy: "%d let" } };
    return s.default.locale(a, null, !0), a;
  });
})(si);
var oi = si.exports, Xf = /* @__PURE__ */ g(oi), Qf = /* @__PURE__ */ k({
  __proto__: null,
  default: Xf
}, [oi]), ii = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "sq", weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), weekStart: 1, weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" } };
    return s.default.locale(a, null, !0), a;
  });
})(ii);
var li = ii.exports, ep = /* @__PURE__ */ g(li), tp = /* @__PURE__ */ k({
  __proto__: null,
  default: ep
}, [li]), ui = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var s = t(n), a = { words: { m: ["jedan minut", "jednog minuta"], mm: ["%d minut", "%d minuta", "%d minuta"], h: ["jedan sat", "jednog sata"], hh: ["%d sat", "%d sata", "%d sati"], d: ["jedan dan", "jednog dana"], dd: ["%d dan", "%d dana", "%d dana"], M: ["jedan mesec", "jednog meseca"], MM: ["%d mesec", "%d meseca", "%d meseci"], y: ["jednu godinu", "jedne godine"], yy: ["%d godinu", "%d godine", "%d godina"] }, correctGrammarCase: function(i, l) {
      return i % 10 >= 1 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20) ? i % 10 == 1 ? l[0] : l[1] : l[2];
    }, relativeTimeFormatter: function(i, l, u, c) {
      var d = a.words[u];
      if (u.length === 1)
        return u === "y" && l ? "jedna godina" : c || l ? d[0] : d[1];
      var m = a.correctGrammarCase(i, d);
      return u === "yy" && l && m === "%d godinu" ? i + " godina" : m.replace("%d", i);
    } }, e = { name: "sr", weekdays: "Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"), weekdaysShort: "Ned._Pon._Uto._Sre._Čet._Pet._Sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), months: "Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"), monthsShort: "Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"), weekStart: 1, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: a.relativeTimeFormatter, mm: a.relativeTimeFormatter, h: a.relativeTimeFormatter, hh: a.relativeTimeFormatter, d: a.relativeTimeFormatter, dd: a.relativeTimeFormatter, M: a.relativeTimeFormatter, MM: a.relativeTimeFormatter, y: a.relativeTimeFormatter, yy: a.relativeTimeFormatter }, ordinal: function(i) {
      return i + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D. M. YYYY.", LL: "D. MMMM YYYY.", LLL: "D. MMMM YYYY. H:mm", LLLL: "dddd, D. MMMM YYYY. H:mm" } };
    return s.default.locale(e, null, !0), e;
  });
})(ui);
var _i = ui.exports, rp = /* @__PURE__ */ g(_i), np = /* @__PURE__ */ k({
  __proto__: null,
  default: rp
}, [_i]), di = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(i) {
      return i && typeof i == "object" && "default" in i ? i : { default: i };
    }
    var s = t(n), a = { words: { m: ["један минут", "једног минута"], mm: ["%d минут", "%d минута", "%d минута"], h: ["један сат", "једног сата"], hh: ["%d сат", "%d сата", "%d сати"], d: ["један дан", "једног дана"], dd: ["%d дан", "%d дана", "%d дана"], M: ["један месец", "једног месеца"], MM: ["%d месец", "%d месеца", "%d месеци"], y: ["једну годину", "једне године"], yy: ["%d годину", "%d године", "%d година"] }, correctGrammarCase: function(i, l) {
      return i % 10 >= 1 && i % 10 <= 4 && (i % 100 < 10 || i % 100 >= 20) ? i % 10 == 1 ? l[0] : l[1] : l[2];
    }, relativeTimeFormatter: function(i, l, u, c) {
      var d = a.words[u];
      if (u.length === 1)
        return u === "y" && l ? "једна година" : c || l ? d[0] : d[1];
      var m = a.correctGrammarCase(i, d);
      return u === "yy" && l && m === "%d годину" ? i + " година" : m.replace("%d", i);
    } }, e = { name: "sr-cyrl", weekdays: "Недеља_Понедељак_Уторак_Среда_Четвртак_Петак_Субота".split("_"), weekdaysShort: "Нед._Пон._Уто._Сре._Чет._Пет._Суб.".split("_"), weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"), months: "Јануар_Фебруар_Март_Април_Мај_Јун_Јул_Август_Септембар_Октобар_Новембар_Децембар".split("_"), monthsShort: "Јан._Феб._Мар._Апр._Мај_Јун_Јул_Авг._Сеп._Окт._Нов._Дец.".split("_"), weekStart: 1, relativeTime: { future: "за %s", past: "пре %s", s: "неколико секунди", m: a.relativeTimeFormatter, mm: a.relativeTimeFormatter, h: a.relativeTimeFormatter, hh: a.relativeTimeFormatter, d: a.relativeTimeFormatter, dd: a.relativeTimeFormatter, M: a.relativeTimeFormatter, MM: a.relativeTimeFormatter, y: a.relativeTimeFormatter, yy: a.relativeTimeFormatter }, ordinal: function(i) {
      return i + ".";
    }, formats: { LT: "H:mm", LTS: "H:mm:ss", L: "D. M. YYYY.", LL: "D. MMMM YYYY.", LLL: "D. MMMM YYYY. H:mm", LLLL: "dddd, D. MMMM YYYY. H:mm" } };
    return s.default.locale(e, null, !0), e;
  });
})(di);
var ci = di.exports, ap = /* @__PURE__ */ g(ci), sp = /* @__PURE__ */ k({
  __proto__: null,
  default: ap
}, [ci]), mi = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ss", weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), weekStart: 1, weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" } };
    return s.default.locale(a, null, !0), a;
  });
})(mi);
var fi = mi.exports, op = /* @__PURE__ */ g(fi), ip = /* @__PURE__ */ k({
  __proto__: null,
  default: op
}, [fi]), pi = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "sv-fi", weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e) {
      var i = e % 10;
      return "[" + e + (i === 1 || i === 2 ? "a" : "e") + "]";
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY, [kl.] HH.mm", LLLL: "dddd, D. MMMM YYYY, [kl.] HH.mm", l: "D.M.YYYY", ll: "D. MMM YYYY", lll: "D. MMM YYYY, [kl.] HH.mm", llll: "ddd, D. MMM YYYY, [kl.] HH.mm" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" } };
    return s.default.locale(a, null, !0), a;
  });
})(pi);
var hi = pi.exports, lp = /* @__PURE__ */ g(hi), up = /* @__PURE__ */ k({
  __proto__: null,
  default: lp
}, [hi]), Mi = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "sv", weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekStart: 1, yearStart: 4, ordinal: function(e) {
      var i = e % 10;
      return "[" + e + (i === 1 || i === 2 ? "a" : "e") + "]";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" } };
    return s.default.locale(a, null, !0), a;
  });
})(Mi);
var vi = Mi.exports, _p = /* @__PURE__ */ g(vi), dp = /* @__PURE__ */ k({
  __proto__: null,
  default: _p
}, [vi]), yi = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "sw", weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekStart: 1, ordinal: function(e) {
      return e;
    }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(a, null, !0), a;
  });
})(yi);
var Yi = yi.exports, cp = /* @__PURE__ */ g(Yi), mp = /* @__PURE__ */ k({
  __proto__: null,
  default: cp
}, [Yi]), bi = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ta", weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" } };
    return s.default.locale(a, null, !0), a;
  });
})(bi);
var gi = bi.exports, fp = /* @__PURE__ */ g(gi), pp = /* @__PURE__ */ k({
  __proto__: null,
  default: fp
}, [gi]), Li = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "te", weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"), months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"), weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"), monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"), weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, relativeTime: { future: "%s లో", past: "%s క్రితం", s: "కొన్ని క్షణాలు", m: "ఒక నిమిషం", mm: "%d నిమిషాలు", h: "ఒక గంట", hh: "%d గంటలు", d: "ఒక రోజు", dd: "%d రోజులు", M: "ఒక నెల", MM: "%d నెలలు", y: "ఒక సంవత్సరం", yy: "%d సంవత్సరాలు" } };
    return s.default.locale(a, null, !0), a;
  });
})(Li);
var xi = Li.exports, hp = /* @__PURE__ */ g(xi), Mp = /* @__PURE__ */ k({
  __proto__: null,
  default: hp
}, [xi]), ki = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "tg", weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"), months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), weekStart: 1, weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "баъди %s", past: "%s пеш", s: "якчанд сония", m: "як дақиқа", mm: "%d дақиқа", h: "як соат", hh: "%d соат", d: "як рӯз", dd: "%d рӯз", M: "як моҳ", MM: "%d моҳ", y: "як сол", yy: "%d сол" } };
    return s.default.locale(a, null, !0), a;
  });
})(ki);
var wi = ki.exports, vp = /* @__PURE__ */ g(wi), yp = /* @__PURE__ */ k({
  __proto__: null,
  default: vp
}, [wi]), Di = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "th", weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"), formats: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา H:mm", LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" }, ordinal: function(e) {
      return e + ".";
    } };
    return s.default.locale(a, null, !0), a;
  });
})(Di);
var Si = Di.exports, Yp = /* @__PURE__ */ g(Si), bp = /* @__PURE__ */ k({
  __proto__: null,
  default: Yp
}, [Si]), ji = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "tk", weekdays: "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split("_"), weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"), weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"), months: "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split("_"), monthsShort: "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"), weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s soň", past: "%s öň", s: "birnäçe sekunt", m: "bir minut", mm: "%d minut", h: "bir sagat", hh: "%d sagat", d: "bir gün", dd: "%d gün", M: "bir aý", MM: "%d aý", y: "bir ýyl", yy: "%d ýyl" }, ordinal: function(e) {
      return e + ".";
    } };
    return s.default.locale(a, null, !0), a;
  });
})(ji);
var Hi = ji.exports, gp = /* @__PURE__ */ g(Hi), Lp = /* @__PURE__ */ k({
  __proto__: null,
  default: gp
}, [Hi]), Ti = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "tl-ph", weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), weekStart: 1, weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" } };
    return s.default.locale(a, null, !0), a;
  });
})(Ti);
var Ei = Ti.exports, xp = /* @__PURE__ */ g(Ei), kp = /* @__PURE__ */ k({
  __proto__: null,
  default: xp
}, [Ei]), Ni = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "tlh", weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"), weekStart: 1, weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return s.default.locale(a, null, !0), a;
  });
})(Ni);
var $i = Ni.exports, wp = /* @__PURE__ */ g($i), Dp = /* @__PURE__ */ k({
  __proto__: null,
  default: wp
}, [$i]), Ci = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "tr", weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekStart: 1, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, ordinal: function(e) {
      return e + ".";
    } };
    return s.default.locale(a, null, !0), a;
  });
})(Ci);
var Ai = Ci.exports, Sp = /* @__PURE__ */ g(Ai), jp = /* @__PURE__ */ k({
  __proto__: null,
  default: Sp
}, [Ai]), Pi = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "tzl", weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"), months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"), weekStart: 1, weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" } };
    return s.default.locale(a, null, !0), a;
  });
})(Pi);
var Oi = Pi.exports, Hp = /* @__PURE__ */ g(Oi), Tp = /* @__PURE__ */ k({
  __proto__: null,
  default: Hp
}, [Oi]), Ri = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "tzm-latn", weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekStart: 6, weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" } };
    return s.default.locale(a, null, !0), a;
  });
})(Ri);
var zi = Ri.exports, Ep = /* @__PURE__ */ g(zi), Np = /* @__PURE__ */ k({
  __proto__: null,
  default: Ep
}, [zi]), Ii = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "tzm", weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekStart: 6, weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, relativeTime: { future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s", past: "ⵢⴰⵏ %s", s: "ⵉⵎⵉⴽ", m: "ⵎⵉⵏⵓⴺ", mm: "%d ⵎⵉⵏⵓⴺ", h: "ⵙⴰⵄⴰ", hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ", d: "ⴰⵙⵙ", dd: "%d oⵙⵙⴰⵏ", M: "ⴰⵢoⵓⵔ", MM: "%d ⵉⵢⵢⵉⵔⵏ", y: "ⴰⵙⴳⴰⵙ", yy: "%d ⵉⵙⴳⴰⵙⵏ" } };
    return s.default.locale(a, null, !0), a;
  });
})(Ii);
var Fi = Ii.exports, $p = /* @__PURE__ */ g(Fi), Cp = /* @__PURE__ */ k({
  __proto__: null,
  default: $p
}, [Fi]), Ji = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ug-cn", weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"), months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"), weekStart: 1, weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"), monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"), weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY-يىلىM-ئاينىڭD-كۈنى", LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm", LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm" }, relativeTime: { future: "%s كېيىن", past: "%s بۇرۇن", s: "نەچچە سېكونت", m: "بىر مىنۇت", mm: "%d مىنۇت", h: "بىر سائەت", hh: "%d سائەت", d: "بىر كۈن", dd: "%d كۈن", M: "بىر ئاي", MM: "%d ئاي", y: "بىر يىل", yy: "%d يىل" } };
    return s.default.locale(a, null, !0), a;
  });
})(Ji);
var Bi = Ji.exports, Ap = /* @__PURE__ */ g(Bi), Pp = /* @__PURE__ */ k({
  __proto__: null,
  default: Ap
}, [Bi]), Wi = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(d) {
      return d && typeof d == "object" && "default" in d ? d : { default: d };
    }
    var s = t(n), a = "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"), e = "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"), i = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;
    function l(d, m, y) {
      var v, M;
      return y === "m" ? m ? "хвилина" : "хвилину" : y === "h" ? m ? "година" : "годину" : d + " " + (v = +d, M = { ss: m ? "секунда_секунди_секунд" : "секунду_секунди_секунд", mm: m ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин", hh: m ? "година_години_годин" : "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" }[y].split("_"), v % 10 == 1 && v % 100 != 11 ? M[0] : v % 10 >= 2 && v % 10 <= 4 && (v % 100 < 10 || v % 100 >= 20) ? M[1] : M[2]);
    }
    var u = function(d, m) {
      return i.test(m) ? a[d.month()] : e[d.month()];
    };
    u.s = e, u.f = a;
    var c = { name: "uk", weekdays: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), weekdaysShort: "ндл_пнд_втр_срд_чтв_птн_сбт".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), months: u, monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"), weekStart: 1, relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", m: l, mm: l, h: l, hh: l, d: "день", dd: l, M: "місяць", MM: l, y: "рік", yy: l }, ordinal: function(d) {
      return d;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., HH:mm", LLLL: "dddd, D MMMM YYYY р., HH:mm" } };
    return s.default.locale(c, null, !0), c;
  });
})(Wi);
var Ki = Wi.exports, Op = /* @__PURE__ */ g(Ki), Rp = /* @__PURE__ */ k({
  __proto__: null,
  default: Op
}, [Ki]), Vi = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "ur", weekdays: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"), months: "جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"), weekStart: 1, weekdaysShort: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"), monthsShort: "جنوری_فروری_مارچ_اپریل_مئی_جون_جولائی_اگست_ستمبر_اکتوبر_نومبر_دسمبر".split("_"), weekdaysMin: "اتوار_پیر_منگل_بدھ_جمعرات_جمعہ_ہفتہ".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, relativeTime: { future: "%s بعد", past: "%s قبل", s: "چند سیکنڈ", m: "ایک منٹ", mm: "%d منٹ", h: "ایک گھنٹہ", hh: "%d گھنٹے", d: "ایک دن", dd: "%d دن", M: "ایک ماہ", MM: "%d ماہ", y: "ایک سال", yy: "%d سال" } };
    return s.default.locale(a, null, !0), a;
  });
})(Vi);
var qi = Vi.exports, zp = /* @__PURE__ */ g(qi), Ip = /* @__PURE__ */ k({
  __proto__: null,
  default: zp
}, [qi]), Ui = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "uz-latn", weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), weekStart: 1, weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" } };
    return s.default.locale(a, null, !0), a;
  });
})(Ui);
var Gi = Ui.exports, Fp = /* @__PURE__ */ g(Gi), Jp = /* @__PURE__ */ k({
  __proto__: null,
  default: Fp
}, [Gi]), Zi = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "uz", weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), weekStart: 1, weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, relativeTime: { future: "Якин %s ичида", past: "Бир неча %s олдин", s: "фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" } };
    return s.default.locale(a, null, !0), a;
  });
})(Zi);
var Xi = Zi.exports, Bp = /* @__PURE__ */ g(Xi), Wp = /* @__PURE__ */ k({
  __proto__: null,
  default: Bp
}, [Xi]), Qi = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "vi", weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), weekStart: 1, weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" } };
    return s.default.locale(a, null, !0), a;
  });
})(Qi);
var el = Qi.exports, Kp = /* @__PURE__ */ g(el), Vp = /* @__PURE__ */ k({
  __proto__: null,
  default: Kp
}, [el]), tl = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "x-pseudo", weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"), months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"), weekStart: 1, weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"), monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"), weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, relativeTime: { future: "í~ñ %s", past: "%s á~gó", s: "á ~féw ~sécó~ñds", m: "á ~míñ~úté", mm: "%d m~íñú~tés", h: "á~ñ hó~úr", hh: "%d h~óúrs", d: "á ~dáý", dd: "%d d~áýs", M: "á ~móñ~th", MM: "%d m~óñt~hs", y: "á ~ýéár", yy: "%d ý~éárs" } };
    return s.default.locale(a, null, !0), a;
  });
})(tl);
var rl = tl.exports, qp = /* @__PURE__ */ g(rl), Up = /* @__PURE__ */ k({
  __proto__: null,
  default: qp
}, [rl]), nl = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "yo", weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"), months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"), weekStart: 1, weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"), monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"), weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"), ordinal: function(e) {
      return e;
    }, formats: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, relativeTime: { future: "ní %s", past: "%s kọjá", s: "ìsẹjú aayá die", m: "ìsẹjú kan", mm: "ìsẹjú %d", h: "wákati kan", hh: "wákati %d", d: "ọjọ́ kan", dd: "ọjọ́ %d", M: "osù kan", MM: "osù %d", y: "ọdún kan", yy: "ọdún %d" } };
    return s.default.locale(a, null, !0), a;
  });
})(nl);
var al = nl.exports, Gp = /* @__PURE__ */ g(al), Zp = /* @__PURE__ */ k({
  __proto__: null,
  default: Gp
}, [al]), sl = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "zh-cn", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(e, i) {
      return i === "W" ? e + "周" : e + "日";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function(e, i) {
      var l = 100 * e + i;
      return l < 600 ? "凌晨" : l < 900 ? "早上" : l < 1100 ? "上午" : l < 1300 ? "中午" : l < 1800 ? "下午" : "晚上";
    } };
    return s.default.locale(a, null, !0), a;
  });
})(sl);
var ol = sl.exports, Xp = /* @__PURE__ */ g(ol), Qp = /* @__PURE__ */ k({
  __proto__: null,
  default: Xp
}, [ol]), il = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "zh-hk", months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), ordinal: function(e, i) {
      return i === "W" ? e + "週" : e + "日";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "一分鐘", mm: "%d 分鐘", h: "一小時", hh: "%d 小時", d: "一天", dd: "%d 天", M: "一個月", MM: "%d 個月", y: "一年", yy: "%d 年" } };
    return s.default.locale(a, null, !0), a;
  });
})(il);
var ll = il.exports, eh = /* @__PURE__ */ g(ll), th = /* @__PURE__ */ k({
  __proto__: null,
  default: eh
}, [ll]), ul = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "zh-tw", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(e, i) {
      return i === "W" ? e + "週" : e + "日";
    }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" }, meridiem: function(e, i) {
      var l = 100 * e + i;
      return l < 600 ? "凌晨" : l < 900 ? "早上" : l < 1100 ? "上午" : l < 1300 ? "中午" : l < 1800 ? "下午" : "晚上";
    } };
    return s.default.locale(a, null, !0), a;
  });
})(ul);
var _l = ul.exports, rh = /* @__PURE__ */ g(_l), nh = /* @__PURE__ */ k({
  __proto__: null,
  default: rh
}, [_l]), dl = { exports: {} };
(function(r, o) {
  (function(n, t) {
    r.exports = t(f);
  })(b, function(n) {
    function t(e) {
      return e && typeof e == "object" && "default" in e ? e : { default: e };
    }
    var s = t(n), a = { name: "zh", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(e, i) {
      return i === "W" ? e + "周" : e + "日";
    }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s后", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function(e, i) {
      var l = 100 * e + i;
      return l < 600 ? "凌晨" : l < 900 ? "早上" : l < 1100 ? "上午" : l < 1300 ? "中午" : l < 1800 ? "下午" : "晚上";
    } };
    return s.default.locale(a, null, !0), a;
  });
})(dl);
var cl = dl.exports, ah = /* @__PURE__ */ g(cl), sh = /* @__PURE__ */ k({
  __proto__: null,
  default: ah
}, [cl]);
const oh = (r) => {
  const { value: o, error: n, inputClassName: t, toggleClassName: s, popoverDirection: a = "down", className: e, onValueChange: i, onChange: l, ...u } = r, c = (d, m) => {
    l == null || l(d, m);
    const y = (d == null ? void 0 : d.startDate) && new Date(d.startDate), v = (d == null ? void 0 : d.endDate) && new Date(d.endDate), M = y || v || null;
    i == null || i(M);
  };
  return /* @__PURE__ */ _.jsx(
    cn,
    {
      asSingle: !0,
      useRange: !1,
      containerClassName: W("relative w-full", e),
      inputClassName: W(
        "block h-10 w-full rounded-lg border px-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none",
        n ? "border-error-600 bg-error-50 focus:bg-white" : "border-gray-300 bg-white focus:border-primary-600",
        u.disabled && "bg-gray-100",
        t
      ),
      toggleClassName: W("absolute bottom-0 right-0 top-0 flex items-center justify-center px-2 text-gray-400", s),
      toggleIcon: (d) => d ? /* @__PURE__ */ _.jsx(Br, { size: 16 }) : /* @__PURE__ */ _.jsx(it, { size: 18 }),
      popoverDirection: a,
      value: { startDate: o || null, endDate: o || null },
      onChange: c,
      ...u
    }
  );
}, ih = (r) => {
  const { value: o, error: n, inputClassName: t, toggleClassName: s, popoverDirection: a = "down", className: e, onValueChange: i, onChange: l, ...u } = r, c = (d, m) => {
    l == null || l(d, m);
    const y = (d == null ? void 0 : d.startDate) && new Date(d.startDate), v = (d == null ? void 0 : d.endDate) && new Date(d.endDate);
    y && v ? i == null || i({ startDate: y, endDate: v }) : i == null || i(void 0);
  };
  return /* @__PURE__ */ _.jsx(
    cn,
    {
      containerClassName: W("relative w-full", e),
      inputClassName: W(
        "block h-10 w-full rounded-lg border px-2 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none",
        n ? "border-error-600 bg-error-50 focus:bg-white" : "border-gray-300 bg-white focus:border-primary-600",
        u.disabled && "bg-gray-100",
        t
      ),
      toggleClassName: W("absolute bottom-0 right-0 top-0 flex items-center justify-center px-2 text-gray-400", s),
      toggleIcon: (d) => d ? /* @__PURE__ */ _.jsx(Br, { size: 16 }) : /* @__PURE__ */ _.jsx(it, { size: 18 }),
      popoverDirection: a,
      value: o || { startDate: null, endDate: null },
      onChange: c,
      ...u
    }
  );
}, Vh = (r) => {
  const { id: o, name: n, label: t, labelRequired: s, error: a, className: e, wrapperClassName: i, ...l } = r, u = { label: t, labelRequired: s, error: a, className: e };
  return /* @__PURE__ */ _.jsx(Pe, { htmlFor: o || n, wrapperClassName: W("relative mb-1", i), ...u, children: /* @__PURE__ */ _.jsx(oh, { inputId: o || n, inputName: n, error: a, ...l }) });
}, qh = (r) => {
  const { id: o, name: n, label: t, labelRequired: s, error: a, className: e, wrapperClassName: i, ...l } = r, u = { label: t, labelRequired: s, error: a, className: e };
  return /* @__PURE__ */ _.jsx(Pe, { htmlFor: o || n, wrapperClassName: W("relative mb-1", i), ...u, children: /* @__PURE__ */ _.jsx(ih, { inputId: o || n, inputName: n, error: a, ...l }) });
}, ml = le((r, o) => {
  const { error: n, placeholder: t, id: s, name: a, className: e, toggleText: i, onChange: l, ...u } = r, [c, d] = ae(null), m = (y) => {
    const v = y.target.files;
    d(v), l == null || l(y);
  };
  return /* @__PURE__ */ _.jsxs(
    "label",
    {
      htmlFor: s || a,
      className: W(
        "relative flex h-10 w-full items-center gap-2 rounded-lg border px-2 text-sm text-gray-700 focus:outline-none disabled:bg-gray-50",
        !c && "text-gray-400",
        n ? "border-error-600 bg-error-50 focus:bg-white" : "border-gray-300 bg-white focus:border-primary-600",
        e
      ),
      children: [
        /* @__PURE__ */ _.jsx("span", { className: xe("flex h-full items-center border-r pr-2 text-gray-700 ", n ? "border-error-600" : "border-gray-300"), children: i || "Choose File" }),
        /* @__PURE__ */ _.jsx("span", { className: "flex items-center", children: c && (c == null ? void 0 : c.length) > 0 ? Array.from(c).map((y) => y.name).join(", ") : t || "No file chosen" }),
        /* @__PURE__ */ _.jsx(
          "input",
          {
            "aria-hidden": "true",
            ref: o,
            id: s || a,
            name: a,
            type: "file",
            className: "absolute inset-0 opacity-0",
            onChange: m,
            ...u
          }
        )
      ]
    }
  );
});
ml.displayName = "BaseInputFile";
const lh = le((r, o) => {
  const { error: n, placeholder: t, className: s, onChange: a, children: e, ...i } = r, [l, u] = ae(null), c = (d) => {
    const m = d.target.files;
    u(m), a == null || a(d);
  };
  return /* @__PURE__ */ _.jsxs(
    "label",
    {
      className: W(
        "relative flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed",
        n ? "border-error-600 bg-error-50" : "border-gray-300 bg-gray-50",
        s
      ),
      children: [
        /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col items-center justify-center pb-6 pt-5", children: [
          /* @__PURE__ */ _.jsx(Bl, { className: "mb-4 h-8 w-8 text-gray-500" }),
          /* @__PURE__ */ _.jsx("p", { className: "mb-2 text-sm text-gray-500", children: e || /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
            /* @__PURE__ */ _.jsx("span", { className: "font-semibold", children: "Click to upload" }),
            " or drag and drop"
          ] }) }),
          Array.from(l || []).length == 0 && t && /* @__PURE__ */ _.jsx("p", { className: "text-xs text-gray-500", children: t }),
          l && Array.from(l).length > 0 && /* @__PURE__ */ _.jsx("p", { className: "flex flex-wrap justify-center gap-1 px-3 text-center text-xs", children: Array.from(l).map((d, m) => /* @__PURE__ */ _.jsx(bt, { size: "small", className: "flex border", children: d.name }, m)) })
        ] }),
        /* @__PURE__ */ _.jsx("input", { "aria-hidden": "true", ref: o, type: "file", className: "absolute inset-0 opacity-0", onChange: c, ...i })
      ]
    }
  );
});
lh.displayName = "Dropzone";
const uh = le((r, o) => {
  const { id: n, name: t, label: s, labelRequired: a, error: e, className: i, inputClassName: l, wrapperClassName: u, ...c } = r, d = { label: s, labelRequired: a, error: e, className: i };
  return /* @__PURE__ */ _.jsx(Pe, { htmlFor: n || t, wrapperClassName: W("relative mb-1", u), ...d, children: /* @__PURE__ */ _.jsx(ml, { ref: o, id: n || t, name: t, error: e, className: l, ...c }) });
});
uh.displayName = "InputFile";
const fl = le(({ value: r, onValueChange: o, ...n }, t) => {
  const [s, a] = ae(0), [e, i] = ae(0), l = () => {
    s >= 24 ? a(0) : s < 0 && a(23), e >= 60 ? i(0) : e < 0 && i(59);
  }, u = (w) => isNaN(w) ? "00" : w.toString().padStart(2, "0"), c = (w) => {
    const L = parseInt(w.target.value);
    a(isNaN(L) ? 0 : L);
  }, d = (w) => {
    const L = parseInt(w.target.value);
    i(isNaN(L) ? 0 : L);
  }, m = () => a((s + 1) % 24), y = () => a(s === 0 ? 23 : s - 1), v = () => {
    const w = (e + 1) % 60;
    i(w), w === 0 && m();
  }, M = () => {
    const w = e === 0 ? 59 : e - 1;
    i(w), w === 59 && y();
  };
  return ve(() => {
    o == null || o(u(s) + ":" + u(e));
  }, [s, e]), ve(() => {
    const [w, L] = (r || "0:0").toString().split(":");
    a(isNaN(parseInt(w)) ? 0 : parseInt(w)), i(isNaN(parseInt(L)) ? 0 : parseInt(L));
  }, [r]), /* @__PURE__ */ _.jsxs(St, { as: "div", className: "relative", children: [
    /* @__PURE__ */ _.jsx(St.Button, { as: gt, ref: t, type: "text", value: r, ...n, readOnly: !0 }),
    /* @__PURE__ */ _.jsx(
      Re,
      {
        as: Je,
        leave: "transition ease-in",
        enterFrom: "opacity-0",
        enterTo: "opacity-100",
        leaveFrom: "opacity-100",
        leaveTo: "opacity-0",
        children: /* @__PURE__ */ _.jsxs(St.Items, { className: "absolute left-0 right-0 z-20  mt-px flex w-full overflow-hidden rounded-lg border bg-white p-1 shadow-lg outline-none", children: [
          /* @__PURE__ */ _.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center gap-1", children: [
            /* @__PURE__ */ _.jsx(
              "button",
              {
                type: "button",
                className: "flex w-full max-w-32 items-center justify-center rounded-lg py-1 text-gray-500 hover:bg-gray-100",
                onClick: m,
                children: /* @__PURE__ */ _.jsx(dr, { size: 14 })
              }
            ),
            /* @__PURE__ */ _.jsx("div", { children: /* @__PURE__ */ _.jsx(
              "input",
              {
                type: "text",
                className: "block w-full max-w-32 rounded-lg p-1 text-center text-lg outline-none focus:bg-gray-100",
                value: u(s),
                onChange: c,
                onBlur: l
              }
            ) }),
            /* @__PURE__ */ _.jsx(
              "button",
              {
                type: "button",
                className: "flex w-full max-w-32 items-center justify-center rounded-lg py-1 text-gray-500 hover:bg-gray-100",
                onClick: y,
                children: /* @__PURE__ */ _.jsx(cr, { size: 14 })
              }
            )
          ] }),
          /* @__PURE__ */ _.jsx("span", { className: "flex items-center justify-center text-2xl leading-none", children: ":" }),
          /* @__PURE__ */ _.jsxs("div", { className: "flex flex-1 flex-col items-center justify-center gap-1", children: [
            /* @__PURE__ */ _.jsx(
              "button",
              {
                type: "button",
                className: "flex w-full max-w-32 items-center justify-center rounded-lg py-1 text-gray-500 hover:bg-gray-100",
                onClick: v,
                children: /* @__PURE__ */ _.jsx(dr, { size: 14 })
              }
            ),
            /* @__PURE__ */ _.jsx("div", { children: /* @__PURE__ */ _.jsx(
              "input",
              {
                type: "text",
                className: "block w-full max-w-32 rounded-lg p-1 text-center text-lg outline-none focus:bg-gray-100",
                value: u(e),
                onChange: d,
                onBlur: l
              }
            ) }),
            /* @__PURE__ */ _.jsx(
              "button",
              {
                type: "button",
                className: "flex w-full max-w-32 items-center justify-center rounded-lg py-1 text-gray-500 hover:bg-gray-100",
                onClick: M,
                children: /* @__PURE__ */ _.jsx(cr, { size: 14 })
              }
            )
          ] })
        ] })
      }
    )
  ] });
});
fl.displayName = "BaseInputTime";
const _h = le((r, o) => {
  const { id: n, name: t, help: s, label: a, labelRequired: e, error: i, className: l, inputClassName: u, leftChild: c, rightChild: d, ...m } = r, y = { label: a, labelRequired: e, error: i, className: l, help: s };
  return /* @__PURE__ */ _.jsxs(Pe, { htmlFor: n || t, wrapperClassName: "relative mb-1", ...y, children: [
    c,
    /* @__PURE__ */ _.jsx(fl, { ref: o, id: n || t, name: t, error: i, className: u, ...m }),
    d
  ] });
});
_h.displayName = "InputTime";
const Uh = ({
  children: r,
  className: o,
  show: n,
  spinnerClassName: t,
  spinnerSize: s = 40,
  strokeWidth: a = 1.5
}) => n ? /* @__PURE__ */ _.jsxs("div", { className: W("flex flex-col items-center justify-center py-48", o), children: [
  /* @__PURE__ */ _.jsx(
    pt,
    {
      className: W("text-primary-600", t),
      height: s,
      strokeWidth: a,
      width: s
    }
  ),
  r
] }) : null, pl = yt({
  subscribe: () => () => {
  },
  publish: () => {
  }
}), dh = ({ children: r }) => {
  const [o, n] = ae({}), a = { subscribe: (e, i) => (n((l) => ({
    ...l,
    [e]: [...l[e] || [], i]
  })), () => {
    n((l) => {
      var u;
      return {
        ...l,
        [e]: ((u = l[e]) == null ? void 0 : u.filter((c) => c !== i)) || []
      };
    });
  }), publish: (e, i) => {
    (o[e] || []).forEach((u) => u(i));
  } };
  return /* @__PURE__ */ _.jsx(pl.Provider, { value: a, children: r });
}, ch = () => T.useContext(pl), hl = yt({
  data: null,
  confirm: async () => !0
}), mh = ({ children: r }) => {
  const [o, n] = ae(!1), [t, s] = ae(null), a = ch(), e = () => {
    n(!1), a.publish("confirm", !0);
  }, i = () => {
    n(!1), a.publish("confirm", !1);
  }, l = async (u) => (s(typeof u == "string" ? { text: u } : u), n(!0), new Promise((c) => {
    const d = a.subscribe("confirm", (m) => {
      d(), c(m);
    });
  }));
  return /* @__PURE__ */ _.jsxs(
    hl.Provider,
    {
      value: {
        data: t,
        confirm: l
      },
      children: [
        /* @__PURE__ */ _.jsx(Nu, { isShow: o, ...t, onConfirm: e, onCancel: i }),
        r
      ]
    }
  );
}, Gh = () => De(hl).confirm, Ml = T.createContext({
  sidebarOpen: !1,
  sidebarMini: !1,
  sidebarActive: !1,
  toggleSidebarOpen: () => {
  },
  toggleSidebarMini: () => {
  },
  toggleSidebarActive: () => {
  }
}), fh = ({ children: r }) => {
  const [o, n] = ae(!1), [t, s] = ae(!1), [a, e] = Mu("SIDEBAR_MINI", !1), i = (c) => {
    n(typeof c == "boolean" ? c : !o);
  }, l = (c) => {
    e(typeof c == "boolean" ? c : !a), s(!1);
  }, u = (c) => {
    s(typeof c == "boolean" ? c : !t);
  };
  return /* @__PURE__ */ _.jsx(
    Ml.Provider,
    {
      value: {
        sidebarOpen: o,
        sidebarMini: a,
        sidebarActive: t,
        toggleSidebarOpen: i,
        toggleSidebarMini: l,
        toggleSidebarActive: u
      },
      children: r
    }
  );
}, lt = () => De(Ml), tr = yt({
  preview: () => {
  },
  show: !1
}), ph = ({ children: r }) => {
  const [o, n] = ae(!1), [t, s] = ae(null), [a, e] = ae(!1), i = oe((u) => {
    s(u), n(!0), console.log(u);
  }, []);
  ve(() => {
    const u = () => {
      n(!1);
    };
    return window.addEventListener("popstate", u), () => {
      window.removeEventListener("popstate", u);
    };
  }, []);
  const l = () => {
    e(!0);
  };
  return /* @__PURE__ */ _.jsxs(tr.Provider, { value: { preview: i, show: o }, children: [
    /* @__PURE__ */ _.jsxs(
      Ut,
      {
        className: "h-screen w-screen max-w-none rounded-none bg-transparent shadow-none",
        onClose: () => {
          n(!1), e(!1);
        },
        show: o,
        wrapperClassName: "p-0 w-screen h-screen",
        children: [
          (t == null ? void 0 : t.type) === "image" && t.url && /* @__PURE__ */ _.jsx("img", { className: "block h-screen w-screen object-contain", src: t.url }),
          (t == null ? void 0 : t.type) === "video" && t.url && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
            /* @__PURE__ */ _.jsx(
              "video",
              {
                className: xe("block h-screen w-screen object-contain transition-opacity", !a && "pointer-events-none opacity-0"),
                controls: !0,
                autoPlay: !0,
                src: t.url,
                disablePictureInPicture: !0,
                controlsList: "nodownload",
                onPlay: l
              }
            ),
            /* @__PURE__ */ _.jsx(
              "div",
              {
                className: xe(
                  "pointer-events-none absolute inset-0 z-10 flex items-center justify-center transition-opacity",
                  a && "opacity-0"
                ),
                children: /* @__PURE__ */ _.jsx(pt, { strokeWidth: 1, className: "block h-20 w-20 text-primary-600" })
              }
            )
          ] })
        ]
      }
    ),
    r
  ] });
}, Zh = () => {
  const r = De(tr).preview;
  return (o) => {
    o && r({ url: o, type: "image" });
  };
}, Xh = () => {
  const r = De(tr).preview;
  return (o) => {
    o && r({ url: o, type: "video" });
  };
}, vl = T.createContext({
  toasts: [],
  toast: () => {
  }
}), hh = ({ children: r }) => {
  const [o, n] = ae(
    []
  ), t = (e, i) => {
    const { color: l = "primary", position: u = "top-right" } = i || {}, c = { id: Date.now(), color: l, message: e, position: u, createdAt: /* @__PURE__ */ new Date() };
    n((d) => [...d, c]), setTimeout(() => {
      n((d) => d.filter((m) => m.id !== c.id));
    }, 3e3);
  }, s = (e) => {
    n((i) => i.filter((l) => l.id !== e));
  }, a = {
    "top-left": [...o.filter((e) => e.position === "top-left")],
    "top-right": [...o.filter((e) => e.position === "top-right")],
    "top-center": [...o.filter((e) => e.position === "top-center")],
    "bottom-left": [...o.filter((e) => e.position === "bottom-left")],
    "bottom-right": [...o.filter((e) => e.position === "bottom-right")],
    "bottom-center": [...o.filter((e) => e.position === "bottom-center")]
  };
  return /* @__PURE__ */ _.jsxs(
    vl.Provider,
    {
      value: {
        toasts: o,
        toast: t
      },
      children: [
        !!a["top-left"].length && /* @__PURE__ */ _.jsx("div", { className: "fixed left-3 top-3 z-[999999] flex flex-col gap-3", children: a["top-left"].reverse().map((e) => /* @__PURE__ */ _.jsx(et, { color: e.color, handleClose: () => s(e.id), children: e.message }, e.id)) }),
        !!a["top-right"].length && /* @__PURE__ */ _.jsx("div", { className: "fixed right-3 top-3 z-[999999] flex flex-col gap-3", children: a["top-right"].reverse().map((e) => /* @__PURE__ */ _.jsx(et, { color: e.color, handleClose: () => s(e.id), children: e.message }, e.id)) }),
        !!a["top-center"].length && /* @__PURE__ */ _.jsx("div", { className: "fixed left-1/2 top-3 z-[999999] flex -translate-x-1/2 transform flex-col gap-3", children: a["top-center"].reverse().map((e) => /* @__PURE__ */ _.jsx(et, { color: e.color, handleClose: () => s(e.id), children: e.message }, e.id)) }),
        !!a["bottom-left"].length && /* @__PURE__ */ _.jsx("div", { className: "fixed bottom-3 left-3 z-[999999] flex flex-col gap-3", children: a["bottom-left"].map((e) => /* @__PURE__ */ _.jsx(et, { color: e.color, handleClose: () => s(e.id), children: e.message }, e.id)) }),
        !!a["bottom-right"].length && /* @__PURE__ */ _.jsx("div", { className: "fixed bottom-3 right-3 z-[999999] flex flex-col gap-3", children: a["bottom-right"].map((e) => /* @__PURE__ */ _.jsx(et, { color: e.color, handleClose: () => s(e.id), children: e.message }, e.id)) }),
        !!a["bottom-center"].length && /* @__PURE__ */ _.jsx("div", { className: "fixed bottom-3 left-1/2 z-[999999] flex -translate-x-1/2 transform flex-col gap-3", children: a["bottom-center"].map((e) => /* @__PURE__ */ _.jsx(et, { color: e.color, handleClose: () => s(e.id), children: e.message }, e.id)) }),
        r
      ]
    }
  );
}, Qh = () => T.useContext(vl).toast, eM = ({ children: r }) => /* @__PURE__ */ _.jsx(dh, { children: /* @__PURE__ */ _.jsx(ph, { children: /* @__PURE__ */ _.jsx(fh, { children: /* @__PURE__ */ _.jsx(hh, { children: /* @__PURE__ */ _.jsx(mh, { children: r }) }) }) }) }), Mh = ({ children: r, containerClassName: o, distance: n }) => {
  const { sidebarMini: t } = lt(), [s, a] = ae(!1), e = Ee(null), { scrollDirection: i, setScrollDirection: l } = yu(), u = {
    children: r,
    className: o
  };
  return ve(() => {
    const c = () => {
      window.scrollY > n ? a(!0) : a(!1);
    };
    return c(), window.addEventListener("scroll", c), () => {
      window.removeEventListener("scroll", c);
    };
  }, [n]), ve(() => {
    const c = () => {
      e.current !== null && clearTimeout(e.current), e.current = setTimeout(() => {
        l("up");
      }, 500);
    };
    return window.addEventListener("scroll", c), () => {
      window.removeEventListener("scroll", c);
    };
  }, []), /* @__PURE__ */ _.jsx(
    "div",
    {
      className: xe(t ? "lg:pl-16" : "lg:pl-64", "fixed left-0 right-0 top-0 z-30 bg-white p-0 pt-16 transition-all"),
      style: {
        transform: `translateY(${s && i == "up" ? "0" : "-100"}%)`
      },
      children: /* @__PURE__ */ _.jsx(vt, { ...u })
    }
  );
}, tM = ({ body: r, footer: o, header: n }) => {
  const t = Ee(null), [s, a] = ae(0), [e, i] = ae(0), [l, u] = ae(!1);
  ve(() => {
    const d = () => {
      if (t.current) {
        const y = t.current.getBoundingClientRect().top + window.pageYOffset;
        i(y);
      }
    }, m = () => {
      a(window.scrollY);
    };
    return d(), m(), window.addEventListener("scroll", m), window.addEventListener("resize", d), () => {
      window.removeEventListener("resize", d), window.removeEventListener("scroll", m);
    };
  }, []);
  const c = () => {
    u(!l);
  };
  return /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    /* @__PURE__ */ _.jsx(Mh, { containerClassName: "border-b", distance: e - 64, children: /* @__PURE__ */ _.jsx("div", { className: "grid grid-cols-1 rounded-t-lg bg-white", children: typeof n == "function" ? n(l, c) : n }) }),
    /* @__PURE__ */ _.jsxs(qr, { children: [
      /* @__PURE__ */ _.jsx("div", { className: "relative z-10 grid grid-cols-1 rounded-t-lg border-b bg-white", children: typeof n == "function" ? n(l && s < e - 64, c) : n }),
      /* @__PURE__ */ _.jsx(Ur, { className: "overflow-x-auto p-0", ref: t, children: r }),
      /* @__PURE__ */ _.jsx(Gr, { children: o })
    ] })
  ] });
}, yl = le((r, o) => {
  const { as: n = "span", count: t = 1, className: s, ...a } = r;
  return /* @__PURE__ */ _.jsx(_.Fragment, { children: Array.from(Array(t)).map((e, i) => /* @__PURE__ */ _.jsx(n, { ref: o, className: W("flex h-10 overflow-hidden rounded-lg bg-gray-500/30", s), ...a, children: /* @__PURE__ */ _.jsx("span", { className: "flex flex-1 animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-gray-500/30 to-transparent" }) }, i)) });
});
yl.displayName = "Skeleton";
const rM = ({
  actions: r,
  filter: o,
  filterToogle: n,
  onRefresh: t,
  search: s,
  subtitle: a,
  subtitleLoading: e,
  title: i
}) => /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
  /* @__PURE__ */ _.jsxs("div", { className: "flex flex-col gap-3 p-3 lg:flex-row lg:items-center lg:justify-between", children: [
    /* @__PURE__ */ _.jsxs("div", { children: [
      /* @__PURE__ */ _.jsx("span", { className: "block text-lg font-semibold", children: i }),
      a && e && /* @__PURE__ */ _.jsx(yl, { className: "h-5 w-36" }),
      a && !e && /* @__PURE__ */ _.jsx("span", { className: "block text-sm", children: a })
    ] }),
    /* @__PURE__ */ _.jsxs("div", { className: "flex items-center gap-2", children: [
      r,
      t && /* @__PURE__ */ _.jsx(ot, { className: "border-gray-300", iconOnly: !0, onClick: t, title: "Refresh Data Table", type: "button", variant: "outline", children: /* @__PURE__ */ _.jsx(Wl, { size: 16 }) }),
      s && /* @__PURE__ */ _.jsx(
        rn,
        {
          className: "m-0 mt-1 w-full lg:w-64",
          inputClassName: "peer pl-7",
          onChange: (l) => s.setValue(l.currentTarget.value),
          placeholder: "Search...",
          rightChild: /* @__PURE__ */ _.jsx(
            Kl,
            {
              className: "pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-gray-400 peer-focus:text-primary-600",
              size: 16
            }
          ),
          type: "text",
          value: s.value
        }
      ),
      n && /* @__PURE__ */ _.jsx(ot, { color: "primary", iconOnly: !0, onClick: n, type: "button", children: /* @__PURE__ */ _.jsx(Vl, { size: 16 }) })
    ] })
  ] }),
  o
] }), vh = le(({ className: r, ...o }, n) => /* @__PURE__ */ _.jsx("header", { ref: n, className: W("fixed left-0 right-0 top-0 z-50 flex border-b bg-white", r), ...o }));
vh.displayName = "Navbar";
const yh = le(({ className: r, ...o }, n) => /* @__PURE__ */ _.jsx("div", { ref: n, className: W("relative flex items-center gap-3 px-3 lg:w-64", r), ...o }));
yh.displayName = "NavbarBrand";
const Yh = le(({ className: r, ...o }, n) => /* @__PURE__ */ _.jsx("nav", { ref: n, className: W("flex h-16 flex-1 items-center gap-3 px-3", r), ...o }));
Yh.displayName = "NavbarNav";
const nM = ({ actions: r, breadcrumb: o, className: n, subtitle: t, title: s }) => /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
  o && /* @__PURE__ */ _.jsx(vt, { className: "border-b bg-white py-2", children: /* @__PURE__ */ _.jsx(Vr, { links: o }) }),
  s && /* @__PURE__ */ _.jsxs(vt, { className: W("flex flex-col gap-3 pb-3 pt-6 lg:flex-row", n), children: [
    /* @__PURE__ */ _.jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ _.jsx("h1", { className: "text-2xl font-semibold", children: s }),
      t && /* @__PURE__ */ _.jsx("p", { children: t })
    ] }),
    r && /* @__PURE__ */ _.jsx("div", { className: "flex items-center", children: r })
  ] })
] }), aM = ({ className: r, ...o }) => /* @__PURE__ */ _.jsx("ul", { className: W("flex gap-1", r), ...o }), bh = le((r, o) => {
  const { as: n = "a", active: t, disabled: s, className: a, ...e } = r;
  return /* @__PURE__ */ _.jsx("li", { children: /* @__PURE__ */ _.jsx(
    n,
    {
      ref: o,
      className: W(
        t && "active bg-primary-600 text-white",
        s && "disabled text-gray-500",
        "flex h-9 min-w-9 items-center justify-center rounded-lg px-2 transition-colors hover:[&:not(.disabled)]:[&:not(.active)]:bg-primary-50 hover:[&:not(.disabled)]:[&:not(.active)]:text-primary-600",
        a
      ),
      ...e
    }
  ) });
});
bh.displayName = "PaginationItem";
const rr = le(
  ({ id: r, className: o, open: n, value: t, handleReset: s, placeholder: a, error: e, disabled: i }, l) => /* @__PURE__ */ _.jsxs(
    Be.Button,
    {
      ref: l,
      id: r,
      className: W(
        n && "open border-primary-600 bg-white",
        e ? "[&:not(.open)]:border-error-600 [&:not(.open)]:bg-error-50" : "[&:not(.open)]:border-gray-300 [&:not(.open)]:bg-white",
        "relative block h-10 w-full cursor-pointer rounded-lg border px-2 text-left text-sm text-gray-700 focus:outline-none",
        i && "!cursor-default !bg-gray-100",
        o
      ),
      children: [
        !!t && /* @__PURE__ */ _.jsx("span", { className: "block truncate", children: t }),
        !t && a && /* @__PURE__ */ _.jsx("span", { "aria-placeholder": a, className: "block truncate text-gray-400", children: a }),
        /* @__PURE__ */ _.jsxs(
          "span",
          {
            "aria-hidden": "true",
            className: W(
              "absolute inset-y-0 right-0 flex cursor-pointer items-center justify-center gap-2 px-2 text-gray-400",
              i && "cursor-default"
            ),
            children: [
              !!s && !!t && /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
                /* @__PURE__ */ _.jsx(
                  "span",
                  {
                    className: W("flex items-center justify-center", !i && "hover:text-red-600"),
                    onClick: (u) => !i && (s == null ? void 0 : s(u)),
                    children: /* @__PURE__ */ _.jsx(it, { size: 18 })
                  }
                ),
                /* @__PURE__ */ _.jsx("span", { className: "block h-1/3 w-px bg-gray-400" })
              ] }),
              /* @__PURE__ */ _.jsx("span", { className: "flex items-center justify-center", children: /* @__PURE__ */ _.jsx(zr, { size: 18 }) })
            ]
          }
        )
      ]
    }
  )
);
rr.displayName = "ListboxButton";
const Yl = ({ noResults: r, options: o, searchPlaceholder: n, open: t, hideSearch: s, isSingle: a }) => {
  const e = Ee(null), [i, l] = ae(""), u = ze(() => {
    const d = (m, y) => {
      var v;
      return (v = y.label) == null ? void 0 : v.toLowerCase().replace(/\s+/g, "").includes(m.toLowerCase().replace(/\s+/g, ""));
    };
    return i ? o.filter((m) => d(i, m)) : o;
  }, [o, i]);
  ve(() => {
    t && setTimeout(() => {
      var d;
      (d = e.current) == null || d.focus();
    }, 150);
  }, [t]);
  const c = (d) => {
    if (d.key === " ") {
      d.preventDefault();
      const m = d.target, { selectionStart: y, selectionEnd: v, value: M } = m, w = M.substring(0, y) + " " + M.substring(v);
      l(w);
      const L = y + 1;
      setTimeout(() => {
        m.setSelectionRange(L, L);
      });
    }
  };
  return /* @__PURE__ */ _.jsx(
    Re,
    {
      as: Je,
      leave: "transition ease-in",
      enterFrom: "opacity-0",
      enterTo: "opacity-100",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
      children: /* @__PURE__ */ _.jsxs(Be.Options, { as: "div", className: "absolute z-20 mt-px w-full overflow-hidden rounded-lg border bg-white shadow-lg", children: [
        !s && /* @__PURE__ */ _.jsx(
          "input",
          {
            ref: e,
            placeholder: n || "Search Option...",
            className: "block w-full border-b p-2 text-sm leading-6 outline-none",
            value: i,
            onClick: (d) => d.preventDefault(),
            onChange: (d) => l(d.target.value),
            onKeyDown: c
          }
        ),
        u.length ? /* @__PURE__ */ _.jsx("ul", { className: "max-h-60 w-full overflow-auto focus:outline-none", children: u.map((d, m) => /* @__PURE__ */ _.jsx(
          Be.Option,
          {
            className: ({ active: y, selected: v }) => W(
              "relative w-full cursor-default select-none py-2 text-sm",
              v && "bg-primary-50",
              y && "bg-primary-100",
              a && "px-3",
              !a && "pl-3 pr-10"
            ),
            value: d,
            children: ({ selected: y }) => /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
              /* @__PURE__ */ _.jsx("span", { className: "block truncate", children: d.label }),
              y && !a ? /* @__PURE__ */ _.jsx("span", { className: "absolute inset-y-0 right-0 flex items-center pr-2 text-primary-600", children: /* @__PURE__ */ _.jsx(Ir, { className: "h-5 w-5", "aria-hidden": "true" }) }) : null
            ] })
          },
          m
        )) }) : /* @__PURE__ */ _.jsx("span", { className: "block w-full px-2 py-8 text-center text-lg text-gray-600", children: r || "No results" })
      ] })
    }
  );
}, gh = (r) => {
  const {
    className: o,
    error: n,
    id: t,
    name: s,
    noResults: a,
    onChange: e,
    onValueChange: i,
    options: l,
    placeholder: u,
    searchPlaceholder: c,
    toggleClassName: d,
    value: m,
    withReset: y,
    hideSearch: v,
    disabled: M,
    ...w
  } = r, L = ze(() => (m == null ? void 0 : m.map((J) => l.find((E) => E.value === J)).filter((J) => !!J)) || [], [l, m]), O = {
    id: t,
    error: !!n,
    className: d,
    handleReset: y ? (J) => {
      J.preventDefault(), e == null || e([]), i == null || i([]);
    } : void 0,
    value: `${(L || []).map((J) => J.label).join(", ")}`,
    placeholder: u,
    disabled: M
  }, q = {
    noResults: a,
    options: l,
    searchPlaceholder: c
  }, H = (J) => {
    const E = J.map((C) => C.value);
    e == null || e(E), i == null || i(E);
  };
  return /* @__PURE__ */ _.jsx(Be, { name: s, disabled: M, value: L || [], onChange: H, multiple: !0, children: ({ open: J }) => /* @__PURE__ */ _.jsxs("div", { className: W("relative", o), ...w, children: [
    /* @__PURE__ */ _.jsx(rr, { open: J, ...O }),
    /* @__PURE__ */ _.jsx(Yl, { open: J, hideSearch: v, ...q })
  ] }) });
}, Lh = (r) => {
  const {
    className: o,
    error: n,
    id: t,
    name: s,
    noResults: a,
    onChange: e,
    onValueChange: i,
    options: l,
    placeholder: u,
    searchPlaceholder: c,
    toggleClassName: d,
    value: m,
    withReset: y,
    hideSearch: v,
    disabled: M,
    ...w
  } = r, L = ze(() => l.find((J) => J.value === m), [l, m]), O = {
    id: t,
    error: !!n,
    className: d,
    handleReset: y ? (J) => {
      J.preventDefault(), e == null || e(""), i == null || i("");
    } : void 0,
    value: (L == null ? void 0 : L.label) || (L == null ? void 0 : L.value),
    placeholder: u,
    disabled: M
  }, q = {
    noResults: a,
    options: l,
    searchPlaceholder: c
  }, H = (J) => {
    e == null || e(J.value), i == null || i(J.value);
  };
  return /* @__PURE__ */ _.jsx(Be, { name: s, disabled: M, value: L || null, onChange: H, children: ({ open: J }) => /* @__PURE__ */ _.jsxs("div", { className: W("relative", o), ...w, children: [
    /* @__PURE__ */ _.jsx(rr, { open: J, ...O }),
    /* @__PURE__ */ _.jsx(Yl, { isSingle: !0, open: J, hideSearch: v, ...q })
  ] }) });
}, sM = (r) => {
  const { id: o, name: n, help: t, label: s, labelRequired: a, error: e, className: i, wrapperClassName: l, ...u } = r;
  return /* @__PURE__ */ _.jsx(
    Pe,
    {
      htmlFor: o || n,
      wrapperClassName: W("relative mb-1", l),
      label: s,
      labelRequired: a,
      error: e,
      className: i,
      help: t,
      children: /* @__PURE__ */ _.jsx(gh, { id: o || n, name: n, error: e, ...u })
    }
  );
}, oM = (r) => {
  const { id: o, name: n, help: t, label: s, labelRequired: a, error: e, className: i, wrapperClassName: l, ...u } = r;
  return /* @__PURE__ */ _.jsx(
    Pe,
    {
      htmlFor: o || n,
      wrapperClassName: W("relative mb-1", l),
      label: s,
      labelRequired: a,
      error: e,
      className: i,
      help: t,
      children: /* @__PURE__ */ _.jsx(Lh, { id: o || n, name: n, error: e, ...u })
    }
  );
}, xh = le(({ className: r, children: o, ...n }, t) => {
  const { sidebarOpen: s, sidebarMini: a, sidebarActive: e, toggleSidebarOpen: i, toggleSidebarActive: l } = lt();
  return /* @__PURE__ */ _.jsxs(_.Fragment, { children: [
    /* @__PURE__ */ _.jsx(
      "span",
      {
        className: xe(
          s ? "pointer-events-auto opacity-30" : "pointer-events-none opacity-0",
          "fixed bottom-0 left-0 right-0 top-0 z-[59] bg-white dark:bg-black lg:hidden"
        ),
        onClick: () => i(!1)
      }
    ),
    /* @__PURE__ */ _.jsx(
      "aside",
      {
        ref: t,
        className: W(
          a && !e && "lg:w-16",
          !s && "-translate-x-full lg:-translate-x-0",
          "fixed bottom-0 left-0 top-0 z-[60] flex w-64 flex-col border-r bg-white transition-transform lg:z-40 lg:pt-16 lg:shadow-none lg:transition-[width]",
          r
        ),
        onMouseEnter: () => l(!0),
        onMouseLeave: () => l(!1),
        ...n,
        children: o
      }
    )
  ] });
});
xh.displayName = "Sidebar";
const bl = le((r, o) => {
  const { as: n = "a", text: t, badge: s, active: a, className: e, ...i } = r, { sidebarMini: l, sidebarActive: u } = lt();
  return /* @__PURE__ */ _.jsx(
    n,
    {
      ref: o,
      title: t,
      className: W(
        a ? "bg-secondary-100 text-secondary-700" : "text-secondary-500 hover:bg-secondary-50",
        "flex cursor-pointer items-center justify-between rounded-lg p-2 text-sm transition-colors",
        e
      ),
      ...i,
      children: /* @__PURE__ */ _.jsxs("span", { className: xe("flex flex-1 items-center gap-2", l && !u && "lg:justify-center"), children: [
        /* @__PURE__ */ _.jsx("span", { className: "flex h-5 w-5 items-center justify-center", children: /* @__PURE__ */ _.jsx(Jr, { size: 10, className: xe(a && "fill-current") }) }),
        /* @__PURE__ */ _.jsx("span", { className: xe(l && !u && "lg:hidden", "block"), children: t }),
        (s == null ? void 0 : s.show) && /* @__PURE__ */ _.jsx(bt, { color: s.color, size: "small", className: xe(l && !u && "lg:hidden"), children: s.text })
      ] })
    }
  );
});
bl.displayName = "SidebarChildLink";
const kh = le(({ className: r, children: o }, n) => {
  const { sidebarMini: t, toggleSidebarMini: s } = lt();
  return /* @__PURE__ */ _.jsxs("div", { ref: n, className: "flex w-full flex-1 flex-col overflow-hidden", children: [
    /* @__PURE__ */ _.jsx("div", { className: W("h-full w-full flex-1 overflow-y-auto", r), children: o }),
    /* @__PURE__ */ _.jsx("div", { className: "hidden w-full border-t lg:block", children: /* @__PURE__ */ _.jsx(
      "button",
      {
        type: "button",
        className: "flex h-10 w-full items-center justify-center bg-gray-100 text-gray-600 hover:bg-gray-200",
        onClick: () => s(),
        children: /* @__PURE__ */ _.jsx(ql, { size: 20, strokeWidth: 2.5, className: xe(t ? " rotate-180" : "", "block transition-transform") })
      }
    ) })
  ] });
});
kh.displayName = "SidebarContent";
const wh = le(({ wrapperClassName: r, className: o, children: n, ...t }, s) => /* @__PURE__ */ _.jsx("div", { ref: s, className: W("w-full border-b px-3 lg:hidden", o), ...t, children: /* @__PURE__ */ _.jsx("div", { className: W("relative flex h-16 items-center", r), children: n }) }));
wh.displayName = "SidebarHeader";
const gl = le((r, o) => {
  const { as: n = "a", icon: t, text: s, badge: a, active: e, open: i, haveChild: l, className: u, ...c } = r, { sidebarMini: d, sidebarActive: m } = lt();
  return /* @__PURE__ */ _.jsxs(
    n,
    {
      ref: o,
      title: s,
      className: W(
        e ? "bg-secondary-100 text-secondary-700" : "text-secondary-500 hover:bg-secondary-50",
        "flex cursor-pointer items-center justify-between rounded-lg p-2 text-sm transition-colors",
        u
      ),
      ...c,
      children: [
        /* @__PURE__ */ _.jsxs("span", { className: xe("flex flex-1 items-center gap-2", d && !m && "lg:justify-center"), children: [
          /* @__PURE__ */ _.jsx("span", { className: "flex h-5 w-5 items-center justify-center", children: /* @__PURE__ */ _.jsx(t, { size: 18 }) }),
          /* @__PURE__ */ _.jsx("span", { className: xe(d && !m && "lg:hidden", "block"), children: s }),
          (a == null ? void 0 : a.show) && /* @__PURE__ */ _.jsx(bt, { color: a.color, size: "small", className: xe(d && !m && "lg:hidden"), children: a.text })
        ] }),
        l && /* @__PURE__ */ _.jsx(
          Or,
          {
            size: 14,
            className: xe(!i && "-rotate-90", d && !m && "lg:hidden", "transition-transform")
          }
        )
      ]
    }
  );
});
gl.displayName = "SidebarParentLink";
const iM = ({ parent: r, child: o }) => {
  const [n, t] = ae(!!r.active), { sidebarActive: s, sidebarMini: a } = lt(), e = (i) => {
    var l;
    t((u) => !u), o != null && o.length && i.preventDefault(), (l = r.onClick) == null || l.call(r, i);
  };
  return /* @__PURE__ */ _.jsxs("div", { className: "flex w-full flex-col gap-1", children: [
    /* @__PURE__ */ _.jsx(gl, { haveChild: !!(o != null && o.length), open: n, ...r, onClick: e }),
    o && n && (a && s || !a) && /* @__PURE__ */ _.jsx("div", { className: "flex w-full flex-col gap-1", children: o.map((i, l) => /* @__PURE__ */ _.jsx(bl, { ...i }, l)) })
  ] });
}, Dh = le((r, o) => {
  const { className: n, value: t, color: s, srOnly: a, toggleclassName: e, ...i } = r;
  return /* @__PURE__ */ _.jsxs(
    Yt,
    {
      ref: o,
      checked: t,
      className: W(
        "relative inline-flex h-6 w-10 items-center rounded-full shadow-inner transition-colors",
        t ? Sh(s) : "bg-gray-300",
        n
      ),
      ...i,
      children: [
        /* @__PURE__ */ _.jsx(
          "span",
          {
            className: W(
              "block h-4 w-4 transform rounded-full bg-white transition",
              t ? "translate-x-5" : "translate-x-1",
              e
            )
          }
        ),
        a && /* @__PURE__ */ _.jsx("span", { className: "sr-only", children: a })
      ]
    }
  );
}), Sh = Ke({
  default: "bg-gray-600",
  primary: "bg-primary-600",
  warning: "bg-warning-600",
  error: "bg-error-600"
});
Dh.displayName = "Switch";
const lM = Yt.Label, uM = Yt.Description, _M = Yt.Group, jh = le(({ activeStep: r, steps: o, onActivateStep: n, className: t, ...s }, a) => /* @__PURE__ */ _.jsx("ol", { ref: a, className: W("flex w-full items-center justify-center gap-3", t), ...s, children: o.map((e, i) => /* @__PURE__ */ _.jsxs(
  "li",
  {
    className: W(
      "flex flex-1 flex-col items-center gap-3 rounded-lg border-2 bg-gray-100 p-3 text-center",
      i < r && "border-success-200 bg-success-100",
      i < r && n && "cursor-pointer hover:bg-success-200",
      i == r && "bg-white"
    ),
    onClick: () => i < r && (n == null ? void 0 : n(i)),
    children: [
      /* @__PURE__ */ _.jsx(
        "span",
        {
          className: W(
            "relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-primary-100 text-gray-600",
            i < r && "border-success-600 bg-success-600 text-white",
            i == r && "border-primary-600 bg-white text-primary-600"
          ),
          children: i < r ? /* @__PURE__ */ _.jsx(Fr, { className: "h-6 w-6", strokeWidth: 3 }) : /* @__PURE__ */ _.jsx("span", { className: "text-2xl font-bold", children: i + 1 })
        }
      ),
      /* @__PURE__ */ _.jsxs("span", { className: "block", children: [
        /* @__PURE__ */ _.jsx("h3", { className: "font-semibold", children: e.title }),
        /* @__PURE__ */ _.jsx("p", { className: "text-sm text-gray-500", children: e.details })
      ] })
    ]
  },
  i
)) }));
jh.displayName = "Stepper";
const dM = ({ className: r, ...o }) => /* @__PURE__ */ _.jsx("ol", { className: W("border-l border-dashed", r), ...o }), cM = ({ children: r, className: o, ...n }) => /* @__PURE__ */ _.jsxs("li", { className: W("relative mb-5 pl-6 last:mb-0", o), ...n, children: [
  /* @__PURE__ */ _.jsx("span", { className: "absolute left-[-0.4rem] top-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-white ring-4 ring-primary-600" }),
  r
] }), et = le(({ color: r, handleClose: o, children: n }, t) => {
  const s = Th(r || "primary"), [a, e] = ae(!1);
  return ve(() => {
    e(!0);
  }, []), /* @__PURE__ */ _.jsx(Re, { show: a, enter: "transition-opacity", enterFrom: "opacity-0", enterTo: "opacity-100", children: /* @__PURE__ */ _.jsxs("div", { ref: t, className: "flex w-72 rounded-lg border border-gray-100 bg-white p-3 shadow-xl", children: [
    /* @__PURE__ */ _.jsx(s, { className: xe(Hh(r || "primary"), "my-auto block"), size: 24 }),
    /* @__PURE__ */ _.jsx("span", { className: "my-auto block flex-1 overflow-hidden pl-3 text-sm", children: n }),
    /* @__PURE__ */ _.jsx(
      "button",
      {
        type: "button",
        className: "mb-auto flex h-6 w-6 items-center justify-center rounded-full text-red-600 transition-colors hover:bg-red-50",
        onClick: o,
        children: /* @__PURE__ */ _.jsx(it, { size: 16 })
      }
    )
  ] }) });
}), Hh = Ke({
  primary: "text-primary-600",
  success: "text-success-600",
  warning: "text-warning-600",
  error: "text-error-600"
}), Th = Ke({
  primary: Ul,
  success: Gl,
  warning: Zl,
  error: Rr
});
et.displayName = "Toast";
const Eh = typeof window > "u" || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent), Ll = !Eh, Nh = Ll ? zl : ve;
function mM(r) {
  if (!r)
    throw new Error("Failed to create breakpoint hooks, given `screens` value is invalid.");
  function o(s, a = !1) {
    const [e, i] = Ce.useState(() => a), l = Ce.useRef(a);
    return Nh(() => {
      if (!(Ll && "matchMedia" in window))
        return;
      function u() {
        const c = r[s] ?? "999999px", d = window.matchMedia(`(min-width: ${c})`);
        l.current = d.matches, l.current != e && i(l.current);
      }
      return u(), window.addEventListener("resize", u), () => window.removeEventListener("resize", u);
    }), e;
  }
  function n(s, a) {
    const e = o(s);
    return Ce.useEffect(() => a(e)), null;
  }
  function t(s, a, e) {
    const i = o(s);
    return Ce.useMemo(() => i ? a : e, [e, i, a]);
  }
  return {
    useBreakpoint: o,
    useBreakpointEffect: n,
    useBreakpointValue: t
  };
}
export {
  Oh as Accordion,
  ru as Alert,
  Bh as AsyncMultiSelect,
  Wh as AsyncSelect,
  xu as Avatar,
  bt as Badge,
  bu as BaseAsyncMultiSelect,
  Lu as BaseAsyncSelect,
  r_ as BaseEditor,
  gt as BaseInput,
  an as BaseInputCurrency,
  oh as BaseInputDate,
  ih as BaseInputDateRange,
  ml as BaseInputFile,
  fl as BaseInputTime,
  gh as BaseMultiSelect,
  Lh as BaseSelect,
  tn as BaseTextarea,
  Vr as Breadcrumb,
  ot as Button,
  qr as Card,
  Ur as CardBody,
  Gr as CardFooter,
  ju as CardHeader,
  Nu as Confirm,
  mh as ConfirmProvider,
  vt as Container,
  eM as ContextProviders,
  lh as Dropzone,
  Kh as Editor,
  rn as Input,
  a_ as InputCheckbox,
  v_ as InputCurrency,
  Vh as InputDate,
  qh as InputDateRange,
  uh as InputFile,
  s_ as InputRadio,
  _h as InputTime,
  Pe as InputWrapper,
  fh as LayoutProvider,
  Uh as LoadingScreen,
  tM as MainCard,
  rM as MainCardHeader,
  ph as MediaPreviewerProvider,
  Ut as Modal,
  Hu as ModalFooter,
  Tu as ModalHeader,
  sM as MultiSelect,
  vh as Navbar,
  yh as NavbarBrand,
  Yh as NavbarNav,
  nM as PageHeader,
  aM as Pagination,
  bh as PaginationItem,
  dh as PubSubProvider,
  oM as Select,
  Eu as SideModal,
  xh as Sidebar,
  bl as SidebarChildLink,
  kh as SidebarContent,
  wh as SidebarHeader,
  iM as SidebarItem,
  gl as SidebarParentLink,
  yl as Skeleton,
  pt as Spinner,
  jh as Stepper,
  Dh as Switch,
  uM as SwitchDescription,
  _M as SwitchGroup,
  lM as SwitchLabel,
  o_ as Textarea,
  dM as Timeline,
  cM as TimelineItem,
  et as Toast,
  hh as ToastProvider,
  mM as createTailwindBreakpointHooks,
  Rh as objectToDeps,
  Gh as useConfirm,
  hu as useDeepCompareEffect,
  pu as useDeepCompareMemoize,
  du as useInfiniteScroll,
  lt as useLayout,
  Mu as useLocalStorageState,
  Zh as usePreviewImage,
  Xh as usePreviewVideo,
  ch as usePubSub,
  zh as useRemember,
  yu as useScrollDirection,
  vu as useSearchItem,
  Jh as useSteps,
  Ih as useSyncRef,
  Fh as useTimeout,
  Qh as useToast,
  Ke as variants
};
