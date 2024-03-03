import axios from "axios";
import { actualizarAlumno, actualizarAsistencia, actualizarHorario, addAlumno, addAsenso, addAsistencia, addHorario, addPago, eliminaAlumno, eliminaPago, eliminarAsenso, eliminarAsistencia, eliminarHorario, setAlumno, setAlumnos, setAsenso, setAsensos, setAsistencia, setCinturones, setHorario, setHorarios, setPago, setPagos, setasistencias} from "./alumnoSlice";
import Swal from "sweetalert2";
import { NavLink, Navigate } from "react-router-dom";




export const startNewAlumno = ({cedulaAlumno,primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento,direccion,fechaIngreso,telefono,ocupacion,estado, genero, tipoSangre}) => {
    return async (dispatch, getState) => {
        //const {newAlumno} = useSelector(state => state.alumno.alumno)
        //console.log(newAlumno);
            

    
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

            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/alumnos`, {cedulaAlumno,primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento,direccion,fechaIngreso,telefono,ocupacion,estado,genero,tipoSangre}, config)
            
            dispatch(addAlumno({id:cedulaAlumno,cedulaAlumno,primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento,direccion,fechaIngreso,telefono,ocupacion,estado,genero,tipoSangre}))
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "El alumno se ha registrado con exito",
                showConfirmButton: false,
                timer: 1500
              });

        } catch (error) {
            //console.log(error);
            Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
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
            Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
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


            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/alumnos/${cedula}`, config)
            
            const editAlumno = data;
            
            dispatch(setAlumno(editAlumno))
            

        } catch (error) {
            Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
        }
    }
}
export const updateAlumno = ({cedula,cedulaAlumno,primerApellido,segundoApellido,primerNombre,segundoNombre,fechaNacimiento,direccion,fechaIngreso,telefono,ocupacion,estado,genero,tipoSangre}) => {

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
            const { data } = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/api/alumnos/${cedula}`, { cedulaAlumno, primerApellido, segundoApellido, primerNombre, segundoNombre, fechaNacimiento, direccion, fechaIngreso, telefono, ocupacion,estado,genero,tipoSangre }, config)
            
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "El alumno se ha actualizado con exito",
                showConfirmButton: false,
                timer: 1500
            });

            
        } catch (error) {
            console.log(error);
            Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
        }
    }
}
export const deleteAlumno = ({cedulaAlumno}) => {
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

            
            const { data } = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/alumnos/${cedulaAlumno}`, config)
            
            //console.log(data);

            dispatch(eliminaAlumno({cedulaAlumno}))
            
                    

    } catch (error) {
        
        Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
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
            Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
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
            Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
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
        Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
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
        Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
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
            
            
            
            
              

    } catch (error) {
        Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
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
            Swal.fire({
                title: error.response.data.message,
                //text: "That thing is still around?",
                icon: "warning"
                
            });
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
        Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
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
            Swal.fire({
                title: error.response.data.message,
                //text: "That thing is still around?",
                icon: "warning"
                
            });
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
        Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
    }
}
}
export const deleteAsistencia = ({idAsistencia}) => {
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
            const { data } = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/asistencias/${idAsistencia}`, config)
            
            console.log(data);

            dispatch(eliminarAsistencia({idAsistencia}))
            
                  

    } catch (error) {
        console.log(error);
        Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
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
            Swal.fire({
                title: error.response.data.message,
                //text: "That thing is still around?",
                icon: "warning"
                
            });
        }
    }
}
export const startNewAsenso= ({cedulaAlumno,fechaAsenso, idCinturon}) => {
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

            
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/asensos`, {fechaAsenso,cedulaAlumno, idCinturon}, config)
            
            const idAsenso= data.id;
            //console.log(data.id);
            dispatch(addAsenso({id:data.id,cedulaAlumno, fechaAsenso, idCinturon}))
            
            //console.log(data);
            
            
              

    } catch (error) {
        Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
    }
}
}
export const startUpdateAsenso = ({idAsenso}) => {

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
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/asensos/${idAsenso}`, config)
            //console.log(data);
            
            const editAsenso = data;
        
            
            dispatch(setAsenso(editAsenso))
            //console.log(alumnos);
            //return alumnos;


        } catch (error) {
            Swal.fire({
                title: error.response.data.message,
                //text: "That thing is still around?",
                icon: "warning"
                
            });
        }
    }
}
export const updateAsenso = ({idAsenso,fechaAsenso, idCinturon}) => {
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
            
            const { data } = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/asensos/${idAsenso}`, {fechaAsenso, idCinturon}, config)
            
            console.log(data);
            
            
            //dispatch(actualizarAsistencia({fechaRegistro, idHorario}))
            
            
            //console.log(data);
    } catch (error) {
        Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
    }
}
}
export const deleteAsenso = ({idAsenso}) => {
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
            const { data } = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/asensos/${idAsenso}`, config)
            
            

            dispatch(eliminarAsenso({idAsenso}))
            
                  

    } catch (error) {
        console.log(error);
        Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
    }
}
}



export const startLoadingCinturones= () => {

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
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/cinturones`, config)
            //console.log(data);
            // const { cedulaAlumno } = getState().auth;
            const cinturones = [];
            data.forEach(dato => {
                cinturones.push({ id: dato.idCinturon, ...dato });

            })
            dispatch(setCinturones(cinturones))
           


        } catch (error) {
            Swal.fire({
                title: error.response.data.message,
                //text: "That thing is still around?",
                icon: "warning"
                
            });
        }
    }
}


