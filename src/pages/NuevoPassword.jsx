
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'

const NuevoPassword = () => {
    const [tokenValido, setTokenValido] = useState(false)
    const [alerta, setAlerta] = useState({})
    const [password, setPassword] = useState('')
    const [passwordModificado, setPasswordModificado] = useState(false)
    const params = useParams();
    const { token } = params;
    useEffect(() => {
        const comprobarToken = async () => {
            try {
                await clienteAxios(`/usuarios/olvide-password/${token}`)
                setTokenValido(true)
            } catch (error) {
                setAlerta({
                    msg: error.response.data.msg,
                    error: true
                })
            }
        }
        comprobarToken()
    }, [])
    const handleSubmit = async e => {
        e.preventDefault();
        if (password.length < 6) {
            setAlerta({
                msg: 'El Password debe ser minimo de 6 caracteres',
                error: true
            })
            return
        }
        try {
            const { data } = await clienteAxios.post(`/usuarios/olvide-password/${token}`, { password })
            setAlerta({
                msg: data.msg,
                error: false
            })
            setPasswordModificado(true)
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
            <div className='rounded-xl flex flex-col  justify-center items-center mx-auto  bg-gray-200 md:h-screen h-full'>
                <h1 className='text-sky-600 font-black text-3xl uppercase px-10 mt-10'>Reestablece tu Contraseña</h1>
                {msg && <Alerta alerta={alerta} />}

                {tokenValido && (
                    <form
                        onSubmit={handleSubmit}
                        className='bg-gray-200 shadow rounded-lg p-10'>

                        <div className='my-5'>
                            <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='password'>Nueva Contraseña</label>
                            <input
                                type='password'
                                id='password'
                                placeholder='Escribe tu nueva Contraseña'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>

                        <input
                            type='submit'
                            value='Guardar Nuevo Password'
                            className='bg-sky-700 w-full py-3 text-white mb-5 uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors'
                        />

                    </form>

                )}
                {passwordModificado && (
                    <nav className="mb-5">
                        <Link
                            className='block text-center text-slate-500 uppercase text-sm'
                            to='/tkdsystem/'
                        >
                            Inicia Sesión
                        </Link>
                    </nav>
                )}
            </div>
        </>
    )
}

export default NuevoPassword