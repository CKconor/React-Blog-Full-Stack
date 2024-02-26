import { createClient } from "contentful";

const useContentful = () => {
  
  const contentfulClient = createClient({
    space: proccess.env.REACT_APP_CONTENTFUL_SPACE_ID,
    accessToken: proccess.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
  });
  const getData = async () => {
    try {
      const data = await contentfulClient.getEntries({
        content_type: "contentfulContent",
        select: "fields",
      });
      return data;
    } catch (error) {
        console.log(`Error: ${error}`)
    }
  };
  return {getData};
};

export default useContentful;
