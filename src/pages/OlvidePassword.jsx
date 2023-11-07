import { useState } from 'react'
import Alerta from '../components/Alerta';
import { Link } from 'react-router-dom';

const OlvidePassword = () => {
    
    const [correo, setCorreo] = useState('');
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
                
                <div
                    
                    className='rounded-xl bg-white'>
                <h1 className='text-sky-600 font-black text-3xl uppercase px-10 mt-10'>Recupera tu acceso al sistema </h1>
                {msg && <Alerta alerta={alerta}/>}
                    <form 
                        onSubmit={handleSubmit}
                    className='my-10 bg-white shadow rounded-lg p-10'>
                        <div className='my-5'>
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
                       
                        <input
                            type='submit'
                            value='Enviar Instrucciones'
                            className='bg-sky-700 w-full py-3 text-white  uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors'
                        />
                        
                    </form>
                    <nav>
                        <Link 
                            className='block text-center text-slate-500 uppercase text-sm'
                            to='/tkdsystem/'
                        >
                        Ya tengo cuenta
                        </Link>
                    </nav>
                </div>
            </div>
        </>
  )
}

export default OlvidePassword