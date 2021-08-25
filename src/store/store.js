import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice";

const store = configureStore({
    reducer: {
        data: mainSlice,
    }
});

export default store;