export interface FeatureImage {
  title: string;
  url: string;
}

export interface BlogSys {
  publishedAt: string;
  id: string;
}

export interface BlogPost {
  blogTitle: string;
  sys: BlogSys;
  featureimage?: FeatureImage;
  blogContent: string;
  blogExcerpt: string;
  urlSlug: string;
}

export interface ProjectSys {
  id: string;
}

export interface Project {
  projectTitle: string;
  sys: ProjectSys;
  projectSlug: string;
  projectImage?: FeatureImage;
  projectExcerpt: string;
  projectDetails: string;
}
