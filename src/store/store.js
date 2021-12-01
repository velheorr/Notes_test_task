import {configureStore} from "@reduxjs/toolkit";
import notes from './notesSlice'



const store = configureStore({
    reducer: {notes},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production',

})

export default store;

