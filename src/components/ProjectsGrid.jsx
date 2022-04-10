import React from 'react'

function ProjectsGrid() {
  return (
    <div>
    <div className="flex flex-row">
    <div className="project-card min-h-[210px] mr-8 flex flex-col basis-2/5 border-4 dark:border-lightmode border-darkmode rounded-lg px-8 py-6">
      <h3 className="font-bold text-2xl mb-1 mt-0">Gtech</h3>
      <p className="max-w-prose mt-2 text-lightsubtext dark:text-darksubtext grow">
              E-Commerce Website built on Magento 2 CMS.
            </p>
            <span className=" text-sm text-lightsubtext dark:text-darksubtext mt-4">More Info -></span>
      </div>
      <div className="project-card min-h-[210px] flex flex-col basis-2/5 border-4 dark:border-lightmode border-darkmode rounded-lg px-8 py-6">
      <h3 className="font-bold text-2xl mb-1 mt-0">FM Streamer Showdown</h3>
      <p className="max-w-prose mt-2 text-lightsubtext grow dark:text-darksubtext">
              Promotional website for community driven tournament built using bespoke Wordpress theme.
            </p>
            <span className=" text-sm text-lightsubtext dark:text-darksubtext mt-4">More Info -></span>
      </div>
      </div>
      <div className="flex flex-row mt-6">
      <div className="project-card min-h-[210px] mr-8 flex flex-col basis-2/5 border-4 dark:border-lightmode border-darkmode rounded-lg px-8 py-6">
      <h3 className="font-bold text-2xl mb-1 mt-0">Oldcastle Weddings</h3>
      <p className="max-w-prose mt-2 text-lightsubtext grow dark:text-darksubtext">
              Promotional Website for local wedding business built with a Bespoke Wordpress theme.
            </p>
            <span className=" text-sm text-lightsubtext dark:text-darksubtext mt-4">More Info -></span>
      </div>
      <div className="project-card min-h-[210px] flex flex-col basis-2/5 border-4 dark:border-lightmode border-darkmode rounded-lg px-8 py-6">
      <h3 className="font-bold text-2xl mb-1 mt-0">Chics LTD</h3>
      <p className="max-w-prose mt-2 text-lightsubtext dark:text-darksubtext grow">
              Expansive construction industry website built with Wordpress.
            </p>
            <span className=" text-sm text-lightsubtext dark:text-darksubtext mt-4">More Info -></span>
      </div>
    </div>
    </div>
  )
}

export default ProjectsGrid