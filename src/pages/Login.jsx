import { useState } from 'react'
import login from '../assets/login1.jpg'
import Alerta from '../components/Alerta';
import { Link } from 'react-router-dom';


const Login = () => {
    
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e => {
        e.preventDefault();
        if ([usuario, password].includes('')) {

            setAlerta({
                msg: 'todos los campos son obligatorios',
                error: true
            })
            return
        }
        setAlerta({})

        // INGRESAR EN LA API
        try {
            
            

            // setUsuario('')
            // setPassword('')
        } catch (error) {
            
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
                <h1 className='text-sky-600 font-black text-3xl uppercase px-10 mt-10'>Ingreso al sistema </h1>
                {msg && <Alerta alerta={alerta}/>}
                    <form 
                        onSubmit={handleSubmit}
                    className='my-10 bg-white shadow rounded-lg p-10'>
                        <div className='my-5'>
                            <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='correo'>Email</label>
                            <input
                                type='email'
                                id='corre'
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
                            className='bg-sky-700 w-full py-3 text-white  uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors'
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