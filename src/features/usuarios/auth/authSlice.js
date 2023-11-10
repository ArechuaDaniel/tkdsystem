import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    correo: '',
        password: '',
        primerNombre: '',
        token: '',
        loading: false,
        error: null,
        succes: false,
  }
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        ingresar: (state,  action  ) => {
            console.log(action);
        },
    }
});
// Action creators are generated for each case reducer function
export const { ingresar } = authSlice.actions;