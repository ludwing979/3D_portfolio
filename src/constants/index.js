import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  scrum,
  git,
  figma,
  docker,
  tata,
  cnh,
  sintel,
  carrent,
  infosys,
  jobit,
  tripguide,
  threejs,
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
    title: "React JS Developer",
    icon: mobile,
  },
  {
    title: "FrontEnd Developer",
    icon: backend,
  },
  {
    title: "FullStack Developer",
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Scrum",
    icon: scrum
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "CNH Mexico",
    icon: cnh,
    iconBg: "#fff",
    date: "Jan 2019 - Jun 2019",
    points: [
      "Developed user interfaces with modern JavaScript frameworks, HTML5 and CSS3.",
      "Researched and developed new technology designs.",
      "Designed and implemented web components across new and existing designs.",
      "Maintained quality assurance through code testing and cross-browser testing.",
    ],
  },
  {
    title: "Junior Fullstack Developer",
    company_name: "Sintel TI",
    icon: sintel,
    iconBg: "#fff",
    date: "Jul 2019 - Jun 2020",
    points: [
      "Designed sites to be compatible with top browsers, including Firefox, Chrome and Safari.",
      "Converted mockups into HTML, CSS and JavaScript.",
      "Used programming capabilities in Java, SQL and other libraries as needed.",
      "Project management using GitLab and Git.",
      "Use of docker to manage container images.",
    ],
  },
  {
    title: "Freelancer",
    company_name: "Freelancer",
    icon: "",
    iconBg: "#383E56",
    date: "Aug 2020 - Dec 2020",
    points: [
      "Designed sites using React.js and redux.",
      "Created animations and interfaces with SASS.",
      "Converted mockups into React, HTML, CSS y using hooks.",
    ],
  },
  {
    title: "FrontEnd Developer",
    company_name: "TATA",
    icon: tata,
    iconBg: "#fff",
    date: "Feb 2021 - Sep 2022",
    points: [
      "General Electric division Element - Working using technology like React.JS, Redux, fetch, JS and CSS(LESS)",
      "Use of JIRA and scrum methodology to have a Agile methodology in the projects.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },
  {
    title: "Technology Analyst",
    company_name: "Infosys",
    icon: infosys,
    iconBg: "#fff",
    date: "Sep 2022 - Current",
    points: [
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "A great developer with big ambition to became one of the best frontend developers",
    name: "Cristobal Vega",
    designation: "Software Developer",
    company: "EPAM Systems",
    image: "https://media.licdn.com/dms/image/C5603AQHsW4b-AJuVWQ/profile-displayphoto-shrink_800_800/0/1646870174695?e=1686182400&v=beta&t=RWfwbazeGG65B5-iNAAZSlMeZzGpjhj_VKTMz97kl5Y",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Ludwing does.",
    name: "Shankar Mohapatra",
    designation: "Lead UI Developer",
    company: "TATA",
    image: "https://media.licdn.com/dms/image/C4E03AQEJLx8LCLKgbQ/profile-displayphoto-shrink_800_800/0/1600997294878?e=1686182400&v=beta&t=KGMStgZDsBQMVYEcMEXEOlQ2jRuasJzEXOj0nwEd79s",
  },
  {
    testimonial:
      "One of the most determinated people to deliver the work on time, one of my best coworkers",
    name: "Jorge Montenegro",
    designation: "Software Engineering",
    company: "FICO",
    image: "https://media.licdn.com/dms/image/C5603AQH9Z6qC714FQA/profile-displayphoto-shrink_800_800/0/1653668065450?e=1686182400&v=beta&t=1DjR3rnstcCxbtSZQ4cceIOCUzm2Q8yv45ccHd2RPcc",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

