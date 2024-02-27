import { createSlice } from '@reduxjs/toolkit';

export const horariosSlice = createSlice({
    name: 'horarios',
    initialState: {
        horarios: [],
    },
    reducers: {
        increment: (state, /* action */ ) => {
            
        },
    }
});
// Action creators are generated for each case reducer function
export const { increment } = horariosSlice.actions;     