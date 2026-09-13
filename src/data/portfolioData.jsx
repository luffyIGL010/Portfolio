import { 
  Code2, Database, BrainCircuit, Globe, Bot, Shield, 
  Terminal, Server, LayoutTemplate, Workflow, Cpu, Rocket
} from "lucide-react";

export const personalInfo = {
  name: "Saurav Rauthan",
  title: "AI & Machine Learning Engineer | Data Scientist | Python Developer",
  tagline: "Building intelligent solutions with Python, Machine Learning, and Artificial Intelligence.",
  altHero: "Transforming ideas into intelligent, real-world AI-powered applications.",
  email: "sauravrauthan82@gmail.com",
  github: "https://github.com/luffyIGL010",
  linkedin: "https://www.linkedin.com/in/saurav-rauthan-696a6428a/",
  leetcode: "https://leetcode.com/u/Saurav1200/",
  resumeUrl: "/Saurav_Resume.pdf", // placeholder
  profileImage: "/Saurav.jpeg", // using the image present in directory
  year: 2026
};

export const about = {
  description: "I am a B.Tech graduate in Artificial Intelligence and Machine Learning from Dr. A.P.J. Abdul Kalam Institute of Technology, Tanakpur. I enjoy building practical applications using Python, Machine Learning, Data Science, and Artificial Intelligence.\n\nMy focus is on transforming ideas into working products — from predictive machine learning models and AI-powered tools to intelligent automation systems.\n\nI am continuously improving my problem-solving skills through Data Structures and Algorithms and building projects that demonstrate real-world technical abilities.",
  highlights: [
    {
      title: "AI & Machine Learning",
      description: "Building intelligent predictive systems and AI applications.",
      icon: <BrainCircuit className="w-6 h-6 text-primary-400" />
    },
    {
      title: "Data Science",
      description: "Analyzing data to extract meaningful insights and support decision-making.",
      icon: <Database className="w-6 h-6 text-primary-400" />
    },
    {
      title: "Problem Solving",
      description: "Practicing Data Structures, Algorithms, and competitive programming.",
      icon: <Code2 className="w-6 h-6 text-primary-400" />
    }
  ],
  stats: [
    { label: "Degree", value: "B.Tech AI & ML Graduate" },
    { label: "Projects", value: "5+ Real-world Projects" },
    { label: "Focus", value: "Python & Machine Learning Enthusiast" }
  ]
};

export const skills = {
  categories: [
    {
      name: "Programming Languages",
      icon: <Terminal className="w-5 h-5" />,
      items: ["Python", "SQL", "JavaScript", "Java"]
    },
    {
      name: "Data Science & Machine Learning",
      icon: <Database className="w-5 h-5" />,
      items: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow"]
    },
    {
      name: "Artificial Intelligence",
      icon: <BrainCircuit className="w-5 h-5" />,
      items: ["Generative AI", "RAG", "AI Agents", "CrewAI", "LLM Applications", "Prompt Engineering"]
    },
    {
      name: "Web Development",
      icon: <Globe className="w-5 h-5" />,
      items: ["React.js", "HTML", "CSS", "Streamlit", "Flask", "FastAPI"]
    },
    {
      name: "Databases",
      icon: <Server className="w-5 h-5" />,
      items: ["MySQL", "PostgreSQL", "MongoDB"]
    },
    {
      name: "Tools & Platforms",
      icon: <Workflow className="w-5 h-5" />,
      items: ["Git", "GitHub", "Docker", "AWS", "Jupyter Notebook", "VS Code"]
    }
  ]
};

