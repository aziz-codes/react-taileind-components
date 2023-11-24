import React, { useState } from "react";
import Input from "./Input";
import { languages } from "./dummy";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const DropDown = () => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    setFocused(false);
  };
  return (
    <section className="h-screen w-full flex justify-center mt-20">
      <div className="w-full max-w-sm p-5">
        <div className="flex h-8  rounded-md w-full border items-center px-1 relative">
          <Input
            handleFocus={handleFocus}
            handleBlur={handleBlur}
            value={value}
          />
          <ChevronDownIcon
            className={`h-5 w-5 text-gray-400 cursor-pointer ${
              focused && "rotate-180"
            }`}
            onClick={() => setFocused((prev) => !prev)}
          />
          {focused ? (
            <div
              className="absolute left-0 top-8 w-full h-auto px-0.5 
          flex flex-col gap-1 border border-t-0 shadow-md"
            >
              {languages.map((item, index) => (
                <div
                  className="bg-white px-1 py-1 cursor-pointer hover:bg-slate-100 transition-colors duration-150 ease-linear"
                  key={index}
                  onClick={() => {
                    setValue(item.value);
                    setFocused(false);
                  }}
                >
                  {item.label}
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
export default DropDown;
