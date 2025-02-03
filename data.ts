export type Project = {
  id: number;
  bg_image?: string;
  img1: string;
  img2: string;
  img3?: string;
  img4?: string;
  title: string;
  subtitle: string;
  brief: string;
  href: string;
  link: string;
  videoUrl: string;
  description: string;
  about?: string;
  isAndroid?: boolean;
  slug: string;
  framework?: string;
  database?: string;
  ORM?: string;
  styling?: string;
  category?: string;
  type?: string;
  others?: string;
  pictures?: string[];
  howtos?: string[];
  withStripe?: boolean;
  withLiveKit?: boolean;
};

export type Projects = Project[];

export const data: Projects = [
  {
    id: 1,
    bg_image: "/duo.png",
    img1: "/i.png",
    img2: "/i.png",
    img3: "/i.png",
    img4: "/i.png",
    title: "Duolingo inspired sass language learning app clone",
    subtitle: "Language Learning App Clone",
    brief:
      "A Duolingo-inspired language learning app built with Next.js 13 that offers interactive lessons, progress tracking, and gamification features.",
    href: "/1",
    link: "http://www.goal.com",
    videoUrl: "http://www.goal.com",
    description:
      "This project is a full-stack clone of the popular language learning platform Duolingo, developed using Next.js 13 for its server-rendered capabilities and optimized performance. The app provides users with interactive lessons in multiple languages, utilizing Drizzle ORM and Neon DB for efficient data handling. It incorporates ElevenLabs AI for generating language exercises, creating a personalized learning experience. Users can engage in speaking, listening, and writing exercises with gamified elements such as points, levels, and streaks. The app also includes a comprehensive progress tracking dashboard, allowing users to monitor their learning journey and adjust goals accordingly.",
    slug: "dualingo-clone-project",
    withStripe: true,
    framework: "Next js, React js.",
    database: "Neon DB",
    ORM: "Drizzle",
    styling: "Css, Tailwind",
    category: "Language learning",
    type: "Clone",
    others: "Stripe, Elevenlabs",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/type.svg",
      "/img/driz.png",
      // "/img/tss.svg",
      "/img/neon.png",
      "/img/elev.svg",
    ],
    howtos: [
      "Sign up for a new account using your email address or a social media login. This will allow you to track your progress and access personalized lessons. ",
      "Select the language you want to learn from the available options. You can start with the basics or take a placement test to find your level. ",
      "Begin with interactive lessons that include speaking, listening, and writing exercises. Earn points and unlock new levels as you complete each lesson. ",
      "Customize your learning experience by setting daily or weekly goals. The app will send reminders to help you stay on track and maintain your learning streak. ",
      "Visit the dashboard to view your learning history, achievements, and progress over time. Use this information to identify areas for improvement and adjust your learning strategy.",
    ],
  },
  {
    id: 2,
    bg_image: "/twitch.png",
    img1: "/i.png",
    img2: "/i.png",
    img3: "/i.png",
    img4: "/i.png",
    title: "Twitch Clone",
    subtitle: "Live Streaming Platform Clone",
    brief:
      "A full-stack Twitch-like live streaming platform built with Next.js 13, LiveKit, and Neon DB, enabling users to broadcast and watch live content.",
    href: "/1",
    link: "http://www.goal.com",
    videoUrl: "http://www.goal.com",
    description:
      "This project replicates the core functionalities of Twitch, leveraging Next.js 13 for its modern UI capabilities and server-side rendering. The app allows users to broadcast live streams using LiveKit for real-time video and audio communication, and it integrates with OBS Studio for professional-quality streaming. The backend is powered by Prisma and Neon DB, ensuring efficient data storage and retrieval. Users can explore streams by category, follow their favorite channels, and interact via real-time chat. The platform also supports user registration, channel creation, and follower systems, providing a comprehensive streaming experience.",
    slug: "twitch-clone-project",
    framework: "Next, React.",
    database: "Neon DB",
    ORM: "Prisma",
    styling: "Css, Tailwind",
    category: "Streaming App",
    type: "Clone",
    others: "Uploadthing, Livekit, Clerk",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/type.svg",
      "/img/tss.svg",
      "/img/prisma.svg",
      "/img/lk.svg",
      // "/img/mdb.svg",
    ],
    howtos: [
      "Create an account using your email or social media credentials. Log in to access personalized content and interact with the community. ",
      "Browse live streams across various categories, including gaming, music, and creative arts. Use filters and search to find content that interests you. ",
      "Follow your favorite channels to receive notifications when they go live. Customize your feed to prioritize the content you love. ",
      "Join the chat during live streams to interact with streamers and other viewers. Use emotes and commands to enhance your chat experience. ",
      "Start your own live stream by setting up a channel and configuring your streaming software. Share your gameplay, creative process, or other content with the community.",
    ],
  },
  {
    id: 3,
    bg_image: "/dsd.png",
    img1: "/i.png",
    img2: "/i.png",
    img3: "/i.png",
    img4: "/i.png",
    title: "Discord Clone",
    subtitle: "Chat and VoIP App Clone",
    brief:
      "A Discord-inspired chat and VoIP application developed with Next.js 13, LiveKit, and Prisma, offering real-time communication in servers and private messages.",
    href: "/1",
    link: "http://www.goal.com",
    videoUrl: "http://www.goal.com",
    description:
      "This project is a clone of Discord, featuring text, voice, and video communication in a full-stack application built with Next.js 13. Utilizing LiveKit for real-time interaction and Prisma with MongoDB for data management, the app supports server creation, channel organization, and role management. Users can join servers, participate in channel discussions, and engage in private messaging. The app's integration with Next.js 13 enables dynamic routing and efficient rendering, enhancing user experience. With features like direct messaging, role assignments, and media sharing, this clone provides a robust platform for community building and communication.",
    slug: "discord-clone-project",
    framework: "Next, React.",
    database: "Mongo DB",
    ORM: "Prisma",
    styling: "Css, Tailwind",
    category: "Social media",
    type: "Clone",
    others: "Uploadthing, Livekit, Clerk",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/type.svg",
      "/img/tss.svg",
      "/img/prisma.svg",
      "/img/lk.svg",
      // "/img/mdb.svg",
    ],
    howtos: [
      "Sign up for an account using your email address or a social media login. Customize your profile with a username and avatar. ",
      "Explore public servers related to your interests or join private ones via invitation. Servers are organized into channels for different topics and activities. ",
      "Communicate with others through text, voice, and video channels. Use direct messaging for private conversations with friends. ",
      "Assign roles to members within a server to manage permissions and access. Customize roles to fit the structure and needs of your community. ",
      "Upload files, share links, and use bots to enhance your server's functionality. Engage with your community through events, polls, and announcements.",
    ],
  },
  {
    id: 4,
    bg_image: "/notion.png",
    img1: "/i.png",
    img2: "/i.png",
    img3: "/i.png",
    img4: "/i.png",
    title: "Notion Clone",
    subtitle: "Productivity and Note-Taking App Clone",
    brief:
      "A Notion-like productivity app that allows users to create, organize, and collaborate on notes, tasks, and projects.",
    href: "/1",
    link: "http://www.goal.com",
    videoUrl: "http://www.goal.com",
    description:
      "This project replicates Notion's flexible productivity features, offering a full-stack solution built with Next.js 13. The app provides a block-based editor for creating rich media content, tasks, and databases. Using Convex and Edgestore, the app supports real-time collaboration and data synchronization, enabling seamless teamwork. Users can create and organize content within their workspace, customize pages, and utilize templates for efficient workflow management. With the combination of dynamic rendering and real-time updates, this Notion clone delivers a comprehensive tool for personal and professional productivity.",
    slug: "notion-clone-project",
    framework: "Next, React.",
    database: "Convex",
    styling: "Css, Tailwind",
    category: "Productivity",
    type: "Clone",
    others: "Edgestore, Clerk",
    pictures: [
      "/img/next.svg",
      "/img/react.svg",
      "/img/type.svg",
      "/img/tss.svg",
      // "/img/cvx.png",
    ],
    howtos: [
      "Sign up using your email or a third-party authentication provider. Access your workspace from any device with internet connectivity. ",
      "Set up your workspace by creating pages and subpages. Use templates to quickly add notes, tasks, databases, and other content types. ",
      "Edit pages using the block-based editor to add text, images, tables, and more. Drag and drop blocks to reorganize content as needed. ",
      "Invite team members to join your workspace and collaborate in real time. Assign tasks, leave comments, and track changes to stay coordinated. ",
      "Create databases to track projects, tasks, and goals. Use filters, sorting, and views to organize information and keep everything on track.",
    ],
  },
];
