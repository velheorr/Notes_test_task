import React from 'react';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ListItemButton from "@mui/material/ListItemButton";
import {useDispatch} from "react-redux";
import {switchPage, openNotePage} from "../store/notesSlice";
import {dateFormat} from "./functions/functions";

const NoteItem = ({items}) => {
    const dispatch = useDispatch()

    const openNote = (id)=>{
        dispatch(switchPage());
        dispatch(openNotePage(id));
    };

    const {title, date, id} = items

    return (
        <ListItemButton className='notesItem' onClick={()=>openNote(id)}>
            <div className='noteTitle'>{title}</div>
            <div className='noteDate'>{dateFormat(date)}</div>
            <div className='arrow'><ArrowForwardIcon/></div>
        </ListItemButton>
    );
};

export default NoteItem;