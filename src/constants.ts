export const RESEARCH = {
  title: "Simulating GPS-denied Autonomous UAV Navigation for Detection of Surface Water Bodies",
  conference: "International Conference of Unmanned Aircraft Systems (ICUAS) 2020, IEEE Explore",
  period: "MAR 2019 – MAY 2020",
  link: "https://ieeexplore.ieee.org/document/9213927",
  description: "Research focused on autonomous UAV navigation in GPS-denied environments, such as Mars, specifically for detecting surface water bodies."
};

export const SKILLS = {
  languages: [
    { name: "Go", proficiency: 90 },
    { name: "Python", proficiency: 90 },
    { name: "Java", proficiency: 70 },
    { name: "JavaScript", proficiency: 80 },
    { name: "TypeScript", proficiency: 80 },
    { name: "SQL", proficiency: 90 }
  ],
  tools: [
    "Linux", "Git", "AWS", "GCP", "Docker", "Kubernetes",
    "gRPC", "GraphQL", "Django", "Node.js", "Express"
  ]
};

export const EXPERIENCE = [
  {
    company: "Entain Australia",
    role: "Software Engineer",
    period: "AUG 2021 - PRESENT",
    location: "Remote",
    details: [
      "Led Development of Ladbrokes Racing Club Project: Architected and implemented a comprehensive activity feed, encompassing database design and backend microservices. Directed GraphQL integration, reducing API latency by 23%. Designed and built the UI for runner profiles, leading to a successful launch that attracted over 13,000 new users.",
      "Spearheaded Securedocs Project for NZ Platform Migration: Engineered a secure document verification and storage system, leveraging Ory Hydra for service authentication and 1Password for secure credential management. Optimised performance with Go routines, cutting document processing times by 30%. Built the UI for managing documents in React, boosting the trading team's workflow efficiency by 16%.",
      "Technical Leadership and Mentorship: Contributed to backend and GraphQL technical strategy, providing guidance and mentoring junior engineers. Actively participated in code reviews and architectural discussions to drive best practices and system reliability."
    ],
    tech: ["Go", "gRPC", "Kubernetes", "SQL", "GraphQL", "TypeScript", "React"]
  },
  {
    company: "3 Crowns Technologies",
    role: "Software Engineer",
    period: "SEP 2020 – JUL 2021",
    location: "Remote",
    details: [
      "Microservices Migration and Kubernetes Adoption: Collaborated with a compact team to migrate to a microservices architecture, adopting Kubernetes for container orchestration. Led efforts to containerise Java applications and update services to Python 3. This improved system uptime by 40%.",
      "API Development and Automation: Designed and implemented several RESTful APIs with a strong focus on documentation and extensibility, enhancing maintainability and system interoperability across services. Developed an auto-update feature for sensor configurations on the Cellvisor gateway, eliminating manual reboots and boosting operational efficiency by 26%.",
      "Stakeholder Collaboration: Worked with stakeholders to define requirements, break down complex projects, and ensure efficient phased delivery. Actively contributed to architectural discussions, aligning technical solutions with business goals."
    ],
    tech: ["Python", "Django", "Java", "Docker", "Kubernetes"]
  },
  {
    company: "Woolworths Group",
    role: "Machine Learning Engineer",
    period: "APR 2020 - SEP 2020",
    location: "Remote",
    details: [
      "Led Sentiment Analysis Project: Performed sentiment analysis on voice of customer data using NLP techniques. This improved intent matching accuracy by 43% and increased customer satisfaction scores by 25%.",
      "Feature Deployment for High-Impact Chatbots: Implemented and deployed new features to various chatbots, impacting over 200,000 users, resulting in a 34% decrease in contact center transfers.",
      "Developed Near Real-Time Analytics Reports: Created analytics reports for bot training which were adopted by multiple teams. This enhanced bot performance by 20% and reduced training time by 50%."
    ],
    tech: ["Node.js", "Express", "Dialogflow", "BigQuery", "SQL", "Firebase DB"]
  }
];