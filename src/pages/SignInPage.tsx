
import { motion } from "framer-motion";
import { useEffect } from "react";
import { SignInForm } from "@/components/Auth/SignInForm";
import Layout from "@/components/layout/Layout";
import StageLayout from "@/layouts/StageLayout";

export default function SignInPage() {
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    // Add any page initialization logic here
  }, []);

  return (
    <StageLayout>
      <Layout>
        <motion.div 
          className="container mx-auto py-12 px-4 flex items-center justify-center min-h-[calc(100vh-150px)]"
          variants={pageVariants}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.5 }}
        >
          <SignInForm />
        </motion.div>
      </Layout>
    </StageLayout>
  );
}
