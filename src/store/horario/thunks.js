import { setHorarios } from "../alumno/alumnoSlice"

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

            const { cedulaAlumno } = getState().auth;
            const horarios = [];
            data.forEach(dato => {
                horarios.push({ id: dato.cedulaAlumno, ...dato });

            })
            dispatch(setHorarios(alumnos))
            //console.log(alumnos);
            //return alumnos;


        } catch (error) {
            console.log(error);
        }
    }
}