/**
 * ALL SITE CONTENT LIVES HERE.
 */

export interface Role {
  title: string;
  company: string;
  period: string;
  summary: string;
  highlights: string[];
}

export interface Project {
  name: string;
  description: string;
  impact: string;
  tags: string[];
  url: string;
  kind:
    | 'Case study'
    | 'Open source'
    | 'Product'
    | 'Other'
    | 'Personal'
    | 'Freelance'
    | 'Hackathon'
    | 'School project';
}

export interface Profile {
  name: string;
  title: string;
  summary: string;
  availability: string;
  skills: string[];
  links: { linkedin: string; github: string; email: string; resume: string };
  experience: Role[];
  projects: Project[];
}

export const PROFILE: Profile = {
  name: 'Felix Omondi',
  title: 'Software Engineer',
  summary:
    'I design and build reliable, user-focused software — from clean interfaces to the services behind them. ' +
    'I care about simple solutions, measurable results and shipping work people actually use.',
  availability: 'Open to new opportunities',
  skills: [
    'C#',
    'TypeScript',
    'Angular',
    // "Node.js",
    'REST APIs',
    // "Cloud & CI/CD",
    // "Accessibility",
    'Git & GitHub',
    'SQL',
    'Python',
    'Redis',
    'ElasticSearch',
  ],

  links: {
    linkedin: 'https://www.linkedin.com/in/felix-omondi',
    github: 'https://github.com/Felix-Omondi',
    email: 'felix.omondi@hotmail.com',
    resume: 'resume.pdf',
  },

  experience: [
    {
      title: 'Software Engineer',
      company: 'Syncfusion',
      period: '2024 — Present',
      summary:
        'Part of a high-performing pod of software engineers, building scalable web APIs and core backend libraries, while also contributing to frontend development using Angular and TypeScript.',
      highlights: [
        'Lead a high-performing pod of 4 software engineers, delegating tasks, conducting code reviews, and accelerating sprint delivery cycles.',
        'Engineered scalable C# web APIs and core backend libraries, reducing data processing latency by 35% and improving system throughput.',
        'Designed loosely coupled code modules using software design patterns, reducing technical debt and cutting codebase onboarding time for new developers by 10%.',
        'Integrated relational SQL databases with backend microservices, optimizing queries to reduce data retrieval times by 17%.',
        'Built modular frontend components using Angular and TypeScript, reducing code duplication by 20% and accelerating UI rendering.',
        'Collaborated via Git workflows including rigorous code reviews and pull requests to achieve a 35% production-ready deployment success rate.',
      ],
    },
    {
      title: 'Product Demo Engineer',
      company: 'Syncfusion',
      period: '2023 — 2024',
      summary:
        'Provided technical product demonstrations to enterprise prospects, showcasing the capabilities of Bold Reports and driving client acquisitions.',
      highlights: [
        'Delivered 20+ technical product demonstrations to enterprise prospects, directly driving a substantial increase in Bold Reports client acquisitions.',
        'Created 8+ cross-platform code samples using React, Angular, Blazor, and .NET Core to showcase product capabilities across diverse ecosystems',
        'Gathered global client feedback through active cross-functional collaboration, boosting product demo engagement by 20%.',
      ],
    },
  ],

  projects: [
    {
      name: 'CV Analyzer',
      description:
        'A web application that analyzes CVs and provides insights on skills, experience, and qualifications.',
      impact:
        'The application has been used by over 1,000 users to improve their CVs and increase their chances of getting hired.',
      tags: ['Python', 'Typescript', 'Angular', 'ElasticSearch'],
      url: 'https://github.com/Felix-Omondi/cv-analyzer',
      kind: 'Open source',
    },
    {
      name: 'Print Object Properties',
      description:
        'A utility library for printing and formatting object properties in a readable manner.',
      impact:
        'The library has been used by over 500 developers to simplify object property inspection and debugging.',
      tags: ['C#'],
      url: 'https://github.com/Felix-Omondi/PrintObjectProperties',
      kind: 'Open source',
    },
    {
      name: 'Redis Caching Library',
      description:
        'A library that provides caching functionality using Redis, allowing for efficient data retrieval and storage.',
      impact:
        'The library has been used by over 1,000 developers to improve the performance of their applications.',
      tags: ['C#', 'Redis'],
      url: 'https://github.com/Felix-Omondi/RedisCachingLibrary',
      kind: 'Open source',
    },
  ],
};
