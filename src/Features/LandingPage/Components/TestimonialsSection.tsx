import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sara Mohamed",
    role: "Student · Grade 11",
    avatar: "S",
    avatarColor: "#525FE1",
    rating: 5,
    text: "This platform completely changed how I study. My math grades went from a C to an A+ in just two months. The live sessions feel like real classroom learning!",
  },
  {
    name: "Ahmed Khalil",
    role: "Teacher · Physics",
    avatar: "A",
    avatarColor: "#f97316",
    rating: 5,
    text: "As a teacher, managing sessions, tracking homework, and communicating with students has never been easier. The tools here are truly next-level.",
  },
  {
    name: "Nour Hassan",
    role: "Student · Grade 9",
    avatar: "N",
    avatarColor: "#10b981",
    rating: 5,
    text: "I love how I can find a teacher for any subject instantly. The quiz feature helps me test myself after every session. Highly recommended!",
  },
  {
    name: "Mohamed Salama",
    role: "Teacher · Mathematics",
    avatar: "M",
    avatarColor: "#8b5cf6",
    rating: 5,
    text: "I joined as a teacher 3 months ago and already have 60+ students. The payment system is transparent and the scheduling tool saves me so much time.",
  },
];

const TestimonialsSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visibleCards = [
    testimonials[current % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-8 md:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-[#525FE1] font-semibold text-sm mb-3 tracking-widest uppercase"
        >
          Testimonials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold text-[#2A2D34] text-center mb-4"
        >
          What our community says
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 text-base text-center max-w-md mx-auto mb-14"
        >
          Real stories from students and teachers who transformed their learning experience.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <AnimatePresence mode="popLayout">
            {visibleCards.map((t, i) => (
              <motion.div
                key={`${current}-${i}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="bg-[#F9FBFC] border border-[#E8EAED] rounded-3xl p-7 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, si) => (
                    <Star key={si} size={15} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="text-[#2A2D34] text-sm leading-relaxed flex-1">"{t.text}"</p>
                <div className="flex items-center gap-3 pt-2 border-t border-[#E8EAED]">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: t.avatarColor }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-[#2A2D34] font-bold text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3">
          <motion.button
            onClick={prev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 rounded-full border-2 border-[#D1D5DB] flex items-center justify-center text-[#2A2D34] hover:border-[#525FE1] hover:text-[#525FE1] transition-colors duration-300"
          >
            <ChevronLeft size={18} />
          </motion.button>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                i === current % testimonials.length
                  ? "bg-[#525FE1] w-6"
                  : "bg-[#D1D5DB]"
              }`}
            />
          ))}
          <motion.button
            onClick={next}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 rounded-full border-2 border-[#D1D5DB] flex items-center justify-center text-[#2A2D34] hover:border-[#525FE1] hover:text-[#525FE1] transition-colors duration-300"
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
