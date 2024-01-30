import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        correo: null,
        password: null,
        primerApellido: null,
        primerNombre: null,
        token: null,
        cedulaInstructor: null,
        errorMessage: null,
        cargando: true
    },
    reducers: {
        login: (state,  {payload} ) => {
            state.status = 'authenticated';
            state.correo= payload.correo;
            state.password= payload.password;
            state.primerApellido= payload.primerApellido;
            state.primerNombre= payload.primerNombre;
            state.token = payload.token;
            state.cedulaInstructor= payload.cedulaInstructor;
            state.errorMessage= null;
        },
        logout: (state,  {payload}  ) => {
            state.status = 'not-authenticated';
            state.correo= null;
            state.password= null;
            state.primerApellido= null;
            state.primerNombre= null;
            state.cedulaInstructor = null,
            state.token = null;
            state.errorMessage= payload.errorMessage;
    
        },
        checkingCredential: (state) => {
            state.status = 'checking';
        },
    }
});
// Action creators are generated for each case reducer function
export const { login, logout, checkingCredential } = authSlice.actions;