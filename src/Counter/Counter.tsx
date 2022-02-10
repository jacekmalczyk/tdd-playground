import React from "react";

export type CounterProps = {
  label?: string;
  initialCount: number;
  onCounterIncrease: (isShift: boolean) => void;
};

const Counter = ({
  label = "Count",
  initialCount,
  onCounterIncrease,
}: CounterProps) => {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    onCounterIncrease(event.shiftKey);
  };

  return (
    <div>
      <label htmlFor={"counter"}>{label}</label>
      <output id="counter" role="counter" onClick={handleClick}>
        {initialCount}
      </output>
    </div>
  );
};

export default Counter;
