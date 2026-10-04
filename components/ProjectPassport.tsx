"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  ExternalLink,
  Share2,
  Sparkles,
  Trophy,
  Zap,
} from "lucide-react";
import { useState } from "react";

import { Project } from "../data/projects";

type ProjectPassportProps = {
  project: Project;
  studentName: string;
  score: number;
  onRestart: () => void;
};

export default function ProjectPassport({
  project,
  studentName,
  score,
  onRestart,
}: ProjectPassportProps) {
  const [copied, setCopied] = useState(false);

  const shareText = `I completed the AI Placement Sprint and scored ${score}/100 on my ${project.title} project!`;

  const copyPassport = async () => {
    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const sharePassport = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "My AI Project Passport",
          text: shareText,
        });
      } catch {
        // User cancelled sharing.
      }
    } else {
      await copyPassport();
    }
  };

  const scoreLabel =
    score >= 90
      ? "Exceptional"
      : score >= 80
        ? "Strong"
        : score >= 70
          ? "Good Start"
          : "Keep Building";

  return (
    <section
      id="passport"
      className="min-h-screen scroll-mt-20 bg-[#F8FAFF] px-6 py-20 lg:px-10"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">
            <Sparkles size={16} />
            Achievement unlocked
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Your{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              Project Passport
            </span>
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-500">
            A snapshot of what you built, what you demonstrated,
            and how placement-ready your project is.
          </p>
        </motion.div>

        {/* Passport */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 p-[2px] shadow-2xl shadow-violet-200">

            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border-[35px] border-white/10" />

            <div className="pointer-events-none absolute -bottom-28 -left-20 h-64 w-64 rounded-full border-[35px] border-white/10" />

            {/* Inner card */}
            <div className="relative overflow-hidden rounded-[34px] bg-white">

              {/* Passport header */}
              <div className="relative bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-7 sm:p-10">

                <div className="flex items-start justify-between gap-5">

                  <div className="flex items-center gap-3">

                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-lg">
                      <Sparkles size={21} />
                    </div>

                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-violet-600">
                        AI Placement Sprint
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-400">
                        Project Passport
                      </p>
                    </div>

                  </div>

                  <div className="flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-xs font-bold text-emerald-700">
                    <CheckCircle2 size={14} />
                    Sprint Verified
                  </div>

                </div>

                {/* Student */}
                <div className="mt-10">

                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    BUILDER
                  </p>

                  <h3 className="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                    {studentName}
                  </h3>

                </div>

              </div>

              {/* Main passport content */}
              <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_280px]">

                {/* Project */}
                <div>

                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-500">
                    PROJECT COMPLETED
                  </p>

                  <div className="mt-4 flex items-start gap-4">

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-3xl">
                      {project.icon}
                    </div>

                    <div>
                      <h4 className="text-2xl font-black text-slate-900">
                        {project.title}
                      </h4>

                      <p className="mt-2 max-w-xl leading-7 text-slate-500">
                        {project.description}
                      </p>
                    </div>

                  </div>

                  {/* Skills */}
                  <div className="mt-7">

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                      SKILLS DEMONSTRATED
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full bg-slate-50 px-4 py-2 text-sm font-bold text-slate-600"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Achievements */}
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">

                    <Achievement text="Completed 60-minute sprint" />

                    <Achievement text="Built a working project" />

                    <Achievement text="Demonstrated AI skills" />

                    <Achievement text="Received placement feedback" />

                  </div>

                </div>

                {/* Score */}
                <div className="rounded-[28px] bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 p-[1px]">

                  <div className="flex h-full flex-col items-center justify-center rounded-[27px] bg-white p-7 text-center">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                      <Trophy size={25} />
                    </div>

                    <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-slate-400">
                      Placement Score
                    </p>

                    <div className="mt-2">
                      <span className="text-6xl font-black text-slate-900">
                        {score}
                      </span>

                      <span className="text-xl font-bold text-slate-300">
                        /100
                      </span>
                    </div>

                    <div className="mt-3 rounded-full bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">
                      {scoreLabel}
                    </div>

                    <div className="mt-6 w-full">

                      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${score}%` }}
                          transition={{ duration: 1.2, delay: 0.3 }}
                          className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
                        />
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              {/* Passport footer */}
              <div className="border-t border-slate-100 bg-slate-50/70 px-7 py-5 sm:px-10">

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <Zap size={14} className="text-violet-500" />
                    DISCOVER • BUILD • PROVE
                  </div>

                  <p className="text-xs font-semibold text-slate-400">
                    AI Placement Sprint
                  </p>

                </div>

              </div>

            </div>

          </div>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mx-auto mt-8 max-w-4xl"
        >

          <div className="grid gap-3 sm:grid-cols-2">

            <button
              onClick={sharePassport}
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-4 font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-0.5"
            >
              <Share2 size={18} />
              Share Passport
            </button>

            <button
              onClick={copyPassport}
              className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 font-bold text-slate-700 shadow-sm transition hover:border-violet-200 hover:text-violet-600"
            >
              {copied ? (
                <>
                  <CheckCircle2 size={18} />
                  Copied!
                </>
              ) : (
                <>
                  <Copy size={18} />
                  Copy Achievement
                </>
              )}
            </button>

          </div>

          <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">

            <button
              onClick={onRestart}
              className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-slate-500 transition hover:bg-white hover:text-violet-600"
            >
              Start Another Sprint
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              className="flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-slate-500 transition hover:bg-white hover:text-violet-600"
            >
              Back to Home
              <ExternalLink size={16} />
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}

function Achievement({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 rounded-2xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600">
      <CheckCircle2
        size={16}
        className="shrink-0 text-emerald-500"
      />
      {text}
    </div>
  );
}