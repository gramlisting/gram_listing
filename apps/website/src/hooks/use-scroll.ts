import { useCallback, useEffect, useState } from "react";

/**
 * useXXX 开头的 hook
 *
 * @param threshold 滚动的幅度
 */
export default function useScroll(threshold: number) {
  // 1. 定义一个 State
  // 2. 定义一个Callback 方法，
  // 3. 定义一个 useEffect, 监听页面滚动方法，并设置 State

  const [scrolled, setScrolled] = useState(false);

  const callback = () => {
    // setScrolled(window.pageYOffset > threshold);
    setScrolled(window.scrollY > threshold);
  };
  // useCallback 是 React 中的一个 Hook，它的主要作用是缓存函数的引用，以防止函数在每次渲染时都被重新创建。
  // 这个 Hook 对于性能优化非常有用，特别是在处理频繁渲染的组件或依赖于回调函数的子组件时。
  const onScroll = useCallback(callback, [threshold]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return scrolled;
}
