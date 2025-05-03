
import { ReactNode } from "react";
import { motion } from "framer-motion";
import "@fontsource/bebas-neue";

interface StageLayoutProps {
  children: ReactNode;
}

const StageLayout = ({ children }: StageLayoutProps) => {
  return (
    <motion.main
      className="min-h-screen bg-shark-gradient text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Glass-pane overlay */}
      <div className="fixed inset-0 backdrop-blur-md bg-white/5" />
      
      <motion.div
        className="relative z-10 min-h-screen"
      >
        {children}
      </motion.div>
    </motion.main>
  );
};

export default StageLayout;
