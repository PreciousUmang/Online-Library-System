import { Link } from "react-router-dom";
import logo from '../assets/Logo.jpg'

function Header() {
    return (
        <nav className="top-0 z-50 sticky flex justify-between items-center bg-secondary shadow-accent shadow-xl md:px-8 lg:px-16 p-4 h-24">
            <img src={logo} className="shadow-darkAccent shadow-lg hover:shadow-accent rounded-lg h-16 hover:scale-105 duration-300" />
            <ul className="flex space-x-2 font-bold text-primary">
                <Link className="hover:bg-primary p-3 hover:rounded-ss-2xl hover:rounded-ee-2xl hover:text-darkAccent duration-300" to="/">Home</Link>
                <Link className="hover:bg-primary p-3 hover:rounded-ss-2xl hover:rounded-ee-2xl hover:text-darkAccent duration-300" to="/books">Browse Books</Link>
                <Link className="hover:bg-primary p-3 hover:rounded-ss-2xl hover:rounded-ee-2xl hover:text-darkAccent duration-300" to="/">Add Book</Link>
                <Link className="hover:bg-primary p-3 hover:rounded-ss-2xl hover:rounded-ee-2xl hover:text-darkAccent duration-300" to="/about">About</Link>
                <Link className="hover:bg-primary p-3 hover:rounded-ss-2xl hover:rounded-ee-2xl hover:text-darkAccent duration-300" to="/contact">Contact</Link>
            </ul>
        </nav>
    )
}

export default Header;