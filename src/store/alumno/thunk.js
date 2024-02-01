import axios from "axios";
import { addAlumno, setAlumnos } from "./alumnoSlice";
import { useSelector } from "react-redux";

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
        console.log(newAlumno);
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