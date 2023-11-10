import { useState } from 'react'
import login from '../assets/login1.jpg'
import Alerta from '../components/Alerta';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ingresar } from '../features/usuarios/auth/authSlice';


const Login = () => {
    
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    console.log(auth);

    const handleSubmit = async e => {
        e.preventDefault();
        if ([correo, password].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return
        }
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/usuarios/login`,{correo, password})
            setAlerta({})
            localStorage.setItem('token',data.token)
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }
    }
    const {msg} = alerta;
    return (
        <>
            <div className='flex md:flex-row  justify-center items-center mx-auto h-screen bg-gray-200'>
                {/* IMAGE */}
                <div className='md:m-0 -ml-96 '>
                    <img
                        className='rounded-xl md:opacity-100 opacity-0'
                        style={{height:'575px'}}
                        src={login} alt="login" />
                </div>

                {/* LOGIN  */}
                <div
                    style={{height:'575px'}} 
                    className='rounded-xl bg-white'>
                <h1 className='text-sky-600 font-black text-3xl uppercase px-5 mt-5'>Ingreso al sistema </h1>
                {msg && <Alerta alerta={alerta}/>}
                    <form 
                        onSubmit={handleSubmit}
                    className='my-2 bg-white shadow rounded-lg p-10'>
                        <div className='my-2'>
                            <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='correo'>Email</label>
                            <input
                                type='email'
                                id='correo'
                                placeholder='Correo de Registro'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                value={correo}
                                onChange={e => setCorreo(e.target.value)}
                            />
                        </div>
                        <div className='my-5'>
                            <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='password'>Contraseña</label>
                            <input
                                type='password'
                                id='password'
                                placeholder='Password de Registro'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <input
                            type='submit'
                            value='Iniciar Sesión'
                            className='bg-sky-700 w-full p-3 text-white  uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors'
                        />
                        
                    </form>
                    <nav>
                        <Link 
                            className='block text-center text-slate-500 uppercase text-sm'
                            to='olvide-password'
                        >
                        Olvide Mi Constraseña
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Login