import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

export const NothingSelectedView = () => {

  // const dispatch= useDispatch()

  const {messageDeleted} = useSelector(state => state.journal)

  useEffect(() => {
    
    if(messageDeleted.length > 0){
      Swal.fire('Nota eliminada', messageDeleted, 'warning')
    }

  }, [messageDeleted]);

  return (
    <Grid
        container
        spacing= {0}
        direction= "column"
        alignItems="center"
        justifyContent="center"
        sx={{minHeight: 'calc(100vh - 110px)', backgroundColor: 'primary.main', borderRadius: 2}} //primary.main está definido en el purpleTheme.js
    >
        <Grid item xs={12}>
            <StarOutline sx={{fontSize:100, color: 'white'}}/>
        </Grid>
        <Grid item xs={12}>
        <Typography color="white" variant="h6">Selecciona o crea una entrada</Typography>
        </Grid>
    </Grid>
  )
}