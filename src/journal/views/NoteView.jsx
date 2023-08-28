import React, { useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SaveOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css' 

import { useForm } from '../../hooks/useForm'
import { ImageGallery } from '../components/ImageGallery'
import { setActiveNote } from '../../store/journal/journalSlice'
import { startSaveNote } from '../../store/journal/thunks'

export const NoteView = () => {

  const dispatch= useDispatch()

  const {active: note, messageSaved, isSaving} = useSelector(state => state.journal)

  const {body, title, date, onInputChange, formState} = useForm(note)

  const dateString = useMemo(() => {
      const newDate = new Date(date)
      return newDate.toUTCString()

  }, [date])

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }  

  const onFileInputChange = ({target}) => {
    if(target.files === 0) return

    console.log('subiendo archivos')
    // dispatch(startUploadingFiles(target.files))
  }
  
  const fileInputRef = useRef()

  useEffect(() => {
    
    dispatch(setActiveNote(formState))
    
  }, [formState]);

  useEffect(() => {
    
    if(messageSaved.length > 0){
      Swal.fire('Nota actualizada', messageSaved, 'success')
    }

  }, [messageSaved]);

  return (
    <Grid container direction='row' justifyContent='space-between' sx={{mb:1}}>
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
            {dateString}
        </Typography>
      </Grid>
      <Grid item>

        <input 
          type="file" 
          multiple
          ref={fileInputRef}
          onChange={onFileInputChange}
          style={{display: 'none'}}
        />

        <IconButton
          color='primary'
          disabled={isSaving}
          onClick={()=> fileInputRef.current.click()}
        >
          <UploadOutlined />
        </IconButton>

        <Button
          disabled={isSaving} 
          onClick={onSaveNote}
          color='primary'
        >
            <SaveOutlined sx={{fontSize:30, mr:1}}/>
            Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
            onChange={onInputChange}
            type='text'
            variant='filled'
            fullWidth
            placeholder='ingrese un título'
            label='Título'
            name='title'
            value={title}
            sx={{border: 'none', mb: 1}}
        />
        <TextField
            onChange={onInputChange}
            type='text'
            variant='filled'
            fullWidth
            multiline
            name='body'
            placeholder='¿Qué sucedió hoy?'
            value={body}
            minRows={5}
        />
      </Grid>
      <ImageGallery/>
    </Grid>
  )
}