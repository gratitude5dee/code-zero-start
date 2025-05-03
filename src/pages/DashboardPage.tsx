
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/layout/Layout";
import StageLayout from "@/layouts/StageLayout";
import { TankCard } from "@/components/ui/TankCard";
import { CircleUser, Award, Star, DollarSign, TrendingUp } from "lucide-react";

export default function DashboardPage() {
  const { user, signOut } = useAuth();
  const pageVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    // Add any page initialization logic here
  }, []);

  // Shark investor profiles for sidebar
  const sharks = [
    { name: "Mr. Wonderful", icon: DollarSign },
    { name: "Tech Shark", icon: TrendingUp },
    { name: "Brand Guru", icon: Award },
    { name: "Fashion Maven", icon: Star },
    { name: "Growth Expert", icon: CircleUser }
  ];

  return (
    <StageLayout>
      <Layout>
        <div className="container mx-auto py-8 px-4 relative">
          {/* Sharks sidebar */}
          <div className="fixed right-4 top-1/4 flex flex-col gap-5 z-10">
            {sharks.map((shark, index) => (
              <div key={index} className="group relative">
                <div className="w-12 h-12 rounded-full bg-tank-dark border border-tank-aqua/30 flex items-center justify-center cursor-pointer hover:border-tank-aqua transition-all">
                  <shark.icon className="text-tank-aqua" size={24} />
                </div>
                <div className="absolute left-14 top-2 bg-tank-dark border border-tank-aqua/30 px-2 py-1 rounded text-tank-aqua text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {shark.name}
                </div>
              </div>
            ))}
          </div>
          
          <motion.div
            variants={pageVariants}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
          >
            <TankCard className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl font-heading text-tank-aqua">Welcome to Your Pitch Deck</CardTitle>
                <CardDescription>
                  {user?.email ? `Logged in as ${user.email}` : "Welcome to your personal dashboard"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  This is your protected dashboard page. Prepare your pitches and impress the sharks!
                </p>
                <Button onClick={signOut} variant="outline" className="hover:animate-ripple">
                  Sign Out
                </Button>
              </CardContent>
            </TankCard>
          </motion.div>
        </div>
      </Layout>
    </StageLayout>
  );
}
