export const BULLET_COLOR = "#00b4d8";

type ExpreinceType = {
  image: string;
  company: string;
  title: string;
  location: string;
  period: string;
  type: string;
  detail: string;
  techs: string[];
};

export const EXPERINCES_DATA: ExpreinceType[] = [
  {
    image: "hypertrack.png",
    company: "HyperTrack",
    title: "Lead Software Engineer (Frontend Platforms)",
    location: "Remote",
    period: "Sep 2022 - Present",
    type: "Full-time",
    detail:
      "Own frontend architecture for real-time logistics platform spanning customer dashboards and internal operational systems. Re-architected frontend into a microfrontend-based system improving deployment isolation and platform scalability. Improved core application performance (Lighthouse ~23 → ~75) by restructuring bundle boundaries and optimizing runtime hydration paths. Reduced real-time tracking page latency (~3s → ~500ms) by isolating map-heavy workflows into lightweight Svelte-based runtime modules. Led migration from MapTiler to AWS Location Services, reducing platform cost by ~40%. Designed AI-assisted operational investigation layer combining API aggregation, caching, and retrieval-based context generation for order-level debugging workflows.",
    techs: [
      "React",
      "TypeScript",
      "Svelte",
      "AWS Location Services",
      "WebSockets",
      "GraphQL",
      "AppSync",
      "Zustand",
      "TanStack Query",
      "Tailwind",
    ],
  },
  {
    image: "telio.webp",
    company: "Telio",
    title: "Associate Technical Architect",
    location: "Remote",
    period: "Oct 2020 - Aug 2022",
    type: "Full-time",
    detail:
      "Designed and led company-wide microfrontend architecture using Single-SPA enabling independent scaling across ecommerce operational domains. Decomposed monolithic Magento frontend into modular domain-based systems (Orders, Inventory, Promotions, RBAC, Customer Ops). Established frontend platform foundation including shared UI systems, architectural standards, and cross-team integration patterns. Accelerated ecommerce migration delivery (~6 months) through frontend system redesign. Built multilingual ecommerce experiences (English/Vietnamese) across web (PWA) and Ionic React mobile surfaces.",
    techs: [
      "React",
      "Single-SPA",
      "Node.js",
      "GraphQL",
      "AppSync",
      "Svelte",
      "Ionic React",
      "Tailwind",
      "Material UI",
      "MongoDB",
    ],
  },
  {
    image: "lendingkart.png",
    company: "LendingKart",
    title: "Software Development Engineer - III",
    location: "Bangalore, India",
    period: "Apr 2018 - Aug 2020",
    type: "Full-time",
    detail:
      "Built internal frontend platform for marketing and operations enabling real-time landing page creation and experimentation without engineering releases. Improved landing page performance (Lighthouse ~44 → ~98, load time ~6s → ~300ms) via rendering optimization and asset pipeline redesign. Increased conversion performance (~7% → ~22%) through localized, A/B-tested landing page infrastructure. Designed experimentation system supporting 100+ multilingual campaigns. Built Puppeteer-based document generation system for automated loan agreements. Developed Angular-based customer onboarding platform improving first interaction latency to ~600ms.",
    techs: [
      "Angular",
      "Node.js (Express)",
      "Node.js (Fastify)",
      "Svelte (Sapper)",
      "React",
      "Puppeteer",
      "MongoDB",
      "Bootstrap",
    ],
  },
  {
    image: "coviam.jpeg",
    company: "Coviam Technologies",
    title: "Senior Software Developer",
    location: "Bangalore, India",
    period: "May 2016 - Mar 2018",
    type: "Full-time",
    detail:
      "Led frontend architecture for HR platform (PeopleHum), establishing initial UI system and engineering standards. Managed team of ~5 engineers delivering HR workflows and engagement systems under aggressive delivery cycles. Built real-time notification and auth systems using Node.js, MongoDB, Redis, and Socket.io. Delivered enterprise-grade AngularJS applications with consistent performance targets (>90 Lighthouse). Recognized in internal hackathons for rapid system prototyping.",
    techs: [
      "AngularJS",
      "Node.js (Express)",
      "MongoDB",
      "Redis",
      "Socket.io",
      "Bootstrap",
    ],
  },
  {
    image: "commonfloor.png",
    company: "CommonFloor",
    title: "Software Development Engineer",
    location: "Bangalore, India",
    period: "Apr 2013 - Apr 2016",
    type: "Full-time",
    detail:
      "Built hybrid mobile community platform using AngularJS + Ionic/Cordova across Android and iOS. Developed core engagement and communication features for residential community platform at scale. Contributed to backend-integrated workflows using PHP (Zend), MySQL, and JavaScript. Participated in early hybrid mobile architecture adoption and performance optimization initiatives.",
    techs: [
      "AngularJS",
      "Ionic",
      "Cordova",
      "jQuery",
      "PHP (Zend)",
      "MySQL",
      "JavaScript",
      "CSS3",
    ],
  },
];

