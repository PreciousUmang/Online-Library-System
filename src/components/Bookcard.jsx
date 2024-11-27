function Bookcard({ book }) {
    return (
        <div className="w-60 m-4 p-4 border-2 border-darkAccent rounded-lg shadow-lg hover:scale-105 transition transform">
            <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold mt-4">{book.title}</h2>
            <p className="text-sm italic text-darkAccent">by {book.author}</p>
            <p className="text-sm mt-2">{book.description.slice(0, 100)}...</p>
        </div>
    )
}

export default Bookcard;