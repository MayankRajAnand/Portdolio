import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  nextjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  kubernetes,
  docker,
  internshala,
  oracle,
  schneider,
  jenkins,
  codeblogix,
  prompedia,
  jenie,
  chatulita,
  newzter,
  aws,
  alan,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solving & DSA",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Nextjs",
    icon: nextjs,
  },
  {
    name: "Alan AI",
    icon: alan,
  },
];

const experiences = [
  {
    title: "Software Developer (Intern + FTE)",
    company_name: "Oracle",
    icon: oracle,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Analysed ,developed and debugged Network Functions for Oracle 5G Communications.",
      "Deployed 5G Network Functions on Kubernetes Cluster",
      " Simulated 50+ scenarios and 130+ Feature validation cases using Python for 5G Core component and solely responsible for   automation scenarios of NSSF",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Application Developer Intern",
    company_name: "Schneider Electric",
    icon: schneider,
    iconBg: "#E6DEDD",
    date: "May 2022 - Jul 2022",
    points: [
      "Collaborated with cross-functional teams to implement Angular features, resulting in a 25% improvement in UI and reduced the bug count by 50%.",
      "Part of Functionality and bug-solving team and solved around 50bugs in duration of 2 months",
      "Implementing responsive design and ensuring cross-browser compatibility."
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Internshala",
    icon: internshala,
    iconBg: "#383E56",
    date: "Mar 2022 - Nov 2022",
    points: [
      "Guided 100+ students in web development, providing hands-on assistance and conducting code reviews ; resulted in an average improvement of 30% in students’ coding skills and project completion rates",
      "Achieved SLA of 92%, had the best doubt solving ratio and highest rated TA among all other TA’s"
    ],
  }
];



const projects = [
  {
    name: "Jenie",
    description:
      "Engineered the integration of 5 advanced AI tools into one cohesive application ,leveraging OpenAI and ReplicateAI APIs along with Crisp for customer support.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "crisp",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jenie,
    source_code_link: "https://github.com/MayankRajAnand/jenie",
  },
  {
    name: "Prompedia",
    description:
      "Nextjs Crud application developed to discover, create and share creative AI prompts following the industry standards.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: prompedia,
    source_code_link: "https://github.com/MayankRajAnand/prompedia",
  },
  {
    name: "Codeblogix",
    description:
      "A comprehensive blog app that allows users to read insighful blogs and discover related blogs as well as blogs from same writer",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "graphql",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: codeblogix,
    source_code_link: "https://github.com/MayankRajAnand/CodeBlogix",
  },
  {
    name: "Chatulita",
    description:
      "Orchestrated the end-to-end development and deployment of a real-time chat application on AWS, integrating CICD pipelines",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "jenkins",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "yellow-text-gradient",
      },
    ],
    image: chatulita,
    source_code_link: "https://github.com/MayankRajAnand/realtime-chat-app",
  },
  {
    name: "Newzter",
    description:
      "Conversational Voice Controlled NewsApp build for both web and mobile using React and React-Native with integration of ALAN AI",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Alan AI",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: newzter,
    source_code_link: "https://github.com/MayankRajAnand/NewsApi",
  },
];

export { services, technologies, experiences, projects };
