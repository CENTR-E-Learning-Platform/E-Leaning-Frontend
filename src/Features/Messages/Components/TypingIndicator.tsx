import { motion } from "framer-motion";

const dots = [0, 1, 2];

export function TypingIndicator() {
  return (
    <div className="flex items-center gap-1.5 px-3 py-2 rounded-2xl w-fit bg-gray-200">
      {dots.map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-gray-500"
          animate={{
            y: [0, -4, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}