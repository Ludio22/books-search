import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import * as axios from 'axios';

const apiKey = "AIzaSyBYS4gSAO3fIp7GJL7uR65hug_Eaz3Iu2s";

export const getBooks = createAsyncThunk(
    'main-slice/getBooks',
    async (params, {rejectWithValue}) => {
        try {    
            let items;

            await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${params.subject}:${params.name.replace(/ /g,'+')}&startIndex=${params.index}&maxResults=30&orderBy=${params.order}&key=${apiKey}`)
            .then(resp => {
                items = resp.data;
            })        

            return items;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const getCurBook = createAsyncThunk(
    'main-slice/getCurBook',
    async (id, {rejectWithValue}) => {
        try {
            let item;
    
            await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
            .then(resp => {
                item = resp.data;
            })        
    
            return(item);
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const MainSlice = createSlice({
    name: "main-slice",
    initialState: {
        loading: false,
        error: null,
        bookName: "",
        data: [],
        curBook: null,
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
            state.error = null;
            state.loading = true;
        },
        [getBooks.fulfilled]: (state, action) => {
            state.curBook = null;
            action.payload.items.forEach(element => {
                state.data.push(element);
            });
            state.totalBook = action.payload.totalItems;
            state.curPage += 30;
            state.loading = false;
        },
        [getBooks.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [getCurBook.pending]: (state) => {
            state.error = null;
            state.loading = true;
        },
        [getCurBook.fulfilled]: (state, action) => {
            state.curBook = action.payload;
            state.loading = false;
        },
        [getCurBook.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
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