import React from 'react'
import {useQuery, gql} from '@apollo/client'



const GET_BLOGS = gql`
  query Blogs {
    blogPostCollection{
      items {
       blogTitle
        sys {
  id}
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
  `
function Blogs() {
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  return (
    <div className="flex flex-col mt-5 md:mt-10">
      <h1 className="text-3xl sm:text-5xl font-bold mb-10 mt-0">Blog</h1>
      <div className="flex flex-wrap flex-row">
      {data.blogPostCollection.items.map (blog => {
        return (
          <div className="flex flex-col mt-7 mr-3 max-w-[45%]" key={blog.sys.id}>
          {blog.featureimage && 
          <img className="mb-4 max-w-2xl rounded h-[300px] object-cover" src={blog.featureimage.url} alt={blog.featureimage.title} />
          }
          <h3 className="mb-2 text-xl max-w-3">{blog.blogTitle}</h3>
          <p className="text-lightsubtext max-w-2xl dark:text-darksubtext">{blog.blogExcerpt}</p>
          </div>
        )
      })}
    </div>
    </div>
  )
}

export default Blogs