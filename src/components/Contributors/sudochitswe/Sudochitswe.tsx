"use client";
/* eslint-disable @next/next/no-img-element */

import { motion, type Variants } from "motion/react";
import React from "react";
import { FaGithub, FaFacebook, FaEnvelope, FaLinkedin } from "react-icons/fa";
import { BsBrowserSafari, BsTerminal, BsBox, BsHddRack } from "react-icons/bs";
import {
  personalInfo,
  aboutData,
  skillsData,
  projectsData,
  experienceData,
} from "./data";

// ─── Animation Variants ─────────────────────────────────

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
};

// ─── Section Header ─────────────────────────────────────

function SectionHeader({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <span className="text-emerald-400">{icon}</span>
      <h2 className="text-lg sm:text-xl font-display font-bold text-zinc-100 whitespace-nowrap">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-emerald-500/20 to-transparent" />
    </div>
  );
}

// ─── Hero Section ───────────────────────────────────────

function HeroSection() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={stagger}
      className="text-center mb-14"
    >
      <motion.div variants={scaleIn} className="mb-5 inline-block">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-br from-green-600/30 via-green-500/10 to-green-400/20 rounded-full blur-md" />
          <div className="relative bg-black rounded-full p-1 border-2 border-green-500/40">
            <img
              src={personalInfo.avatar}
              alt={personalInfo.name}
              className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 bg-green-600 text-black text-[10px] font-bold px-2 py-0.5 rounded-full border-2 border-black">
            sudo
          </div>
        </div>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="text-3xl sm:text-4xl font-bold text-green-400 mb-1.5 font-mono"
      >
        <span className="text-zinc-500">root@</span>
        {personalInfo.name.replace(" ", "-").toLowerCase()}
        <span className="text-zinc-500">:</span>
        <span className="text-blue-400">~</span>
        <span className="text-zinc-500">$</span> whoami
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="text-green-500/70 text-sm tracking-wide mb-4 font-mono"
      >
        <span className="text-zinc-600">#</span> {personalInfo.title}
      </motion.p>

      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-2 mb-8">
        {personalInfo.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1.5 rounded-none bg-black border border-green-500/30 text-green-400 text-xs font-mono"
          >
            <span className="text-blue-400">export</span> SKILL_{i}=<span className="text-amber-400">
              &quot;{tag}&quot;
            </span>
          </span>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="relative max-w-2xl mx-auto bg-black/90 backdrop-blur-sm border border-green-500/30 rounded-none p-6 sm:p-8 text-left font-mono text-sm overflow-x-auto"
      >
        {/* Terminal content */}
        <div className="space-y-1">
          <div className="text-zinc-500">
            <span className="text-green-400">$</span> cat about.txt
          </div>
          <div className="text-green-300/90 leading-relaxed border-l-2 border-green-500/30 pl-4">
            {aboutData.description}
          </div>
          <div className="text-zinc-500">
            <span className="text-green-400 animate-pulse">▋</span>
          </div>
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3 mt-8">
        {[
          {
            href: personalInfo.social.github,
            icon: <FaGithub size={14} />,
          },
          {
            href: personalInfo.social.facebook,
            icon: <FaFacebook size={14} />,
          },
          {
            href: personalInfo.social.linkedin,
            icon: <FaLinkedin size={14} />,
          },
          {
            href: personalInfo.website,
            icon: <BsBrowserSafari size={14} />,
          },
        ].map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            target={link.href.startsWith("mailto") ? undefined : "_blank"}
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 px-3 py-2 rounded-none bg-black border border-green-500/30 text-green-400 text-[11px] font-mono hover:bg-green-500/10 hover:border-green-400/50 transition-all duration-200"
          >
            {link.icon}
            <span className="text-zinc-600">$</span>
            <span className="text-blue-400">curl</span>
            <span className="text-amber-400">{link.href}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}


function SkillsSection() {
  const skillIcons = [<BsTerminal key="backend" />, <BsHddRack key="database" />, <BsBox key="devops" />, <BsBrowserSafari key="frontend" />];
  
  return (
    <section className="mb-14">
      <SectionHeader title="./skills.sh" icon={<BsTerminal />} />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
      >
        {skillsData.categories.map((category, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="bg-black border border-green-500/20 rounded-none p-5 hover:border-green-400/40 transition-colors duration-200"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-green-400">{skillIcons[i]}</span>
              <h3 className="text-sm font-display font-semibold text-green-300 font-mono">
                {category.name}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, j) => (
                <span
                  key={j}
                  className="px-2.5 py-1 rounded-none bg-green-500/5 border border-green-500/20 text-green-400 text-[11px] font-mono hover:bg-green-500/15 hover:border-green-400/40 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}


function ProjectsSection() {
  return (
    <section className="mb-14">
      <SectionHeader title="./projects/" icon={<BsBrowserSafari />} />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="grid gap-4"
      >
        {projectsData.projects.map((project, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -2 }}
            className="group bg-black border border-green-500/20 rounded-none p-5 hover:border-green-400/40 transition-all duration-300"
          >
            <h3 className="text-[15px] font-display font-semibold text-green-300 mb-2 group-hover:text-green-200 transition-colors duration-200 flex items-center gap-2 font-mono">
              <span className="text-blue-400">./</span>
              {project.title.toLowerCase().replace(/\s+/g, "-")}
            </h3>

            <p className="text-zinc-500 text-sm leading-relaxed mb-3 font-mono">
              <span className="text-zinc-600">#</span> {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 font-mono">
              <span className="text-blue-400 text-[10px]">tech_stack</span>
              <span className="text-zinc-500 text-[10px]">=</span>
              <span className="text-zinc-500 text-[10px]">[</span>
              {project.tech.map((tech, j) => (
                <span
                  key={j}
                  className="text-amber-400 text-[10px]"
                >
                  &quot;{tech}&quot;{j < project.tech.length - 1 && <span className="text-zinc-500">, </span>}
                </span>
              ))}
              <span className="text-zinc-500 text-[10px]">]</span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}


function ExperienceTimeline() {
  return (
    <section>
      <SectionHeader title="/var/log/experience.log" icon={<BsHddRack />} />
      <motion.div
        initial="hidden"
        animate="visible"
        variants={stagger}
        className="relative ml-3 sm:ml-4 pl-7 sm:pl-8"
      >
        <div className="absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-green-500/50 via-green-500/30 to-transparent" />

        {experienceData.experiences.map((exp, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="relative mb-5 last:mb-0"
          >
            <div className="absolute -left-[1.85rem] sm:-left-[2.1rem] top-[18px] w-[9px] h-[9px] rounded-sm bg-green-500 border-2 border-black z-10" />

            <div className="bg-black border border-green-500/20 rounded-none p-4 sm:p-5 hover:border-green-400/40 transition-colors duration-200 font-mono">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-0.5 sm:gap-4 mb-1.5">
                <div className="min-w-0">
                  <h3 className="text-sm font-display font-semibold text-green-300">
                    <span className="text-zinc-600">[</span>
                    <span className="text-blue-400">INFO</span>
                    <span className="text-zinc-600">]</span> {exp.company}
                  </h3>
                  <p className="text-xs text-green-400/80">{exp.position}</p>
                </div>
                <span className="text-[11px] text-zinc-600 whitespace-nowrap flex-shrink-0">
                  {exp.date}
                </span>
              </div>

              {exp.description && (
                <p className="text-xs text-zinc-500 leading-relaxed mt-2">
                  {exp.description}
                </p>
              )}

            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}


const Sudochitswe: React.FC = () => {
  return (
    <div className="max-w-2xl mx-auto py-6 sm:py-10">
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceTimeline />
    </div>
  );
};

export default Sudochitswe;
