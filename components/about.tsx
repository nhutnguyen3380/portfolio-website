"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

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

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <section
      ref={ref}
      className="mb-16 max-w-[45rem] text-center leading-8 sm:mb-24 scroll-mt-28"
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <motion.p
        className="mb-3"
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={0}
      >
        I am a software engineer who is passionate about new products, problem solving, innovation, and working in teams. I am interested in solving new challenges and its creative demands as I push myself to explore new solutions.{" "}
        I began my software engineering journey in highchool and college. I enjoyed various computer science topic, math, and the challenges that comes with this field. I continued to take classes and got my Master's degree from the ASU 4+1 Program.{" "}
        <span className="italic"> I am always curious to learn more</span> and now as a graduate, I am looking forward to apply my skills to a work environment. My main programming languages are
        is{" "}
        <span className="font-medium">
          Java, Python, C/C++. 
        </span> I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software developer or a full stack developer.
      </motion.p>

      <motion.p
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        custom={1}
      >
        <span className="italic">When I'm not coding</span>, some of my hobbies are videogames, movies, anime, gym, concerts. I am always happy to connect!
      </motion.p>
    </section>
  );
}