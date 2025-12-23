// import HeroImg from "@/assets/images/hero.png";

// export default function About() {
//   return (
//     <>
//       <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
//         <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
//           <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
//             Developer, Creator, Innovator, Smarter
//           </h2>

//           <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
//             {/* Left side image */}
//             <div className="relative mb-6 sm:mb-0">
//               <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
//                 <img
//                   src={HeroImg}
//                   className="rounded-[15px] shadow block"
//                   alt="AI & ML Illustration"
//                   width={1207}
//                   height={929}
//                 />
//               </div>
//             </div>

//             {/* Right side content */}
//             <div className="relative space-y-4">
//               {/* Intro paragraph */}
//               <p className="text-gray-300">
//                 Hello! I’m <span className="font-semibold text-white">Shipra</span>, 
//                 a passionate AI & ML Engineer currently in my final year of 
//                 B.Tech (CSE – AI & ML) from India. I’ve mentored peers, led 
//                 workshops, and worked on projects that merge technology with 
//                 real-world impact. With a deep interest in applied intelligence 
//                 and innovation, I’m building solutions that make AI more 
//                 accessible and meaningful.
//               </p>

//               {/* Highlighted block */}
//               <div className="pt-6">
//                 <blockquote className="border-l-4 border-gray-300 pl-4">
//                   <p className="text-white">
//                     I’m an AI & ML Engineer driven by curiosity and innovation in 
//                     intelligent systems. Over the years, I’ve built impactful 
//                     projects in Machine Learning, Deep Learning, NLP, and Computer 
//                     Vision — from patented solutions like Early Forest Fire 
//                     Prediction and Signify (Sign Language to Text/Speech) to 
//                     advanced research in Malware Classification using CNNs. 
//                     My goal is to develop AI solutions that empower accessibility, 
//                     sustainability, and real-world decision-making.
//                   </p>

//                   <div className="mt-6 space-y-1">
//                     <cite className="block font-medium text-white">
//                       Shipra 
//                     </cite>
//                     <span className="text-gray-400 text-sm">
//                       AI & ML Engineer
//                     </span>
//                   </div>
//                 </blockquote>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

import HeroImg from "@/assets/images/hero.png";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 text-white bg-[#04081A]">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
          AI Full-Stack Engineer building intelligent, scalable systems
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
          {/* Left side image */}
          <div className="relative mb-6 sm:mb-0">
            <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
              <img
                src={HeroImg}
                className="rounded-[15px] shadow block"
                alt="Shipra – AI Full Stack Engineer"
                width={1207}
                height={929}
              />
            </div>
          </div>

          {/* Right side content */}
          <div className="relative space-y-4">
            <p className="text-gray-300">
              Hi, I’m <span className="font-semibold text-white">Shipra</span> — an
              <span className="text-white font-semibold"> AI Full-Stack Engineer </span>
              from India. I specialize in building end-to-end AI products that
              combine intelligent models with robust backend systems and clean,
              scalable frontends.
            </p>

            <p className="text-gray-300">
  My work focuses strongly on problem-solving, full-stack development, and system design.
  I build scalable web applications using the MERN stack, designing clean APIs, efficient
  backend architectures, and intuitive frontends. On top of this foundation, I integrate
  AI & ML capabilities including <span className="text-white">Machine Learning</span>,{" "}
  <span className="text-white">Deep Learning</span>,{" "}
  <span className="text-white">NLP</span>, and{" "}
  <span className="text-white">Computer Vision</span>to create intelligent, real-world
  solutions. From AI-powered dashboards to production-ready RAG chatbots, I enjoy turning
  complex ideas into reliable, impactful systems.
</p>


            {/* Highlighted block */}
            <div className="pt-6">
              <blockquote className="border-l-4 border-gray-300 pl-4">
                <p className="text-white">
                  I focus on building intelligent systems end-to-end — designing
                  ML pipelines, deploying models, and integrating them with
                  scalable backends and user-friendly frontends. I’ve worked on
                  projects involving RAG-based chatbots, real-time detection
                  systems, e-waste management platforms, and AI-driven analytics.
                  My goal is to create AI products that are not just powerful,
                  but practical, reliable, and production-ready.
                </p>

                <div className="mt-6 space-y-1">
                  <cite className="block font-medium text-white">
                    Shipra
                  </cite>
                  <span className="text-gray-400 text-sm">
                    AI Full-Stack Engineer
                  </span>
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
