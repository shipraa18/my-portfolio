import React from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";


const achievements = [
  {
    title: "Runner-Up – Phase 1, IEEE Hackathon (IEEE Sustainable for Humanity 2024)",
    image: "/achievements/ieee.jpg",
    issuer: "IEEE",
    date: "2024",
  },
  {
    title: "Departmental Winner – InnoTech Technical Competition (150+ Participants)",
    image: "/achievements/innotech.jpg",
    issuer: "KIET Group of Institutions",
    date: "2024",
  },
  {
    title: "Secured 2nd Position – Inter-Institutional Major Project Workshop",
    image: "/achievements/aimlds.jpg",
    issuer: "Inter-Institutional Event",
    date: "2024",
  },
  {
    title: "AWS Certified Cloud Practitioner",
    image: "/achievements/aws.png",
    issuer: "Amazon Web Services (AWS)",
    date: "2025",
  },
  {
    title: "Qualified GATE 2025",
    image: "/achievements/gate.png",
    issuer: "Indian Institute of Technology (IIT)",
    date: "2025",
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