type EducationType = {
  image: string;
  school: string;
  title: string;
  location: string;
  period: string;
  detail: string;
};

export const EDUCATION_DATA: EducationType[] = [
  {
    image: "bit.jpg",
    title: "Bachelor’s of Engineering",
    location: "Bhilai-Durg, Chhattisgarh, India",
    period: "2008 - 2012",
    detail:
      'During my college days, I developed an academic project titled "E-Panorama" using PHP, HTML, JavaScript, CSS, and MySQL. In addition to my academic pursuits, I actively participated in organizing college fests, robotics competitions, and gaming competitions, including Counter-Strike tournaments. These experiences helped enhance my technical and leadership skills while fostering a sense of teamwork and event management.',
    school: "BIT, Durg",
  },
  {
    image: "bharatmata.png",
    title: "Primary and Higher Secondary Education",
    location: "Bilaspur, Chhattisgarh, India",
    period: "1996 - 2008",
    detail:
      "During my school years, I excelled in my primary academics while actively participating in extracurricular activities. I was involved in the Scout & Guide program, achieving the rank of 3rd Sopan. Throughout my time in school, I also took part in various activities that contributed to my overall development, fostering teamwork, leadership, and communication skills.",
    school: "Bharat Mata English Medium School",
  },
];

type BlogType = {
  title: string;
  link: string;
  date: string;
  detail: string;
};

export const BLOGS_DATA: BlogType[] = [
  {
    title: "Next.js vs React: Which One Should You Devour?",
    link: "https://medium.com/@siddharthpandey_77104/next-js-vs-react-which-one-should-you-devour-8a4c96353eb8",
    date: "Aug 23, 2024",
    detail:
      "When it comes to choosing the right framework or library, it’s like deciding what to eat at a buffet. Both React and Next.js are like the main courses of the JavaScript ecosystem — each with its own unique flavor and set of ingredients.",
  },
  {
    title: "Angular 17: Unveiling the Shinier Side of Development",
    link: "https://medium.com/@siddharthpandey_77104/angular-17-unveiling-the-shinier-side-of-development-a8c66cde979d",
    date: "Jan 6, 2024",
    detail:
      "The Angular team has outdone themselves again! Angular 17 arrives, not just gleaming with new features, but polished for a smoother developer experience. Let’s ditch the memes (for now) and dive into the professional upgrades that await.",
  },
  {
    title:
      "Frontend Feast: Exploring Micro Frontends — A Buffet of Advantages and Mansion Party Challenges",
    link: "https://medium.com/@siddharthpandey_77104/frontend-feast-exploring-micro-frontends-a-buffet-of-advantages-and-mansion-party-challenges-0bc3ad58111e",
    date: "Jan 5, 2024",
    detail:
      "Welcome to the dynamic realm of web development! Imagine a tech buffet, presenting developers with a spread of advantages, ranging from code reusability to fostering innovation. However, within this feast, challenges of governance, orchestration, and state management lurk. It’s akin to a bustling mansion party in the world of frontend development — diverse, vibrant, yet occasionally presenting its own cleanup hurdles.",
  },
  {
    title:
      "Micro Frontends Unwrapped: Buffet-style Development & Mansion Parties",
    link: "https://medium.com/@siddharthpandey_77104/micro-frontends-unwrapped-buffet-style-development-mansion-parties-6a7eeac4173d",
    date: "Jan 4, 2024",
    detail:
      "Micro frontends are like a buffet for developers — you get to build your own little ‘dish’ of the UI without worrying about stepping on someone else’s coding toes. It’s like a potluck dinner where everyone brings their best ‘dish’ (or module), whether it’s a fancy header, a sassy sidebar, or the life of the party feature. ",
  },
];
