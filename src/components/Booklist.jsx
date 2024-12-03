import { useSelector } from 'react-redux';
import SearchBar from './SearchBar';
import Bookcard from './Bookcard';
import { useState, useEffect } from 'react';

function Booklist() {
    const booksData = useSelector((state) => state.books);
    const [search, setSearch] = useState('');

    const filteredBooks = booksData.filter(book => 
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    function handleClick() {
        let filtered = booksData.filter((book) =>
            book.title.toLowerCase().includes(search.toLowerCase())
        );
        setFilteredBooks(filtered);
    }

    return (
        <div className="p-8">
            <SearchBar setSearch={setSearch} handleClick={handleClick} />
            <h1 className="p-4 text-3xl text-center">Browse Books</h1>
            <div className="flex flex-wrap justify-center">
                {filteredBooks.map(book =>
                    <Bookcard key={book.id} book={book} />
                )}</div>
        </div>
    )
}

export default Booklist;