import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";


const achievements = [
  {
    title: "Patent Holder – ISL Bidirectional Translation System",
    image: "/achievements/patent.jpg",  // ✅ put patent image here
    issuer: "Indian Patent Office",
    date: "Dec 2024",
  },
  {
    title: "Patent Holder – Early Forest Fire Detection System",
    image: "/achievements/patent2.jpg",  // ✅ same or separate image
    issuer: "Indian Patent Office",
    date: "Dec 2024",
  },
  {
    title: "Best AI Learner Award (2023–24)",
    image: "/achievements/best_ai_learner_new.jpg",
    issuer: "KIET Group of Institutions",
    date: "Sep 2025",
  },
  {
    title: "Smart India Hackathon Finalist 2024",
    image: "/achievements/sih_new.jpg",
    issuer: "Government of India",
    date: "Nov 2024",
  },
  {
    title: "INNOTECH 2024 – Winner (Dept) & Runner-Up (Institute)",
    image: "/achievements/innotech_new.jpg",
    issuer: "KIET Group of Institutions",
    date: "Oct 2024",
  },
  {
    title: "IDEASURGE 2024 – Consolation Winner",
    image: "/achievements/ideasurge_new.jpg",
    issuer: "Sharda University",
    date: "Sep 2024",
  },
  {
    title: "Top 5 Performer – MIET Hackathon",
    image: "/achievements/mlsa.jpg",
    issuer: "MLSA MIET",
    date: "Apr 2024",
  },
  {
    title: "Quiz Winner-MLSA",
    image: "/achievements/quiz.jpg",
    issuer: "MLSA MIET",
    date: "Apr 2024",
  },
];


const AchievementsSection = () => {
  return (
    <section className="min-h-screen py-32 bg-[#04081A] px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Awards and Achievements
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {achievements.map((ach, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="rounded-xl overflow-hidden bg-gray-900 border border-gray-700 shadow-lg"
            >
              <img
                src={ach.image}
                alt={ach.title}
                className="w-full bg-black object-contain"
                style={{ maxHeight: "400px" }}
              />

              <div className="p-5 space-y-2">
                <h3 className="text-xl font-bold text-white">
                  {ach.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  Issued by {ach.issuer} <span className="text-gray-500">· {ach.date}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
