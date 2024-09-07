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
    image: "telio.webp",
    company: "Telio",
    title: "Associate Technical Architect",
    location: "Remote",
    period: "Oct 2020 - Aug 2022",
    type: "Full-time",
    detail:
      "Take care of site/product performance aspects while coding. Review code and ensure code changes meet quality, are bug free, etc. Implement/develop global solutions to help the smooth functioning of development. Migration from Magento: To develop everything from scratch we have to migrate each process from magento or the process which is currently offline.",
    techs: [
      "React 17",
      "Single SPA",
      "NodeJS (Express)",
      "MongoDB",
      "Svelte",
      "Tailwind",
      "Material - UI",
    ],
  },
  {
    detail:
      "To understand the project which is being assigned, design the project architecture, write good quality, groom other developers, with end to end product understanding.",
    image: "lendingkart.png",
    company: "Lendingkart",
    title: "Software Development Engineer - III",
    location: "Bangalore, India",
    period: "Apr 2018 - Aug 2020",
    type: "Full-time",
    techs: [
      "Angular 9",
      "NodeJS (Express)",
      "NodeJS (Fastify)",
      "Svelte (Sapper)",
      "React 16",
      "Puppeteer",
      "MongoDB",
      "Bootstrap",
    ],
  },
  {
    image: "coviam.jpeg",
    company: "Coviam",
    title: "Senior Software Developer",
    location: "Bangalore, India",
    period: "May 2016 - Mar 2018",
    type: "Full-time",
    detail:
      "I designed and implemented scalable project architectures, mentored developers, reviewed code for quality, and implemented logging for effective debugging. Additionally, I ensured project performance optimization and team collaboration.",
    techs: [
      "AngularJS (MVC)",
      "NodeJS (Express)",
      "MongoDB",
      "Redis",
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
      "Write good quality and bug free code with end to end product understanding. To drive the UI architecture and make your team members learn along the way. Take care of site/product performance aspects while coding.",
    techs: [
      "AngularJS (MVC)",
      "Ionic",
      "Jquery",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
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
