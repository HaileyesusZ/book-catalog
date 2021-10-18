import Book from "./Book";
import Error from "./Error";

interface Store {
    currentBook?: Book 
    error?: Error
    fetchingData?: boolean 
}

export default Store