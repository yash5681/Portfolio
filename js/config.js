/**
 * ====================================================================
 * PORTFOLIO CONFIGURATION - PRAJAPATI YASH ARUNBHAI
 * Full Stack Developer Portfolio
 * ====================================================================
 * Synchronized with candidate's official resume.
 */

const PORTFOLIO_CONFIG = {
  personal: {
    fullName: "Prajapati Yash Arunbhai",
    shortName: "Yash Prajapati",
    monogram: "YP",
    title: "Full Stack Developer",
    subtitle: "BCA Student • Aspiring Web Developer",
    tagline: "Building a foundation in technology. A dedicated learner ready to contribute & grow.",
    careerObjective: "BCA student with hands-on knowledge of HTML, CSS, JavaScript, Python and Django, seeking an entry-level web development role to build real-world projects and keep growing as a developer.",
    location: "At & Po - Chandarani, Ta-Himatnagar, Dist-S.K, 383001, Gujarat, India",
    shortLocation: "Himmatnagar, Gujarat, India",
    email: "pyash7571@gmail.com",
    phone: "+91 9023433407",
    experienceLevel: "Fresher",
    nationality: "Indian",
    languages: ["English", "Hindi", "Gujarati"],
    hobbies: ["Reading", "Travelling", "Art"],
    availability: "Open to Full Stack Developer Opportunities",
    isAvailable: true,
    
    // Verified Social & Contact links
    links: {
      email: "mailto:pyash7571@gmail.com",
      phone: "tel:+919023433407",
      whatsapp: "https://wa.me/919023433407?text=Hi%20Yash,%20I%20reviewed%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20Full%20Stack%20Developer%20opportunity.",
      github: "https://github.com/yash5681",
      githubUsername: "yash5681",
      linkedin: "https://www.linkedin.com/in/yash-prajapati-40a936351",
      resumeFile: "assets/docs/resume.pdf"
    },

    stats: {
      liveProjects: 2,
      sscScore: "81.00%",
      hscScore: "73.00%",
      languagesCount: 3
    },

    coreStrengths: [
      "Built and deployed 2 full web applications live on the internet",
      "Quick learner with strong adaptability",
      "Positive attitude, team-oriented and disciplined approach",
      "Eager to take on new challenges"
    ]
  },

  projects: [
    {
      id: "careerhub",
      name: "CareerHub – Job Portal",
      shortName: "CareerHub",
      category: "Full Stack Web Application",
      liveUrl: "https://careerhub-yash.onrender.com",
      githubUrl: "https://github.com/yash5681",
      image: "assets/images/careerhub-mockup.svg",
      featured: true,
      badge: "LIVE DEMO",
      status: "Production on Render",
      summary: "Web-based job portal application, deployed live and accessible online. Engineered with Python and Django on Render cloud infrastructure.",
      description: "CareerHub is a full-featured web portal designed to streamline job search and candidate applications. Developed with Python and Django on the backend, it features relational data models for job openings, company details, dynamic filters, and clean client-side usability across mobile and desktop devices.",
      techStack: [
        { name: "Python", icon: "assets/icons/tech/python.svg" },
        { name: "Django", icon: "assets/icons/tech/django.svg" },
        { name: "OOP", icon: "assets/icons/tech/python.svg" },
        { name: "JavaScript", icon: "assets/icons/tech/javascript.svg" },
        { name: "HTML5", icon: "assets/icons/tech/html5.svg" },
        { name: "CSS3", icon: "assets/icons/tech/css3.svg" },
        { name: "PostgreSQL", icon: "assets/icons/tech/postgresql.svg" },
        { name: "Render", icon: "assets/icons/tech/render.svg" }
      ],
      highlights: [
        "Built and deployed live on Render cloud services",
        "Backend architecture powered by Python & Django MVT pattern",
        "Role-oriented workflows for candidates and recruiters",
        "Dynamic job search and category-specific filtering mechanisms",
        "Secure user authentication and relational database schema design"
      ],
      architectureNotes: "Django MVT architecture with relational database models, server-side template rendering, custom form validation, and production WSGI deployment on Render."
    },
    {
      id: "eshopping",
      name: "E-Shopping – E-Commerce Website",
      shortName: "E-Shopping",
      category: "Full Stack E-Commerce",
      liveUrl: "https://yash-eshopping.onrender.com",
      githubUrl: "https://github.com/yash5681",
      image: "assets/images/eshopping-mockup.svg",
      featured: true,
      badge: "LIVE DEMO",
      status: "Production on Render",
      summary: "Online shopping web application, deployed live and accessible online. Powered by Python, Django, database integration, and responsive storefront styling.",
      description: "E-Shopping is an end-to-end e-commerce web platform designed to provide a smooth online retail experience. Powered by Python and Django, the system manages product catalogs, user accounts, shopping cart sessions, and responsive interfaces optimized for both mobile and desktop shoppers.",
      techStack: [
        { name: "Python", icon: "assets/icons/tech/python.svg" },
        { name: "Django", icon: "assets/icons/tech/django.svg" },
        { name: "JavaScript", icon: "assets/icons/tech/javascript.svg" },
        { name: "HTML5", icon: "assets/icons/tech/html5.svg" },
        { name: "CSS3", icon: "assets/icons/tech/css3.svg" },
        { name: "Bootstrap", icon: "assets/icons/tech/bootstrap.svg" },
        { name: "MySQL", icon: "assets/icons/tech/mysql.svg" },
        { name: "Render", icon: "assets/icons/tech/render.svg" }
      ],
      highlights: [
        "Built and deployed live on Render cloud services",
        "Scalable product management and inventory catalog backend in Django",
        "Session-based interactive shopping cart and checkout workflow",
        "User registration, authentication, and personalized profile state",
        "Mobile-first responsive storefront styling with modern UI components"
      ],
      architectureNotes: "Django backend with relational product and order models, responsive CSS grid/flexbox front-end, session management for active carts, and cloud hosting on Render."
    }
  ],

  skills: {
    categories: [
      {
        id: "frontend",
        name: "Frontend Development",
        icon: "monitor",
        description: "Responsive layouts, intuitive UI/UX, DOM manipulation & client-side interactivity",
        skills: [
          { name: "HTML5", level: "Semantic Markup", icon: "assets/icons/tech/html5.svg" },
          { name: "CSS3", level: "Modern Flex/Grid & Responsive", icon: "assets/icons/tech/css3.svg" },
          { name: "JavaScript", level: "ES6+, DOM Scripting & Async", icon: "assets/icons/tech/javascript.svg" },
          { name: "jQuery", level: "DOM Manipulation & AJAX", icon: "assets/icons/tech/jquery.svg" },
          { name: "Bootstrap", level: "Responsive Component Grid", icon: "assets/icons/tech/bootstrap.svg" }
        ]
      },
      {
        id: "backend",
        name: "Backend & Frameworks",
        icon: "server",
        description: "Server architecture, business logic, MVT pattern & RESTful endpoints",
        skills: [
          { name: "Python", level: "Core Programming & Algorithms", icon: "assets/icons/tech/python.svg" },
          { name: "OOP", level: "Object-Oriented Programming & Classes", icon: "assets/icons/tech/oop.svg" },
          { name: "Django", level: "MVT Architecture, ORM, Auth, Forms", icon: "assets/icons/tech/django.svg" },
          { name: "REST API", level: "Endpoint Design, JSON & Integration", icon: "assets/icons/tech/restapi.svg" }
        ]
      },
      {
        id: "database",
        name: "Databases & Storage",
        icon: "database",
        description: "Relational modeling, document stores & data persistence",
        skills: [
          { name: "MySQL", level: "Relational Queries & Schema Design", icon: "assets/icons/tech/mysql.svg" },
          { name: "PostgreSQL", level: "Advanced SQL & Relational Models", icon: "assets/icons/tech/postgresql.svg" },
          { name: "MongoDB", level: "NoSQL Collections & Documents", icon: "assets/icons/tech/mongodb.svg" }
        ]
      },
      {
        id: "tools",
        name: "Tools & Deployment",
        icon: "cloud",
        description: "Version control, IDE workflow, asset management & cloud hosting",
        skills: [
          { name: "Git", level: "Version Control & Commits", icon: "assets/icons/tech/git.svg" },
          { name: "GitHub", level: "Profile: yash5681", icon: "assets/icons/tech/github.svg" },
          { name: "VS Code", level: "Primary Development Environment", icon: "assets/icons/tech/vscode.svg" },
          { name: "MS Office", level: "Productivity & Documentation", icon: "assets/icons/tech/msoffice.svg" },
          { name: "Render", level: "Live Production Cloud Deployment", icon: "assets/icons/tech/render.svg" },
          { name: "Cloudinary", level: "Cloud Media Storage & Delivery", icon: "assets/icons/tech/cloudinary.svg" }
        ]
      }
    ]
  },

  // Full Verified Education History from Resume
  education: [
    {
      degree: "B.C.A (Pursuing)",
      field: "Bachelor of Computer Applications",
      institution: "Hemchandracharya North Gujarat University, Patan",
      location: "Patan, Gujarat",
      period: "2024 – Present",
      status: "Currently Pursuing",
      highlights: [
        "Hands-on full stack project development (CareerHub & E-Shopping)",
        "Focus: Web Development, Python, Django, Databases & Algorithms",
        "Academic & practical software engineering coursework"
      ]
    },
    {
      degree: "H.S.C (12th)",
      field: "Higher Secondary Certificate",
      institution: "GSHSEB, Gandhinagar",
      location: "Gujarat, India",
      period: "2024",
      score: "73.00%",
      status: "Completed",
      highlights: [
        "Scored 73.00% in Gujarat Secondary and Higher Secondary Education Board (GSHSEB)",
        "Strong foundation in logic, reasoning, and mathematics"
      ]
    },
    {
      degree: "S.S.C (10th)",
      field: "Secondary School Certificate",
      institution: "GSHSEB, Gandhinagar",
      location: "Gujarat, India",
      period: "2022",
      score: "81.00%",
      status: "Completed",
      highlights: [
        "Achieved 81.00% distinction score in 10th Board examinations",
        "Consistent academic excellence and disciplined approach"
      ]
    }
  ]
};

// Export to window for global access
if (typeof window !== "undefined") {
  window.PORTFOLIO_CONFIG = PORTFOLIO_CONFIG;
}
