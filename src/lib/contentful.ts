import { BlogPost, Project } from '../types';

const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
const AUTH_KEY = process.env.CONTENTFUL_AUTH_KEY;

async function fetchContentful<T>(query: string, variables?: Record<string, string>): Promise<T> {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${AUTH_KEY}`,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error(`Contentful fetch failed: ${res.status}. Ensure CONTENTFUL_SPACE_ID and CONTENTFUL_AUTH_KEY are set.`);
  }

  const json = await res.json();
  return json.data as T;
}

const BLOG_FIELDS = `
  blogTitle
  sys { publishedAt id }
  featureimage { title url }
  blogContent
  blogExcerpt
  urlSlug
`;

const PROJECT_FIELDS = `
  projectTitle
  sys { id }
  projectSlug
  projectImage { title url }
  projectExcerpt
  projectDetails
`;

export async function getBlogs(): Promise<{ blogPostCollection: { items: BlogPost[] } }> {
  return fetchContentful(`
    query Blogs {
      blogPostCollection {
        items { ${BLOG_FIELDS} }
      }
    }
  `);
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const data = await fetchContentful<{ blogPostCollection: { items: BlogPost[] } }>(
    `
    query BlogBySlug($slug: String!) {
      blogPostCollection(where: { urlSlug: $slug }, limit: 1) {
        items { ${BLOG_FIELDS} }
      }
    }
  `,
    { slug }
  );
  return data.blogPostCollection.items[0] ?? null;
}

export async function getProjects(): Promise<{ projectsCollection: { items: Project[] } }> {
  return fetchContentful(`
    query Projects {
      projectsCollection {
        items { ${PROJECT_FIELDS} }
      }
    }
  `);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const data = await fetchContentful<{ projectsCollection: { items: Project[] } }>(
    `
    query ProjectBySlug($slug: String!) {
      projectsCollection(where: { projectSlug: $slug }, limit: 1) {
        items { ${PROJECT_FIELDS} }
      }
    }
  `,
    { slug }
  );
  return data.projectsCollection.items[0] ?? null;
}
