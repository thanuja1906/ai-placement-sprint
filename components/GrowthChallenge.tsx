"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Copy,
  Gift,
  Send,
  Share2,
  Sparkles,
  Trophy,
  Users,
  Zap,
} from "lucide-react";

type GrowthChallengeProps = {
  studentName: string;
  projectTitle: string;
  score: number;
};

export default function GrowthChallenge({
  studentName,
  projectTitle,
  score,
}: GrowthChallengeProps) {
  const [copied, setCopied] = useState(false);
  const [challenged, setChallenged] = useState(false);

  const challengeText =
    `I just completed the AI Placement Sprint and scored ${score}/100 on ${projectTitle}. Can you beat my score? 🚀`;

  const copyChallenge = async () => {
    try {
      await navigator.clipboard.writeText(challengeText);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setCopied(false);
    }
  };

  const shareChallenge = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Can you beat my score?",
          text: challengeText,
        });

        setChallenged(true);
      } catch {
        // User cancelled sharing.
      }
    } else {
      await copyChallenge();
      setChallenged(true);
    }
  };

  return (
    <section className="bg-white px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-5xl">

        {/* Main growth card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-[34px] border border-violet-100 bg-gradient-to-br from-violet-50 via-white to-cyan-50 p-8 shadow-xl shadow-violet-100/50 sm:p-10"
        >

          {/* Decorative background */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-violet-200/30 blur-3xl" />

          <div className="relative">

            {/* Header */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

              <div>

                <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-violet-700 shadow-sm">
                  <Zap size={15} />
                  Growth challenge unlocked
                </div>

                <h2 className="mt-5 max-w-2xl text-3xl font-black tracking-tight sm:text-4xl">
                  Can someone in your class{" "}
                  <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                    beat your score?
                  </span>
                </h2>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-500">
                  Challenge a friend to complete their own AI project
                  sprint and see who builds the stronger project.
                </p>

              </div>

              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white text-violet-600 shadow-lg">
                <Trophy size={28} />
              </div>

            </div>

            {/* Score comparison */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">

              <ScoreBox
                icon={<Trophy size={18} />}
                label="Your score"
                value={`${score}/100`}
              />

              <ScoreBox
                icon={<Users size={18} />}
                label="Friends challenged"
                value="0"
              />

              <ScoreBox
                icon={<Sparkles size={18} />}
                label="Projects built"
                value="1"
              />

            </div>

            {/* Challenge message */}
            <div className="mt-7 rounded-3xl border border-white bg-white/80 p-6 shadow-sm">

              <p className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
                YOUR CHALLENGE MESSAGE
              </p>

              <p className="mt-3 text-lg font-bold leading-8 text-slate-700">
                "{challengeText}"
              </p>

            </div>

            {/* Actions */}
            <div className="mt-6 grid gap-3 sm:grid-cols-2">

              <button
                onClick={shareChallenge}
                className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-4 font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-0.5"
              >
                {challenged ? (
                  <>
                    <CheckCircle2 size={18} />
                    Challenge Sent
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Challenge a Friend
                  </>
                )}
              </button>

              <button
                onClick={copyChallenge}
                className="flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-4 font-bold text-slate-700 transition hover:border-violet-200 hover:text-violet-600"
              >
                {copied ? (
                  <>
                    <CheckCircle2 size={18} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={18} />
                    Copy Challenge
                  </>
                )}
              </button>

            </div>

            {/* Referral explanation */}
            <div className="mt-7 flex items-start gap-3 rounded-2xl bg-white/70 p-5">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Gift size={18} />
              </div>

              <div>
                <p className="font-bold text-slate-800">
                  Bring your squad in
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Every friend who completes a sprint becomes another
                  project builder in your placement network.
                </p>
              </div>

            </div>

          </div>

        </motion.div>

        {/* Growth loop */}
        <div className="mt-8 grid gap-4 md:grid-cols-3">

          <GrowthStep
            number="01"
            title="Build"
            text="Complete your personalized AI project."
          />

          <GrowthStep
            number="02"
            title="Prove"
            text="Get your Placement Score and Passport."
          />

          <GrowthStep
            number="03"
            title="Challenge"
            text="Invite friends to beat your score."
          />

        </div>

      </div>
    </section>
  );
}

function ScoreBox({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white bg-white/80 p-5 shadow-sm">

      <div className="flex items-center gap-2 text-violet-600">
        {icon}
        <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {label}
        </span>
      </div>

      <p className="mt-3 text-2xl font-black text-slate-800">
        {value}
      </p>

    </div>
  );
}

function GrowthStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

      <span className="text-xs font-black text-violet-500">
        {number}
      </span>

      <h3 className="mt-4 text-xl font-black">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">
        {text}
      </p>

      <div className="mt-5 flex items-center gap-1 text-sm font-bold text-violet-600">
        {title === "Challenge" ? (
          <>
            Invite → <ArrowRight size={15} />
          </>
        ) : (
          <>
            Complete → <ArrowRight size={15} />
          </>
        )}
      </div>

    </div>
  );
}