import React from "react";
import { useState } from "react";
import Count from "./Count";
import Button from "./Button";
import Stats from "./Stats";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="text-center w-full h-screen flex justify-center items-center bg-slate-500 border-r-lime-500">
      <div className="w-[500px] h-[200px] flex flex-col justify-center items-center bg-slate-300 border-r-lime-500">
        <Count count={count} />
        <Button handler={handleIncrement}>Increment</Button>
        <Button  type = "danger"handler={handleDecrement}>Decrement</Button>
        
        
      </div>
    </div>
  );
};

export default Counter;
