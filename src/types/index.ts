export type Project = {
  img: string;
  name: string;
  description: string;
  techs: string[];
  demoLink: string;
  githubLink: string;
  themeColor: string ;
  is_private?: boolean;
  no_live_demo?: boolean;
};

export type WorkExperience = {
  title : string ;
  date : string ;
  location: string ;
  company: string ;
  workBenifits : string [] ;
}