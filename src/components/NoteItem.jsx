import React from 'react';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ListItemButton from "@mui/material/ListItemButton";
import {useDispatch} from "react-redux";
import {switchPage} from "../store/notesSlice";

const NoteItem = ({items}) => {
    const dispatch = useDispatch()

    const openNote = ()=>{
        dispatch(switchPage())
    }

    const {title, date, id} = items
    let x = new Date(date);
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',

    };

    return (
        <ListItemButton className='notesItem' onClick={()=>openNote(id)}>
            <div className='noteTitle'>{title}</div>
            <div className='noteDate'>{x.toLocaleString("ru", options)}</div>
            <div className='arrow'><ArrowForwardIcon/></div>
        </ListItemButton>
    );
};

export default NoteItem;