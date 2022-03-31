import { createClient } from "contentful";

const useContentful = () => {
  
  const blogClient = createClient({
    space: "qklgdv24qn7u",
    accessToken: "Ea1WLJCsjSapvSBHOgyBv-d5zebVbKUo8vCLBfcUs6c"
  });
  const getPosts = async () => {
    try {
      const posts = await blogClient.getEntries({
        content_type: "blogPost",
        select: "fields",
      });
      return posts;
    } catch (error) {
        console.log(`Error: ${error}`)
    }
  };
  return {getPosts};
};

export default useContentful;