export const projects = [
  {
    id: 1,
    title: "AI ATS Resume Checker",
    category: "Artificial Intelligence",
    description: "An AI-powered resume analysis application that evaluates resumes against job descriptions and provides insights to improve ATS compatibility, keyword relevance, and resume quality.",
    technologies: ["Python", "Streamlit", "NLP", "Machine Learning"],
    liveUrl: "https://aiatsresumechecker-7nncaxf47vhxqvytxeu2ka.streamlit.app/",
    githubUrl: "https://github.com/luffyIGL010",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2070&auto=format&fit=crop",
    details: {
      problem: "Many qualified candidates get rejected by Applicant Tracking Systems (ATS) because their resumes are not optimized for specific job descriptions.",
      solution: "Developed an AI tool that compares a user's resume against a job description and provides an ATS score, missing keywords, and actionable feedback.",
      features: [
        "PDF Resume Parsing",
        "Keyword Matching",
        "ATS Score Calculation",
        "Actionable Feedback Generation"
      ]
    }
  },
  {
    id: 2,
    title: "Heart Disease Prediction System",
    category: "Machine Learning",
    description: "A machine learning-based healthcare prediction application that predicts the likelihood of heart disease using patient health parameters.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Random Forest", "Streamlit"],
    liveUrl: "https://heartdiseaseprediction-gvejmmkan493hmau44ksod.streamlit.app/",
    githubUrl: "https://github.com/luffyIGL010",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
    details: {
      problem: "Early detection of heart disease is crucial for effective treatment, but access to quick predictive tools is limited.",
      solution: "Built a machine learning model using Random Forest to predict the likelihood of heart disease based on clinical parameters like blood pressure, cholesterol, and age.",
      features: [
        "Interactive Data Input Form",
        "Real-time Prediction",
        "Data Preprocessing Pipeline",
        "User-friendly Streamlit Interface"
      ]
    }
  },
  {
    id: 3,
    title: "Smart Attendance System",
    category: "Web Application",
    description: "An intelligent attendance management system designed to simplify attendance tracking and provide a modern digital experience for students and institutions.",
    technologies: ["Python", "Artificial Intelligence", "Web Development", "Streamlit"],
    liveUrl: "https://smart-attendance-landing-page.vercel.app/",
    githubUrl: "https://github.com/luffyIGL010",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop",
    details: {
      problem: "Traditional manual attendance tracking is time-consuming and prone to errors.",
      solution: "Developed a digital attendance system that automates the process and provides clear records for both students and administration.",
      features: [
        "Digital Attendance Marking",
        "Student Dashboard",
        "Attendance History Tracking",
        "Admin Analytics"
      ]
    }
  },
  {
    id: 4,
    title: "AI Gym Coach",
    category: "Artificial Intelligence",
    description: "An AI-powered fitness assistant designed to help users improve their workout experience through intelligent guidance, personalized recommendations, and fitness-focused interactions.",
    technologies: ["Python", "Generative AI", "Web Development"],
    liveUrl: "https://cheery-stardust-210ccc.netlify.app/",
    githubUrl: "https://github.com/luffyIGL010",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    details: {
      problem: "Access to personalized fitness coaching is expensive and not scalable for many individuals.",
      solution: "Created an AI assistant capable of providing customized workout advice, exercise recommendations, and fitness plans using Generative AI.",
      features: [
        "Interactive AI Chat Interface",
        "Personalized Workout Recommendations",
        "Fitness Guidance",
        "Responsive Web UI"
      ]
    }
  }
];

export const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    major: "Artificial Intelligence & Machine Learning",
    institution: "Dr. A.P.J. Abdul Kalam Institute of Technology, Tanakpur, Uttarakhand",
    period: "2022 – 2026",
    description: "Developed a strong foundation in Artificial Intelligence, Machine Learning, Data Structures, Programming, Databases, and Software Development."
  }
];

export const certifications = [
  {
    name: "Python Programming",
    issuer: "Placeholder Organization",
    date: "2024",
    link: "#"
  },
  {
    name: "Data Science and Machine Learning",
    issuer: "Placeholder Organization",
    date: "2024",
    link: "#"
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    link: "#"
  },
  {
    name: "Generative AI Fundamentals",
    issuer: "Placeholder Organization",
    date: "2025",
    link: "#"
  },
  {
    name: "Data Structures & Algorithms with Python",
    issuer: "Placeholder Organization",
    date: "2024",
    link: "#"
  }
];
