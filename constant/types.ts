export interface DevelopmentProjectType {
  asset?: {
    url: string;
    alt: string;
  };
  development_Type?: string[];
  project_Name?: string;
  project_Timeline?: string;
  project_Technologies?: string[];
  project_description?: string;
  project_DemoLink?: string | undefined;
  project_RepoLink?: string | undefined;
}

export interface DesignProjectType {
  asset?: {
    url: string;
    alt: string;
    image_bundle?: {
      url: string;
    }[];
  };
  project_Name: string;
  project_Timeline: string;
  project_Technologies: string[];
  project_description: string;
}

export interface CertificateCardProps {
  PreviewLink: string;
  Name: string;
  Organization: string;
  Date: string;
}
