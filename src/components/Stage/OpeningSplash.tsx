
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import sharkAnimation from './shark-animation.json'; 

export function OpeningSplash() {
  const navigate = useNavigate();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    // Set a timeout to redirect after 3 seconds
    const timeout = setTimeout(() => {
      setShouldRedirect(true);
    }, 3000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (shouldRedirect) {
      navigate('/sign-in');
    }
  }, [shouldRedirect, navigate]);

  const handleClick = () => {
    setShouldRedirect(true);
  };

  return (
    <motion.div 
      className="flex flex-col items-center justify-center h-screen cursor-pointer"
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <div className="relative w-64 h-64">
        <Player
          autoplay
          loop
          src={sharkAnimation}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <motion.h1 
        className="mt-8 text-4xl text-tank-aqua font-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        Welcome to the Pitch Tank
      </motion.h1>
    </motion.div>
  );
}

export default OpeningSplash;
