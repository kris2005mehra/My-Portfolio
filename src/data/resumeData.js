export const resumeData = {
  name: "Kris Mehra",
  location: "Howrah, West Bengal, India",
  contact: {
    phone: "+91 9831844788",
    email: "krismehra22@gmail.com",
    linkedin: "https://linkedin.com/in/kris-mehra-328450322",
    github: "https://github.com/kris2005mehra",
    codolio: "https://codolio.com/profile/KrisMehra"
  },
  summary: "B.Tech'27 (CSBS) student with MERN stack experience and strong DSA skills. Active open-source contributor, passionate about AI/ML and scalable systems.",
  education: [
    { degree: "B.Tech CSBS", institution: "Narula Institute of Technology", grade: "CGPA 8.23" },
    { degree: "ISC", institution: "High School", grade: "CGPA 8" },
    { degree: "ICSE", institution: "Middle School", grade: "CGPA 10" }
  ],
  projects: [
    {
      title: "VerifiX",
      description: "AI-powered KYC system automating identity verification with high precision.",
      tech: ["React", "Node.js", "FastAPI", "EasyOCR"],
      image: "/images/p1.png", // Place your images in the public/images folder
      github: "https://github.com/kris2005mehra/AI-Powered_Identity_Verification_and_Fraud_Detection_for_KYC_Compliance",
      link: "https://github.com/kris2005mehra/AI-Powered_Identity_Verification_and_Fraud_Detection_for_KYC_Compliance"
    },
    {
      title: "Ayaskriti",
      description: "AI-driven LCA sustainability platform for measuring environmental footprint.",
      tech: ["Python", "Machine Learning", "React", "Data Visualization"],
      image: "/images/p2.png",
      github: "https://github.com/kris2005mehra/Ayaskriti_LCA",
      link: "https://kris2005mehra.github.io/Ayaskriti_LCA/",
    },
    {
      title: "RiderGo",
      description: "A bike rental platform built to simplify vehicle discovery and booking.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
      image: "/images/p3.png",
      github: "https://github.com/kris2005mehra/RiderGo_BCT_Project",
      link: "https://rider-go-bct-project.vercel.app/",
    }
  ],
  experience: [
    { 
      role: "AI Developer Intern", 
      company: "JD Jones & Co (P) Ltd.", 
      date: "Apr 2026 - Jul 2026", 
      location: "Onsite",
      description: "Automated customer PO/SO processing, quotation generation, and ERP workflows with Playwright & Python.",
      highlight: "Improved operational efficiency and reduced manual effort by 90% using automated checkers.",
      tech: ["Python", "Playwright", "ERP Automation", "Process Optimization"],
      image: "/images/jdjones.png" 
    },
    { 
      role: "AI/ML Intern", 
      company: "Infosys Springboard", 
      date: "Oct 2025 - Dec 2025", 
      location: "Remote",
      description: "Designed & implemented VerifiX AI-based KYC verification system with OCR-driven workflows.",
      highlight: "Achieved up to 93% text extraction accuracy in automated identity validation pipelines.",
      tech: ["Python", "OCR", "Identity Verification", "FastAPI"],
      image: "/images/infosys.png" 
    },
    { 
      role: "Open Source Contributor", 
      company: "GSSoC, Hacktoberfest & Aperture 3.0", 
      date: "Aug 2025 - Nov 2025", 
      location: "Remote",
      description: "Contributed to multiple open-source repositories in Web Development and AI/ML.",
      highlight: "Collaborated with global developers on GitHub, enhancing feature sets and documentation quality.",
      tech: ["Open Source", "Git & GitHub", "React", "AI / ML"],
      image: "/images/opensource.png" 
    }
  ],
  skills: [
    { name: "React / MERN", level: 90 },
    { name: "AI/ML Integration", level: 85 },
    { name: "DSA / Architecture", level: 88 },
    { name: "Python & FastAPI", level: 80 }
  ],
  achievements: [
    { number: 3, text: "Hackathons Won (1st in HACKtoLEARN & Innovate to Validate)" },
    { number: 6, text: "Hackathons Experience Across National Competitions" },
    { number: 50, text: "Top 50 GeeksforGeeks DSA Solvers in College (2000+ Students)" }
  ]
};