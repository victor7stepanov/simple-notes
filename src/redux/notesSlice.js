import {createSlice} from "@reduxjs/toolkit";

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: []
    },
    reducers: {
        setNotes: (state, { payload }) => {
            state.notes = [...state.notes, ...payload];
        }
    }
})

export const { setNotes } = notesSlice.actions;
export default notesSlice.reducer;