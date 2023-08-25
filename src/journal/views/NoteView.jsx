import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import { ImageGallery } from '../components/ImageGallery'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNote } from '../../store/journal/journalSlice'
import { startSaveNote } from '../../store/journal/thunks'

export const NoteView = () => {

  const dispatch= useDispatch()

  const {active: note} = useSelector(state => state.journal)

  const {body, title, date, onInputChange, formState} = useForm(note)

  const dateString = useMemo(() => {
      const newDate = new Date(date)
      return newDate.toUTCString()

  }, [date])

  const onSaveNote = () => {
    dispatch(startSaveNote())
  }  

  useEffect(() => {
    
    dispatch(setActiveNote(formState))
    
  }, [formState]);

  return (
    <Grid container direction='row' justifyContent='space-between' sx={{mb:1}}>
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
            {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button 
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