import { createClient } from "contentful";

const useContentful = () => {
  
  const contentfulClient = createClient({
    space: "qklgdv24qn7u",
    accessToken: "Ea1WLJCsjSapvSBHOgyBv-d5zebVbKUo8vCLBfcUs6c"
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
