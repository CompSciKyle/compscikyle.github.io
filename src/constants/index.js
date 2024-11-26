
import {pools, goblin, parhamfair} from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    nodejs,
    tailwindcss,
    typescript,
    python,
    kotlin,
    csharp,
    powershell,
    mysql,
    sqlite,
    jira,
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: jira,
        name: "Jira",
        type: "Version Control",
    },
    {
        imageUrl: sqlite,
        name: "Sqlite",
        type: "backend",
    },
    {
        imageUrl: mysql,
        name: "MySql",
        type: "Backend",
    },
    {
        imageUrl: powershell,
        name: "Powershell",
        type: "Scripting",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: kotlin,
        name: "Kotlin",
        type: "Frontend-Backend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },

];

export const experiences = [
    {
      title: "Customer Service",
      company_name: "Parham Fair",
      icon: parhamfair,
      iconBg: "black",
      date: "August 2019",
      points: [
        "Provided friendly and attentive service, handling transactions in a fast-paced environment."
      ],
    },
    {
      title: "Team Lead",
      company_name: "Pools R Us",
      icon: pools,
      iconBg: "#accbe1",
      date: "March 2021 - April 2024",
      points: [
        "Led a two-person team in opening and maintaining pools. Collaborated with team members to ensure effective pool operations.",
        "Interacted directly with clients to understand and meet client demands.",
        "Trained 10+ employees giving them the necessary skillset to complete their tasks."
      ],
    },
  ];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/CompSciKyle',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/kyle-fournier-27ba93299/',
    }
];

export const projects = [
    {
        iconUrl: goblin,
        theme: 'btn-back-red',
        name: 'Film Golbin',
        description: 'Launched a user-centric web application built on MVC architecture to facilitate tracking of watched movies. Created a comprehensive test suite that covers the model and view logic.',
        link: 'https://github.com/CompSciKyle/Film-Goblin',
    },
    {
        iconUrl: goblin,
        theme: 'btn-back-green',
        name: 'Career Matchmaker',
        description: ' Rapidly developed features of the project in a team environment in under a day at a Hackathon. Engineered a career matchmaking quiz leveraging an API to align users with ideal job roles and providing tailored career recommendations.',
        link: 'https://github.com/CompSciKyle/CareerMatchmaker',
    },
];