import React from 'react'

function ProjectsGrid() {
  return (
    <div>
    <div className="flex flex-row justify-between max-w-[90%]">
    <div className="project-card flex flex-col basis-2/5 border-4 dark:border-lightmode border-darkmode rounded-lg px-8 py-6">
      <h3 className="font-bold text-2xl mb-1 mt-0">Gtech</h3>
      <p className="max-w-prose mt-2 text-lightsubtext dark:text-darksubtext">
              Web Developer and Designer based in the UK, specialising
              in e-commerce and business branding alongside modern frameworks
              such as React and CMS systems such as Wordpress
            </p>
      </div>
      <div className="project-card flex flex-col basis-2/5 border-4 dark:border-lightmode border-darkmode rounded-lg px-8 py-6">
      <h3 className="font-bold text-2xl mb-1 mt-0">FM Streamer Showdown</h3>
      <p className="max-w-prose mt-2 text-lightsubtext dark:text-darksubtext">
              Web Developer and Designer based in the UK, specialising
              in e-commerce and business branding alongside modern frameworks
              such as React and CMS systems such as Wordpress
            </p>
      </div>
      </div>
      <div className="flex flex-row justify-between max-w-[90%] mt-6">
      <div className="project-card flex flex-col basis-2/5 border-4 dark:border-lightmode border-darkmode rounded-lg px-8 py-6">
      <h3 className="font-bold text-2xl mb-1 mt-0">Oldcastle Weddings</h3>
      <p className="max-w-prose mt-2 text-lightsubtext dark:text-darksubtext">
              Web Developer and Designer based in the UK, specialising
              in e-commerce and business branding alongside modern frameworks
              such as React and CMS systems such as Wordpress
            </p>
      </div>
      <div className="project-card flex flex-col basis-2/5 border-4 dark:border-lightmode border-darkmode rounded-lg px-8 py-6">
      <h3 className="font-bold text-2xl mb-1 mt-0">Chics LTD</h3>
      <p className="max-w-prose mt-2 text-lightsubtext dark:text-darksubtext">
              Web Developer and Designer based in the UK, specialising
              in e-commerce and business branding alongside modern frameworks
              such as React and CMS systems such as Wordpress
            </p>
      </div>
    </div>
    </div>
  )
}

export default ProjectsGrid