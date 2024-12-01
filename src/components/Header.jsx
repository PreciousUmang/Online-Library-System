import { Link } from "react-router-dom";
import logo from '../assets/Logo.jpg'

function Header() {
    return (
        <nav className="flex justify-between items-center bg-secondary p-4 md:px-8 lg:px-16 shadow-xl shadow-accent">
            <img src={logo} className="h-16 rounded-lg shadow-lg shadow-darkAccent hover:scale-105 hover:shadow-accent duration-300" />
            <ul className="flex space-x-2 font-bold text-primary">
                <Link className="hover:text-darkAccent p-3 hover:rounded-ss-2xl hover:rounded-ee-2xl duration-300 hover:bg-primary" to="/">Home</Link>
                <Link className="hover:text-darkAccent p-3 hover:rounded-ss-2xl hover:rounded-ee-2xl duration-300 hover:bg-primary" to="/books">Browse Books</Link>
                <Link className="hover:text-darkAccent p-3 hover:rounded-ss-2xl hover:rounded-ee-2xl duration-300 hover:bg-primary" to="/about">About</Link>
                <Link className="hover:text-darkAccent p-3 hover:rounded-ss-2xl hover:rounded-ee-2xl duration-300 hover:bg-primary" to="/contact">Contact</Link>
            </ul>
        </nav>
    )
}

export default Header;