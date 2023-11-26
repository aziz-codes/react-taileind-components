import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconFilled } from "@heroicons/react/20/solid";
import { motion } from "framer-motion";
import { useState } from "react";
const Heart = () => {
  const [clicked, setClicked] = useState(false);
  const heartVariants = {
    unclicked: { scale: 1 },
    clicked: { scale: 1.3 },
  };
  return (
    <div className="h-8 w-8">
      {clicked ? (
        <motion.div
          variants={heartVariants}
          animate={clicked ? "clicked" : "unclicked"}
        >
          <HeartIconFilled
            className="h-full w-full text-red-500 cursor-pointer"
            onClick={() => setClicked(!clicked)}
          />
        </motion.div>
      ) : (
        <motion.div
          variants={heartVariants}
          animate={clicked ? "clicked" : "unclicked"}
        >
          <HeartIcon
            className="h-full w-full cursor-pointer"
            onClick={() => setClicked(!clicked)}
          />
        </motion.div>
      )}
    </div>
  );
};

export default Heart;
