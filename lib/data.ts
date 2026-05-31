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
    name: "Experience",
    hash: "#experience",
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
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software & Systems Engineer @ Sparton",
    location: "DeLeon Springs, FL",
    description:
      "Led MES software upgrades and cross-functional collaboration between IT and production teams to improve manufacturing reliability. Built full-stack web features using C#, .NET Core, HTML, and REST APIs; designed an MS SQL pipeline for buoy production tracking; and implemented SQL/FactoryLogix solutions to increase manufacturing output by 50%.",
    icon: React.createElement(CgWorkAlt),
    logo: "/Sparton-logo.png",
    date: "Apr 2025 - Present",
  },
  {
    title: "Master's Degree in Computer Science @ ASU",
    location: "Tempe, AZ",
    description:
      "Graduated in May 2024 with a master's degree in Computer Science. I took several high level classes such as Machine Learning, Mobile Computing, and Distributed Database Management. I am open to full time software engineer opportunities!",
    icon: React.createElement(LuGraduationCap),
    logo: "/ASU-Logo.png",
    date: "May 2024",
  },
  {
    title: "Bachelor's Degree in Computer Science @ ASU",
    location: "Tempe, AZ",
    description:
      "Graduated in May 2023 with a bachelor's degree in Computer Science and a 3.76 / 4.0 GPA.",
    icon: React.createElement(LuGraduationCap),
    logo: "/ASU-Logo.png",
    date: "May 2023",
  },
  {
    title: "Software Engineer Intern @ Hanwha QCells",
    location: "Tempe, AZ",
    description:
      "I worked as a software engineer intern at Hanwha QCells and worked on a project that involves Java Springboot.",
    icon: React.createElement(CgWorkAlt),
    logo: "/Qcells-Logo.jpg",
    date: "June 2022 - Aug 2022",
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
  {
    category: "Programming Languages",
    items: [
      "Python",
      "Java",
      "C#",
      "C/C++",
      "JavaScript",
      "TypeScript",
      "Kotlin",
      "PHP",
      "SQL",
    ],
  },
  {
    category: "Frameworks & Tools",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "Spring Boot",
      "HTML",
      "CSS",
      "Docker",
      "AWS",
      "Kubernetes",
      "Git",
      "Jira",
      "Redux",
      "GraphQL",
      "Unix/Linux CLI",
    ],
  },
  {
    category: "Databases",
    items: [
      "MS SQL",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
    ],
  },
  {
    category: "Concepts",
    items: [
      "OOP",
      "REST API",
      "Agile Methodology",
      "Full-Stack Development",
      "Data Structures & Algorithms",
    ],
  },
] as const;