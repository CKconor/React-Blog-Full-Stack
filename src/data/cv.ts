/**
 * Single source of truth for CV and portfolio content.
 *
 * Consumed by:
 *   - src/components/ExperienceGrid.tsx  (home page roles)
 *   - src/components/Skills.tsx          (home page skills grid)
 *   - src/app/page.tsx                   (home page hero)
 *   - src/app/about/page.tsx             (about page)
 *   - src/app/layout.tsx                 (site metadata)
 *   - src/app/opengraph-image.tsx        (share cards; also about/)
 *   - scripts/build-cv.mjs               (generates cv-conor-kemp.html -> PDF)
 *
 * This file previously existed as four diverging copies. Edit here only.
 *
 * PDF/ATS constraint: the generated CV is parsed by applicant tracking systems
 * before a human reads it. En-dashes and middots do NOT round-trip through the
 * embedded font subsets and extract as unmappable bytes — which breaks
 * employment-date parsing in particular. Use ASCII hyphens in `period`, and
 * prefer em-dash (verified to extract as "--") elsewhere.
 */

export type Role = {
  company: string;
  title: string;
  /** Always `MMM YYYY - MMM YYYY` with an ASCII hyphen. Parsers derive years of experience from this. */
  period: string;
  bullets: string[];
  tech: string[];
};

export type SkillCategory = {
  title: string;
  skills: string[];
};

export const profile = {
  name: 'Conor Kemp',
  title: 'Lead Frontend Developer',
  email: 'conorkemp@gmail.com',
  phone: '07530 523456',
  location: 'Worcester, UK (Remote)',
  links: [
    { label: 'linkedin.com/in/conor-kemp', href: 'https://www.linkedin.com/in/conor-kemp-790920178' },
    { label: 'github.com/ckconor', href: 'https://github.com/ckconor' },
    { label: 'www.conorkemp.com', href: 'https://www.conorkemp.com' },
  ],
};

/**
 * Site-only copy. The CV opens with `summary`; the website opens with these.
 * Kept here so the framing stays in step with the roles below — the site read as
 * frontend-only for a while after the AWS work landed in the role bullets.
 */
export const tagline = 'Frontend architecture and serverless AWS backends';

export const heroBlurb =
  'Lead engineer with six years building production web applications end to end — React, ' +
  'Next.js and TypeScript interfaces on the front, serverless AWS backends on Lambda, API ' +
  'Gateway and SQS behind them. Currently setting technical direction for a six-engineer team ' +
  'on an enterprise data platform.';

export const summary =
  'Software engineer with six years across the full stack, now setting technical direction for a ' +
  'six-engineer team on an enterprise data platform. Works end to end, from React and Next.js ' +
  'interfaces through to serverless AWS backends built on Lambda, API Gateway and SQS. Reported ' +
  'bugs down 75% a month, page load times halved, and CI build times cut by a third.';

