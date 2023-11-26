import React, { useState, useRef, useEffect } from "react";
import Input from "./Input";
import { motion, AnimatePresence } from "framer-motion";
import { languages } from "./dummy";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
const DropDown = () => {
  const [clicked, setClicked] = useState(false);
  const [selected, setSelected] = useState("");
  const InputRef = useRef(null);

  useEffect(() => {
    const handleWindowClick = (e) => {
      if (InputRef.current.contains(e.target)) {
        setClicked(true);
      } else {
        setClicked(false);
      }
    };
    window.addEventListener("click", handleWindowClick);

    return () => window.removeEventListener("click", handleWindowClick);
  }, []);

  const handleClick = (item) => {
    setSelected(item);
    setClicked(false);
  };
  console.log(clicked);
  return (
    <section className="h-screen w-full flex justify-center mt-20">
      <div className="w-full max-w-sm p-5">
        <div
          className="flex h-8  rounded-md w-full border items-center px-1 relative options"
          style={{ zIndex: 100 }}
        >
          <div ref={InputRef} className="w-full ">
            <Input selected={selected} />
          </div>
          <ChevronDownIcon
            className={`h-5 w-5 text-gray-400 cursor-pointer transition-transform duration-200 ease-linear ${
              clicked &&
              "rotate-180 transition-transform duration-200 ease-linear"
            }`}
            onClick={() => setClicked((prev) => !prev)}
          />
          {clicked && (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute left-0 top-8 w-full h-auto px-0.5 
          flex flex-col gap-1 border border-t-0 shadow-md "
              >
                {languages.map((item, index) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="bg-white px-1 py-1 cursor-pointer hover:bg-slate-100 transition-colors duration-150 ease-linear"
                    key={index}
                    onClick={() => handleClick(item.value)}
                  >
                    {item.label}
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
};
export default DropDown;
