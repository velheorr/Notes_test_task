import React from 'react';
import './Notes.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {ColorButton} from "./elements/elements";
import EditIcon from '@mui/icons-material/Edit';

const NotePage = () => {

    return (
        <div>
            <div className='backArrow'><ArrowBackIcon/></div>
            <div>
                <div className='button'><ColorButton startIcon={<EditIcon/>}  variant="contained"> Править заметку</ColorButton></div>
            </div>
        </div>
    );
};

export default NotePage;