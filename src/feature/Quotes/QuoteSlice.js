import { createSlice } from "@reduxjs/toolkit"

const QuoteSlice = createSlice({
    name: "quote",
    initialState: {
        isLoading: false,
        isError: false,
        isSuccess: false,
        QuoteData: null,
    },
    reducers: {},
    extraReducers: (builder) => { },
});
export default QuoteSlice.reducer;