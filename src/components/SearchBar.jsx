function SearchBar({ setSearch, handleClick }) {
    return (
        <>
            <div className="flex justify-center items-center h-12">
                <input type="text" className="bg-secondary p-4 rounded-s-lg h-full text-primary" placeholder="Search by Book Title..." onChange={e => setSearch(e.target.value)} />
                <button className="bg-accent p-4 rounded-e-lg h-full hover:text-primary transform transition-all duration-300 fa-search fa-solid" onClick={handleClick}></button>
            </div>
        </>
    )
}

export default SearchBar;