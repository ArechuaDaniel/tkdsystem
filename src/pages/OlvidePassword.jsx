import { useState } from 'react'
import Alerta from '../components/Alerta';
import { Link } from 'react-router-dom';
import clienteAxios from '../config/clienteAxios';


const OlvidePassword = () => {

    const [correo, setCorreo] = useState('');
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e => {
        e.preventDefault();
        if (correo === '' || correo.length < 6) {
            setAlerta({
                msg: 'El email es obligatorio',
                error: true
            })
            return
        }
        try {
            const {data} = await clienteAxios.post(`/usuarios/olvide-password`,{correo})
            setAlerta({
                msg: data.msg,
                error: false
              })
        } catch (error) {
            
            setAlerta({
                msg: error.response.data.msg,
                error: true
              })
        }
        

    }
    const { msg } = alerta;
    return (
        <>
            <div className='flex md:flex-row  justify-center items-center mx-auto  bg-gray-200 md:h-screen h-full'>

                <div

                    className='rounded-xl bg-white'>
                    <h1 className='text-sky-600 font-black text-3xl uppercase px-10 mt-10'>Recupera tu acceso al sistema </h1>
                    {msg && <Alerta alerta={alerta} />}

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
                    <nav className='mb-5'>
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