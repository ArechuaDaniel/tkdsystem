import { createSlice } from '@reduxjs/toolkit';

export const alumnoSlice = createSlice({
    name: 'alumno',
    initialState: {
            isSaving : false,
            alumnos: [],
            newAlumno: [],
            // cedulaAlumno : null,
            // primerApellido: null,
            // segundoApellido : null,
            // primerNombre: null,
            // segundoNombre: null,
            // fechaNacimiento: null,
            // direccion: null,
            // fechaIngreso: null,
            // telefono: null,
            // ocupacion: null,
    },
    reducers: {
        setAlumnos: (state, action) => {
            
            state.alumnos = action.payload

            // state.cedulaAlumno= payload.cedulaAlumno;
            // state.primerApellido= payload.primerApellido;
            // state.primerNombre= payload.primerNombre;
            // state.cedulaAlumno= payload.cedulaAlumno;
            // state.primerApellido= payload.primerApellido;
            // state.segundoApellido = payload.segundoApellido;
            // state.primerNombre= payload.primerNombre;
            // state.segundoNombre= payload.segundoNombre;
            // state.fechaNacimiento= payload.fechaNacimiento;
            // state.direccion= payload.direccion;
            // state.fechaIngreso= payload.fechaIngreso;
            // state.telefono= payload.telefono;
            // state.ocupacion= payload.ocupacion;
        },
        addAlumno: (state, {payload}) => {
            state.alumnos.push(payload)
        }
    }
});
// Action creators are generated for each case reducer function
export const { setAlumnos, addAlumno } = alumnoSlice.actions;