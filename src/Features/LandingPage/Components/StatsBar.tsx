import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  icon: string;
}

const stats: StatItem[] = [
  { value: 12000, suffix: "+", label: "Active Students", icon: "🎓" },
  { value: 850, suffix: "+", label: "Expert Teachers", icon: "👨‍🏫" },
  { value: 45000, suffix: "+", label: "Live Sessions", icon: "📡" },
  { value: 30, suffix: "+", label: "Subjects Covered", icon: "📚" },
];

const useCountUp = (target: number, duration: number, active: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
};

const StatItem = ({ stat, index, active }: { stat: StatItem; index: number; active: boolean }) => {
  const count = useCountUp(stat.value, 1800, active);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={active ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      className="flex flex-col items-center text-center px-6 py-8 rounded-3xl bg-white border border-[#E8EAED] shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
    >
      <div className="w-14 h-14 rounded-2xl bg-[#525fe115] flex items-center justify-center text-2xl mb-4">
        {stat.icon}
      </div>
      <p className="text-4xl font-extrabold text-[#525FE1] mb-1 tabular-nums">
        {count.toLocaleString()}
        <span className="text-3xl">{stat.suffix}</span>
      </p>
      <p className="text-[#2A2D34] font-medium text-sm">{stat.label}</p>
    </motion.div>
  );
};

const StatsBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-[#525FE1] font-semibold text-sm mb-3 tracking-widest uppercase"
        >
          Our Impact
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold text-[#2A2D34] text-center mb-14"
        >
          Trusted by thousands of learners
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} active={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
