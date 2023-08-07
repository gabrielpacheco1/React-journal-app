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
    },
    setNotes: (state, action) => {
      
    },
    setSaving: (state, action) => {
      
    },
    deleteNote: (state, action) => {
      
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
  setSaving,
} = journalSlice.actions