import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    noteList: [
        {id: 1, title: 'Длинный заголовок заметки номер 1', comment: 'Комментарий к заметке.', date: '2020-12-18', style: ''},
        {id: 2, title: 'Длинный заголовок заметки номер 2', comment: 'Комментарий к заметке.', date: '2020-12-25', style: ''},
        {id: 3, title: 'Длинный заголовок заметки номер 3', comment: 'Комментарий к заметке.', date: '2020-12-31', style: ''},
        {id: 4, title: 'Длинный заголовок заметки номер 4', comment: 'Комментарий к заметке.', date: '2021-01-01', style: ''},
    ],
    notePage: false,
    openedNote: {},
}


const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        switchPage: (state) => {state.notePage = !state.notePage},
        openNotePage: (state, action) =>  {state.openedNote = state.noteList.filter(i => i.id === action.payload)},
        addNote: (state, action) => {state.noteList = [...state.noteList, action.payload]},
        editNote: (state, action) => {
            state.noteList = [...state.noteList.filter(i => i.id !== action.payload.id), action.payload]
        },
    },
});

const {actions, reducer} = notesSlice;

export default reducer;
export const {
    switchPage, openNotePage, addNote, editNote
} = actions;