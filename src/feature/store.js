import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todos/TodoSlice";
import quoteReducer from "./Quotes/QuoteSlice";

const store = configureStore({
    reducer: {
        todos: todoReducer,
        quote: quoteReducer,
    },
});

export default store;