/**
 * Centralized Portfolio Data for Ashish Jain
 */

export const personalDetails = {
  name: "Ashish Jain",
  title: "Frontend Engineer",
  roles: [
    "Frontend Engineer",
    "React.js Developer",
    "Web Developer"
  ],

  bio: "Frontend Engineer and fresher passionate about building responsive, user-friendly web applications using React.js, JavaScript, HTML, CSS, and modern frontend technologies. I enjoy creating clean interfaces, reusable components, and interactive web experiences.",

  location: "India",

  email: "ashishjainchintu2512@gmail.com",

  phone: "+91 8217285592",

  availableForHire: true,

  resumeUrl: "#",

  /*
   * Keep your image inside the React project's public folder.
   * Example:
   * public/avatar.jpg
   *
   * Then use:
   * avatarImage: "/avatar.jpg"
   */
    avatarImage: "/avatar.webp",

  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:ashishjainchintu2512@gmail.com"
  },

  stats: [
    {
      label: "Experience",
      value: "Fresher"
    },
    {
      label: "Projects",
      value: "6+"
    },
    {
      label: "Primary Technology",
      value: "React.js"
    },
    {
      label: "Focus",
      value: "Frontend"
    }
  ]
};


export const skillsData = [
  {
    category: "Frontend Development",

    skills: [
      {
        name: "React.js",
        level: 85,
        icon: "⚛️"
      },
      {
        name: "JavaScript",
        level: 82,
        icon: "⚡"
      },
      {
        name: "HTML5",
        level: 90,
        icon: "🌐"
      },
      {
        name: "CSS3",
        level: 88,
        icon: "🎨"
      },
      {
        name: "Bootstrap",
        level: 85,
        icon: "🅱️"
      }
    ]
  },

  {
    category: "Programming & Data",

    skills: [
      {
        name: "Python",
        level: 70,
        icon: "🐍"
      },
      {
        name: "SQL",
        level: 70,
        icon: "🗄️"
      },
      {
        name: "Git",
        level: 80,
        icon: "🔀"
      },
      {
        name: "GitHub",
        level: 80,
        icon: "🐙"
      }
    ]
  },

  {
    category: "Design & Development Tools",

    skills: [
      {
        name: "Figma",
        level: 75,
        icon: "🎯"
      },
      {
        name: "VS Code",
        level: 90,
        icon: "💻"
      },
      {
        name: "Vite",
        level: 80,
        icon: "⚡"
      },
      {
        name: "Responsive Design",
        level: 85,
        icon: "📱"
      }
    ]
  }
];


