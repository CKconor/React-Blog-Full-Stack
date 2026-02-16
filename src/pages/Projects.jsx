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

  if (loading)
    return (
      <div className="pt-12 md:pt-20">
        <span className="text-sm text-lightsubtext dark:text-darksubtext">Loading...</span>
      </div>
    );
  if (error)
    return (
      <div className="pt-12 md:pt-20">
        <span className="text-sm text-accentcolor">Error loading projects</span>
      </div>
    );

  return (
    <div className="pt-12 md:pt-20">
      <span className="text-xs uppercase tracking-widest text-accentcolor mb-4 block font-medium opacity-0 animate-fade-up">
        Portfolio
      </span>
      <h1 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.05] mb-4 opacity-0 animate-fade-up stagger-1">
        Projects
      </h1>
      <p className="text-sm text-lightsubtext dark:text-darksubtext mb-14 max-w-md opacity-0 animate-fade-up stagger-2">
        A selection of work spanning web development, design, and creative exploration.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
        {data.projectsCollection.items.map((project, index) => (
          <Link
            key={project.sys.id}
            to={project.projectSlug}
            state={{ projectData: project }}
            className={`group opacity-0 animate-fade-up stagger-${Math.min(index + 3, 8)}`}
          >
            {project.projectImage && (
              <div className="overflow-hidden rounded-sm mb-5">
                <img
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  src={project.projectImage.url}
                  alt={project.projectImage.title}
                />
              </div>
            )}
            <h3 className="text-base font-medium mb-2 group-hover:text-accentcolor transition-colors">
              {project.projectTitle}
            </h3>
            <p className="text-sm text-lightsubtext dark:text-darksubtext leading-relaxed line-clamp-2">
              {project.projectExcerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
