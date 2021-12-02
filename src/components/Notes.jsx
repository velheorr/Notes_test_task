import React from 'react';
import './Notes.css'
import {useSelector} from "react-redux";
import NoteItem from "./NoteItem";
import {Modal} from "./elements/Modal";


const Notes = () => {
    const noteList = useSelector(state => state.notes.noteList);

    // Вывод заметок + сортировка по дате
    const renderNotes = (notes) =>{
        let sorted = [...notes].sort((a, b)=> {
            return a.date < b.date ? 1 : a.date > b.date ? -1 : 0
        })
        return sorted.map((item, i)=> <NoteItem key={i} items={item} />)
    }
    const elements = renderNotes(noteList);


    return (
        <>
            <span className='title'>Заметки</span>
            <div className='button'><Modal  btn={'+ Добавить заметку'}/></div>
            <div className='notes'>
                {elements}
            </div>
            <div className='notes'>
                {elements}
            </div>
        </>
    );
};

export default Notes;