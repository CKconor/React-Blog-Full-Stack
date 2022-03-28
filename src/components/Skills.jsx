import React from "react";
import Tickbox from "../assets/Tickbox.png";

function Skills() {
  return (
    <div className="skills-container">
      <div className="flex flex-row mb-2 filter-row">
        <a className="mr-10 active hover:text-darkmode">All</a>
        <a className="mr-10 text-lightsubtext hover:text-darkmode">Developing</a>
        <a className="mr-10 text-lightsubtext hover:text-darkmode">Design</a>
        <a className="text-lightsubtext hover:text-darkmode">Business</a>
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
              React
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              React
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              React
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              React
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              React
            </li>
          </ul>
        </div>
        <div className="flex-col basis-1/3">
          <ul>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              React
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              React
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              React
            </li>
            <li className="flex items-center">
            <img className="float-left mr-1" alt="tickbox" src={Tickbox} />
              React
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
