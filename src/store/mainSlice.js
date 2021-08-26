import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import * as axios from 'axios';

const apiKey = "AIzaSyBYS4gSAO3fIp7GJL7uR65hug_Eaz3Iu2s";

export const getBooks = createAsyncThunk(
    'main-slice/getBooks',
    async (params) => {
        let items;

        await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${params.subject}:${params.name.replace(/ /g,'+')}&startIndex=${params.index}&maxResults=30&orderBy=${params.order}&key=${apiKey}`)
        .then(resp => {
            items = resp.data;
        })        
        return(items);
    }
);

export const MainSlice = createSlice({
    name: "main-slice",
    initialState: {
        loading: false,
        bookName: "",
        data: [],
        totalBook: 0,
        curPage: 0,
        order: "relevance",
        category: "all",
        orderOptions: ["relevance", "newest"],
        categoryOptions: ["all", "art", "biography", "computers", "history", "medical", "poetry"],
    },
    reducers: {
        setBookName: (state, action) => {
            state.bookName = action.payload;
        },
        clearData: (state) => {
            state.data = [];
        },
        setOrder: (state, action) => {
            state.order = action.payload;
        },
        setCategory: (state, action) => {
            state.category = action.payload;
        },
        zeroPages: (state) => {
            state.curPage = 0;
        }
    },
    extraReducers: {
        [getBooks.pending]: (state) => {
            state.loading = true;
        },
        [getBooks.fulfilled]: (state, action) => {
            action.payload.items.forEach(element => {
                state.data.push(element);
                console.log(element.volumeInfo);
            });
            state.totalBook = action.payload.totalItems;
            state.curPage += 30;
            state.loading = false;
        }
    },
});

export const {
    setBookName,
    clearData,
    setOrder,
    setCategory,
    zeroPages,
} = MainSlice.actions;

export default MainSlice.reducer;