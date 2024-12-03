import { createSlice } from "@reduxjs/toolkit";
import AddBook from "../components/AddBookForm";

const booksSlice = createSlice({
    name:   'books',
    initialState: [],
    reducers: {
        addBook: (state, action) => 
            {state.push(action.payload)}
    }
})


export const {addBook} = booksSlice.actions;
export default booksSlice.reducer;