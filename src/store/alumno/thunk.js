import axios from "axios";
import { setAlumnos} from "./alumnoSlice";


export const startLoadingAlumnos = () => {

    return async(dispatch, getState) => {
        
        
        const token = localStorage.getItem('token')
        
        if (!token) {
            return
        }
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization":`Bearer ${token}` 
            }
        }
        
        try {
            const {data} = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/alumnos`, config)
            
            const {cedulaAlumno} = getState().auth;
                    const alumnos =[];
                    data.forEach(dato => {
                        alumnos.push({id: dato.cedulaAlumno,...dato});
                        
                    })
                    dispatch(setAlumnos(alumnos))
                    //console.log(alumnos);
                    //return alumnos;

                      
                    } catch (error) {
                        console.log(error);
                    }         
    }
}