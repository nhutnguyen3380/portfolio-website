"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-16 max-w-[53rem] scroll-mt-28 text-center sm:mb-24"
    >
      <SectionHeading>My skills</SectionHeading>
      <motion.p
        className="mx-auto mb-8 max-w-[38rem] text-sm text-gray-600 dark:text-gray-300"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={0}
      >
        These skills come from my ASU software engineering coursework, my current role at Sparton, my internship at Hanwha QCells, and hands-on full-stack project work.
      </motion.p>

      <div className="flex flex-col gap-6 text-left">
        {skillsData.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            className="rounded-3xl border border-black/10 bg-white/90 p-6 shadow-sm dark:border-white/10 dark:bg-white/5"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={groupIndex + 1}
          >
            <h3 className="mb-4 text-base font-semibold uppercase tracking-[0.24em] text-gray-600 dark:text-gray-200">
              {group.category}
            </h3>
            <ul className="flex flex-wrap gap-3 text-sm text-gray-800 dark:text-white/80">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full bg-gray-100 px-3 py-2 dark:bg-white/10"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}