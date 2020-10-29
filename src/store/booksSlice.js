const { createSlice } = require("@reduxjs/toolkit");

const booksSlice = createSlice({
    name: "books",
    initialState: [],
    reducers: {},
});

const { actions, reducer } = booksSlice;
export default reducer;
