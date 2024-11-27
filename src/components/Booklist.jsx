import Bookcard from "./Bookcard";
import { books } from "../utils/Mockdata";


function Booklist() {
    return (
        <div className="m-8">
            <h1 className="text-3xl text-center p-4">Browse Books</h1>
            <div className="flex flex-wrap justify-center">
                {books.map(book =>
                    <Bookcard key={book.id} book={book} />
                )}</div>
        </div>
    )
}

export default Booklist;