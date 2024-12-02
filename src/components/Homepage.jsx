import { Link } from "react-router-dom"

function Homepage() {
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-br from-accent to-darkAccent bg-cover bg-center p-8 min-h-[calc(100vh-6rem)] text-primary">
      <h1 className="bg-darkAccent shadow-lg mb-6 p-4 rounded-md font-bold text-5xl">
        Welcome to Precious's Library
      </h1>
      <p className="bg-secondary bg-opacity-40 mb-6 p-4 max-w-xl text-center text-lg">
        Explore a world of knowledge and imagination. Find your next favorite book and dive into the stories that inspire!
      </p>
      <Link
        to="/books"
        className="bg-accent hover:bg-darkAccent px-8 py-4 rounded-lg text-lg text-primary transform transition hover:scale-110"
      >
        Start Exploring
      </Link>
      <h1 className="shadow-lg m-6 p-4 rounded-md font-bold text-3xl">
        Browse by Category :
      </h1>
      <div className="flex flex-col justify-start items-start">
        <Link to="/books/fiction">Fiction</Link>
        <Link to="/books/non-fiction">Non-Fiction</Link>
        <Link to="/books/sci-fi">Sci-Fi</Link>
      </div>
    </div>
  )
}

export default Homepage