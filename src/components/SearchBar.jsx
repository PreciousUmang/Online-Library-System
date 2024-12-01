function SearchBar({ setSearch, handleClick }) {
    return (
        <>
            <div className="flex justify-center  items-center">
                <input type="text" className="p-3 rounded-s-lg" placeholder="Search by Book Title..." onChange={e => setSearch(e.target.value)} />
                <button className="fa-solid  fa-search p-3 rounded-e-lg bg-accent" onClick={handleClick}></button>
            </div>
        </>
    )
}

export default SearchBar;