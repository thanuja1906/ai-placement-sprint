"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Code2,
  FileText,
  Play,
  Sparkles,
  Target,
  Trophy,
  Upload,
  Zap,
} from "lucide-react";

import { Project } from "../data/projects";

type SprintDashboardProps = {
  project: Project;
  studentName?: string;
  onSubmit: () => void;
};

export default function SprintDashboard({
  project,
  studentName,
  onSubmit,
}: SprintDashboardProps) {
  const [started, setStarted] = useState(false);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const steps = [
    {
      number: 1,
      title: "Understand",
      description: "Understand the problem and expected outcome.",
      icon: <FileText size={19} />,
    },
    {
      number: 2,
      title: "Build",
      description: "Create your AI-powered solution.",
      icon: <Code2 size={19} />,
    },
    {
      number: 3,
      title: "Test",
      description: "Try your project with sample inputs.",
      icon: <Target size={19} />,
    },
    {
      number: 4,
      title: "Submit",
      description: "Submit your project for evaluation.",
      icon: <Trophy size={19} />,
    },
  ];

  const toggleStep = (number: number) => {
    setCompletedSteps((current) =>
      current.includes(number)
        ? current.filter((item) => item !== number)
        : [...current, number]
    );
  };

  const progress = Math.round(
    (completedSteps.length / steps.length) * 100
  );

  return (
    <section
      id="sprint"
      className="min-h-screen scroll-mt-20 bg-[#F8FAFF] px-6 py-20 lg:px-10"
    >
      <div className="mx-auto max-w-7xl">

        {/* Top heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex flex-wrap items-center justify-between gap-5">

            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                <CheckCircle2 size={16} />
                Challenge unlocked
              </div>

              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                Your AI Placement Sprint
              </h2>

              <p className="mt-3 text-lg text-slate-500">
                {studentName
                  ? `Ready to build, ${studentName}?`
                  : "Ready to build something you can show?"}
              </p>
            </div>

            {/* Timer */}
            <div className="rounded-3xl border border-violet-100 bg-white px-6 py-5 shadow-lg shadow-violet-100/60">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                  <Clock3 size={21} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Sprint time
                  </p>

                  <p className="mt-1 text-2xl font-black text-slate-800">
                    60:00
                  </p>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Project Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-10 overflow-hidden rounded-[32px] bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 p-[1px] shadow-2xl shadow-violet-100"
        >
          <div className="rounded-[31px] bg-white p-7 sm:p-9">

            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

              <div className="max-w-3xl">

                <div className="flex items-center gap-2 text-sm font-bold text-violet-600">
                  <Sparkles size={17} />
                  YOUR AI MISSION
                </div>

                <div className="mt-4 flex items-start gap-4">

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-50 text-3xl">
                    {project.icon}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black sm:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-500">
                      {project.description}
                    </p>
                  </div>

                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>

              <div className="shrink-0 lg:w-52">

                {!started ? (
                  <button
                    onClick={() => setStarted(true)}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-4 font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-1"
                  >
                    <Play size={18} />
                    Start Sprint
                  </button>
                ) : (
                  <div className="rounded-2xl bg-emerald-50 p-4 text-center">
                    <div className="flex items-center justify-center gap-2 text-sm font-bold text-emerald-700">
                      <Zap size={16} />
                      Sprint started
                    </div>

                    <p className="mt-1 text-xs text-emerald-600">
                      Let's build.
                    </p>
                  </div>
                )}

              </div>

            </div>

          </div>
        </motion.div>

        {/* Progress */}
        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm font-bold text-slate-800">
                Your progress
              </p>

              <p className="mt-1 text-xs text-slate-400">
                Complete each stage before submitting.
              </p>
            </div>

            <p className="text-lg font-black text-violet-600">
              {progress}%
            </p>

          </div>

          <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
            <motion.div
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.4 }}
              className="h-full rounded-full bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500"
            />
          </div>

        </div>

        {/* Steps */}
        <div className="mt-6 grid gap-4 lg:grid-cols-4">

          {steps.map((step) => {
            const completed = completedSteps.includes(step.number);

            return (
              <motion.button
                key={step.number}
                whileHover={{ y: -3 }}
                onClick={() => toggleStep(step.number)}
                className={`rounded-3xl border p-6 text-left transition ${
                  completed
                    ? "border-emerald-200 bg-emerald-50"
                    : "border-slate-200 bg-white hover:border-violet-200 hover:shadow-lg"
                }`}
              >

                <div className="flex items-center justify-between">

                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-2xl ${
                      completed
                        ? "bg-emerald-100 text-emerald-600"
                        : "bg-violet-50 text-violet-600"
                    }`}
                  >
                    {completed ? (
                      <CheckCircle2 size={20} />
                    ) : (
                      step.icon
                    )}
                  </div>

                  <span className="text-xs font-black text-slate-300">
                    0{step.number}
                  </span>

                </div>

                <h3 className="mt-6 text-lg font-black">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {step.description}
                </p>

                <p
                  className={`mt-5 text-xs font-bold ${
                    completed
                      ? "text-emerald-600"
                      : "text-violet-600"
                  }`}
                >
                  {completed ? "Completed ✓" : "Mark as complete →"}
                </p>

              </motion.button>
            );
          })}

        </div>

        {/* Bottom submission card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 rounded-[30px] border border-slate-200 bg-white p-7 shadow-sm sm:p-9"
        >

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-violet-600">
                <Upload size={17} />
                READY TO SUBMIT?
              </div>

              <h3 className="mt-2 text-2xl font-black">
                Show us what you built.
              </h3>

              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                Once you complete the sprint, submit your project for
                AI-powered evaluation and receive your Placement Score.
              </p>
            </div>

            <button
              onClick={onSubmit}
              disabled={completedSteps.length < 4}
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Submit Project
              <ArrowRight size={18} />
            </button>

          </div>

          {completedSteps.length < 4 && (
            <p className="mt-4 text-xs font-medium text-slate-400">
              Complete all four sprint stages to unlock submission.
            </p>
          )}

        </motion.div>

      </div>
    </section>
  );
}