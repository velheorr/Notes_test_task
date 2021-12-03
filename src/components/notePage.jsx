import React from 'react';
import './Notes.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useDispatch, useSelector} from "react-redux";
import {switchPage} from "../store/notesSlice";
import Divider from "@mui/material/Divider";
import {dateFormat} from "./functions/functions";
import {Modal} from "./elements/Modal";
import EditIcon from '@mui/icons-material/Edit';

const NotePage = () => {
    const dispatch = useDispatch();
    const openedNote = useSelector(state => state.notes.openedNote);
    const {title, date, comment, id} = openedNote[0]

    return (
        <>
            <div className='backArrow'><ArrowBackIcon onClick={()=>dispatch(switchPage())}/></div>
            <span className='title'>{title}</span>
            <div className='button'><Modal btn={'Править заметку'} startIcon={<EditIcon/>} edit={id} /></div>
            <div className='oneNote'>
                <div>Комментарий пользователя к заметке.</div>
                <div>{comment}</div>
                <div className='dateNote'>{dateFormat(date)}</div>
            </div>
            <Divider className='divider'/>
        </>
    );
};

export default NotePage;