export const projectsData = [
  {
    id: "project-1",

    title:
      "Solar-Powered Electric Vehicle with Automated Battery Swapping System",

    category: "IoT & Embedded Systems",

    description:
      "A solar-powered electric vehicle project featuring battery monitoring and an automated battery swapping system designed to improve battery management and vehicle usability.",

    longDescription:
      "Developed a solar-powered electric vehicle prototype with an automated battery swapping concept. The system uses an ESP32 microcontroller along with sensors to monitor important battery and environmental parameters. The project focuses on efficient energy management, battery monitoring, solar charging, and automated switching between batteries.",

    tags: [
      "ESP32",
      "IoT",
      "Solar Energy",
      "Embedded Systems",
      "Battery Management",
      "Sensors"
    ],

    image:
      "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",

    demoUrl: "#",

    githubUrl: "#",

    highlights: [
      "Solar-powered electric vehicle prototype",
      "Automated battery switching system",
      "ESP32-based monitoring and control",
      "Voltage, current and temperature monitoring"
    ]
  },


  {
    id: "project-2",

    title: "Grama Suvidha Application",

    category: "Android Application",

    description:
      "An Android application designed to provide users with convenient access to essential rural and local services through a simple and user-friendly digital platform.",

    longDescription:
      "Grama Suvidha is an Android application developed to make important services and information more accessible to rural communities. The application focuses on a simple interface, organized service access, and a convenient digital experience for users.",

    tags: [
      "Android",
      "Kotlin",
      "Android Studio",
      "MVVM",
      "Room Database",
      "Firebase"
    ],

    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",

    demoUrl: "#",

    githubUrl: "#",

    highlights: [
      "User-friendly Android application",
      "Designed for rural service accessibility",
      "MVVM-based application architecture",
      "Local data management using Room Database"
    ]
  },


  {
    id: "project-3",

    title: "E-Commerce React.js Application",

    category: "React.js",

    description:
      "A responsive e-commerce web application built with React.js featuring product browsing, search, filtering, shopping cart functionality, and a modern responsive interface.",

    longDescription:
      "Developed a modern e-commerce frontend using React.js with reusable components and responsive layouts. The application provides users with an interactive shopping experience through product listings, product filtering, search functionality, and cart management.",

    tags: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "REST API"
    ],

    image:
      "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80",

    demoUrl: "#",

    githubUrl: "#",

    highlights: [
      "Responsive e-commerce interface",
      "Product search and filtering",
      "Interactive shopping cart",
      "Reusable React components"
    ]
  },


  {
    id: "project-4",

    title: "WhatsApp Clone",

    category: "React.js",

    description:
      "A WhatsApp-inspired responsive messaging interface built with React.js featuring chat lists, conversation screens, user information, and an interactive messaging UI.",

    longDescription:
      "Developed a WhatsApp-inspired frontend application using React.js. The project focuses on recreating a modern messaging experience with reusable components, responsive layouts, chat lists, conversation screens, and interactive user interface elements.",

    tags: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Responsive Design"
    ],

    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",

    demoUrl: "#",

    githubUrl: "#",

    highlights: [
      "WhatsApp-inspired chat interface",
      "Responsive messaging layout",
      "Reusable React components",
      "Interactive conversation UI"
    ]
  },

  {
    id: "project-5",

    title: "OTP-Based Smart Wireless Locking System",

    category: "IoT & Embedded Systems",

    description:
      "A smart wireless locking system that uses OTP-based authentication and secure access control for modern door safety and automation.",

    longDescription:
      "Designed and developed a secure smart wireless locking system that validates a one-time password for user authentication before unlocking the door. The project combines embedded hardware, wireless communication, and user-friendly access management to enhance home and office security.",

    tags: [
      "OTP",
      "IoT",
      "Embedded Systems",
      "Wireless Lock",
      "Security",
      "Automation"
    ],

    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",

    demoUrl: "#",

    githubUrl: "#",

    highlights: [
      "OTP-based access control",
      "Wireless smart lock mechanism",
      "Improved security automation",
      "Embedded hardware integration"
    ]
  },

  {
    id: "project-6",

    title: "Instagram Clone",

    category: "React.js",

    description:
      "A modern Instagram-inspired social media frontend built with React.js featuring stories, feed cards, likes, and a polished mobile-first layout.",

    longDescription:
      "Built an Instagram-inspired social frontend using React.js with a clean feed UI, story highlights, interaction elements, and mobile-first visual design. The project focuses on replicating a familiar social experience with responsive components and polished styling.",

    tags: [
      "React.js",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Responsive UI",
      "Social App"
    ],

    image:
      "https://images.unsplash.com/photo-1611262588024-d12430b98920?auto=format&fit=crop&w=800&q=80",

    demoUrl: "#",

    githubUrl: "#",

    highlights: [
      "Instagram-inspired UI",
      "Feed and story design",
      "Responsive social layout",
      "Modern component-driven frontend"
    ]
  }
];


export const servicesData = [
  {
    title: "Frontend Web Development",

    icon: "💻",

    description:
      "Building responsive and interactive websites using React.js, JavaScript, HTML, CSS, and modern frontend development practices."
  },

  {
    title: "React.js Development",

    icon: "⚛️",

    description:
      "Developing reusable React components, interactive user interfaces, and scalable frontend applications using component-based architecture."
  },

  {
    title: "Responsive Web Design",

    icon: "📱",

    description:
      "Creating responsive interfaces that provide a consistent and user-friendly experience across desktops, tablets, and mobile devices."
  },

  {
    title: "UI Implementation",

    icon: "🎨",

    description:
      "Converting UI designs and ideas into clean, functional web interfaces using HTML, CSS, JavaScript, React.js, Bootstrap, and Figma."
  }
];


export const experienceData = [
  {
    role: "Frontend Developer / Intern",
    company: "Academic & Hands-on Projects",
    period: "2023 - Present",
    description: "Engineered high-performance React.js components, integrated REST APIs, created responsive UI designs, and optimized web performance across multiple web applications.",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Git", "REST APIs"]
  },
  {
    role: "IoT & Embedded Systems Engineer",
    company: "Capstone Innovations Project",
    period: "2023 - 2024",
    description: "Architected a solar-powered EV prototype featuring ESP32 microcontroller automation, sensor telemetry, and automatic battery-swapping system logic.",
    skills: ["ESP32", "IoT", "Embedded Systems", "Hardware Integration", "C++"]
  },
  {
    role: "Android Application Developer",
    company: "Grama Suvidha Project",
    period: "2023",
    description: "Built the Grama Suvidha mobile application utilizing Kotlin, Android Studio, and Room Database to provide accessible digital services to rural communities.",
    skills: ["Android", "Kotlin", "MVVM", "Room Database", "Firebase"]
  }
];