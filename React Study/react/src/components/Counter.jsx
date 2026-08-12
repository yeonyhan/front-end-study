import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState();

  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
}
