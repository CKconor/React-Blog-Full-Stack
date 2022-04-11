import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

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

function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <div className="flex flex-col mt-5 md:mt-10 max-w-2xl">
      <h1 className="text-3xl sm:text-5xl font-bold mb-10 mt-0">Projects</h1>
      <div className="flex flex-col">
        {data.projectsCollection.items.map((project) => {
          return (
            <Link
              key={project.sys.id}
              to={project.projectSlug}
              state={{ projectData: project }}
            >
              <div className="flex flex-col mt-7 cursor-pointer">
                {project.projectImage && (
                  <img
                    className="mb-4 max-w-[85%] rounded h-[350px] object-cover"
                    src={project.projectImage.url}
                    alt={project.projectImage.title}
                  />
                )}
                <h3 className="mb-2 text-xl max-w-3">{project.projectTitle}</h3>
                <p className="text-lightsubtext max-w-[85%] dark:text-darksubtext">
                  {project.projectExcerpt}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
