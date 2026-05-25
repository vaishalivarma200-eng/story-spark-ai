import logo from "../../assets/logoNew.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  PenTool,
  BrainCircuit,
  Users,
  Github,
  Rocket,
  ArrowLeft,
  Wand2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay,
      ease: "easeOut",
    },
  }),
};

const features = [
  {
    icon: <Sparkles size={24} />,
    title: "Multiple Story Variations",
    description:
      "Generate multiple unique story outcomes from a single creative prompt.",
  },
  {
    icon: <BrainCircuit size={24} />,
    title: "AI-Powered Creativity",
    description:
      "Leverage intelligent AI assistance to spark ideas and overcome writer’s block.",
  },
  {
    icon: <PenTool size={24} />,
    title: "Creative Writing Support",
    description:
      "Perfect for writers, students, creators, and storytellers of all levels.",
  },
  {
    icon: <Users size={24} />,
    title: "Open Source Community",
    description:
      "Collaborate, contribute, and help shape the future of AI storytelling.",
  },
];

const AboutUs = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500/20 blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-center"
        >
          <motion.img
            src={logo}
            alt="StorySparkAI"
            className="h-20 sm:h-24 mx-auto mb-6"
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
          />

          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              StorySparkAI
            </span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-gray-400 text-lg leading-8">
            StorySparkAI is an open-source platform designed for creative minds
            to generate and share multiple story variations from a single
            prompt.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-blue-500/40"
            >
              <ArrowLeft size={18} />
              Back to Home
            </Link>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-700 hover:border-blue-500 transition-all duration-300 font-semibold bg-zinc-900/70"
            >
              <Github size={18} />
              View on GitHub
            </a>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.2}
          className="mt-28 grid md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <span className="text-blue-400 uppercase tracking-widest text-sm">
              Our Mission
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold mt-3 mb-6">
              Empowering Creativity Through AI
            </h2>

            <p className="text-gray-400 text-lg leading-8">
              StorySparkAI was built to help creators unlock their imagination
              effortlessly. We aim to provide writers and storytellers with an
              intuitive AI-powered environment where ideas can evolve into
              endless creative possibilities.
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-zinc-900/80 border border-zinc-800 rounded-3xl p-8 shadow-2xl backdrop-blur-sm"
          >
            <Rocket className="text-blue-400 mb-5" size={42} />

            <h3 className="text-2xl font-semibold mb-4">
              What Makes StorySparkAI Unique?
            </h3>

            <ul className="space-y-4 text-gray-400">
              <li>✨ Generate multiple stories instantly</li>
              <li>🤖 AI-powered storytelling assistance</li>
              <li>📚 Explore endless creative possibilities</li>
              <li>🌍 Open-source and community-driven</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
          className="mt-28"
        >
          <div className="text-center mb-14">
            <span className="text-blue-400 uppercase tracking-widest text-sm">
              Features
            </span>

            <h2 className="text-3xl sm:text-5xl font-bold mt-3">
              Everything You Need for Creative Storytelling
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group bg-zinc-900/70 border border-zinc-800 rounded-3xl p-7 hover:border-blue-500/50 hover:shadow-blue-500/10 hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>

                <p className="text-gray-400 leading-7">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Vision Section */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.6}
          className="mt-28"
        >
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-zinc-800 rounded-[32px] p-10 shadow-2xl text-center">
            <Wand2 size={50} className="mx-auto text-blue-400 mb-6" />

            <h2 className="text-3xl sm:text-4xl font-bold mb-5">Our Vision</h2>

            <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-8">
              We envision a world where storytelling becomes more accessible,
              collaborative, and limitless with AI. StorySparkAI aims to bridge
              creativity and technology, helping anyone transform simple ideas
              into compelling narratives.
            </p>
          </div>
        </motion.section>

        {/* Open Source Section */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.8}
          className="mt-28"
        >
          <div className="relative overflow-hidden rounded-[32px] border border-zinc-800 bg-gradient-to-r from-blue-500/10 via-zinc-900 to-cyan-500/10 p-10 text-center shadow-2xl">
            <div className="absolute inset-0 backdrop-blur-sm" />

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl font-bold mb-5">
                Open Source & Community Driven
              </h2>

              <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-8">
                StorySparkAI thrives through collaboration. Developers, writers,
                designers, and AI enthusiasts are welcome to contribute ideas,
                improvements, and innovations to help build the future of
                AI-powered storytelling.
              </p>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-all"
              >
                <Github size={18} />
                Contribute on GitHub
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutUs;
