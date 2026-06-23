import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { usehandelBackRegister } from "../../Auth/Hooks/useRegister";

const CTASection = () => {
  const navigate = useNavigate();
  const { setrole } = usehandelBackRegister();

  return (
    <section className="py-24 px-8 md:px-16 relative overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(135deg, #1a1f6e 0%, #525FE1 50%, #7c6be8 100%)",
        }}
      />

      <div className="absolute inset-0 -z-10 overflow-hidden">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${120 + i * 80}px`,
              height: `${120 + i * 80}px`,
              background: "rgba(255,255,255,0.04)",
              top: `${10 + i * 20}%`,
              right: `${5 + i * 15}%`,
            }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.07, 0.04] }}
            transition={{ duration: 5 + i, repeat: Infinity, delay: i * 0.8 }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-white/10 border border-white/20 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 backdrop-blur-sm"
        >
          🚀 Join thousands of learners today
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight"
        >
          Ready to transform your{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #CBCFF6, #ffffff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            learning experience?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/70 text-lg mb-12 max-w-xl mx-auto"
        >
          Whether you're a student ready to excel or a teacher ready to inspire — your journey starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={() => {
              setrole("Student");
              navigate("/student-option");
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white text-[#525FE1] font-bold text-base px-9 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
          >
            🎓 Join as Student
          </motion.button>
          <motion.button
            onClick={() => {
              setrole("Teacher");
              navigate("/teacher-option")
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="border-2 border-white/50 text-white font-bold text-base px-9 py-4 rounded-2xl hover:bg-white/10 backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2"
          >
            👨‍🏫 Join as Teacher
          </motion.button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-white/40 text-xs mt-8"
        >
          No credit card required · Free to get started · Cancel anytime
        </motion.p>
      </div>
    </section>
  );
};

export default CTASection;
