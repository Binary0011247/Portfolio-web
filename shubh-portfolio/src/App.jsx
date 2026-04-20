import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ExternalLink, Code2, Briefcase, GraduationCap, ShieldCheck, Award, Heart, Link as LinkIcon } from 'lucide-react';

// --- Custom Brand Icons (Since Lucide removed brand logos) ---
function GithubIcon({ size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 24 }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// --- Animation Variants ---
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const hoverCard = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: 0.2, ease: "easeInOut" } }
};

// --- Main Component ---
export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black text-slate-200 selection:bg-cyan-500 selection:text-white font-sans overflow-x-hidden">
      
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        
        {/* --- Hero Section --- */}
        <motion.header 
          initial="hidden" 
          animate="visible" 
          variants={staggerContainer}
          className="text-center mb-24"
        >
          <motion.div variants={fadeInUp} className="mb-4 inline-block">
            <span className="px-3 py-1 text-sm font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
              Open to Opportunities
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
            Hi, I'm <br className="md:hidden" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Shubh Gupta
            </span>
          </motion.h1>
          
          <motion.h2 variants={fadeInUp} className="text-xl md:text-2xl text-slate-400 font-light mb-8">
            Full Stack Developer | AI & Security Enthusiast
          </motion.h2>

          <motion.div variants={fadeInUp} className="flex justify-center gap-6 mb-10">
            <SocialIcon href="mailto:shubh.etw22@gmail.com" icon={<Mail />} label="Email" />
            <SocialIcon href="https://www.linkedin.com/in/shubh-gupta-453855300/" icon={<LinkedinIcon />} label="LinkedIn" />
            <SocialIcon href="https://github.com/Binary0011247" icon={<GithubIcon />} label="GitHub" />
            <SocialIcon href="tel:9997587234" icon={<Phone />} label="Phone" />
          </motion.div>

          <motion.p variants={fadeInUp} className="max-w-2xl mx-auto text-slate-400 leading-relaxed text-lg">
            Result-driven Computer Science professional focused on full-stack development, applied AI, and software security. Experienced in building scalable web applications, automating processes with LLMs, and analyzing smart contract security.
          </motion.p>
        </motion.header>

        {/* --- Experience Section --- */}
        <Section title="Work Experience" icon={<Briefcase className="text-cyan-400" />}>
          <div className="space-y-6">
            <ExperienceCard 
              role="Software Development Engineer Intern"
              company="Orbit Skilling Solutions"
              date="July 2025 – March 2026"
              githubLink="https://github.com/Binary0011247/lms-frontend" 
              certLink="https://drive.google.com/file/d/152XKscv_W4om7Z53vVpovrI6Z0AwMIu1/view?usp=sharing"
              points={[
                "Built an automated evaluation system for LSRW assessments using Azure Speech Services and OpenAI LLM.",
                "Designed an async evaluation pipeline with Celery and Redis handling 500+ concurrent submissions.",
                "Integrated Google Meet and Zoom with a unified service abstraction layer.",
                "Optimized database performance with PostgreSQL connection pooling and Redis caching layer."
              ]}
            />
            <ExperienceCard 
              role="Full Stack Web Development Intern"
              company="Infosys Springboard"
              date="Nov 2024 – Jan 2025"
              githubLink="https://github.com/Binary0011247/Voice-Based-Patient-Call-System__.git"
              certLink="https://drive.google.com/file/d/1jdX91fCY-2NoNduPEj_em4dwB6Om6EP8/view?usp=sharing"
              points={[
                "Engineered an AI-powered voice recognition system for patient inquiries, achieving 92% intent accuracy.",
                "Constructed a highly responsive mobile front-end using React Native (Lighthouse score of 90+).",
                "Designed a scalable backend with Node.js, Express.js, and MongoDB, achieving under 200ms average response time."
              ]}
            />
          </div>
        </Section>

        {/* --- Projects Section --- */}
        <Section title="Key Projects" icon={<Code2 className="text-cyan-400" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Real-Time PII Redaction Engine"
              tech="Python, FastAPI, spaCy, Ollama, phi3"
              githubLink="https://github.com/Binary0011247/LLM_Task.git"
              description="Full-stack app achieving >95% accuracy in detecting/sanitizing PII using a spaCy NER pipeline. Deployed local LLM ensuring complete data privacy with sub-500ms real-time paraphrasing latency."
            />
            <ProjectCard 
              title="Remote Patient Monitoring System"
              tech="React, Node.js, Express, Supabase, WebSockets"
              githubLink="https://github.com/Binary0011247/Nuclecare.git"
              description="Developed a comprehensive real-time patient monitoring platform. Implemented secure data transmission for health metrics and created a responsive dashboard for healthcare providers to track patient vitals efficiently."
            />
          </div>
        </Section>

        {/* --- Skills Section --- */}
        <Section title="Technical Skills" icon={<ShieldCheck className="text-cyan-400" />}>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap gap-3"
          >
            {[
              'C++', 'Python', 'Java', 'JavaScript', 'ReactJS', 'React Native', 'Node.js', 
              'FastAPI', 'MongoDB', 'PostgreSQL', 'Docker', 'Kubernetes', 'Redis', 'Celery', 
              'Nginx', 'Machine Learning', 'Generative AI (LLMs)', 'Solidity', 'Smart Contract Security'
            ].map((skill, index) => (
              <motion.span 
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(6, 182, 212, 0.2)' }}
                className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-sm text-cyan-100 cursor-default transition-colors duration-300"
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </Section>

        {/* --- Extracurricular Section --- */}
        <Section title="Extracurricular & Achievements" icon={<Award className="text-cyan-400" />}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div variants={hoverCard} initial="rest" whileHover="hover" className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl flex items-center gap-5 backdrop-blur-sm group cursor-default">
              <div className="p-3 bg-cyan-500/10 rounded-xl group-hover:bg-cyan-500/20 transition-colors">
                <Award className="text-cyan-400" size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">Case Study Winner</h3>
                <p className="text-slate-400 text-sm mt-1">IFQM (Indian Foundation for Quality Management)</p>
              </div>
            </motion.div>

            <motion.div variants={hoverCard} initial="rest" whileHover="hover" className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl flex items-center gap-5 backdrop-blur-sm group cursor-default">
              <div className="p-3 bg-pink-500/10 rounded-xl group-hover:bg-pink-500/20 transition-colors">
                <Heart className="text-pink-400" size={32} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-100">Social Work</h3>
                <p className="text-slate-400 text-sm mt-1">Active community volunteer and contributor</p>
              </div>
            </motion.div>
          </div>
        </Section>

        {/* --- Education Section --- */}
        <Section title="Education" icon={<GraduationCap className="text-cyan-400" />}>
          <motion.div variants={hoverCard} initial="rest" whileHover="hover" className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl backdrop-blur-sm">
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
              <h3 className="text-xl font-bold text-slate-100">SRM Institute Of Science and Technology</h3>
              <span className="text-cyan-400 text-sm font-medium mt-1 md:mt-0">Jul 2023 - Present</span>
            </div>
            <p className="text-slate-400">B.Tech in Computer Science and Engineering</p>
            <p className="text-cyan-300 mt-2 font-semibold">9.57/10 CGPA</p>
          </motion.div>
        </Section>

      </div>
    </div>
  );
}

// --- Helper Components ---

function SocialIcon({ href, icon, label }) {
  return (
    <motion.a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={label}
      whileHover={{ scale: 1.2, y: -5, color: '#22d3ee' }} 
      whileTap={{ scale: 0.9 }}
      className="text-slate-400 transition-colors duration-300"
    >
      {React.cloneElement(icon, { size: 28 })}
    </motion.a>
  );
}

function Section({ title, icon, children }) {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      className="mb-20"
    >
      <div className="flex items-center gap-3 mb-8 border-b border-slate-800 pb-4">
        {icon}
        <h2 className="text-3xl font-bold text-slate-100">{title}</h2>
      </div>
      {children}
    </motion.section>
  );
}

function ExperienceCard({ role, company, date, points, githubLink, certLink }) {
  return (
    <motion.div 
      variants={hoverCard}
      initial="rest"
      whileHover="hover"
      className="bg-slate-800/40 border border-slate-700/50 p-6 md:p-8 rounded-2xl backdrop-blur-sm relative"
    >
      <div className="flex flex-col md:flex-row justify-between md:items-start mb-4 gap-2">
        <div>
          <h3 className="text-xl font-bold text-slate-100">{role}</h3>
          <p className="text-cyan-400 font-medium">{company}</p>
          
          {/* GitHub & Certificate Links for Experience */}
          <div className="flex gap-4 mt-3 mb-2">
            {githubLink && githubLink !== "YOUR_LINK_HERE" && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                <GithubIcon size={16} /> GitHub
              </a>
            )}
            {certLink && certLink !== "YOUR_LINK_HERE" && (
              <a href={certLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-cyan-400 transition-colors">
                <LinkIcon size={16} /> Certificate
              </a>
            )}
          </div>
        </div>
        <span className="text-slate-400 text-sm px-3 py-1 bg-slate-900 rounded-full border border-slate-700 w-fit">
          {date}
        </span>
      </div>
      <ul className="space-y-3 mt-4">
        {points.map((point, index) => (
          <li key={index} className="flex items-start gap-3 text-slate-400">
            <span className="text-cyan-500 mt-1.5 text-xs">▹</span>
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ProjectCard({ title, tech, description, githubLink }) {
  return (
    <motion.div 
      variants={hoverCard}
      initial="rest"
      whileHover="hover"
      className="bg-slate-800/40 border border-slate-700/50 p-6 rounded-2xl flex flex-col h-full backdrop-blur-sm group"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
          {title}
        </h3>
        {/* GitHub Link for Project */}
        {githubLink && githubLink !== "YOUR_LINK_HERE" && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors" title="View Source">
            <GithubIcon size={22} />
          </a>
        )}
      </div>
      <p className="text-cyan-500/80 text-sm font-mono mb-4">{tech}</p>
      <p className="text-slate-400 leading-relaxed flex-grow">
        {description}
      </p>
    </motion.div>
  );
}