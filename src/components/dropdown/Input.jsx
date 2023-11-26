import React from "react";

const Input = ({ selected }) => {
  return (
    <input
      type="text"
      placeholder="Focus to expand items"
      value={selected}
      className="h-full w-full rounded-md outline-none cursor-pointer
  focus:outline-none "
      readOnly
    />
  );
};

export default Input;
