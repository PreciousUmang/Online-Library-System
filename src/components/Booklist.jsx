import Bookcard from "./Bookcard";
import SearchBar from "./SearchBar";
import { books } from "../utils/Mockdata";
import { useState } from "react";



function Booklist() {

    const [search, setSearch] = useState('')
    const [filteredBooks, setFilteredBooks] = useState(books)


    function handleClick() {
        let filtered = books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
        setFilteredBooks(filtered);
    }

    return (
        <div className="m-8">
            <SearchBar setSearch={setSearch} handleClick = {handleClick}/>
            <h1 className="text-3xl text-center p-4">Browse Books</h1>
            <div className="flex flex-wrap justify-center">
                {filteredBooks.map(book =>
                    <Bookcard key={book.id} book={book} />
                )}</div>
        </div>
    )
}

export default Booklist;