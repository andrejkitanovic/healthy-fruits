import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const AnimationEnter = ({ children }) => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        exit={{}}
      >
        <div location={location} key={location.pathname}>
          {children}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationEnter;
