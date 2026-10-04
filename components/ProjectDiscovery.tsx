"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  Clock3,
  Target,
  Lock,
} from "lucide-react";

import { projects, Project } from "../data/projects";

type Answers = {
  branch: string;
  level: string;
  goal: string;
};

export default function ProjectDiscovery({
  onUnlock,
}: {
  onUnlock: (project: Project) => void;
})  {
  const [step, setStep] = useState(1);

  const [answers, setAnswers] = useState<Answers>({
    branch: "",
    level: "",
    goal: "",
  });

  const [project, setProject] = useState<Project | null>(null);

  const updateAnswer = (key: keyof Answers, value: string) => {
    setAnswers((current) => ({
      ...current,
      [key]: value,
    }));
  };

  const generateProject = () => {
    const matches = projects.filter((item) => {
      const branchMatch =
        item.branches.includes(answers.branch) ||
        item.branches.includes("Other");

      const goalMatch = item.goals.includes(answers.goal);

      const levelMatch = item.level === answers.level;

      return branchMatch && goalMatch && levelMatch;
    });

    const fallback = projects.filter((item) =>
      item.goals.includes(answers.goal)
    );

    const selected =
      matches[0] ||
      fallback[0] ||
      projects[0];

    setProject(selected);
    setStep(4);
  };

  const canContinue = () => {
    if (step === 1) return answers.branch !== "";
    if (step === 2) return answers.level !== "";
    if (step === 3) return answers.goal !== "";

    return true;
  };

  return (
    <section
      id="discover"
      className="scroll-mt-20 bg-white px-6 py-24 lg:px-10"
    >
      <div className="mx-auto max-w-5xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
            <Sparkles size={16} />
            Personalize your sprint
          </div>

          <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
            Let's find your{" "}
            <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              AI project.
            </span>
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-500">
            Answer three quick questions. We'll match you with a
            project designed around your placement goal.
          </p>
        </div>

        {/* Progress */}
        {step < 4 && (
          <div className="mx-auto mt-10 max-w-xl">
            <div className="mb-3 flex justify-between text-xs font-semibold text-slate-400">
              <span>Question {step} of 3</span>
              <span>{Math.round((step / 3) * 100)}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-slate-100">
              <motion.div
                animate={{
                  width: `${(step / 3) * 100}%`,
                }}
                className="h-full rounded-full bg-gradient-to-r from-violet-600 to-blue-600"
              />
            </div>
          </div>
        )}

        {/* Question Card */}
        {step < 4 && (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mt-8 max-w-xl rounded-[28px] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-100 sm:p-9"
          >

            {step === 1 && (
              <>
                <p className="text-sm font-bold uppercase tracking-wider text-violet-600">
                  Step 01
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  What's your branch?
                </h3>

                <p className="mt-2 text-slate-500">
                  We'll use this to recommend projects relevant to your
                  background.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {[
                    "CSE / IT",
                    "ECE",
                    "EEE",
                    "Mechanical",
                    "Civil",
                    "Other",
                  ].map((item) => (
                    <Option
                      key={item}
                      label={item}
                      selected={answers.branch === item}
                      onClick={() => updateAnswer("branch", item)}
                    />
                  ))}
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                  Step 02
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  What's your current level?
                </h3>

                <p className="mt-2 text-slate-500">
                  No matter where you start, we'll find something
                  achievable in 60 minutes.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    {
                      title: "Beginner",
                      description: "I'm new to AI projects.",
                    },
                    {
                      title: "Intermediate",
                      description: "I've built a few projects before.",
                    },
                    {
                      title: "Advanced",
                      description: "I'm comfortable building technical projects.",
                    },
                  ].map((item) => (
                    <Option
                      key={item.title}
                      label={item.title}
                      description={item.description}
                      selected={answers.level === item.title}
                      onClick={() =>
                        updateAnswer("level", item.title)
                      }
                    />
                  ))}
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <p className="text-sm font-bold uppercase tracking-wider text-pink-600">
                  Step 03
                </p>

                <h3 className="mt-3 text-2xl font-black">
                  What's your main goal?
                </h3>

                <p className="mt-2 text-slate-500">
                  We'll prioritize projects that give you the most
                  relevant outcome.
                </p>

                <div className="mt-7 space-y-3">
                  {[
                    {
                      title: "Placement",
                      description:
                        "I want something useful for placement preparation.",
                    },
                    {
                      title: "Resume",
                      description:
                        "I want a project I can showcase on my resume.",
                    },
                    {
                      title: "Learn AI",
                      description:
                        "I want hands-on experience with AI.",
                    },
                  ].map((item) => (
                    <Option
                      key={item.title}
                      label={item.title}
                      description={item.description}
                      selected={answers.goal === item.title}
                      onClick={() =>
                        updateAnswer("goal", item.title)
                      }
                    />
                  ))}
                </div>
              </>
            )}

            <div className="mt-8 flex justify-between gap-3">

              {step > 1 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  className="flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 font-semibold text-slate-600 transition hover:bg-slate-50"
                >
                  <ArrowLeft size={17} />
                  Back
                </button>
              ) : (
                <div />
              )}

              <button
                disabled={!canContinue()}
                onClick={() => {
                  if (step === 3) {
                    generateProject();
                  } else {
                    setStep(step + 1);
                  }
                }}
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 font-bold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {step === 3 ? "Generate My Project" : "Continue"}
                <ArrowRight size={17} />
              </button>

            </div>
          </motion.div>
        )}

        {/* Project Result */}
        {step === 4 && project && (
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="mx-auto mt-10 max-w-3xl"
          >

            <div className="overflow-hidden rounded-[32px] border border-violet-100 bg-white shadow-2xl shadow-violet-100">

              {/* Header */}
              <div className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 p-8 text-white sm:p-10">

                <div className="flex items-start justify-between gap-5">

                  <div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
                      <Sparkles size={16} />
                      YOUR PROJECT PREVIEW
                    </div>

                    <h3 className="mt-3 text-3xl font-black sm:text-4xl">
                      {project.icon} {project.title}
                    </h3>
                  </div>

                  <div className="rounded-2xl bg-white/15 px-4 py-3 text-center backdrop-blur">
                    <div className="text-xs text-white/70">
                      TIME
                    </div>

                    <div className="mt-1 flex items-center gap-1 font-bold">
                      <Clock3 size={15} />
                      60 min
                    </div>
                  </div>

                </div>

              </div>

              {/* Details */}
              <div className="p-8 sm:p-10">

                <p className="text-lg leading-8 text-slate-600">
                  {project.description}
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">

                  <InfoCard
                    label="Difficulty"
                    value={project.level}
                  />

                  <InfoCard
                    label="Placement relevance"
                    value={project.relevance}
                  />

                </div>

                <div className="mt-7">

                  <p className="text-sm font-bold text-slate-400">
                    SKILLS YOU'LL DEMONSTRATE
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Locked benefits */}
                <div className="mt-8 rounded-2xl border border-dashed border-violet-200 bg-violet-50/50 p-6">

                  <div className="flex items-center gap-2 font-bold text-violet-800">
                    <Lock size={17} />
                    Register to unlock
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">

                    <Benefit text="Step-by-step build challenge" />
                    <Benefit text="AI project evaluation" />
                    <Benefit text="Placement Score" />
                    <Benefit text="Project Passport" />

                  </div>

                </div>

                <button
  onClick={() => onUnlock(project)}
  className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 py-4 font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-0.5"
>
  Unlock My 60-Minute Challenge
  <ArrowRight size={18} />
</button>

                <p className="mt-3 text-center text-xs text-slate-400">
                  Free • 60 minutes • Built for placement preparation
                </p>

              </div>

            </div>

          </motion.div>
        )}

      </div>
    </section>
  );
}

function Option({
  label,
  description,
  selected,
  onClick,
}: {
  label: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full rounded-2xl border p-4 text-left transition ${
        selected
          ? "border-violet-500 bg-violet-50 shadow-sm"
          : "border-slate-200 bg-white hover:border-violet-200 hover:bg-violet-50/40"
      }`}
    >
      <div className="flex items-center justify-between">

        <div>
          <p
            className={`font-bold ${
              selected ? "text-violet-700" : "text-slate-800"
            }`}
          >
            {label}
          </p>

          {description && (
            <p className="mt-1 text-sm text-slate-500">
              {description}
            </p>
          )}
        </div>

        {selected && (
          <CheckCircle2
            size={20}
            className="text-violet-600"
          />
        )}

      </div>
    </button>
  );
}

function InfoCard({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-slate-50 p-5">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-2 font-bold text-slate-800">
        {value}
      </p>
    </div>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
      <CheckCircle2 size={16} className="text-violet-500" />
      {text}
    </div>
  );
}