import React from "react";
import { Link } from "react-router-dom";

const experienceList = [
  {
    company: "Configur",
    role: "Full Stack Developer",
    skills: [
      "React",
      "Typescript",
      "Node",
      "AWS Lambda",
      "MongoDB",
      "Redux",
      "Jest",
    ],
    description:
      "Working as part of a startup team of 8 developers creating a data platform for aggregating and collating data using React, Styled Components, MongoDB, AWS Lambda, AWS Aurora, Typescript and Redux. Serving a variety of clients across multiple sectors and industries",
  },
  {
    company: "Raytheon",
    role: "Software Engineer",
    skills: [
      "React",
      "Typescript",
      "Node",
      "Docker",
      "AWS Lambda",
      "Jest",
      "Cypress",
    ],
    description:
      "Developing React Applications using React, Bootstrap, AWS, Docker, Node and Express. Creating applications that impacted peoples day to day lives and benefiting the country",
  },
  {
    company: "Gtech",
    role: "Frontend Developer",
    skills: ["Magento 2", "PHP", "Node", "SCSS", "Git"],
    description:
      "I helped move the company to a brand new CMS Magento 2 and launched a separate international site while working as the solo frontend developer",
  },
];

function ExperienceGrid() {
  return (
    <div>
      {experienceList.map((experience) => (
        <div className="flex flex-row flex-1 border-2 border-skillcontainerlighbg dark:border-skillcontainerdarkbg flex-wrap p-8 items-center rounded-sm mb-8">
          <div className="flex flex-col">
            <h2 className="mb-1">{experience.company}</h2>
            <div className="flex flex-row flex-1 flex-wrap">
              {experience.skills.map((skill) => (
                <div className="mr-2 bg-accentcolor rounded-md py-1 px-4 text-sm mt-2 text-lightmode dark:text-darkmode">
                  {skill}
                </div>
              ))}
            </div>
            <p className="mt-4 text-lightsubtext dark:text-darksubtext">
              {experience.description}
            </p>
          </div>
        </div>
      ))}
      <Link to={"/about"}>
        <p className="text-sm text-lightsubtext dark:text-darksubtext mt-4">
          View All Experience ->
        </p>
      </Link>
    </div>
  );
}

export default ExperienceGrid;
