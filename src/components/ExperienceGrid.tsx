import React from "react";
import { Link } from "react-router-dom";

const experienceList = [
  {
    company: "Configur",
    role: "Lead Frontend Developer",
    period: "Jan 2024 - Present",
    skills: ["Next.js", "React", "TypeScript", "AWS Lambda", "MongoDB", "Redux", "Jest"],
    description:
      "Leading frontend architecture and team development on a Next.js-powered data aggregation platform serving enterprise clients across finance, healthcare, and logistics sectors. Architected scalable component system and established frontend best practices, enabling 6-engineer frontend team to ship features independently., improving user engagement and platform adoption. Mentored 2 junior developers through code reviews, pair programming, and architectural discussions, advancing both to mid-level capabilities. Implemented comprehensive testing strategy using Jest and Cypress, achieving 90% code coverage. Collaborated with backend team on API optimization, reducing data processing latency by 34% and improving platform scalability to handle daily requests."
  },
  {
    company: "Configur",
    role: "Full Stack Developer",
    period: "Jun 2022 - Jan 2024",
    skills: ["Next.js", "React", "TypeScript", "AWS Lambda", "MongoDB", "Node.js", "Jest"],
    description:
      "Led the V2 migration of a legacy React application to Next.js within an 8-person startup team, rebuilding the platform's architecture from the ground up. Developed a new design system built on Semantic UI to ensure consistency across the product, and introduced unit testing with Jest to establish a reliable testing baseline. Leveraged Next.js rendering strategies to optimise performance, resulting in faster load times, improved user flows, and a significant reduction in bugs post-launch.",
  },
  {
    company: "Raytheon UK",
    role: "Software Engineer",
    period: "Jan 2022 - Jun 2022",
    skills: ["React", "TypeScript", "Docker", "AWS", "Node.js", "Cypress"],
    description:
      "Built internal tooling used business-wide to help managers identify and assign skilled team members to upcoming projects. The platform provided skill-based search and filtering alongside project history tracking, replacing a manual process and giving leadership a clearer, faster way to resource projects effectively.",
  },
  {
    company: "Gtech",
    role: "Creative Frontend Developer",
    period: "Dec 2020 - Jan 2022",
    skills: ["Magento 2", "PHP", "Node", "SCSS", "Git"],
    description:
      "Sole frontend developer responsible for migrating Gtech's e-commerce platform from Magento 1 to Magento 2 and launching a separate international storefront for a leading UK cordless consumer goods brand. The international expansion directly increased conversions by opening the business to new global markets, with the full migration and launch delivered independently end-to-end.",
  },
  {
    company: "This is Union",
    role: "Junior Developer",
    period: "May 2020 - Dec 2020",
    skills: ["HTML", "SCSS", "jQuery", "WordPress", "PHP"],
    description:
      "Built custom WordPress themes from scratch for a diverse range of clients at a marketing agency undergoing its own rebrand. Worked across varied industries delivering tailored, brand-aligned web experiences — handling everything from initial build to ongoing maintenance for each client.",
  },
];

function ExperienceGrid() {
  return (
    <div className="flex flex-col">
      {experienceList.map((experience, index) => (
        <Link
          to="/about"
          key={`${experience.company}-${experience.period}`}
          className="group block py-8 border-b border-border dark:border-borderdark last:border-b-0 transition-colors"
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-lg font-medium mb-0 group-hover:text-accentcolor transition-colors">
                {experience.company}
              </h3>
              <span className="text-sm text-lightsubtext dark:text-darksubtext">
                {experience.role}
              </span>
            </div>
            <span className="text-sm text-lightsubtext dark:text-darksubtext font-mono">
              {experience.period}
            </span>
          </div>
          <p className="text-sm text-lightsubtext dark:text-darksubtext leading-relaxed mb-4 max-w-xl">
            {experience.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="text-xs px-2.5 py-1 rounded-full bg-surface dark:bg-surfacedark text-lightsubtext dark:text-darksubtext"
              >
                {skill}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ExperienceGrid;
