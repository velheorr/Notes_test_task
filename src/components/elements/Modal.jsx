import React, {useEffect, useRef, useState} from 'react';
import './Modal.css'
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import {ColorButton} from "./elements";
import IconButton from "@mui/material/IconButton";
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ReplayIcon from '@mui/icons-material/Replay';
import Divider from "@mui/material/Divider";
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {addNote, editNote, switchPage} from "../../store/notesSlice";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: -285px;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: #454A63;
  opacity: 0.8;
`;

const style = {
    width: 410,
    bgcolor: '#FFFFFF',
    boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.16)',
    p: 2,
    px: 4,
    pb: 3,
};


export const Modal =({...props})=> {
    const noteList = useSelector(state => state.notes.noteList);
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [format, setFormat] = useState('')
    const handleOpen = () => setOpen(true);

    // Очистка формы при закрытии модального окна
    const handleClose = () => {
        setOpen(false)
        resetForm()
    };

    // react hook form инициализация
    const { register, handleSubmit, reset, formState: { errors }, setValue } = useForm({
        defaultValues: {
            title: "",
            comment: "",
        }
    });

    let submitBtn = ['Добавить', 'Добавить заметку'];
    // Если открыто редактирование заметки - получение ее из стора и установка значений формы

    let editedNote
    if(props.edit){
        editedNote = noteList.filter(i => i.id === props.edit);
        setValue('title', editedNote[0].title);
        setValue('comment', editedNote[0].comment);
        submitBtn = ['Изменить', 'Править заметку'];
    }
    useEffect(()=>{
        if(props.edit){
            setFormat(editedNote[0].style)
        }
        // eslint-disable-next-line
    }, [])


    // Очистка формы
    const resetForm = ()=>{
        reset({title:'', comment:''});
    }

    // Добавление заметки или ее изминение
    const onSubmit = data =>{
        data.style = format
        data.date = new Date().getFullYear()+'-'+("0"+(new Date().getMonth()+1)).slice(-2)+'-'+("0"+new Date().getDate()).slice(-2)
        if (props.edit) {
            data.id = props.edit
            dispatch(editNote(data))
            dispatch(switchPage())
        } else {
            data.id = Date.now()
            dispatch(addNote(data))
        }
        resetForm()
        setFormat('')
        handleClose()
    };

    // выбор активного класса
    const itemRefs = useRef([]);
    const modalActions = (id, style)=> {
        itemRefs.current.forEach(item => item.classList.remove('activeAction'));
        itemRefs.current[id].classList.add('activeAction');
        setFormat(style)

    }

    return (
        <div>
            <ColorButton onClick={handleOpen} variant="contained" startIcon={props.startIcon}>{props.btn}</ColorButton>
            <StyledModal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                BackdropComponent={Backdrop}
            >
                <Box sx={style}>
                    <div className='closeBtn'><IconButton onClick={handleClose}><CloseIcon /></IconButton></div>
                    <div className='modalTitle' >{submitBtn[1]}</div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='modalActions'>
                            <span>
                                <IconButton id='bold' ref={el => itemRefs.current[0] = el} onClick={()=> modalActions(0, "bold")}><FormatBoldIcon /></IconButton>
                                <IconButton id='italic' ref={el => itemRefs.current[1] = el} onClick={()=> modalActions(1, "italic")}><FormatItalicIcon /></IconButton>
                                <IconButton id='underline' ref={el => itemRefs.current[2] = el} onClick={()=> modalActions(2, "underline")}><FormatUnderlinedIcon /></IconButton>
                                <IconButton id='number' ref={el => itemRefs.current[3] = el} onClick={()=> modalActions(3, "number")}><FormatListNumberedIcon /></IconButton>
                                <IconButton id='list' ref={el => itemRefs.current[4] = el} onClick={()=> modalActions(4, "list")}><FormatListBulletedIcon /></IconButton>
                            </span>
                            <IconButton onClick={resetForm} aria-label="replay"><ReplayIcon /></IconButton>
                        </div>
                        <Divider/>
                        <div className='modalTitle2'>Название заметки</div>
                        <input className='text' type="text"  placeholder="Введите заголовок заметки"
                               {...register("title", { required: true })}
                         />
                        {errors.title && <span className='error'>Поле не может быть пустым</span>}
                        <div className='modalTitle2'>Комментарий</div>
                        <textarea className='comment' type="text"  placeholder="Введите комментарий"
                              {...register("comment", { required: true })}
                        />
                        {errors.comment && <span className='error'>Поле не может быть пустым</span>}
                        <div className='addBtn'><ColorButton type="submit" variant="contained">{submitBtn[0]}</ColorButton></div>
                    </form>
                </Box>
            </StyledModal>
        </div>
    );
}
