import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UserPlus, Search, MonitorPlay } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: <UserPlus size={28} />,
    title: "Create Your Account",
    description:
      "Sign up in seconds as a student or teacher. Complete your profile and set your learning preferences.",
    color: "#525FE1",
    bg: "bg-[#525fe115]",
    border: "border-[#525fe140]",
  },
  {
    number: "02",
    icon: <Search size={28} />,
    title: "Find Your Teacher",
    description:
      "Browse verified expert teachers, filter by subject, rating, and price. Read reviews from real students.",
    color: "#f97316",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    number: "03",
    icon: <MonitorPlay size={28} />,
    title: "Start Learning Live",
    description:
      "Join interactive live sessions, complete quizzes, track your progress, and grow your skills every day.",
    color: "#10b981",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
  },
];

const HowItWorks = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-[#525FE1] font-semibold text-sm mb-3 tracking-widest uppercase"
        >
          Simple Process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold text-[#2A2D34] text-center mb-16"
        >
          How it works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] h-px">
            <motion.div
              className="h-full"
              style={{
                background: "repeating-linear-gradient(90deg, #D1D5DB 0, #D1D5DB 8px, transparent 8px, transparent 18px)",
              }}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2, ease: "easeOut" }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                className={`relative w-24 h-24 rounded-3xl ${step.bg} border-2 ${step.border} flex items-center justify-center mb-6 shadow-sm`}
                style={{ color: step.color }}
              >
                {step.icon}
                <span
                  className="absolute -top-3 -right-3 w-7 h-7 rounded-full text-white text-xs font-extrabold flex items-center justify-center shadow-md"
                  style={{ background: step.color }}
                >
                  {step.number.slice(1)}
                </span>
              </motion.div>

              <span
                className="text-xs font-extrabold tracking-widest mb-2"
                style={{ color: step.color }}
              >
                STEP {step.number}
              </span>
              <h3 className="text-[#2A2D34] font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
