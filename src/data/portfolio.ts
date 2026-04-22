export const profile = {
  name: "Abhishek Singhal",
  role: "Full Stack Developer",
  tagline:
    "Building production-grade web & mobile experiences with React, React Native, Node.js & PostgreSQL.",
  location: "Bikaner, Rajasthan",
  email: "abhisheksinghal1909@gmail.com",
  phone: "+91 8306386953",
  linkedin: "https://www.linkedin.com/in/abhishek-singhal-a6789a232/",
  github: "https://github.com/abhisheksinghal1909",
};

export const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "5+", label: "Projects Delivered" },
  { value: "1M+", label: "Real-time Events Handled" },
];

export const skills = {
  Expert: ["JavaScript", "React", "React Native", "Node.js", "Express.js", "PostgreSQL"],
  Proficient: ["Prisma ORM", "Socket.IO", "REST APIs", "JWT Auth", "Redux", "MongoDB", "MySQL"],
  Familiar: ["Python", "C++", "SQL", "Machine Learning", "Figma", "Android Studio"],
  Tools: ["Git", "GitHub", "VSCode", "Postman", "FCM", "Agile/Scrum"],
};

export const projects = [
  {
    title: "MySathi Railway Platform",
    featured: true,
    description:
      "Production-grade real-time railway platform — live train tracking, PNR insights and on-demand porter (coolie) booking across multiple stations.",
    stack: ["React Native", "Node.js", "Socket.IO", "PostgreSQL", "Prisma"],
    highlight: "Dual mobile app ecosystem (Passenger & Coolie) with JWT-authenticated WebSockets.",
  },
  {
    title: "Face Emotion Detection App",
    featured: true,
    description:
      "Real-time face emotion detection Android app with camera integration, on-device data flow and clean result visualization.",
    stack: ["React Native", "Java", "Android Studio", "Figma"],
    highlight: "1,000+ downloads · 200+ reviews — iterated UI from real interaction data.",
  },
  {
    title: "E-commerce Platform",
    featured: false,
    description:
      "Full-featured e-commerce store with advanced search & filtering, admin dashboard, secure auth, and email-based password recovery.",
    stack: ["React", "Redux", "Node.js", "MongoDB"],
    highlight: "Scalable product management with role-based admin insights.",
  },
  {
    title: "Electricity Consumption Forecasting",
    featured: false,
    description:
      "Analyzed 9 months of 15-minute interval data from 5 corporate buildings and forecasted next 3 months using SARIMA + VAR ensemble.",
    stack: ["Python", "SARIMA", "VAR", "Pandas"],
    highlight: "85% accuracy on 20% test split — ADF & Durbin–Watson validated.",
  },
];

export const experience = [
  {
    role: "Full Stack Developer",
    company: "MySathi Pvt Ltd.",
    location: "Jaipur, RJ",
    period: "May 2025 — Present",
    stack: "React Native · Node.js · Express.js · PostgreSQL",
    points: [
      "Built a production-grade real-time railway platform with live train tracking, PNR insights and on-demand porter booking.",
      "Architected a dual mobile app ecosystem (Passenger & Coolie) with secure bi-directional Socket.IO + JWT WebSockets.",
      "Developed scalable Node.js + Express APIs with role-based auth, event-driven workflows and FCM push notifications.",
      "Designed PostgreSQL schemas with Prisma ORM for high-concurrency, high-availability access.",
    ],
  },
  {
    role: "Android Developer Intern",
    company: "Rawattech Consulting",
    location: "Jaipur, RJ",
    period: "May 2023 — Oct 2023",
    stack: "React Native · JavaScript · Android Studio · Figma",
    points: [
      "Built a real-time face emotion detection app — camera integration, data flow and result visualization.",
      "Analyzed 1,000+ downloads and 200+ reviews to iterate on UI and performance.",
      "Worked on object detection features with structured data handling and consistent UI.",
      "Used Figma for wireframing — improved development clarity and efficiency.",
    ],
  },
];

export const education = [
  {
    school: "Poornima College of Engineering",
    degree: "B.Tech, Computer Science",
    detail: "CGPA: 7.68 / 10",
    period: "Jul 2019 — Jun 2023",
    location: "Jaipur, RJ",
  },
  {
    school: "Delhi Public School",
    degree: "Class XII — PCM",
    detail: "Science stream",
    period: "Apr 2017 — Apr 2019",
    location: "Bikaner, RJ",
  },
];

export const certifications = [
  {
    title: "Meta Android Developer Professional Certificate",
    issuer: "Coursera · Meta",
    detail:
      "Android app development with JavaScript & React Native, Android Studio and the Android SDK.",
  },
];
