import React from 'react'
import {useQuery, gql} from '@apollo/client'
import ReactMarkdown from 'react-markdown'

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
      }
    }
  }
  `
function Blogs() {
  const { loading, error, data } = useQuery(GET_BLOGS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  
  return (
    <div className="flex flex-col mt-10"><h1 className="text-5xl font-bold mb-0 mt-0">Blog</h1>
      {data.blogPostCollection.items.map (blog => {
        return (
          <div className="" key={blog.sys.id}>
          <h1>{blog.blogTitle}</h1>
          {blog.featureimage && 
          <img src={blog.featureimage.url} alt={blog.featureimage.title} />
          }
          <div><ReactMarkdown>{blog.blogContent}</ReactMarkdown></div>
          </div>
        )
      })}
    </div>
  )
}

export default Blogs