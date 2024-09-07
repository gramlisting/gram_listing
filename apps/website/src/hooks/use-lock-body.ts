import * as React from "react";

// @see https://usehooks.com/useLockBodyScroll.

/**
 * 暂时禁用文档正文的滚动。 overflow = hidden
 * ⚠️：当使用本 hook 的组件卸载时，会恢复原始样式（恢复滚动）
 */
export function useLockBody() {
  React.useLayoutEffect((): (() => void) => {
    const originalStyle: string = window.getComputedStyle(
      document.body,
    ).overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = originalStyle);
  }, []);
}
