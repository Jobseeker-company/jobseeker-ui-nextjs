import * as i from "react";
function o(e = 768) {
  const [d, n] = i.useState(void 0);
  return i.useEffect(() => {
    const t = window.matchMedia(`(max-width: ${e - 1}px)`), s = () => {
      n(window.innerWidth < e);
    };
    return t.addEventListener("change", s), n(window.innerWidth < e), () => t.removeEventListener("change", s);
  }, [e]), !!d;
}
export {
  o as useIsMobile
};
