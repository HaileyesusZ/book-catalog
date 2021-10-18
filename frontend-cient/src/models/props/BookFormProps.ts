import Book from "../Book";

interface BookForm {
    onSubmit: (book: Book) => void
    book?: Book
}

export default BookForm