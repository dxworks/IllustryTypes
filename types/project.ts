
export interface Project {
    name: string;
    description?: string;
    createdAt?: Date
    lastModified?: Date
}

export interface ProjectFilter {
    name?: string;
    description?: string;
    createdAt?: Date
    lastModified?: Date
}