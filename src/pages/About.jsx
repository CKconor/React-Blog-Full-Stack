import React from "react";
import Portrait from '../assets/portrait.png'

function About() {
  return (
      <div className="flex flex-row">
    <div className="flex flex-col mt-10 basis-1/2">
      <h1 className="text-5xl font-bold mb-10 mt-0">About Me</h1>
      <h2 className="font-bold text-4xl mb-2">Job Title</h2>
      <p>Software Engineer & Frontend Developer</p>
      <h2 className="font-bold text-4xl mb-2 mt-6">Experience</h2>
      <p className="mb-4">
        I have worked as a Frontend Developer for the past 3 years after
        teaching myself coding during the pandemic after being furloughed and
        bored. I love all things design and coding with a desire to really push
        the boat out with designs and layouts.
      </p>
      <p>
        Specialising in React Webpages and PHP driven to CMS's I truly believe I
        can make you not only a beautiful website but also an extremely
        efficient one.
      </p>
      <h2 className="font-bold text-4xl mb-2 mt-6">Work History</h2>
    </div>
    <div className="flex flex-col mt-10 basis-1/2 items-end">
        <img src={Portrait} alt="Portrait Image" />
    </div>
    </div>
  );
}

export default About;
