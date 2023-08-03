import { CircularProgress, Grid } from '@mui/material'
import React from 'react'

export const CheckingAuth = () => {
  return (
    <Grid
        container
        spacing= {0}
        direction= "column"
        alignItems="center"
        justifyContent="center"
        sx={{minHeight: '100vh', backgroundColor: 'primary.main', padding: 4}} //primary.main está definido en el purpleTheme.js
    >
        <Grid 
            justifyContent="center"
        >
            <CircularProgress color='warning' />
        </Grid>
    </Grid>
  )
}
