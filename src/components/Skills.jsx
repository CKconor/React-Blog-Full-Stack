import React from "react";
import Tickbox from "../assets/Tickbox.png";

function Skills() {
  return (
    <div className="skills-container">
      <div className="flex flex-row mb-2 filter-row">
        <a className="mr-10 active hover:text-darkmode dark:hover:text-lightmode">All</a>
        <a className="mr-10 text-lightsubtext hover:text-darkmode hover:font-bold dark:hover:text-lightmode transition ease-in-out delay-50">Developing</a>
        <a className="mr-10 text-lightsubtext hover:text-darkmode dark:hover:text-lightmode hover:font-bold transition ease-in-out delay-50">Design</a>
        <a className="text-lightsubtext hover:text-darkmode dark:hover:text-lightmode hover:font-bold transition ease-in-out delay-50">Business</a>
      </div>
      <div className="flex flex-row bg-skillcontainerlightbg dark:bg-skillcontainerdarkbg p-10 rounded text-lightsubtext dark:text-darksubtext">
        <div className="flex-col basis-1/3">
          <ul>
            <li className="flex items-center">
              <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              React
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              HTML
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              SCSS
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              Jquery
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              PHP
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              Wordpress
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              Magento 2
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              Agile Development
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              Git Source Control
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              PHP
            </li>
          </ul>
        </div>
        <div className="flex-col basis-1/3">
          <ul>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              Adobe XD
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              Figma
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              Minimalism
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              Bootstrap
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              Tailwind CSS
            </li>
          </ul>
        </div>
        <div className="flex-col basis-1/3">
          <ul>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              Fair Prices
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              Clear Communication
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              Reasonable Deadlines
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              Dedicated Mindset
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
