import axios from "axios";
import { checkingCredential, login, logout } from "./authSlice"

export const checkingAuthentication = (correo, password) => {
    return async(dispatch) => {
       dispatch(checkingCredential());
    }
}

export const endLogin = () => {
    return async(dispatch) => {
       dispatch(logout(auth.status));
    }
}

export const startLogin = ({correo, password}) => {
    
    return async(dispatch) => {

            // useEffect(() => {
            //  const autenticarUsuario = async () => {
                dispatch(checkingCredential());
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
                    const {data} = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios/perfil`, config)
                    //console.log(data);
                        
                        dispatch(login({correo:data.correo,password:data.password,primerApellido:data.primerApellido,token, cedulaInstructor: data.cedulaInstructor, primerNombre: data.primerNombre}))
                        //dispatch(login(data))

                        
                    } catch (error) {
                        dispatch(logout('Credenciales Incorrectas'))
                    }          
            //   }
            //   autenticarUsuario();
              
            // }, [])
     }
}

