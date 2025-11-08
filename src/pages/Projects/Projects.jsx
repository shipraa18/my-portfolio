import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "Indian Sign Language to Text/Speech",
    description:
      "An AI-powered real-time ISL gesture translator converting 20 Indian Sign Language gestures into text & speech using TensorFlow, LSTM, OpenCV and CNN architectures.",
    techStack: ["TensorFlow", "LSTM", "OpenCV", "CNN", "Keras", "Python", "NLP"],
    color: "#5196fd",
    githubLink: "https://github.com/starkhushi/Signify",
  },
  {
    title: "Tabular Question Answering (TAPAS + Gemini)",
    description:
      "LLM-powered QA system answering natural-language queries on CSV/Relational data using TAPAS + Gemini Flash achieving 85%+ accuracy and 2x faster insights.",
    techStack: ["TAPAS", "Gemini", "Python", "Pandas", "NumPy", "Streamlit"],
    color: "#8f89ff",
    githubLink: "https://github.com/starkhushi/Data-Question-Answering",
  },
  {
    title: "Intelligent Multi-Agent Medical Appointment Scheduler",
    description:
      "Multi-agent scheduler using Langchain + LangGraph with Google Calendar API, Twilio & SendGrid for automated booking, conflict detection & notifications.",
    techStack: [
      "LangChain",
      "LangGraph",
      "Python",
      "Google Calendar API",
      "Twilio",
      "SendGrid",
      "SQLAlchemy",
    ],
    color: "#c651fd",
    githubLink: "https://github.com/starkhushi/Raga_AI_Task",
  },
  {
    title: "ASR Model Fine-Tuning (Whisper Small - Hindi)",
    description:
      "Fine-tuned Whisper Small for Hindi ASR using 10+ hours dataset. Improved WER via optimized preprocessing, metadata extraction & training pipeline.",
    techStack: [
      "Whisper",
      "HuggingFace",
      "Transformers",
      "Librosa",
      "Python",
      "Datasets",
    ],
    color: "#ed649e",
    githubLink: "https://github.com/starkhushi/Josh_Talks_task",
  },
  {
    title: "Malware Classification using CNN Ensembles",
    description:
      "Research project improving malware image classification with CNN architectures (ResNet50, DenseNet169, EfficientNetB4, VGG16) using custom loss, BN, L2 & callbacks.",
    techStack: [
      "CNN",
      "Keras",
      "ResNet",
      "DenseNet",
      "EfficientNet",
      "VGG16",
      "Python",
    ],
    color: "#e93939",
    githubLink: "https://github.com/starkhushi/Malware-Classification",
  },
  {
    title: "Early Forest Fire Prediction (IoT + ML)",
    description:
      "IoT + ML system predicting forest fires using sensors, ML models & real-time communication pipelines to overcome limitations of satellite and LIDAR systems.",
    techStack: ["IoT", "ML Models", "Python", "Sensors", "WSN", "Real-Time Systems"],
    color: "#39a3e9",
    githubLink:
      "https://github.com/starkhushi/Early-Forest-fire-Prediction-and-Detection",
  },
  {
    title: "Text Summarizer (NLP Pipeline)",
    description:
      "Python NLP summarizer for condensing long documents into clean summaries using extractive & abstractive NLP techniques.",
    techStack: ["Python", "NLP", "NLTK", "Transformers", "Summarization"],
    color: "#a339e9",
    githubLink: "https://github.com/starkhushi/Text-Summarizer",
  },
  {
    title: "Hallucination Detection in RAG Dataset",
    description:
      "Detects hallucination using semantic similarity, MiniLM embeddings, context adherence & RAG dataset processing.",
    techStack: [
      "SentenceTransformers",
      "Cosine Similarity",
      "Python",
      "Embeddings",
      "RAG",
    ],
    color: "#39e9d2",
    githubLink: "https://github.com/starkhushi/QA_task",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                title={project.title}
                color={project.color}
                description={project.description}
                techStack={project.techStack}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  techStack,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
      >
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">

          {/* ✅ TECH STACK BANNER */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] flex flex-col items-center justify-center bg-zinc-800 px-6 py-4">
            <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
              {title}
            </h1>

            <div className="flex flex-wrap justify-center gap-2">
              {techStack.map((t, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs md:text-sm bg-black/30 border border-gray-700 rounded-full text-gray-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ✅ DESCRIPTION + GITHUB */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3">
                {title}
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                {description}
              </p>
            </div>

            <div className="mt-6">
              <div className="w-full h-[1px] bg-gray-800 mb-4" />

              {/* ✅ GitHub Link */}
              <motion.a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={color}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19 2.77 5.07 5.07 0 0 0 18.91 0S17.73.35 15 2.35a13.38 13.38 0 0 0-6 0C6.28.35 5.1 0 5.1 0A5.07 5.07 0 0 0 5 2.77 5.44 5.44 0 0 0 3.5 6.52c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V24" />
                </svg>
                <span className="text-sm font-medium" style={{ color }}>
                  GitHub
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired,
};
