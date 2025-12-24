import { bourntec_solutions_inc, csmtechnologies, iit_bhubaneswar } from "../assets/images";
import {
    css,
    contact,
    docker,
    expense_tracker,
    express,
    firestore,
    git,
    github,
    html,
    java,
    javascript,
    linkedin,
    microservices,
    mongodb,
    myntra,
    mysql,
    nextjs,
    nodejs,
    react,
    redis,
    springboot,
    vercel_clone
} from "../assets/icons";
import { init } from "@emailjs/browser";

export const skills = [
    // Frontend
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
   

    // Backend
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express.js",
        type: "Backend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: springboot,
        name: "Spring Boot",
        type: "Backend",
    },

    // Databases
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: redis,
        name: "Redis",
        type: "Database",
    },
    {
        imageUrl: firestore,
        name: "Firebase Firestore",
        type: "Database",
    },

    // DevOps / Tools
    {
        imageUrl: docker,
        name: "Docker",
        type: "DevOps",
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

    // Architecture
    {
        imageUrl: microservices,
        name: "Microservices",
        type: "Architecture",
    },
];

export const experiences = [
    {
        title: "Data Analyst Intern",
        company_name: "Bourntec Solutions Inc",
        icon: bourntec_solutions_inc,
        iconBg: "#accbe1",
        date: "May 2025 - June 2025",
        points: [
            "At Bourntec, our team built a real-time operational dashboard in the Aviation domain using Power BI. We integrated data from APIs, Excel, and GIS into a SQL database to visualize metrics like weather, passenger flow, and flight schedules.",
            "Due to licensing constraints, we opted for Power BI's hybrid mode (Import + Direct Query) with page-level refresh for semi-real-time updates. We also created sample dashboards using student and sales datasets, utilizing SQL for backend processing and data modeling.",
        ],
    },
    {
        title: "CSM Technologies",
        company_name: "Data and AI Intern",
        icon: csmtechnologies,
        iconBg: "#fbc3bc",
        date: "June 2024 - July 2024",
        points: [
            "Acquired foundational knowledge in Python, including basics, modules, and libraries",
            "Developed skills in data visualization and analytics using Powerbi",
            "Explored Langchain and RAG for developing and deploying robust AI models"
],
    },
    {
        title: "Research Intern",
        company_name: "IIT Bhubaneswar",
        icon: iit_bhubaneswar,
        iconBg: "#b7e4c7",
        date: "May 2024 - July 2024",
        points: [
            "Worked on a project titled as \"VISHLESHNAM: A video Analytics Solution for Crowd Behaviour Analysis Using Multiple Sensors\"",
            "I have contributed in implementation of the deep learning algorithm for license plate recognition for moving vehicles in videos",
            "I also had the opportunity to work on several data analysis tasks(EDA and graph analysis)",
            
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
        link: 'https://github.com/shriya-0802',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/shriya-mohanty-513502278/',
    }
];

export const projects = [
    {
        iconUrl: expense_tracker,
        theme: 'btn-back-red',
        name: 'Expense Tracker',
        description: 'Developed a cross-platform mobile application to track, categorize, and visualize daily expenses with an intuitive and responsive UI. Built using React Native (Expo), TailwindCSS (twrnc), and React Navigation for smooth navigation across multiple screens. Implemented local data storage with AsyncStorage for offline access and used react-native-gifted-charts to generate interactive expense breakdowns. Managed global state efficiently through the Context API to sync and update expenses in real time.',
        link: 'https://github.com/shriya-0802/expense_tracker.git',
    },
    {
        iconUrl: myntra,
        theme: 'btn-back-green',
        name: 'E-Commerce Web Application (Myntra Clone)',
        description: 'Designed and built a fully functional e-commerce frontend inspired by Myntra using React.js, featuring product listing, filters, search functionality, cart management, and responsive UI. Implemented component-based architecture with dynamic rendering of products, categories,and navigation using React Router DOM. Integrated state management using useState and useEffect hooks for seamless UI interactions.',
        link: 'github.com/shriya-0802/Myntra_Shopping_Cart.git',
    },
    {
        iconUrl: vercel_clone,
        theme: 'btn-back-blue',
        name: 'Vercel clone',
        description: 'Developed a Vercel-style deployment system that clones GitHub repositories, builds projects in isolated Docker containers, streams live build logs, and serves static sites from AWS S3 with subdomain-based routing',
        link: 'https://github.com/shriya-0802/vercel_clone.git',
    }
  
 
    
];