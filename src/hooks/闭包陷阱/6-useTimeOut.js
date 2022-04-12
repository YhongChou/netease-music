import React from "react";

function useTimeout(cb, timeout, deps = []) {
  const callbackRef = React.useRef(cb);

  React.useEffect(() => {
    if (timeout < 0 || typeof callbackRef.current !== "function") return;

    callbackRef.current = cb;

    const timerId = setTimeout(cb, timeout);

    return () => {
      clearTimeout(timerId);
    };
  }, [...deps]);
}

const TimeoutExample = () => {
  const [count, setCount] = React.useState(0);
  // 为了把最新的 count 值传到 useTimeout hook 里面
  const [countInTimeout, setCountInTimeout] = React.useState(0);

  useTimeout(
    () => {
      setCountInTimeout(count);
    },
    3000,
    [count]
  );

  React.useEffect(() => {
    setCount(5);
  }, []);

  return (
    <div>
      Count: {count}
      <br />
      setTimeout Count: {countInTimeout}
    </div>
  );
};

export default TimeoutExample;
