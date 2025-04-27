import {motion} from "motion/react";

function Overlay() {
  return (
    <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.25 }}
     className="fixed top-0 left-0 z-40 bg-black/60 min-h-screen w-full cursor-pointer">
     </motion.div>
  );
}

export default Overlay