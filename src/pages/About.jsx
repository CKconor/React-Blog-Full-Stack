import Portrait from "../assets/portrait.png";
import axios from "axios";
import { useState, useEffect } from "react";

function About() {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col mt-5 md:mt-10 basis-2/2 md:basis-1/2">
        <h1 className="text-3xl sm:text-5xl font-bold mb-10 mt-0">About Me</h1>
        <h2 className="font-bold text-2xl sm:text-4xl mb-3">Job Title</h2>
        <p>Software Engineer & Frontend Developer</p>
        <h2 className="font-bold text-2xl sm:text-4xl mb-3 mt-6">Experience</h2>
        <p className="mb-4">
          I have worked as a Frontend Developer for the past 3 years after
          teaching myself coding during the pandemic after being furloughed and
          bored. I love all things design and coding with a desire to really
          push the boat out with designs and layouts.
        </p>
        <p>
          Specialising in React Webpages and PHP driven to CMS's I truly believe
          I can make you not only a beautiful website but also an extremely
          efficient one.
        </p>
        <h2 className="font-bold  text-2xl sm:text-4xl mb-3 mt-6">
          Work History
        </h2>
        <span className="text-xs text-lightsubtext dark:text-darksubtext mt-0">
          June 2022 - Present
        </span>
        <h3 className="font-bold  text-xl sm:text-2xl mb-1 mt-0">
          Configur - Full Stack Developer
        </h3>
        <p className="mb-4">
          Typescript, React, MongoDB, AWS Lambda, Node.js, Express, Jest, HTML,
          SCSS, Javascript, Serverless
        </p>
        <span className="text-xs text-lightsubtext dark:text-darksubtext mt-0">
          Jan 2022 - Jun 2022
        </span>
        <h3 className="font-bold  text-xl sm:text-2xl mb-1 mt-0">
          Raytheon UK - Software Engineer
        </h3>
        <p className="mb-4">
          Typescript, React, Docker, AWS, Node.js, Express, Jest, HTML, SCSS,
          Javascript
        </p>
        <span className="text-xs text-lightsubtext dark:text-darksubtext mt-0">
          Dec 2020 - Jan 2022
        </span>
        <h3 className="font-bold text-xl sm:text-2xl mb-1 mt-0">
          Gtech - Creative Frontend Developer
        </h3>
        <p className="mb-4">
          HTML, SCSS , XML, Magento 2, PHP, Jquery, Bootstrap, Git
        </p>
        <span className="text-xs text-lightsubtext dark:text-darksubtext mt-0">
          May 2020 - Dec 2020
        </span>
        <h3 className="font-bold text-xl sm:text-2xl mb-1 mt-0">
          This is Union - Junior Developer
        </h3>
        <p className="mb-4">HTML, SCSS, Jquery, Wordpress, PHP</p>
        <h2 className="font-bold text-2xl sm:text-4xl mb-3 mt-6">
          Personal Life
        </h2>
        <p className="mb-4">
          Outside of work I spend most of my time surrounded by all things
          technology whether it be playing Video Games or building custom
          keyboards I find myself most comfortable around technology. Alongside
          Tech I also love travelling and experiencing different cuisines with
          the goal of travelling to another country at least once a year.
        </p>
        <h2 className="font-bold text-2xl sm:text-4xl mb-3 mt-6">My Links</h2>
        <ul className="list-disc list-inside text-sky-600 underline marker:text-lightsubtext dark:marker:text-darksubtext">
          <a href="https://youtube.com/ckplaysthegames">
            <li>YouTube</li>
          </a>
          <a href="https://github.com/ckconor">
            <li>Github</li>
          </a>
          <a href="https://www.linkedin.com/in/conor-kemp-790920178">
            <li>LinkedIn</li>
          </a>
          <a href="https://dribbble.com/CKconor">
            <li>Dribble</li>
          </a>
        </ul>
      </div>
      <div className="flex flex-col mt-10 basis-1/2 items-end invisible md:visible">
        <img src={Portrait} alt="Portrait" />
      </div>
    </div>
  );
}

export default About;
