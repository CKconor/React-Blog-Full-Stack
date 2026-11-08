export interface FeatureImage {
  title: string;
  url: string;
}

export interface BlogSys {
  publishedAt: string;
  id: string;
}

export interface BlogPostSummary {
  blogTitle: string;
  sys: BlogSys;
  featureimage?: FeatureImage;
  blogExcerpt: string;
  urlSlug: string;
}

export interface BlogPost extends BlogPostSummary {
  blogContent: string;
}

export interface ProjectSys {
  id: string;
}

export interface ProjectSummary {
  projectTitle: string;
  sys: ProjectSys;
  projectSlug: string;
  projectImage?: FeatureImage;
  projectExcerpt: string;
}

export interface Project extends ProjectSummary {
  projectDetails: string;
}
