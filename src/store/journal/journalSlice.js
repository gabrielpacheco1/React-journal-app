import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: false,
    messageSaved: '',
    notes: [],
    active: null,
    // active: {
    //   id: 'abc12',
    //   title: '',
    //   body: '',
    //   date: 1234,
    //   imageUrls: [], //'https://img1.jpg', 'https://img2.jpg'
    // }
  },
  reducers: {
    savingNewNote: (state) => {
      state.isSaving= true
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload)
      state.isSaving= false
    },
    setActiveNote: (state, action) => {
      state.active= action.payload
      state.messageSaved= ''
    },
    setNotes: (state, action) => {
      state.notes= action.payload
    },
    setSaving: (state) => {
      state.isSaving= true
      //TODO: mensaje de error
      state.messageSaved= ''
    },
    updateNote: (state, action) => { //payload: note
      state.isSaving= false
      state.notes= state.notes.map(note => {
        if(note.id === action.payload.id)
          return action.payload

        return note
      })

      state.messageSaved= `"${action.payload.title}" actualizada correctamente`
      //No disparar el sweetAlert acá porque un reducer no debe realizar eso
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imageUrls= [...state.active.imageUrls, ...action.payload]
      state.isSaving= false
    },
    deleteNoteById: (state, action) => {
      
    },
  },
})

export const { 
  addNewEmptyNote,
  savingNewNote,
  deleteNote,
  deleteNoteById, 
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} = journalSlice.actions