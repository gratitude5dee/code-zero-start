
import { ReactNode } from "react";
import { motion } from "framer-motion";
import "@fontsource/bebas-neue";

interface StageLayoutProps {
  children: ReactNode;
}

const StageLayout = ({ children }: StageLayoutProps) => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-tank-dark via-tank-aqua/10 to-tank-dark">
      {/* Radial spotlight with mix-blend overlay effect */}
      <div
        className="absolute inset-0 bg-gradient-radial from-tank-aqua/20 to-transparent opacity-60 mix-blend-overlay blur-[120px]"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(20, 184, 166, 0.3), transparent 70%)",
        }}
      />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 min-h-screen"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default StageLayout;
