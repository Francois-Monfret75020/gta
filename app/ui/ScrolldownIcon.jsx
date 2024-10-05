import { motion, AnimatePresence } from "framer-motion";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const ScrollDownIcon = () => {
  return (
    <AnimatePresence>
      <motion.div
    
        initial={{ y: 0 }}
        animate={{ y: 5 }}
        exit={{ y: 0 }}
        transition={{
          duration: 1,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <MdKeyboardDoubleArrowDown size={60} color="white" />
      </motion.div>
    </AnimatePresence>
  );
};

export default ScrollDownIcon;
