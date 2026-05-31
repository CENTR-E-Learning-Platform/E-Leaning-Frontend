import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const subjects = [
  { label: "Mathematics", emoji: "➕" },
  { label: "Physics", emoji: "⚛️" },
  { label: "Chemistry", emoji: "🧪" },
  { label: "Biology", emoji: "🧬" },
  { label: "English", emoji: "📝" },
  { label: "Arabic", emoji: "🌙" },
  { label: "History", emoji: "🏛️" },
  { label: "Geography", emoji: "🌍" },
  { label: "Computer Science", emoji: "💻" },
  { label: "Economics", emoji: "📈" },
  { label: "Philosophy", emoji: "🧠" },
  { label: "Art", emoji: "🎨" },
];

const SubjectsSection = () => {
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
          Explore
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-extrabold text-[#2A2D34] text-center mb-4"
        >
          Popular Subjects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-500 text-base text-center max-w-md mx-auto mb-14"
        >
          From sciences to arts — find teachers in every subject you need.
        </motion.p>

        <div className="flex flex-wrap justify-center gap-4">
          {subjects.map((subject, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i, ease: "easeOut" }}
              whileHover={{
                scale: 1.08,
                y: -3,
                backgroundColor: "#525FE1",
                color: "#ffffff",
              }}
              className="flex items-center gap-2 px-5 py-3 bg-white border border-[#E8EAED] rounded-full shadow-sm cursor-pointer transition-colors duration-200"
              style={{ color: "#2A2D34" }}
            >
              <span className="text-lg">{subject.emoji}</span>
              <span className="font-semibold text-sm">{subject.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubjectsSection;
