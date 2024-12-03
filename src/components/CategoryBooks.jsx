import { useParams } from "react-router-dom"
import Bookcard from "./Bookcard";
import { useOutletContext } from "react-router-dom";

function CategoryBooks() {
    const { category } = useParams()
    const { booksData } = useOutletContext();
    if (!category) return <p className="text-center">Invalid category!</p>;
    
    const filteredBooks = booksData.filter(
        (book) => book.category?.toLowerCase() === category.toLowerCase()
    );

    return (
        <div className="m-8">
            <h1 className="font-semibold text-3xl text-center">Books in {category}:</h1>
            <div className="flex flex-wrap justify-center">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <Bookcard key={book.id} book={book} />
                    ))
                ) : (
                    <p className="text-center">No books found in this category.</p>
                )}
            </div>
        </div>
    )
}

export default CategoryBooks