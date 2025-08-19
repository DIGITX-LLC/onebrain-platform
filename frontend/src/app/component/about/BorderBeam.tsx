import { motion } from 'framer-motion';

interface BorderBeamProps {
  size: number;
  duration: number;
  delay: number;
}

export const BorderBeam = ({ size, duration, delay }: BorderBeamProps) => {
  return (
    <motion.div
      className="absolute inset-0 border-2 border-transparent rounded-full"
      style={{
        backgroundImage: "linear-gradient(45deg, #ff007f, #4f8eff, #ff007f, #4f8eff)",
        backgroundSize: "400% 400%",
        width: size,
        height: size,
      }}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "linear",
      }}
    />
  );
};
