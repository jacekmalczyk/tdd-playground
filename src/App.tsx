import React, { useState } from "react";
import { Header } from "./Header/Header";
import Counter from "./Counter/Counter";

function App() {
  const [count, setCount] = useState(0);

  const increment = (isShift: boolean) => {
    const inc = isShift ? 10 : 1;
    setCount(count + inc);
  };

  return (
    <div>
      <Header />
      <Counter
        initialCount={count}
        label={"Current"}
        onCounterIncrease={increment}
      />
    </div>
  );
}

export default App;
