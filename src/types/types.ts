export interface Project{
    id:number,
    title:string,
    description:string,
    imageUrl:string,
    stack:string[],
    linkDemo:string,
    linkGit:string
}

export interface SocialLink{
    platform: 'vk' | 'instagram' | 'github' | 'telegram' | 'email',
    link:string,
    icon:string,
    description:string
}