import React, { useEffect, useState } from "react";
import "./App.css";

const fibFn = (n: number): number => {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibFn(n - 1) + fibFn(n - 2);
};

function App() {
  const [fib, setFib] = useState<number>(0);

  useEffect(() => {
    console.time("javascript");
    const fibResult = fibFn(20);
    console.timeEnd("javascript");
  }, []);

  import("wasm").then(({ fib }) => {
    console.time("wasm");
    const fibResult = fib(50);
    console.timeEnd("wasm");
  });

  return <div className="App"></div>;
}

export default App;
