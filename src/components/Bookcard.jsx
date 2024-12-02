import { Link } from "react-router-dom";

function Bookcard({ book }) {
    return (
        <Link to = {`/book/${book.id}`}>
            <div className="border-2 border-darkAccent shadow-accent shadow-lg m-4 p-4 rounded-lg w-60 h-96 hover:scale-105 transform transition">
                <img
                    src={book.coverImage}
                    alt={book.title}
                    className="rounded-md w-full h-48 object-cover"
                />
                <h2 className="mt-4 font-bold text-xl">{book.title}</h2>
                <p className="text-darkAccent text-sm italic">by {book.author}</p>
                <p className="mt-2 text-sm">{book.description.slice(0, 100)}...</p>
            </div>
        </Link>)
}

export default Bookcard;