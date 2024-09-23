import React from "react";

const Button = ({ children, handler, type }) => {
  const style =
    type === "danger"
      ? "w-[200px] h-[50px] text-xl bg-red-400 font-bold m-2"
      : "w-[200px] h-[50px] text-xl bg-blue-400 font-bold m-2";

  return (
    <>
      <button className={style} onClick={handler}>
        {children}
      </button>
    </>
  );
};

export default Button;
