export interface Project{
    id:number,
    title:string,
    shortDescription:string,
    imageUrl:string,
    stack:string[],
    linkDemo:string,
    linkGit:string,
    problem:string,
    fullDescription:string,
}

export interface SocialLink{
    platform: 'vk' | 'instagram' | 'github' | 'telegram' | 'email',
    link:string,
    icon:string,
    description:string
}