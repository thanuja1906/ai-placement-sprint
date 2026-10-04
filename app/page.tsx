"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Target,
  Trophy,
  Zap,
  CheckCircle2,
  Brain,
  Code2,
} from "lucide-react";
import GrowthChallenge from "../components/GrowthChallenge";
import ProjectPassport from "../components/ProjectPassport";
import ProjectEvaluation from "../components/ProjectEvaluation";
import SprintDashboard from "../components/SprintDashboard";
import ProjectDiscovery from "../components/ProjectDiscovery";
import RegisterForm from "../components/RegisterForm";
export default function Home() {
  const [selectedProject, setSelectedProject] =
  useState<import("../data/projects").Project | null>(null);

const [showRegistration, setShowRegistration] =
  useState(false);
  const [showDashboard, setShowDashboard] =
  useState(false);

const [studentName, setStudentName] =
  useState("");
  const [showEvaluation, setShowEvaluation] =
  useState(false);

const [placementScore, setPlacementScore] =
  useState<number | null>(null);
  const [showPassport, setShowPassport] =
  useState(false);
  return (
    <main className="min-h-screen overflow-hidden bg-[#F8FAFF] text-[#172033]">

      {/* Background decorations */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute right-[-100px] top-20 h-96 w-96 rounded-full bg-cyan-200/40 blur-3xl" />
        <div className="absolute bottom-[-150px] left-1/3 h-96 w-96 rounded-full bg-pink-200/30 blur-3xl" />
      </div>

      {/* Navbar */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">

        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-200">
            <Sparkles size={20} />
          </div>

          <div>
            <div className="text-lg font-bold tracking-tight">
              AI Placement Sprint
            </div>
            <div className="text-xs text-slate-500">
              Discover. Build. Prove.
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
         <a
  href="#how-it-works"
  className="transition hover:text-violet-600"
>
  How it works
</a>

<a
  href="#discover"
  className="transition hover:text-violet-600"
>
  Find My Project
</a>

<a
  href="#sprint"
  className="transition hover:text-violet-600"
>
  Sprint
</a>
        </div>

       <button
  onClick={() =>
    document
      .getElementById("discover")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  
>className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:pb-28 lg:pt-20"
  Start Sprint
</button>
      </nav>

      {/* Hero */}
      <section
  className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:pb-28 lg:pt-20"
>
        <div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-200 bg-white/80 px-4 py-2 text-sm font-semibold text-violet-700 shadow-sm backdrop-blur"
          >
            <Sparkles size={16} />
            Built for students who want proof, not just certificates
          </motion.div>

         <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="max-w-3xl text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
>
  Stop collecting tutorials.
  <br />
  Start collecting{" "}
  <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
    proof.
  </span>
</motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-7 max-w-xl text-lg leading-8 text-slate-600"
          >
           Build a placement-ready AI project in 60 minutes, get evaluated, and earn a
Project Passport you can actually show.
          </motion.p>

         {/* CTA */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.25 }}
  className="mt-9 flex flex-col gap-3 sm:flex-row"
>
  <button
    onClick={() =>
      document
        .getElementById("discover")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-4 font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-1 hover:shadow-2xl"
  >
    Find My 60-Minute Project
    <ArrowRight
      size={18}
      className="transition group-hover:translate-x-1"
    />
  </button>

  <button
  onClick={() =>
    document
      .getElementById("discover")
      ?.scrollIntoView({ behavior: "smooth" })
  }
  className="hidden rounded-full bg-violet-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-200 transition hover:-translate-y-0.5 hover:bg-violet-700 hover:shadow-xl sm:block"
>
  Start Sprint
</button>
</motion.div>
          {/* Quick benefits */}
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-emerald-500" />
              Free
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-emerald-500" />
              60 minutes
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-emerald-500" />
              Placement-focused
            </div>
          </div>
        </div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >

          {/* Floating card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative mx-auto max-w-md"
          >

            {/* Main passport */}
            <div className="overflow-hidden rounded-[30px] border border-white bg-white p-6 shadow-[0_25px_80px_rgba(91,72,170,0.18)]">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-500">
                    AI Project Passport
                  </p>

                  <h2 className="mt-2 text-2xl font-black">
                    AI Resume Analyzer
                  </h2>
                </div>

                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                  <Brain size={22} />
                </div>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3">

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">Difficulty</p>
                  <p className="mt-1 font-bold">Beginner</p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-400">Build time</p>
                  <p className="mt-1 font-bold">60 min</p>
                </div>

              </div>

              <div className="mt-4">
                <p className="text-xs font-semibold text-slate-400">
                  Skills you'll demonstrate
                </p>

                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-semibold text-violet-700">
                    Python
                  </span>

                  <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                    AI APIs
                  </span>

                  <span className="rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-semibold text-cyan-700">
                    Prompt Engineering
                  </span>
                </div>
              </div>

              {/* Score */}
              <div className="mt-6 rounded-2xl bg-gradient-to-r from-violet-600 to-blue-600 p-5 text-white">

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-white/70">
                      PLACEMENT SCORE
                    </p>

                    <p className="mt-1 text-4xl font-black">
                      84<span className="text-lg text-white/60">/100</span>
                    </p>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
                    <Trophy size={23} />
                  </div>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "84%" }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="h-full rounded-full bg-white"
                  />
                </div>

              </div>

              <div className="mt-5 flex items-center justify-between text-sm">
                <span className="font-semibold text-slate-500">
                  Placement relevance
                </span>

                <span className="font-bold text-emerald-600">
                  HIGH
                </span>
              </div>

            </div>

            {/* Floating mini card */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-7 -left-8 hidden rounded-2xl border border-white bg-white p-4 shadow-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
                  <Code2 size={19} />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Your next skill
                  </p>
                  <p className="text-sm font-bold">
                    AI + APIs
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating score card */}
            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-7 top-12 hidden rounded-2xl border border-white bg-white p-4 shadow-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                  <Target size={19} />
                </div>

                <div>
                  <p className="text-xs text-slate-400">
                    Goal
                  </p>
                  <p className="text-sm font-bold">
                    Placement
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </section>
      <ProjectDiscovery
  onUnlock={(project) => {
    setSelectedProject(project);
    setShowRegistration(true);

    setTimeout(() => {
      document
        .getElementById("register")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }}
/>
{showRegistration && selectedProject && (
  <RegisterForm
  project={selectedProject}
  onSuccess={(name) => {
  setStudentName(name);
  setShowRegistration(false);
  setShowDashboard(true);

  setTimeout(() => {
    document
      .getElementById("sprint")
      ?.scrollIntoView({ behavior: "smooth" });
  }, 100);
}}
/>
)}
{showDashboard && selectedProject && (
  <SprintDashboard
  project={selectedProject}
  studentName={studentName}
  onSubmit={() => {
    setShowDashboard(false);
    setShowEvaluation(true);

    setTimeout(() => {
      document
        .getElementById("evaluation")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }}
/>
)}
{showEvaluation && selectedProject && (
  <ProjectEvaluation
  project={selectedProject}
  studentName={studentName}
  onComplete={(score) => {
    setPlacementScore(score);
    setShowEvaluation(false);
    setShowPassport(true);

    setTimeout(() => {
      document
        .getElementById("passport")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }}
/>
)}
{showPassport &&
  selectedProject &&
  placementScore !== null && (
    <ProjectPassport
      project={selectedProject}
      studentName={studentName}
      score={placementScore}
      onRestart={() => {
        setShowPassport(false);
        setShowEvaluation(false);
        setShowDashboard(false);
        setShowRegistration(false);
        setSelectedProject(null);
        setPlacementScore(null);

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
    />
  )}
  {showPassport &&
  selectedProject &&
  placementScore !== null && (
    <GrowthChallenge
      studentName={studentName}
      projectTitle={selectedProject.title}
      score={placementScore}
    />
  )}
      {/* How it works */}
      <section
        id="how-it-works"
        className="border-t border-slate-200 bg-white/70 px-6 py-20 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-violet-600">
              How it works
            </p>

            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Discover. Build. Prove.
            </h2>

            <p className="mt-4 text-slate-500">
              One focused sprint that turns AI learning into something
              you can actually show.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            <Step
              number="01"
              icon={<Sparkles size={22} />}
              title="Discover"
             description="Tell us your branch, current level and placement goal."
              color="violet"
            />

            <Step
              number="02"
              icon={<Zap size={22} />}
              title="Build"
              description="Build a personalized AI project through a focused 60-minute sprint."
              color="blue"
            />

            <Step
              number="03"
              icon={<Trophy size={22} />}
              title="Prove"
              description="Get evaluated, earn a Placement Score and generate your Project Passport."
              color="cyan"
            />

          </div>
        </div>
      </section>
{/* Footer */}
<footer className="border-t border-slate-200 bg-white px-6 py-10 lg:px-10">
  <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

    <div>
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white">
          <Sparkles size={17} />
        </div>

        <div>
          <p className="font-black text-slate-800">
            AI Placement Sprint
          </p>

          <p className="text-xs text-slate-400">
            Discover. Build. Prove.
          </p>
        </div>
      </div>
    </div>

    <div className="text-sm text-slate-400">
      Built for final-year students • 2026
    </div>

  </div>
</footer>
    </main>
  );
}

function Step({
  number,
  icon,
  title,
  description,
  color,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: "violet" | "blue" | "cyan";
}) {
  const styles = {
    violet: "bg-violet-50 text-violet-600",
    blue: "bg-blue-50 text-blue-600",
    cyan: "bg-cyan-50 text-cyan-600",
  };

  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">

      <div className="flex items-center justify-between">
        <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${styles[color]}`}>
          {icon}
        </div>

        <span className="text-sm font-bold text-slate-300">
          {number}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-black">
        {title}
      </h3>

      <p className="mt-2 leading-7 text-slate-500">
        {description}
      </p>

    </div>
  );
}