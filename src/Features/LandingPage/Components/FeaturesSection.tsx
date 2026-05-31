import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Video,
  ClipboardList,
  CalendarDays,
  MessageSquare,
  UserCheck,
  CreditCard,
} from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
  iconBg: string;
}

const features: Feature[] = [
  {
    icon: <Video size={26} />,
    title: "Live Streaming",
    description:
      "Join high-quality interactive live sessions with your teacher. Ask questions, share screens, and collaborate in real time.",
    gradient: "from-[#525FE1]/8 to-[#525FE1]/0",
    iconBg: "bg-[#525fe120] text-[#525FE1]",
  },
  {
    icon: <ClipboardList size={26} />,
    title: "Smart Quizzes",
    description:
      "Test your knowledge with teacher-crafted quizzes. Get instant feedback and detailed results to sharpen your skills.",
    gradient: "from-[#f97316]/8 to-[#f97316]/0",
    iconBg: "bg-orange-100 text-orange-500",
  },
  {
    icon: <CalendarDays size={26} />,
    title: "Smart Scheduling",
    description:
      "Plan your learning journey with an integrated calendar. Never miss a class with timely session reminders.",
    gradient: "from-[#06b6d4]/8 to-[#06b6d4]/0",
    iconBg: "bg-cyan-100 text-cyan-500",
  },
  {
    icon: <MessageSquare size={26} />,
    title: "Direct Messaging",
    description:
      "Stay connected with your teachers. Ask follow-up questions, share files, and get guidance between sessions.",
    gradient: "from-[#8b5cf6]/8 to-[#8b5cf6]/0",
    iconBg: "bg-violet-100 text-violet-500",
  },
  {
    icon: <UserCheck size={26} />,
    title: "Expert Teacher Profiles",
    description:
      "Browse verified teacher profiles with ratings, reviews, and subject expertise to find your perfect match.",
    gradient: "from-[#10b981]/8 to-[#10b981]/0",
    iconBg: "bg-emerald-100 text-emerald-500",
  },
  {
    icon: <CreditCard size={26} />,
    title: "Secure Payments",
    description:
      "Pay for sessions safely and easily. Support for cards and mobile wallets with transparent pricing.",
    gradient: "from-[#f43f5e]/8 to-[#f43f5e]/0",
    iconBg: "bg-rose-100 text-rose-500",
  },
];

const FeaturesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#F9FBFC]" ref={ref}>
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-[#525FE1] font-semibold text-sm mb-3 tracking-widest uppercase"
        >
          Why Choose Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold text-[#2A2D34] text-center mb-4"
        >
          Everything you need to learn
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 text-base text-center max-w-xl mx-auto mb-16"
        >
          A complete e-learning ecosystem built for students and teachers who want real results.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(82,95,225,0.12)" }}
              className={`bg-gradient-to-br ${feature.gradient} bg-white border border-[#E8EAED] rounded-3xl p-7 cursor-default transition-shadow duration-300`}
            >
              <div
                className={`w-13 h-13 rounded-2xl flex items-center justify-center mb-5 ${feature.iconBg}`}
                style={{ width: 52, height: 52 }}
              >
                {feature.icon}
              </div>
              <h3 className="text-[#2A2D34] font-bold text-lg mb-3">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
