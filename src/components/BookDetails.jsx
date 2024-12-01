import { useParams } from "react-router"
import { books } from "../utils/Mockdata";

function BookDetails() {
    const {id} = useParams();

    const book = books.find((b) => b.id === parseInt(id));
    console.log("Book ID from URL:", id);
    if (!book) return   
    <p className="text-center text-red-500">Book not found!</p>

    return (
        <div>
            <h1>{book.title}</h1>
            <div className="flex justify-between items-center">
                <p>{book.publishedDate}</p>
                <p>{book.author}</p>
            </div>
            <img src={book.coverImage} alt={book.title} />
            <h2>{book.description}</h2>
        </div>
    )
}

export default BookDetails