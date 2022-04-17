import React from "react";
import {Link} from "react-router-dom"

function ProjectsGrid() {
  return (
    <div>
      <div className="flex sm:flex-row flex-col">
        <div className="project-card sm:mb-0 w-full md:w-auto mb-4 cursor-pointer hover:scale-105 transition-all min-h-[210px] mr-8 flex flex-col basis-1/3 border-4 dark:border-lightmode border-darkmode rounded-lg px-8 py-6">
          <h3 className="font-bold text-2xl mb-1 mt-0">Gtech</h3>
          <p className="max-w-prose mt-2 text-lightsubtext dark:text-darksubtext grow">
            E-Commerce Website built on Magento 2 CMS.
          </p>
          <span className="text-sm text-lightsubtext dark:text-darksubtext mt-4">
            More Info ->
          </span>
        </div>
        <div className="project-card sm:mb-0 mb-4 w-full md:w-auto cursor-pointer hover:scale-105 transition-all min-h-[210px] flex flex-col mr-8 basis-1/3 border-4 dark:border-lightmode border-darkmode rounded-lg px-8 py-6">
          <h3 className="font-bold text-2xl mb-1 mt-0">FM Streamer Showdown</h3>
          <p className="max-w-prose mt-2 text-lightsubtext grow dark:text-darksubtext">
            Promotional website for community driven tournament built using
            bespoke Wordpress theme.
          </p>
          <span className=" text-sm text-lightsubtext dark:text-darksubtext mt-4">
            More Info ->
          </span>
        </div>
        <div className="project-card sm:mb-0 mb-4 w-full md:w-auto cursor-pointer hover:scale-105 transition-all min-h-[210px] mr-0 flex flex-col basis-1/3 border-4 dark:border-lightmode border-darkmode rounded-lg px-8 py-6">
          <h3 className="font-bold text-2xl mb-1 mt-0">Oldcastle Weddings</h3>
          <p className="max-w-prose mt-2 text-lightsubtext grow dark:text-darksubtext">
            Promotional Website for local wedding business built with a Bespoke
            Wordpress theme.
          </p>
          <span className=" text-sm text-lightsubtext dark:text-darksubtext mt-4">
            More Info ->
          </span>
        </div>
        
      </div>
      <Link
              to={"/projects"}
            ><p className="text-sm text-lightsubtext dark:text-darksubtext mt-4">View All Projects -></p>
            </Link>
    </div>
  );
}

export default ProjectsGrid;
