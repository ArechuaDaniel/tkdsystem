import { createSlice } from '@reduxjs/toolkit';

export const alumnoSlice = createSlice({
    name: 'alumno',
    initialState: {
            isSaving : false,

            paises: [],
            provincias: [],
            cantones: [],
            parroquias: [],

            instructor: '',

            alumnos: [],
            editAlumno:'',

            horarios: [],
            editHorario: '',

            asistencias: [],
            editAsistencia: '',

            cinturones: [],

            asensos: [],
            editAsenso: '',

            pagos: [],
            editPago: [],
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
        setInstructor: (state, {payload}) => {
            state.instructor = payload
        },
        setAlumnos: (state, action) => {
            
            state.alumnos = action.payload

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
        eliminaAlumno: (state, {payload}) => {
            
            const alumnos = payload
            const {cedulaAlumno} = alumnos
            
            //console.log(horarios);
            const foundAlumno = state.alumnos.find(alumno => alumno.cedulaAlumno === alumnos.cedulaAlumno)
            //console.log(foundAlumno);
            //console.log(foundHorario);
            //console.log(horarios.idHorario);
            //console.log(idHorario);
            if (foundAlumno) {
                state.alumnos.splice(state.alumnos.indexOf(foundAlumno),1);
                //console.log(foundHorario);
            }
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
        eliminarAsistencia: (state, {payload}) => {
            
            const asistencias = payload
            const {idAsistencia} = asistencias
            
            //console.log(horarios);
            const foundAsistencia = state.asistencias.find(asistencia => asistencia.idAsistencia === asistencias.idAsistencia)
            console.log(foundAsistencia);
            //console.log(foundHorario);
            //console.log(horarios.idHorario);
            //console.log(idHorario);
            if (foundAsistencia) {
                state.asistencias.splice(state.asistencias.indexOf(foundAsistencia),1);
                //console.log(foundHorario);
            }
        },
        setAsensos: (state, {payload}) => {
            
            state.asensos = payload
        },
        addAsenso: (state, {payload}) => {
            state.asensos.push(payload)
        },
        setAsenso : (state, {payload}) => {
            state.editAsenso = payload
        },
        eliminarAsenso: (state, {payload}) => {
            
            const asensos = payload
            const {idAsenso} = asensos
            
            //console.log(horarios);
            const foundAsenso = state.asensos.find(asenso => asenso.idAsenso === asensos.idAsenso)
            //console.log(foundAsenso);
            //console.log(foundHorario);
            //console.log(horarios.idHorario);
            //console.log(idHorario);
            if (foundAsenso) {
                state.asensos.splice(state.asensos.indexOf(foundAsenso),1);
                //console.log(foundHorario);
            }
        },
        setCinturones: (state, {payload}) => {
            
            state.cinturones = payload
        },
        setPagos: (state, {payload}) => {
            
            state.pagos = payload
        },
        addPago: (state, {payload}) => {
            state.pagos.push(payload)
        },
        setPago : (state, {payload}) => {
            state.editPago = payload
        },
        eliminaPago: (state, {payload}) => {
            
            const pagos = payload
            const {idPago} = pagos
            
            //console.log(horarios);
            const foundPago = state.pagos.find(pago => pago.idPago === pagos.idPago)
            console.log(foundPago);
            //console.log(foundHorario);
            //console.log(horarios.idHorario);
            //console.log(idHorario);
            if (foundPago) {
                state.pagos.splice(state.pagos.indexOf(foundPago),1);
                //console.log(foundHorario);
            }
        },
        setPaises: (state, action) => {
            
            state.paises = action.payload

        },
        setProvincias: (state, action) => {
            
            state.provincias = action.payload

        },
        setCantones: (state, action) => {
            
            state.cantones = action.payload

        },
        setParroquias: (state, action) => {
            
            state.parroquias = action.payload

        },

    }
});
// Action creators are generated for each case reducer function
export const {setInstructor, setAlumnos, addAlumno,setHorarios,setAlumno,eliminaAlumno,actualizarAlumno, setHorario, addHorario, actualizarHorario,eliminarHorario, setasistencias,
setAsistencia, addAsistencia, actualizarAsistencia,setAsensos, addAsenso, setAsenso, setCinturones, setPagos, addPago, setPago, eliminaPago, eliminarAsistencia, eliminarAsenso, setPaises,setProvincias,setCantones,setParroquias} = alumnoSlice.actions;