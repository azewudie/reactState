import React, { useState } from "react";
import IncreaseDispaly from "../IncreaseDecreasCountComponentDisplayer/IncreaseDecreaseCountComponentDisplayer";

export default function IncreaseDecreaseCountComponent() {
  const [count, setCount] = useState(0);

  let ResetHandler = () => {
    setCount(0);
  };
  let IncreaseHandler = () => {
    setCount((count) => count + 1);
  };

  let DecreaseHandler = () => {
    setCount((count) => count - 1);
  };
  return (
    <div>
      <button type="" onClick={ResetHandler}>
        ResetCount
      </button>
      <button type="" onClick={IncreaseHandler}>
        IncreaseCount
      </button>
      <button type="" onClick={DecreaseHandler}>
        DecreaseCount
      </button>
      <IncreaseDispaly Text="Initial Click Count: " count={count} />
    </div>
  );
}
