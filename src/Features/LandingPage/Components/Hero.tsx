import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import heroIllustration from "../../../assets/images/Online learning-amico 1.png";
import logo from "../../../assets/icons/logo.svg";

const Hero = () => {
  const navigate = useNavigate();
  const isAuthenticated = !!localStorage.getItem("token");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-12, 12, -12],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      <nav className="relative z-20 flex justify-between items-center px-8 md:px-16 py-5">
        <img src={logo} alt="Logo" className="h-8" />
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <button
              onClick={() => navigate("/Home")}
              className="text-white font-semibold text-sm px-5 py-2 rounded-full border border-white/40 hover:bg-white/10 transition-all duration-300"
            >
              Go to Dashboard
            </button>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="text-white font-semibold text-sm px-5 py-2 rounded-full border border-white/40 hover:bg-white/10 transition-all duration-300"
              >
                Log In
              </button>
              <button
                onClick={() => navigate("/auth")}
                className="bg-white text-[#525FE1] font-bold text-sm px-5 py-2 rounded-full hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Get Started
              </button>
            </>
          )}
        </div>
      </nav>

      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(135deg, #1a1f6e 0%, #525FE1 45%, #7c6be8 70%, #a78bfa 100%)",
        }}
      />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${80 + i * 60}px`,
              height: `${80 + i * 60}px`,
              background: "rgba(255,255,255,0.04)",
              top: `${10 + i * 13}%`,
              left: `${5 + i * 15}%`,
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.04, 0.08, 0.04],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex-1 flex items-center">
        <div className="max-w-7xl mx-auto px-8 md:px-16 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
            <motion.div
              className="flex-1 text-white"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={itemVariants as any}>
                <span className="inline-block bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm">
                  🎓 The Future of Online Learning
                </span>
              </motion.div>

              <motion.h1
                variants={itemVariants as any}
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6"
              >
                Learn Smarter,{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #CBCFF6, #ffffff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Grow Faster
                </span>
              </motion.h1>

              <motion.p
                variants={itemVariants as any}
                className="text-white/75 text-lg md:text-xl leading-relaxed mb-10 max-w-[520px]"
              >
                Connect with expert teachers, join live interactive sessions, track your progress, and master any subject — all in one powerful platform.
              </motion.p>

              <motion.div variants={itemVariants as any} className="flex flex-col sm:flex-row gap-4">
                <motion.button
                  onClick={() => navigate("/auth")}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="bg-white text-[#525FE1] font-bold text-base px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  Start Learning Free →
                </motion.button>
                <motion.button
                  onClick={() => navigate("/login")}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="border-2 border-white/40 text-white font-semibold text-base px-8 py-4 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  Already have an account
                </motion.button>
              </motion.div>

              <motion.div
                variants={itemVariants as any}
                className="flex items-center gap-6 mt-10"
              >
                <div className="flex -space-x-3">
                  {["#f97316", "#8b5cf6", "#06b6d4", "#10b981"].map((color, i) => (
                    <div
                      key={i}
                      className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: color }}
                    >
                      {["A", "M", "S", "N"][i]}
                    </div>
                  ))}
                </div>
                <p className="text-white/75 text-sm">
                  <strong className="text-white">12,000+</strong> students already learning
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex-1 flex justify-center"
              variants={floatVariants as any}
              initial="initial"
              animate="animate"
            >
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-3xl opacity-30"
                  style={{ background: "#CBCFF6", transform: "scale(0.8)" }}
                />
                <img
                  src={heroIllustration}
                  alt="Online Learning Illustration"
                  className="relative w-[380px] md:w-[460px] lg:w-[520px] drop-shadow-2xl"
                />

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute top-8 -left-6 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-xl">
                    ✅
                  </div>
                  <div>
                    <p className="text-[#2A2D34] font-bold text-xs">Class Completed!</p>
                    <p className="text-gray-400 text-xs">Advanced Math · 2h ago</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3, duration: 0.5 }}
                  className="absolute bottom-16 -right-6 bg-white rounded-2xl shadow-xl p-3 flex items-center gap-3"
                >
                  <div className="w-10 h-10 bg-[#525fe133] rounded-xl flex items-center justify-center text-xl">
                    📚
                  </div>
                  <div>
                    <p className="text-[#2A2D34] font-bold text-xs">Live Session</p>
                    <p className="text-[#525FE1] text-xs font-semibold">Starting in 5 min</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 -z-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 20C1200 70 960 0 720 40C480 80 240 10 0 50L0 80Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
