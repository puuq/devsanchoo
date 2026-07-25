"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";

const EXPERIENCE = [
  {
    company: "Independent Client Work",
    role: "Full Stack Developer",
    period: "2026",
    location: "Remote",
    details: [
      "Designed, built, and deployed production websites for SGT Productions and NepFace Production using Next.js, React, TypeScript, Tailwind CSS, forms, animation, authentication, and technical SEO.",
      "Built a private Next.js and PostgreSQL billing dashboard used across two branches, with role-based access, bill tracking, advance payments, and profit calculations.",
    ],
  },
  {
    company: "Cynthius Studios",
    role: "Contract Full Stack Developer",
    period: "Nov 2025 - Jun 2026",
    location: "Remote | UK",
    details: [
      "Delivered UI, APIs, authentication, database features, meeting management, and production fixes for MHS Media.",
      "Integrated Monday.com, Google Calendar, Fathom, OpenClaw, and other third-party services.",
      "Built admin features and database tables independently for Shridhar Lifeschool using Next.js and MariaDB.",
    ],
  },
  {
    company: "Growmore Digital Marketing",
    role: "Full Stack Developer",
    period: "Mar 2023 - Jul 2024",
    location: "Kathmandu, Nepal",
    details: [
      "Built responsive client websites with React, JavaScript, Node.js, Python/Django, HTML, and CSS.",
    ],
  },
  {
    company: "Mailsway Inc",
    role: "Frontend Developer",
    period: "Feb 2021 - 2022",
    location: "Remote",
    details: [
      "Developed responsive frontend functionality for a US-based B2B direct-mail and fulfillment website using React and Node.js.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 pixel-grid">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <BriefcaseBusiness className="text-indigo-400 h-6 w-6" />
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-indigo-300">
              Work history
            </p>
            <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
          </div>
        </div>

        <div className="relative border-l border-indigo-400/30 pl-6 md:pl-8 space-y-8">
          {EXPERIENCE.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.period}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              className="relative rounded-xl border border-border bg-background/70 p-5 backdrop-blur"
            >
              <span className="absolute -left-[2.05rem] md:-left-[2.55rem] top-7 h-3 w-3 rounded-full border-2 border-background bg-indigo-400" />
              <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{item.company}</h3>
                  <p className="text-indigo-300">{item.role}</p>
                </div>
                <div className="text-sm text-muted-foreground md:text-right">
                  <p>{item.period}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="text-indigo-400">-&gt;</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
