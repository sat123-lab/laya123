export const LAYA_SCROLL_ID = "laya-scroll";

export const getScrollRoot = (): HTMLElement | null =>
  document.getElementById(LAYA_SCROLL_ID);

export const getScrollTop = (): number => {
  const root = getScrollRoot();
  if (root) return root.scrollTop;
  return window.scrollY || document.documentElement.scrollTop || 0;
};

export const scrollPageToTop = (smooth = false) => {
  const root = getScrollRoot();
  if (root) {
    if (smooth) root.scrollTo({ top: 0, behavior: "smooth" });
    else root.scrollTop = 0;
  }
  if (smooth) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }
};

export const onScrollRoot = (handler: () => void) => {
  const root = getScrollRoot();
  const opts = { passive: true } as const;
  if (root) {
    root.addEventListener("scroll", handler, opts);
    return () => root.removeEventListener("scroll", handler);
  }
  window.addEventListener("scroll", handler, opts);
  return () => window.removeEventListener("scroll", handler);
};
