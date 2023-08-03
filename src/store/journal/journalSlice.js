import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
  name: 'journal',
  initialState: {
    isSaving: true,
    messageSaved: '',
    notes: [],
    // active: null,
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
    addNewEmptyNote: (state, action) => {
      
    },
    setActiveNote: (state, action) => {
      
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
  setActiveNote,
  setNotes,
  setSaving,
  deleteNote,
  deleteNoteById, 
} = journalSlice.actions