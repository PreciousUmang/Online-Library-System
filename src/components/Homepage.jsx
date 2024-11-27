import { Link } from "react-router-dom"

function Homepage() {
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="my-4 text-3xl font-semibold">Welcome to Precious's Library</h1>
            <p>Feel free to check any book available for you... </p>
            <Link to="/books" className="m-4 p-4"> Browse Books</Link>
        </div>
    )
}

export default Homepage