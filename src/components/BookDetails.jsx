import { useParams } from "react-router-dom";
import { books } from "../utils/Mockdata";
import { Link } from "react-router";

function BookDetails() {
    const { id } = useParams();

    const book = books.find((b) => b.id === parseInt(id));
    if (!book) {
        return
        <p className="text-center text-red-500">Book not found!</p>
    }

    return (
        <div className="flex flex-col justify-center items-center space-y-4 p-8">
            <h1 className="font-bold text-3xl">{book.title}</h1>
            
            <img src={book.coverImage} alt={book.title} className="h-72"/>
            <div className="flex md:flex-row flex-col justify-between items-center md:w-1/2 lg:w-1/3">
                <p>Published on : {book.publishedDate}</p>
                <p className="italic">Author : {book.author}</p>
            </div>
            <p className="px-8 md:px-16 lg:px-32">{book.description}</p>
            <Link to = "/books" className="bg-accent p-2 rounded-md hover:text-primary hover:scale-90 transform transition-all duration-300"><button>Back to Library</button></Link>
        </div>
    )
}

export default BookDetails