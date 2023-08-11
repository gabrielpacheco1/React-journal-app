import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import { ImageGallery } from '../components/ImageGallery'
import { useForm } from '../../hooks/useForm'
import { useSelector } from 'react-redux'

export const NoteView = () => {

  const {active: note} = useSelector(state => state.journal)

  const {body, title, date, onInputChange, formState} = useForm(note)

  const dateString = useMemo(() => {
      const newDate = new Date(date)
      return newDate.toUTCString()

  }, [date])

  return (
    <Grid container direction='row' justifyContent='space-between' sx={{mb:1}}>
      <Grid item>
        <Typography fontSize={39} fontWeight='light'>
            {dateString}
        </Typography>
      </Grid>
      <Grid item>
        <Button color='primary'>
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