export const startLoadingPagos= () => {

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
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/pagos`, config)
            //console.log(data);
            // const { cedulaAlumno } = getState().auth;
            const pagos = [];
            data.forEach(dato => {
                pagos.push({ id: dato.cedulaAlumno, ...dato });

            })
            dispatch(setPagos(pagos))
           


        } catch (error) {
            Swal.fire({
                title: error.response.data.message,
                //text: "That thing is still around?",
                icon: "warning"
                
            });
        }
    }
}
export const startNewPago= ({cedulaAlumno, fechaPago,  mesPago,formaPago,comprobante}) => {
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

            
            const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/pagos`, {cedulaAlumno, fechaPago, mesPago:mesPago+'-05',formaPago,comprobante}, config)
            
            const idPago= data.id;

            //console.log(data.id);
            dispatch(addPago({id:data.id,cedulaAlumno, fechaPago, mesPago,formaPago,comprobante}))
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Pago registrado con exito",
                showConfirmButton: false,
                timer: 1500
              });
           // navigate('/tkdsystem/api/pagos')  
           

            
            
    } catch (error) {
         //console.log(error);
        Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
    }
}
}
export const startUpdatePago = ({idPago}) => {

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
            const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/pagos/${idPago}`, config)
            //console.log(data);
            
            const editPago = data;
        
            
            dispatch(setPago(editPago))
            //console.log(alumnos);
            //return alumnos;


        } catch (error) {
            
            Swal.fire({
                title: error.response.data.message,
                //text: "That thing is still around?",
                icon: "warning"
                
            });
        }
    }
}
export const updatepago = ({fechaPago, mesPago,formaPago,comprobante, idPago}) => {
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
            
            const { data } = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/pagos/${idPago}`, {fechaPago, mesPago:mesPago+'-05',formaPago,comprobante}, config)
            
            
            console.log(data);
            
            
            //dispatch(actualizarAsistencia({fechaRegistro, idHorario}))
            
            
            //console.log(data);
    } catch (error) {
        console.log(error);
        Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
    }
}
}
export const deletePago = ({idPago}) => {
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

            
            const { data } = await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/pagos/${idPago}`, config)
            
            //console.log(data);

            dispatch(eliminaPago({idPago}))
            
                    

    } catch (error) {
        //console.log(error);
        
        Swal.fire({
            title: error.response.data.message,
            //text: "That thing is still around?",
            icon: "warning"
            
        });
    }
}
}