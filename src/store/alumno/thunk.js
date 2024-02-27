import axios from "axios";
import { actualizarAlumno, actualizarAsistencia, actualizarHorario, addAlumno, addAsistencia, addHorario, eliminarHorario, setAlumno, setAlumnos, setAsensos, setAsistencia, setHorario, setHorarios, setasistencias} from "./alumnoSlice";
import Swal from "sweetalert2";



export const startNewAlumno = () => {
    return async (dispatch, getState) => {
        //const {newAlumno} = useSelector(state => state.alumno.alumno)
        //console.log(newAlumno);
            

        const newAlumno = {
            cedulaAlumno,
            primerApellido,
            segundoApellido,
            primerNombre,
            segundoNombre,
            fechaNacimiento,
            direccion,
            fechaIngreso,
            telefono,
            ocupacion,
        }
        //console.log(newAlumno);
        const token = localStorage.getItem('token')
        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        try {


            //const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/alumnos`, {cedulaAlumno,primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento,direccion,fechaIngreso,telefono,ocupacion}, config)
            // console.log(data);
            
            //dispatch(addAlumno())
            //console.log(data);
            //console.log(alumnos);
            //return alumnos;


        } catch (error) {
            console.log(error);
        }
    }

}

export const startLoadingAlumnos = () => {

    return async (dispatch, getState) => {


        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        try {
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/alumnos`, config)

            const { cedulaAlumno } = getState().auth;
            const alumnos = [];
            data.forEach(dato => {
                alumnos.push({ id: dato.cedulaAlumno, ...dato });

            })
            dispatch(setAlumnos(alumnos))
            //console.log(alumnos);
            //return alumnos;


        } catch (error) {
            console.log(error);
        }
    }
}


export const startUpdateAlumno = ({cedula}) => {

    return async (dispatch, getState) => {

        
        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        try {


            //const { cedulaAlumno } = getState().alumno;
            //console.log(cedula);
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/alumnos/${cedula}`, config)
            //console.log(data);
            //console.log(data.primerApellido);
            //console.log(cedulaAlumno);
            const editAlumno = data;
            //console.log(editAlumno);
            // data.forEach(dato => {
            //     editAlumno.push({ id: dato.cedula, ...dato });

            // })
            dispatch(setAlumno(editAlumno))
            //console.log(alumnos);
            //return alumnos;


        } catch (error) {
            console.log(error);
        }
    }
}
export const startLoadingHorarios= () => {

    return async (dispatch, getState) => {


        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        try {
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/horarios`, config)
            //console.log(data);
            const { cedulaAlumno } = getState().auth;
            const horarios = [];
            data.forEach(dato => {
                horarios.push({ id: dato.cedulaAlumno, ...dato });

            })
            dispatch(setHorarios(horarios))
            //console.log(alumnos);
            //return alumnos;


        } catch (error) {
            console.log(error);
        }
    }
}

export const startUpdateHorario = ({idHorario}) => {

    return async (dispatch, getState) => {

        
        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        try {


            //const { cedulaAlumno } = getState().alumno;
            //console.log(cedula);
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/horarios/${idHorario}`, config)
            //console.log(data);
            
            const editHorario = data;
        
            
            dispatch(setHorario(editHorario))
            //console.log(alumnos);
            //return alumnos;


        } catch (error) {
            console.log(error);
        }
    }
}

export const startNewHorario= ({idHorario,hoarioInicio,hoarioFin}) => {
    return async (dispatch, getState) => {
        
        
        //const { idHorario } = getState().alumno;
        
        
        

        const token = localStorage.getItem('token')
        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        
        try {

            
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/horarios`, {hoarioInicio,hoarioFin}, config)
            //console.log(idHorario);
            const idHorario = data.id;
            //console.log(data.id);
            dispatch(addHorario({id:data.id,idHorario,hoarioInicio, hoarioFin}))
            
            //console.log(data);
            
            
              

    } catch (error) {
        console.log(error);
    }
}
}
export const updateHorario = ({idHorario,hoarioInicio,hoarioFin}) => {
    return async (dispatch, getState) => {

        const token = localStorage.getItem('token')
        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        
        try {
            
            const { data } = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/horarios/${idHorario}`, {hoarioInicio,hoarioFin}, config)
            
            //console.log(data);
            dispatch(actualizarHorario({idHorario,hoarioInicio,hoarioFin}))
            //dispatch(setHorarios())
            
            //console.log(data);
    } catch (error) {
        console.log(error);
    }
}
}
export const deleteHorario = ({idHorario}) => {
    return async (dispatch, getState) => {
        
        
        //const { idHorario } = getState().alumno;
        //console.log(idHorario);
        
        

        const token = localStorage.getItem('token')
        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        
        try {

            
            const { data } = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/horarios/${idHorario}`, config)
            
            //console.log(data);

            dispatch(eliminarHorario({idHorario}))
            
            //console.log(data);
            
            
              

    } catch (error) {
        console.log(error);
    }
}
}
export const startLoadingAsistencias= () => {

    return async (dispatch, getState) => {


        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        try {
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/asistencias`, config)
            //console.log(data);
            // const { cedulaAlumno } = getState().auth;
            const asistencias = [];
            data.forEach(dato => {
                asistencias.push({ id: dato.cedulaAlumno, ...dato });

            })
            dispatch(setasistencias(asistencias))
           


        } catch (error) {
            console.log(error);
        }
    }
}

export const startNewAsistencia= ({cedulaAlumno, fechaRegistro, idHorario}) => {
    return async (dispatch, getState) => {
        
 
        const token = localStorage.getItem('token')
        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        
        try {

            
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/asistencias`, {cedulaAlumno, fechaRegistro, idHorario}, config)
            //console.log(idHorario);
            const idAsistencia = data.id;
            //console.log(data.id);
            dispatch(addAsistencia({id:data.id,cedulaAlumno, fechaRegistro, idHorario}))
            
            //console.log(data);
            
            
              

    } catch (error) {
        console.log(error);
    }
}
}
export const startUpdateAsistencia = ({idAsistencia}) => {

    return async (dispatch, getState) => {

        
        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        try {


            //const { cedulaAlumno } = getState().alumno;
            //console.log(cedula);
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/asistencias/${idAsistencia}`, config)
            //console.log(data);
            
            const editAsistencia = data;
        
            
            dispatch(setAsistencia(editAsistencia))
            //console.log(alumnos);
            //return alumnos;


        } catch (error) {
            console.log(error);
        }
    }
}
export const updateAsistencia = ({idAsistencia, fechaRegistro, idHorario}) => {
    return async (dispatch, getState) => {

        const token = localStorage.getItem('token')
        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }
        
        try {
            
            const { data } = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/asistencias/${idAsistencia}`, {fechaRegistro, idHorario}, config)
            
            //console.log(data);
            
            
            //dispatch(actualizarAsistencia({fechaRegistro, idHorario}))
            
            
            //console.log(data);
    } catch (error) {
        console.log(error);
    }
}
}

export const startLoadingAsensos= () => {

    return async (dispatch, getState) => {


        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        }

        try {
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/asensos`, config)
            //console.log(data);
            // const { cedulaAlumno } = getState().auth;
            const asensos = [];
            data.forEach(dato => {
                asensos.push({ id: dato.cedulaAlumno, ...dato });

            })
            dispatch(setAsensos(asensos))
           


        } catch (error) {
            console.log(error);
        }
    }
}