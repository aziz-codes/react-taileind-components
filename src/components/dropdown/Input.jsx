import React from "react";

const Input = ({ handleFocus, handleBlur, value }) => {
  return (
    <input
      type="text"
      placeholder={value}
      value={value}
      className="h-full w-full rounded-md outline-none
  focus:outline-none"
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

export default Input;
