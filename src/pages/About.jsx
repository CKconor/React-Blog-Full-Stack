import Portrait from "../assets/portrait.png";

function About() {
  return (
    <div className="flex flex-row">
      <div className="basis-2/2 mt-5 flex flex-col md:mt-10 md:basis-1/2">
        <h1 className="mb-10 mt-0 text-3xl font-bold sm:text-5xl">About Me</h1>
        <h2 className="mb-3 text-2xl font-bold sm:text-4xl">Job Title</h2>
        <p>Lead Frontend Developer</p>
        <h2 className="mb-3 mt-6 text-2xl font-bold sm:text-4xl">Experience</h2>
        <p className="mb-4">
          Experienced Frontend Developer with a strong focus on NextJS, AWS
          Lambda, React, Typescript, and Node. With a versatile career spanning
          both startups and larger corporations, I bring a wealth of expertise
          in delivering high-quality services across various sectors. My
          proficiency in NextJS ensures efficient and performant web
          applications, complemented by experience in AWS Lambda for serverless
          computing.
        </p>
        <p>
          Specializing in crafting React webpages and websites, I excel in
          utilizing both headless and traditional CMS. My confidence lies in
          creating not only visually stunning but also highly efficient
          websites. With a dedicated focus on user experience and supported by
          my proficiency in React, I ensure the development of engaging and
          interactive web interfaces. Moreover, my expertise in PHP-driven CMS
          empowers me to construct dynamic and content-rich websites tailored to
          diverse needs. Committed to delivering solutions that not only meet
          aesthetic standards but also optimize performance and functionality, I
          strive to provide a seamless user experience.
        </p>
        <h2 className="mb-3  mt-6 text-2xl font-bold sm:text-4xl">
          Work History
        </h2>
        <span className="mt-0 text-xs text-lightsubtext dark:text-darksubtext">
          Jan 2024 - Present
        </span>
        <h3 className="mb-1  mt-0 text-xl font-bold sm:text-2xl">
          Configur - Lead Frontend Developer
        </h3>
        <p className="mb-4">
          Typescript, React, MongoDB, AWS Lambda, Node.js, Express, Jest, HTML,
          SCSS, Javascript, Serverless
        </p>
        <span className="mt-0 text-xs text-lightsubtext dark:text-darksubtext">
          June 2022 - Jan 2024
        </span>
        <h3 className="mb-1  mt-0 text-xl font-bold sm:text-2xl">
          Configur - Full Stack Developer
        </h3>
        <p className="mb-4">
          Typescript, React, MongoDB, AWS Lambda, Node.js, Express, Jest, HTML,
          SCSS, Javascript, Serverless
        </p>
        <span className="mt-0 text-xs text-lightsubtext dark:text-darksubtext">
          Jan 2022 - Jun 2022
        </span>
        <h3 className="mb-1  mt-0 text-xl font-bold sm:text-2xl">
          Raytheon UK - Software Engineer
        </h3>
        <p className="mb-4">
          Typescript, React, Docker, AWS, Node.js, Express, Jest, HTML, SCSS,
          Javascript
        </p>
        <span className="mt-0 text-xs text-lightsubtext dark:text-darksubtext">
          Dec 2020 - Jan 2022
        </span>
        <h3 className="mb-1 mt-0 text-xl font-bold sm:text-2xl">
          Gtech - Creative Frontend Developer
        </h3>
        <p className="mb-4">
          HTML, SCSS , XML, Magento 2, PHP, Jquery, Bootstrap, Git
        </p>
        <span className="mt-0 text-xs text-lightsubtext dark:text-darksubtext">
          May 2020 - Dec 2020
        </span>
        <h3 className="mb-1 mt-0 text-xl font-bold sm:text-2xl">
          This is Union - Junior Developer
        </h3>
        <p className="mb-4">HTML, SCSS, Jquery, Wordpress, PHP</p>
        <h2 className="mb-3 mt-6 text-2xl font-bold sm:text-4xl">
          Personal Life
        </h2>
        <p className="mb-4">
          Outside of work I spend most of my time surrounded by all things
          technology whether it be playing Video Games or building custom
          keyboards I find myself most comfortable around technology. Alongside
          Tech I also love travelling and experiencing different cuisines with
          the goal of travelling to another country at least once a year.
        </p>
        <h2 className="mb-3 mt-6 text-2xl font-bold sm:text-4xl">My Links</h2>
        <ul className="list-inside list-disc text-sky-600 underline marker:text-lightsubtext dark:marker:text-darksubtext">
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
      <div className="invisible mt-10 flex basis-1/2 flex-col items-end md:visible">
        <img src={Portrait} alt="Portrait" />
      </div>
    </div>
  );
}

export default About;
