import React from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
const GET_PROJECTS = gql`
  query Projects {
    projectsCollection {
      items {
        projectTitle
        sys {
          id
        }
        projectSlug
        projectImage {
          title
          url
        }
        projectExcerpt
        projectDetails
      }
    }
  }
`;

function ProjectsGrid() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div>
      <div className="flex sm:flex-row flex-col">
        {data.projectsCollection.items.slice(0, 3).map((project) => {
          return (
            <Link
              key={project.sys.id}
              to={`/projects/${project.projectSlug}`}
              state={{ projectData: project }}
              className="cursor-pointer project-card sm:mb-0 w-full md:w-auto mb-4 cursor-pointer hover:scale-105 transition-all min-h-[210px] mr-8 flex flex-col basis-1/3 border-4 dark:border-lightmode border-darkmode rounded-lg px-8 py-6"
            >
              <div>
                <h3 className="font-bold text-2xl mb-1 mt-0">
                  {project.projectTitle}
                </h3>
                <p className="max-w-prose mt-2 text-lightsubtext dark:text-darksubtext grow">
                  {project.projectExcerpt}
                </p>

                <span className="text-sm text-lightsubtext dark:text-darksubtext mt-4">
                  More Info ->
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      <Link to={"/projects"}>
        <p className="text-sm text-lightsubtext dark:text-darksubtext mt-4">
          View All Projects ->
        </p>
      </Link>
    </div>
  );
}

export default ProjectsGrid;
