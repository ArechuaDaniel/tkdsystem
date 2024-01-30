import { Outlet, Navigate, useNavigate } from "react-router-dom"
import Side from "../auth/Side"
import { useDispatch, useSelector } from "react-redux"
import Spinner from "../components/Spinner"
import { useEffect} from "react"
import { startLogin } from "../store/auth/thunks"
import axios from "axios"
import { startLoadingAlumnos } from "../store/alumno/thunk"


const RutaProtegida = () => {
  
  const navigate = useNavigate()
  const auth = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    const autenticado = async () => {
      const token = localStorage.getItem('token')
      const correo = localStorage.getItem('email')
      const password = localStorage.getItem('sesion')

      try {
        dispatch(startLogin({ correo, password }))
        
        const { data } = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios/login`, { correo, password })
        navigate('/tkdsystem/api/')
        // const { data } = await axios(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios/perfil`, config)

        //console.log(data);

        //dispatch(auth.status)
        dispatch(startLoadingAlumnos())


      } catch (error) {
        //dispatch(logout('Credenciales Incorrectas'))
        console.log(error);
      }
    }
    autenticado();

  }, [])

  //if (auth.status === 'checking') return <Spinner />

  return (
    <>
      {auth.cedulaInstructor ? <Outlet /> : <Navigate to="/tkdsystem/" />}
    </>
  )
}

export default RutaProtegida