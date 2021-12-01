import {createSlice} from '@reduxjs/toolkit'



const initialState = {
    noteList: [
        {id: 1, title: 'Длинный заголовок заметки номер 1', comment: 'Комментарий к заметке', date: '2020-12-18'},
        {id: 2, title: 'Длинный заголовок заметки номер 2', comment: 'Комментарий к заметке', date: '2020-12-25'},
        {id: 3, title: 'Длинный заголовок заметки номер 3', comment: 'Комментарий к заметке', date: '2020-12-31'},
        {id: 4, title: 'Длинный заголовок заметки номер 4', comment: 'Комментарий к заметке', date: '2021-01-01'},
/*        {id: 1, title: 'Длинный заголовок заметки номер 1', comment: 'Комментарий к заметке', date: '18 декабря 2020'},
        {id: 2, title: 'Длинный заголовок заметки номер 2', comment: 'Комментарий к заметке', date: '25 декабря 2020'},
        {id: 3, title: 'Длинный заголовок заметки номер 3', comment: 'Комментарий к заметке', date: '31 декабря 2020'},
        {id: 4, title: 'Длинный заголовок заметки номер 4', comment: 'Комментарий к заметке', date: '01 января 2021'},*/
    ],
    notePage: false,

}


const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
       switchPage: (state, action) => {state.notePage = !state.notePage},

    },
});

const {actions, reducer} = notesSlice;

export default reducer;
export const {
    switchPage
} = actions;