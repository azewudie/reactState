import React, { useState, useEffect } from "react";
import CountDisplay from "../UseEffectComponentDisplayer/UseEffectComponentDisplayer";
export default function UseeffectComponent() {
  const [count, setCount] = useState(0);

  let IncrementHandler = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    document.title = `Count: ${count}`;
    alert("page render");
  }, [count]);

  return (
    <div>
      <button onClick={IncrementHandler}>Increment</button>

      <CountDisplay Title="Count Displayer: " count={count} />
    </div>
  );
}
