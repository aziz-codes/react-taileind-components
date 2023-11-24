import React from "react";

const Input = ({ selected }) => {
  return (
    <input
      type="text"
      placeholder={selected}
      value={selected}
      className="h-full w-full rounded-md outline-none
  focus:outline-none "
      readOnly
    />
  );
};

export default Input;
