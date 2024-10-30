import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import qcells from "@/public/qcells.webp"
import userinterface from "@/public/userinterface.png"
import movies from "@/public/movies.webp"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Bachelor's Degree in Computer Science @ ASU",
    location: "Tempe, AZ",
    description:
      "I graduated from ASU in 2023 with a bachelor's degree in Computer Science with a 3.76 / 4.0 GPA.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Software Engineer Intern @ Hanwha QCells",
    location: "Tempe, AZ",
    description:
      "I worked as a software engineer intern at Hanwha QCells and worked on a project that involves Java Springboot.",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
  {
    title: "Master's Degree in Computer Science @ ASU",
    location: "Tempe, AZ",
    description:
      "Graduated from in 2024 with a master's degree in Computer Science. I took several high level classes such as Machine Learning, Mobile Computing, Distributed Database Management. I am open to full time software engineer opportunities!",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Qcells",
    description:
      "Developed a robust API server using Spring Boot Java framework and Postman API that facilitated efficient data exchange between a SQL database and a third-party system",
    tags: ["Springboot", "MicrosoftSQL Server", "Postman API", "Bitbucket", "Jira", "Confluence"],
    imageUrl: qcells,
  },
  {
    title: "Video Conference User Interface",
    description:
      "Capstone project for my undergrad. Worked with General Dynamics Personnnel to design and develop a project to be used internally.",
    tags: ["QT", "Git", "C/C++", "Android"],
    imageUrl: userinterface,
  },
  {
    title: "Movie Recommendation",
    description:
      "A project that recommends movie using MovieLens dataset",
    tags: ["Python", "Tensorflow", "Pandas", "Scikit-learn", "Numpy"],
    imageUrl: movies,
  },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "C/C++",
  "HTML",
  "CSS",
  "SQL",
  "Kotlin",
  "Docker",
  "AWS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "MongoDB",
  "Redux",
  "GraphQL",
  "PostgreSQL",
] as const;