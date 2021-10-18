import Author from "./Author";

interface Book {
    _id?: string,
    title: string,
    pages: number,
    author: Author,
    year: number,
    description: string
}

export default Book