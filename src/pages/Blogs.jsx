import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_BLOGS = gql`
  query Blogs {
    blogPostCollection {
      items {
        blogTitle
        sys {
          publishedAt
          id
        }
        featureimage {
          title
          url
        }
        blogContent
        blogExcerpt
        urlSlug
      }
    }
  }
`;

function Blogs() {
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (loading)
    return (
      <div className="pt-12 md:pt-20">
        <span className="text-sm text-lightsubtext dark:text-darksubtext">Loading...</span>
      </div>
    );
  if (error)
    return (
      <div className="pt-12 md:pt-20">
        <span className="text-sm text-accentcolor">Error loading posts</span>
      </div>
    );

  return (
    <div className="pt-12 md:pt-20">
      <span className="text-xs uppercase tracking-widest text-accentcolor mb-4 block font-medium opacity-0 animate-fade-up">
        Writing
      </span>
      <h1 className="font-serif text-4xl md:text-6xl tracking-tight leading-[1.05] mb-4 opacity-0 animate-fade-up stagger-1">
        Blog
      </h1>
      <p className="text-sm text-lightsubtext dark:text-darksubtext mb-14 max-w-md opacity-0 animate-fade-up stagger-2">
        Thoughts on development, design, and things I find interesting.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-14">
        {data.blogPostCollection.items.map((blog, index) => (
          <Link
            key={blog.sys.id}
            to={blog.urlSlug}
            state={{ blogData: blog }}
            className={`group opacity-0 animate-fade-up stagger-${Math.min(index + 3, 8)}`}
          >
            {blog.featureimage && (
              <div className="overflow-hidden rounded-sm mb-5">
                <img
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                  src={blog.featureimage.url}
                  alt={blog.featureimage.title}
                />
              </div>
            )}
            <h3 className="text-base font-medium mb-2 group-hover:text-accentcolor transition-colors">
              {blog.blogTitle}
            </h3>
            <p className="text-sm text-lightsubtext dark:text-darksubtext leading-relaxed line-clamp-2">
              {blog.blogExcerpt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
