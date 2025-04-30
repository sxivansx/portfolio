import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Shivansh",
  lastName: "Pandey",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Brand, UI/UX, and Graphic Designer",
  avatar: "/images/avatar.jpeg",
  email: "shivanshp987@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Behance",
    icon: "behance",
    link: "https://www.behance.net/sxivansx",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/sxivansx",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/sxivansx",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Crafting brands, experiences, and visuals that resonate</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">FreeSip</strong></>,
    href: "/work/freesip",
  },
  subline: (
    <>
      I'm Shivansh, a designer who crafts brands from the ground up — from logos and visual identity to websites and digital experiences. I blend design thinking, creativity, and technology to create intuitive, memorable user experiences.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "About",
    description: (
      <>
        I'm a designer who crafts brands from the ground up — from logos and visual identity to websites and digital experiences. I blend design thinking, creativity, and technology to create intuitive, memorable user experiences.
      </>
    ),
  },
  work: {
    display: false, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FLY",
        timeframe: "2022 - Present",
        role: "Senior Design Engineer",
        achievements: [
          <>
            Redesigned the UI/UX for the FLY platform, resulting in a 20% increase in user
            engagement and 30% faster load times.
          </>,
          <>
            Spearheaded the integration of AI tools into design workflows, enabling designers to
            iterate 50% faster.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Dayanand Sagar College of Engineering",
        description: <>Electronics Student</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "Brand Design",
        description: <>Crafting timeless brand identities from scratch—logos, color systems, visual language, and complete branding systems built for real-world connection and clarity.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/freesip/cover-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/zenith/cover-01.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "UI/UX and Product Design",
        description: <>Creating intuitive, user-friendly interfaces that make complex tasks feel effortless.</>,
        // optional: leave the array empty if you don't want to display images
      
      },
      {
        title: "Graphic Design",
        description: <>The foundation of everything I do—posters, social content, motion-ready visuals, and campaigns with real visual impact. 
        I treat every pixel like it matters (because it does).</>,
        // optional: leave the array empty if you don't want to display images
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Designed by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/g5.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/g3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/g2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/g1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/g4.jpeg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/g6.jpeg",
      alt: "image",
      orientation: "vertical",
    },

  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
