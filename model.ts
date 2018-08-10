export interface Project {
    name: string;
    repository: string;
    groupId: string;
    active: boolean;
}

export interface OutpostContext {
    version: number;
    runtime: string;
}
