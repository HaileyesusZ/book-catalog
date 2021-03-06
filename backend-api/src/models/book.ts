import { Author } from "./author";

interface Book {
    title: string,
    pages: number,
    author: Author,
    year: number,
    description: string,
}

export { Book }