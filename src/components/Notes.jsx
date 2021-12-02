import React from 'react';
import './Notes.css'
import {useDispatch, useSelector} from "react-redux";
import NoteItem from "./NoteItem";
import {Modal} from "./elements/Modal";



const Notes = () => {
    const noteList = useSelector(state => state.notes.noteList);
    const dispatch = useDispatch()

    const renderNotes = (notes) =>{
        console.log(notes)
        let sorted = [...notes].sort((a, b)=> {
            return a.date < b.date ? 1 : a.date > b.date ? -1 : 0
        })
        return sorted.map((item, i)=> <NoteItem key={i} items={item} />)
        //return notes.map((item, i)=> <NoteItem key={i} items={item} />)
    }
    const elements = renderNotes(noteList);


    return (
        <>
            <div>
                <span className='title'>Заметки</span>
                <div className='button'><Modal/></div>
            </div>
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