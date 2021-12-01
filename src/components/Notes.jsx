import React from 'react';
import './Notes.css'
import {useSelector} from "react-redux";
import NoteItem from "./NoteItem";
import {ColorButton} from "./elements/elements";


const Notes = () => {
    const noteList = useSelector(state => state.notes.noteList);

    const renderNotes = (notes) =>{
        let sorted = [...notes].sort((a, b)=> {
            return a.date < b.date ? 1 : a.date > b.date ? -1 : 0
        })
        return sorted.map((item, i)=> <NoteItem key={i} items={item} />)
    }
    const elements = renderNotes(noteList);


    let today = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2)
    console.log(today)



    return (
        <>
            <div>
                <span className='title'>Заметки</span>
                <div className='button'><ColorButton  variant="contained">+ Добавить заметку</ColorButton></div>
            </div>
            <div className='notes'>
                {elements}
                {elements}
            </div>
        </>
    );
};

export default Notes;