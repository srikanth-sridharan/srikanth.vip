import { motion } from "framer-motion";

const circleVariants = {
  animate1: {
    scale: [1, 1.2, 1],
    x: [0, 100, 0],
    y: [0, 50, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate2: {
    scale: [1, 1.1, 1],
    x: [0, 120, 0],
    y: [0, -60, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate3: {
    scale: [1, 1.3, 1],
    x: [0, 140, 0],
    y: [0, 70, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate4: {
    scale: [1, 1.4, 1],
    x: [0, 160, 0],
    y: [0, -80, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate5: {
    scale: [1, 1.5, 1],
    x: [0, 180, 0],
    y: [0, 90, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  animate6: {
    scale: [1, 1.6, 1],
    x: [0, 200, 0],
    y: [0, -100, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const BlurBackground = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none flex justify-center items-center filter blur-[100px] opacity-70">
      {/* Apple-inspired Gradient Circles */}
      <motion.div
        className="bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] w-[350px] h-[250px] rounded-full absolute"
        variants={circleVariants}
        animate="animate1"
      ></motion.div>
      <motion.div
        className="bg-gradient-to-br from-[#5f27cd] to-[#48dbfb] w-[360px] h-[260px] rounded-full absolute"
        variants={circleVariants}
        animate="animate2"
      ></motion.div>
      <motion.div
        className="bg-gradient-to-br from-[#ff9ff3] to-[#54a0ff] w-[370px] h-[270px] rounded-full absolute"
        variants={circleVariants}
        animate="animate3"
      ></motion.div>
      <motion.div
        className="bg-gradient-to-br from-[#a29bfe] to-[#6c5ce7] w-[380px] h-[280px] rounded-full absolute"
        variants={circleVariants}
        animate="animate4"
      ></motion.div>
      <motion.div
        className="bg-gradient-to-br from-[#00cec9] to-[#0984e3] w-[390px] h-[290px] rounded-full absolute"
        variants={circleVariants}
        animate="animate5"
      ></motion.div>
      <motion.div
        className="bg-gradient-to-br from-[#fab1a0] to-[#e84393] w-[400px] h-[300px] rounded-full absolute"
        variants={circleVariants}
        animate="animate6"
      ></motion.div>
    </div>
  );
};

export default BlurBackground;
