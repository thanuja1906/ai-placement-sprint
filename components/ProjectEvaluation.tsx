"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Link,
  Lightbulb,
  Sparkles,
  Target,
  Trophy,
  Upload,
} from "lucide-react";

import { Project } from "../data/projects";

type ProjectEvaluationProps = {
  project: Project;
  studentName?: string;
  onComplete: (score: number) => void;
};

export default function ProjectEvaluation({
  project,
  studentName,
  onComplete,
}: ProjectEvaluationProps) {
  const [githubUrl, setGithubUrl] = useState("");
  const [description, setDescription] = useState("");
  const [tools, setTools] = useState("");
  const [evaluating, setEvaluating] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const canSubmit =
    githubUrl.trim() !== "" &&
    description.trim() !== "" &&
    tools.trim() !== "";

  const evaluateProject = () => {
    if (!canSubmit) return;

    setEvaluating(true);

    setTimeout(() => {
      const calculatedScore = calculateScore(
        description,
        tools,
        githubUrl
      );

      setScore(calculatedScore);
      setEvaluating(false);
    }, 1800);
  };

  if (score !== null) {
    return (
      <EvaluationResult
        project={project}
        studentName={studentName}
        score={score}
        onContinue={() => onComplete(score)}
      />
    );
  }

  return (
    <section
      id="evaluation"
      className="min-h-screen scroll-mt-20 bg-[#F8FAFF] px-6 py-20 lg:px-10"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-bold text-violet-700">
            <Sparkles size={16} />
            Final step
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Show us what you{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              built.
            </span>
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-500">
            Submit your project and discover how placement-ready your
            project is.
          </p>

        </div>

        {/* Project summary */}
        <div className="mx-auto mt-10 max-w-3xl rounded-3xl border border-violet-100 bg-white p-6 shadow-lg shadow-violet-100/50">

          <div className="flex items-center gap-4">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-3xl">
              {project.icon}
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-violet-500">
                PROJECT TO EVALUATE
              </p>

              <h3 className="mt-1 text-xl font-black">
                {project.title}
              </h3>
            </div>

          </div>

        </div>

        {/* Submission form */}
        <div className="mx-auto mt-6 max-w-3xl rounded-[30px] border border-slate-200 bg-white p-7 shadow-xl sm:p-9">

          <div className="space-y-6">

            {/* GitHub */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                GitHub / Project URL
              </label>

              <div className="relative">

                <Link
                size={18}
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />
                <input
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/your-project"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-50"
                />

              </div>
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                What did you build?
              </label>

              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Briefly explain your solution..."
                rows={4}
                className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-50"
              />
            </div>

            {/* Tools */}
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">
                What AI tools / technologies did you use?
              </label>

              <div className="relative">

                <Code2
                  size={18}
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  value={tools}
                  onChange={(e) => setTools(e.target.value)}
                  placeholder="Python, OpenAI API, React..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-50"
                />

              </div>
            </div>

            {/* Evaluation criteria */}
            <div className="rounded-2xl bg-violet-50/60 p-5">

              <p className="text-sm font-bold text-violet-800">
                Your project will be evaluated on
              </p>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">

                <Criteria text="Problem understanding" />
                <Criteria text="AI implementation" />
                <Criteria text="Functionality" />
                <Criteria text="Technical implementation" />
                <Criteria text="Presentation" />

              </div>

            </div>

            <button
              onClick={evaluateProject}
              disabled={!canSubmit || evaluating}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 py-4 font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {evaluating ? (
                <>
                  <Sparkles size={18} className="animate-pulse" />
                  Evaluating your project...
                </>
              ) : (
                <>
                  <Upload size={18} />
                  Evaluate My Project
                  <ArrowRight size={18} />
                </>
              )}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}

function Criteria({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-600">
      <CheckCircle2 size={16} className="text-violet-500" />
      {text}
    </div>
  );
}

function calculateScore(
  description: string,
  tools: string,
  githubUrl: string
) {
  let score = 68;

  if (description.length > 80) score += 6;
  if (description.length > 160) score += 4;

  if (tools.split(",").length >= 2) score += 5;
  if (tools.length > 35) score += 3;

  if (
    githubUrl.includes("github.com") ||
    githubUrl.includes("gitlab.com")
  ) {
    score += 8;
  }

  return Math.min(score, 96);
}

function EvaluationResult({
  project,
  studentName,
  score,
  onContinue,
}: {
  project: Project;
  studentName?: string;
  score: number;
  onContinue: () => void;
}) {
  const breakdown = [
    {
      title: "Problem Understanding",
      score: Math.round(score * 0.2),
      max: 20,
      icon: <Target size={18} />,
    },
    {
      title: "AI Implementation",
      score: Math.round(score * 0.19),
      max: 20,
      icon: <Sparkles size={18} />,
    },
    {
      title: "Functionality",
      score: Math.round(score * 0.21),
      max: 20,
      icon: <CheckCircle2 size={18} />,
    },
    {
      title: "Technical Implementation",
      score: Math.round(score * 0.2),
      max: 20,
      icon: <Code2 size={18} />,
    },
    {
      title: "Presentation",
      score: Math.max(
        0,
        score -
          Math.round(score * 0.2) -
          Math.round(score * 0.19) -
          Math.round(score * 0.21) -
          Math.round(score * 0.2)
      ),
      max: 20,
      icon: <Trophy size={18} />,
    },
  ];

  return (
    <section
      id="evaluation"
      className="min-h-screen bg-[#F8FAFF] px-6 py-20 lg:px-10"
    >
      <div className="mx-auto max-w-5xl">

        {/* Score hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          className="overflow-hidden rounded-[35px] bg-gradient-to-br from-violet-600 via-blue-600 to-cyan-500 p-1 shadow-2xl shadow-violet-200"
        >
          <div className="rounded-[31px] bg-white p-8 text-center sm:p-12">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-lg">
              <Trophy size={30} />
            </div>

            <p className="mt-5 text-sm font-bold uppercase tracking-[0.2em] text-violet-600">
              {studentName
                ? `${studentName}'s placement score`
                : "Your placement score"}
            </p>

            <div className="mt-3">
              <span className="text-7xl font-black tracking-tight text-slate-900">
                {score}
              </span>

              <span className="text-2xl font-bold text-slate-300">
                /100
              </span>
            </div>

            <p className="mx-auto mt-3 max-w-lg text-slate-500">
              Your project shows strong potential. Here's where you're
              already doing well and where you can improve.
            </p>

            <div className="mx-auto mt-7 h-3 max-w-md overflow-hidden rounded-full bg-slate-100">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${score}%` }}
                transition={{ duration: 1.2 }}
                className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
              />
            </div>

          </div>
        </motion.div>

        {/* Breakdown */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {breakdown.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                {item.icon}
              </div>

              <p className="mt-4 text-xs font-semibold leading-5 text-slate-400">
                {item.title}
              </p>

              <p className="mt-2 text-2xl font-black text-slate-800">
                {item.score}
                <span className="text-sm text-slate-300">
                  /{item.max}
                </span>
              </p>

            </motion.div>
          ))}

        </div>

        {/* Feedback */}
        <div className="mt-8 grid gap-5 md:grid-cols-2">

          <div className="rounded-3xl border border-emerald-100 bg-emerald-50 p-7">

            <div className="flex items-center gap-2 font-bold text-emerald-700">
              <CheckCircle2 size={19} />
              What you did well
            </div>

            <p className="mt-4 leading-7 text-emerald-800/80">
              You completed a focused AI project and demonstrated
              practical problem-solving with relevant technologies.
            </p>

          </div>

          <div className="rounded-3xl border border-amber-100 bg-amber-50 p-7">

            <div className="flex items-center gap-2 font-bold text-amber-700">
              <Lightbulb size={19} />
              Your next improvement
            </div>

            <p className="mt-4 leading-7 text-amber-800/80">
              Add stronger error handling, improve the user experience
              and document your project clearly before showcasing it.
            </p>

          </div>

        </div>

        {/* Continue */}
        <div className="mt-8 text-center">

          <button
            onClick={onContinue}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-8 py-4 font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-0.5"
          >
            Generate My Project Passport
            <ArrowRight size={18} />
          </button>

        </div>

      </div>
    </section>
  );
}