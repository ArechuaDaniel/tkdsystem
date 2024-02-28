import { createSlice } from '@reduxjs/toolkit';

export const alumnoSlice = createSlice({
    name: 'alumno',
    initialState: {
            isSaving : false,
            alumnos: [],
            editAlumno:'',

            horarios: [],
            editHorario: '',

            asistencias: [],
            editAsistencia: '',

            cinturones: [],

            asensos: [],
            editAsenso: '',
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
        },
        actualizarAlumno: (state, action) => {
            
            //state.alumnos  = payload;
            // const alumnos = payload;
            // //console.log(payload);
            // //console.log(alumnos);
            // const foundAlumno = state.alumnos.find((alumno) => alumno.cedulaAlumno === payload.alumnos.cedulaAlumno);
            // console.log(foundAlumno);
            //  if (foundAlumno) {
            //   foundAlumno.state.alumnos = alumnos;
            // }


            // state.alumnos = state.alumnos.map(alumno => {
            //     if (alumno.cedulaAlumno === action.payload.cedulaAlumno) {
            //         return action.payload
            //         console.log(action.payload);
            //     }
            //     return alumno
                
            // })


            const alumnos = action.payload
            //console.log(alumnos);

            const foundTask = state.alumnos.find(task => task.id === cedulaAlumno)
            console.log(foundTask);
            // if (foundTask) {
            //     foundTask.title = title
            //     foundTask.description = description
            // }

          },
        setAlumno: (state, {payload}) => {
            state.editAlumno = payload
        },
        setHorarios: (state, {payload}) => {
            
            state.horarios = payload
        },
        setHorario : (state, {payload}) => {
            state.editHorario = payload
        },
        addHorario: (state, {payload}) => {
            state.horarios.push(payload)
        },
        actualizarHorario: (state, {payload}) => {
            
            const horarios = payload
            const {idHorario} = horarios
        
            const foundHora = state.horarios.find(hora => hora.idHorario === idHorario)
            //console.log(idHorario);
            console.log(foundHora);
            console.log(horarios);
            console.log(horarios.idHorario);
            if (foundHora) {
                //console.log(foundHorario);
                // foundHorario.horarios.hoarioInicio = horarios.hoarioInicio
                // foundHorario.horarios.hoarioFin = horarios.hoarioFin
                // // foundTask.description = description
            }
        },
        eliminarHorario: (state, {payload}) => {
            
            const horarios = payload
            const {idHorario} = horarios
            
            //console.log(horarios);
            const foundHorario = state.horarios.find(hora => hora.idHorario === horarios.idHorario)
            //console.log(foundHorario);
            //console.log(horarios.idHorario);
            //console.log(idHorario);
            if (foundHorario) {
                state.horarios.splice(state.horarios.indexOf(foundHorario),1);
                //console.log(foundHorario);
            }
        },
        setasistencias: (state, {payload}) => {
            
            state.asistencias = payload
        },
        setAsistencia : (state, {payload}) => {
            state.editAsistencia = payload
        },
        addAsistencia: (state, {payload}) => {
            state.asistencias.push(payload)
        },
        actualizarAsistencia: (state, {payload}) => {
            
            const horarios = payload
            const {idHorario} = horarios
        
            const foundHora = state.horarios.find(hora => hora.idHorario === idHorario)
            //console.log(idHorario);
            // console.log(foundHora);
            // console.log(horarios);
            // console.log(horarios.idHorario);
            // if (foundHora) {
            //     //console.log(foundHorario);
            //     // foundHorario.horarios.hoarioInicio = horarios.hoarioInicio
            //     // foundHorario.horarios.hoarioFin = horarios.hoarioFin
            //     // // foundTask.description = description
            // }
        },
        setAsensos: (state, {payload}) => {
            
            state.asensos = payload
        },
        addAsenso: (state, {payload}) => {
            state.asistencias.push(payload)
        },
        setAsenso : (state, {payload}) => {
            state.editAsenso = payload
        },
        setCinturones: (state, {payload}) => {
            
            state.cinturones = payload
        },

    }
});
// Action creators are generated for each case reducer function
export const { setAlumnos, addAlumno,setHorarios,setAlumno,actualizarAlumno, setHorario, addHorario, actualizarHorario,eliminarHorario, setasistencias,
setAsistencia, addAsistencia, actualizarAsistencia,setAsensos, addAsenso, setAsenso, setCinturones} = alumnoSlice.actions;