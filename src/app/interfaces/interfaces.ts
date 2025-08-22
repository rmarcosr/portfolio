export interface Project {
    name: string
    description: string
    url: string
    start: Date
    end?: Date
    completed: boolean
    images: string[]
}

export interface Experience {
    title: string
    subtitle: string
    description: string
    skills?: string[]
}