"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a software engineer who is passionate about new products, problem solving, innovation, and working in teams. I am interested in solving new challenges and its creative demands as I push myself to explore new solutions. s{" "}
        I began my software engineering journey in highchool and college. I enjoyed various computer science topic, math, and the challenges that comes with this field. I continued to take classes and got my Master’s degree from the ASU 4+1 Program.{" "}
        <span className="italic"> I am always curious to learn more</span> and now as a graduate, I am looking forward to apply my skills to a work environment. My main programming languages are
        is{" "}
        <span className="font-medium">
          Java, Python, C/C++
        </span>I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, some of my hobbies are videogames, movies, anime, gym, concerts. I am always happy to connect!
      </p>
    </motion.section>
  );
}