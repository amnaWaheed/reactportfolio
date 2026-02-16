
import { Project, Experience, SkillCategory } from './types';

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    company: 'Keeyu Australia',
    role: 'Mern Stack Developer',
    duration: 'Dec 2023 - Nov 2025',
    location: 'Remote/Australia',
    responsibilities: [
      'Built the Keeyu product from scratch, integrating Shopify APIs and Azure authentication.',
      'Developed a micro-frontend architecture for scalability and optimized DB configurations.',
      'Integrated Firebase notifications and Microsoft Copilot AI for automated workflows.',
      'Led the React team and mentored interns for high-quality delivery.'
    ]
  },
  {
    id: '2',
    company: 'EritheiaLabs Lahore',
    role: 'React & Next JS Developer',
    duration: 'Aug 2021 - Dec 2023',
    location: 'Lahore, Pakistan',
    responsibilities: [
      'Developed and optimized React.js applications with Next.js, Material-UI, and Tailwind CSS.',
      'Integrated third-party APIs and handled performance improvements.',
      'Debugged and resolved critical issues through POCs and R&D.',
      'Improved rendering performance and user engagement metrics.'
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'p0',
      name: 'Keeyu (Unified Order View)',
    description: 'UNIFIED ORDER VIEW. Connects with storefronts, WMS, ERPs, help desks, and carriers. A comprehensive dashboard providing real-time insights into customer store orders.',
    image: 'images/keeyu.png',
    techStack: ['Shopify APIs', 'Azure MSAL', 'NestJS', 'MongoDB'],
    link: 'https://www.keeyu.com'
  
  },
  {
    id: 'p1',
      name: 'KrispX (Auto E-commerce)',
    description: 'WHERE COLLECTORS & ENTHUSIASTS MEET. E-commerce platform for car collectors featuring delivery scheduling, test drive booking, and real-time trading workflows.',
    image: 'images/krisp.png',
    techStack: ['Next.js', 'PayPal', 'Stripe', 'Google Maps API'],
    link: 'https://www.krispx.com'
  
  },
  {
    id: 'p6',
     name: 'Foap (Content Creator)',
    description: 'WE ARE CREATORS. Unleash the creativity of 4.5 million creators and get authentic, diverse photo and video content for your brand. Optimized for efficient media handling.',
    image: 'images/foap.png',
    techStack: ['Next.js', 'GraphQL', 'Cloudinary', 'Redux'],
    link: 'https://www.foap.com'
  
  },
  {
    id: 'p5',
    name: 'EFXPRO',
    description: 'DECADES OF FOREX EXPERIENCE. Offering global access with local precision. Trust your investments to a locally regulated broker with a legacy and reputation you can count on.',
    image: 'images/efxpro.png',
    techStack: ['Next.js', 'TradingView', 'Stripe', 'Material UI'],
    link: 'https://efxpro.com'
  },
  {
    id: 'p8',
    name: 'Criclay',
    description: 'LET\'S PLAY. The Ultimate Mix for Your Corporate Cricket Experience! More than a sport, it\'s a way of life for those who love the game. Download and start scoring for free.',
    image: 'images/crickley.png',
    techStack: ['React Native', 'Socket.io', 'Node.js', 'Firebase'],
    link: 'https://www.criclay.com/'
  },
  {
    id: 'p10',
    name: 'Catered Club',
    description: 'YES JANET, I KNOW YOU\'RE GLUTEN-FREE. Every Office Manager, Ever. That\'s why we created dietary-friendly presets everyone will actually enjoy. Ready to wow your team?',
    image: 'images/cateredclub.png',
    techStack: ['React', 'Redux', 'Stripe', 'Express'],
    link: 'https://www.cateredClub.com/'
  },
  {
    id: 'p7',
    name: 'DPixelPro',
    description: 'COMPOSITE. Combining individuals to create a team. Specialized post-processing solutions for sports and group photography, featuring high-end composite workflows.',
    image: 'images/DP.png',
    techStack: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
    link: 'https://dpixelpro.com/'
  },
  {
    id: 'p3',
     name: 'CanIBuild',
    description: 'ABOUT CANIBUILD. The Leading Platform for Instant Site Suitability & Pre-Construction Optimization. Simplify site feasibility and planning using complex spatial logic.',
    image: 'images/canibuild.png',
    techStack: ['React.js', 'Google Maps API', 'Material UI', 'Node.js'],
    link: 'https://canibuild.com/en-us/'
  },
  {
    id: 'p2',
   name: 'Livecue',
    description: 'SMASH WITH CONFIDENCE. Professional Padel Tennis Tournaments with Live Scoring. Track tournaments, follow live matches, and connect with the padel tennis community in real-time.',
    image: 'images/LiveCue.png',
    techStack: ['React.js', 'Socket.io', 'Tailwind CSS', 'Node.js'],
    link: 'https://www.livecue.io/'
  },
  {
    id: 'p9',
    name: 'The Hundred Balls',
    description: 'RECENT MATCH RESULT. A dedicated hub for the unique cricket format. Track every ball, player stats, and live tournament standings in a high-performance interface.',
    image: 'images/100balls.png',
    techStack: ['Next.js', 'Tailwind CSS', 'Redux Toolkit','ROR', 'PostgreSQL'],
    link: 'https://www.thehundredballs.com/'
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit', 'Material-UI']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Fastify', ]
  },
  {
    category: 'Database & Tools',
    items: ['MongoDB', 'GraphQL', 'REST APIs', 'Azure MSAL', 'Shopify APIs', 'Git', 'Docker', 'Playwright']
  },
  {
    category: 'AI Tools',
    items: ['Copilot', 'Custom Copilot Agent Workflows', 'Cursor', 'Windsurf', 'ChatGPT', 'Claude AI']
  }
];
