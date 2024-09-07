import * as React from "react";

// 极简的一个 hook 案例，用来判断页面是否挂载成功
export function useMounted() {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}
