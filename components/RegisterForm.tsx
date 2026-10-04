"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Sparkles,
  User,
  Mail,
  GraduationCap,
} from "lucide-react";

import { Project } from "../data/projects";

type RegisterFormProps = {
  project: Project;
  onSuccess: (name: string) => void;
};

export default function RegisterForm({
  project,
  onSuccess,
}: RegisterFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [college, setCollege] = useState("");

  const isValid =
    name.trim() !== "" &&
    email.trim() !== "" &&
    college.trim() !== "";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid) return;

    onSuccess(name);
  };

  return (
    <section
      id="register"
      className="min-h-[80vh] scroll-mt-20 bg-[#F8FAFF] px-6 py-20 lg:px-10"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">

        {/* Left side */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
            <Lock size={16} />
            Challenge locked
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            Your project is ready.
          </h2>

          <p className="mt-5 max-w-lg text-lg leading-8 text-slate-500">
            Complete your details to unlock the full 60-minute AI
            Placement Sprint.
          </p>

          {/* Project card */}
          <div className="mt-8 rounded-3xl border border-violet-100 bg-white p-6 shadow-xl shadow-violet-100/60">

            <div className="flex items-start gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-3xl">
                {project.icon}
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-violet-500">
                  YOUR PROJECT
                </p>

                <h3 className="mt-1 text-xl font-black">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {project.description}
                </p>
              </div>

            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-600"
                >
                  {skill}
                </span>
              ))}
            </div>

          </div>
        </motion.div>

        {/* Registration form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-[30px] border border-slate-200 bg-white p-7 shadow-2xl shadow-slate-200/70 sm:p-9"
        >

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 text-white">
              <Sparkles size={20} />
            </div>

            <div>
              <h3 className="font-black">
                Unlock your challenge
              </h3>

              <p className="text-sm text-slate-400">
                Free • 60 minutes
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            {/* Name */}
            <Input
              icon={<User size={18} />}
              label="Your name"
              placeholder="Enter your name"
              value={name}
              onChange={setName}
            />

            {/* Email */}
            <Input
              icon={<Mail size={18} />}
              label="Email address"
              placeholder="you@example.com"
              type="email"
              value={email}
              onChange={setEmail}
            />

            {/* College */}
            <Input
              icon={<GraduationCap size={18} />}
              label="College / University"
              placeholder="Enter your college"
              value={college}
              onChange={setCollege}
            />

            <button
              type="submit"
              disabled={!isValid}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 py-4 font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Unlock My Challenge

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>

          </form>

          <div className="mt-6 space-y-2">

            <Benefit text="Your personalized AI project" />
            <Benefit text="60-minute guided challenge" />
            <Benefit text="AI-powered project evaluation" />
            <Benefit text="Shareable Project Passport" />

          </div>

          <p className="mt-6 text-center text-xs leading-5 text-slate-400">
            This prototype uses your details only to demonstrate
            the registration experience.
          </p>

        </motion.div>

      </div>
    </section>
  );
}

function Input({
  icon,
  label,
  placeholder,
  type = "text",
  value,
  onChange,
}: {
  icon: React.ReactNode;
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-bold text-slate-700">
        {label}
      </label>

      <div className="relative">

        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          {icon}
        </div>

        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-violet-400 focus:bg-white focus:ring-4 focus:ring-violet-50"
        />

      </div>
    </div>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-slate-500">
      <CheckCircle2
        size={16}
        className="text-emerald-500"
      />
      {text}
    </div>
  );
}