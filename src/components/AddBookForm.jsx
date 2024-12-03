import { useDispatch } from "react-redux";
import { useOutletContext, useNavigate } from "react-router";
import { addBook } from "../utils/booksSlice";
import { useState } from "react";


function AddBookForm() {
    const { setBooksData } = useOutletContext();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        publishedDate: '',
        coverImage: '',
        description: '',
        category: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.author || !formData.publishedDate) {
            alert('Please fill all required fields.');
            return;
        }
        dispatch(addBook({ ...formData, id: Math.floor(Date.now() / 1000) }));
        navigate('/books');
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 bg-secondary shadow-lg mx-auto my-6 p-6 rounded-lg w-3/4">
                <div className="flex flex-col w-full">
                    <label htmlFor="bookName" className="mb-1 font-semibold text-accent">Title</label>
                    <input
                        type="text"
                        placeholder="Enter Book Title"
                        id="bookName"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="bg-primary p-2 rounded-md focus:ring-accent text-darkAccent focus:outline-none focus:ring-2" />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="bookAuthor" className="mb-1 font-semibold text-accent">Author</label>
                    <input
                        type="text"
                        placeholder="Enter Author Name"
                        id="bookAuthor"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        className="bg-primary p-2 rounded-md focus:ring-accent text-darkAccent focus:outline-none focus:ring-2" />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="publishDate" className="mb-1 font-semibold text-accent">Published On</label>
                    <input
                        type="date"
                        id="publishDate"
                        name="publishedDate"
                        value={formData.publishedDate}
                        onChange={handleChange}
                        className="bg-primary p-2 rounded-md focus:ring-accent text-darkAccent focus:outline-none focus:ring-2" />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="imageURL" className="mb-1 font-semibold text-accent">Enter Image URL</label>
                    <input
                        type="url"
                        id="imageURL"
                        name="coverImage"
                        value={formData.coverImage}
                        onChange={handleChange}
                        className="bg-primary p-2 rounded-md focus:ring-accent text-darkAccent focus:outline-none focus:ring-2" />
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="bookDescription" className="mb-1 font-semibold text-accent">Enter Description</label>
                    <textarea
                        id="bookDescription"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="bg-primary p-2 rounded-md focus:ring-accent text-darkAccent focus:outline-none focus:ring-2"></textarea>
                </div>

                <div className="flex flex-col w-full">
                    <label htmlFor="category" className="mb-1 font-semibold text-accent">Book Category</label>
                    <select
                        id="category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        className="bg-primary p-2 rounded-md focus:ring-accent text-darkAccent focus:outline-none focus:ring-2">
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Sci-Fi">Sci-Fi</option>
                    </select>
                </div>

                <button type="submit"
                    className="bg-accent hover:bg-darkAccent mt-4 py-3 rounded-md w-full text-primary transition duration-300">
                    Add Book
                </button>
            </form>
        </>
    )
}

export default AddBookForm;