export const roles: Role[] = [
  {
    company: 'Configur',
    title: 'Lead Frontend Developer',
    period: 'Jan 2024 - Present',
    bullets: [
      'Set the technical direction for a six-engineer team on an enterprise data platform serving finance, healthcare and logistics clients. The platform doubled revenue and tripled its client base over the period.',
      'Own the architecture the team builds against: selected the stack and core libraries (Next.js App Router, TanStack Query, Zustand, Turborepo) with the CTO, and write the design documents setting out service boundaries, API contracts and data flow for new platform work.',
      "Worked on the platform's real-time WebSocket system on AWS API Gateway, and shipped AI-assisted features on Bedrock through its serverless Lambda API, using CloudWatch to trace failures and hold latency and model spend down.",
      'Cut reported bugs by 75% per month with a layered testing strategy of unit tests in Jest, integration tests and end-to-end coverage in Playwright, with defects tracked in Sentry; supported external penetration testing of the platform.',
      'Halved page load times and increased workflow speed by 33%, eliminating duplicate requests and reworking client-side data fetching.',
      'Introduced the design-system conventions, code review and PR standards, and release and branching model the team works to, and cut CI build times by a third optimising the GitLab pipelines behind them.',
      "Run delivery as scrum master, from sprint planning and estimation through to project scoping with stakeholders and quarterly platform planning with the CTO; interviewed 10 candidates resulting in 2 hires, and mentored two junior developers, both since promoted.",
    ],
    tech: ['React', 'TypeScript', 'Next.js', 'TanStack Query', 'Zustand', 'Turborepo', 'Playwright', 'Sentry', 'AWS Lambda', 'AWS API Gateway', 'AWS Bedrock', 'AWS CloudWatch'],
  },
  {
    company: 'Configur',
    title: 'Full Stack Developer',
    period: 'Jun 2022 - Jan 2024',
    bullets: [
      'Led the V2 migration of a legacy React application to Next.js in an eight-person team, rebuilding the platform architecture from the ground up.',
      'Moved client-side data fetching to TanStack Query, introducing caching, request deduplication and server-state management across the application.',
      "Built the product's first design system and introduced unit testing with Jest, establishing the testing baseline the team still works from.",
      "Built and maintained the platform's API endpoints as AWS Lambda functions, with SQS queues handling asynchronous processing and inbound webhook delivery, and diagnosed live failures from CloudWatch logs.",
      "Wrote the MongoDB aggregation pipelines behind the platform's reporting and data views, shaping and summarising large collections server-side instead of in the client.",
    ],
    tech: ['React', 'TypeScript', 'Next.js', 'TanStack Query', 'styled-components', 'Node.js', 'MongoDB', 'AWS Lambda', 'AWS CloudWatch'],
  },
  {
    company: 'Raytheon UK',
    title: 'Software Engineer',
    period: 'Jan 2022 - Jun 2022',
    bullets: [
      'Built and shipped internal tooling adopted by around 20 teams at a large defence contractor, providing skill-based search, filtering and project-history tracking.',
      'Replaced a manual resourcing process, giving leadership a faster and clearer way to staff projects across the business; delivered through a formal PR review, QA and deployment process.',
      'Containerised the application with Docker so the React frontend, Express API and its dependencies ran identically in local development and on deployment, removing environment drift between engineers and the hosted build.',
      "Defined the application's AWS infrastructure as code in CloudFormation, provisioning EC2 instances, SQS and SNS for queued processing and notifications, and the IAM users and roles governing access to them; achieved AWS Certified Cloud Practitioner certification during the role.",
    ],
    tech: ['TypeScript', 'React', 'Node.js', 'Express', 'Docker', 'AWS CloudFormation', 'AWS EC2', 'AWS SQS', 'AWS SNS', 'AWS IAM', 'Cypress'],
  },
  {
    company: 'Gtech',
    title: 'Creative Frontend Developer',
    period: 'Dec 2020 - Jan 2022',
    bullets: [
      'Sole frontend developer at a 250+ person consumer goods manufacturer, delivering the migration of its e-commerce platform from Magento 1 to Magento 2 end to end.',
      'Built and launched a separate international storefront, opening the business to Germany and subsequently markets across the EU.',
      'Delivered the localisation and multi-region setup behind it: currencies, languages and regional content.',
    ],
    tech: ['Magento 2', 'PHP', 'JavaScript', 'SCSS', 'jQuery', 'Bootstrap', 'Git'],
  },
  {
    company: 'This is Union',
    title: 'Junior Developer',
    period: 'May 2020 - Dec 2020',
    bullets: [
      'Built custom WordPress themes from scratch for clients across varied industries at a marketing agency.',
    ],
    tech: ['WordPress', 'PHP', 'HTML', 'SCSS', 'jQuery'],
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Core',
    skills: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'Node.js', 'MongoDB', 'WebSockets', 'Full-Stack Development'],
  },
  {
    title: 'Frontend & UI',
    skills: ['Tailwind CSS', 'styled-components', 'TanStack Query', 'Zustand', 'Redux Toolkit', 'Framer Motion', 'GSAP'],
  },
  {
    title: 'Cloud & Infrastructure',
    skills: [
      'AWS',
      'AWS Lambda',
      'AWS API Gateway',
      'AWS SQS',
      'AWS SNS',
      'AWS EC2',
      'AWS IAM',
      'AWS CloudWatch',
      'AWS CloudFormation',
      'AWS Bedrock',
      'Infrastructure as Code',
      'Serverless Architecture',
      'Event-Driven Architecture',
    ],
  },
  {
    title: 'Platform & DevOps',
    skills: [
      'Vercel',
      'Turborepo',
      'GitLab CI',
      'CI/CD',
      'Docker',
      'Jest',
      'Playwright',
      'Unit Testing',
      'Integration Testing',
      'End-to-End Testing',
      'Sentry',
      'LaunchDarkly',
      'OAuth',
      'AI-assisted development',
    ],
  },
  {
    title: 'Leadership & Delivery',
    skills: ['Technical Leadership', 'Mentoring', 'Hiring & Interviewing', 'Code Review Standards', 'Agile', 'Scrum', 'Project Planning', 'Technical Strategy', 'Stakeholder Management'],
  },
];

export const education = {
  subject: 'Creative Digital Media and Design',
  detail: 'University of Worcester, 2:1 Honours',
};

export type Certification = {
  name: string;
  detail: string;
};

export const certifications: Certification[] = [
  { name: 'AWS Certified Cloud Practitioner', detail: 'Amazon Web Services, 2022' },
];

export const interests =
  'Building and customising mechanical keyboards, video games, and travelling to a new country each year.';
