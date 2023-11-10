import { useState } from 'react'

import Alerta from '../components/Alerta';
import clienteAxios from '../config/clienteAxios';


const Registrar = () => {

    const [cedulaInstructor, setCedulaInstructor] = useState('')
    const [correo, setCorreo] = useState('')
    const [primerApellido, setPrimerApellido] = useState('')
    const [segundoApellido, setSegundoApellido] = useState('')
    const [primerNombre, setPrimerNombre] = useState('')
    const [segundoNombre, setSegundoNombre] = useState('')
    const [direccion, setDireccion] = useState('')
    const [fechaRegistro, setFechaRegistro] = useState('')
    const [telefono, setTelefono] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setRepetirPassword] = useState('')
    const [idClub, setIdClub] = useState('')
    const [alerta, setAlerta] = useState({})

    const handleSubmit = async e => {
        e.preventDefault();
        if ([cedulaInstructor,correo, primerApellido, primerNombre, direccion, fechaRegistro, telefono,idClub, password].includes('')) {

            setAlerta({
                msg: 'todos los campos son obligatorios',
                error: true
            })
            return
        }
        if (password != repetirPassword) {
            setAlerta({
                msg: 'Los password no son iguales',
                error: true
            })
            return
        }
        if (password.length < 6) {
            setAlerta({
                msg: 'El Password es muy corto, agrega minimo 6 caracteres',
                error: true
            })
        }
        setAlerta({})

        // INGRESAR EN LA API
        try {

          const {data} =  await clienteAxios.post(`/usuarios` ,{cedulaInstructor,correo,primerApellido,segundoApellido,primerNombre,segundoNombre,direccion,fechaRegistro,telefono,password,idClub})
          
          setAlerta({
            msg: data.msg,
            error: false
          })
            // setUsuario('')
            // setPassword('')
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

            <div className='rounded-xl bg-gray-200'>
                <h1 className='text-sky-600 font-black text-3xl uppercase px-10 mt-10'>Registrate al sistema </h1>

                {msg && <Alerta alerta={alerta} />}
                <form
                    onSubmit={handleSubmit}
                    className='bg-gray-200 shadow rounded-lg p-10 md:grid md:grid-cols-3 md:gap-x-7'>
                    <div className='my-5'>
                        <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='cedulaInstructor'>Cédula*</label>
                        <input
                            type='text'
                            id='cedulaInstructor'
                            placeholder='Ingresa tu cédula'
                            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={cedulaInstructor}
                            onChange={e => setCedulaInstructor(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='primerApellido'>Apellido Paterno*</label>
                        <input
                            type='text'
                            id='primerApellido'
                            placeholder='Ingresa tu Apellido Paterno'
                            className='uppercase w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={primerApellido}
                            onChange={e => setPrimerApellido(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='segundoApellido'>Apellido Materno</label>
                        <input
                            type='text'
                            id='segundoApellido'
                            placeholder='Ingresa tu Apellido Materno'
                            className='uppercase w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={segundoApellido}
                            onChange={e => setSegundoApellido(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='primerNombre'>Primer Nombre*</label>
                        <input
                            type='text'
                            id='primerNombre'
                            placeholder='Ingresa tu Primer Nombre'
                            className='uppercase w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={primerNombre}
                            onChange={e => setPrimerNombre(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='segundoNombre'>Segundo Nombre</label>
                        <input
                            type='text'
                            id='segundoNombre'
                            placeholder='Ingresa tu Segundo Nombre'
                            className='uppercase w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={segundoNombre}
                            onChange={e => setSegundoNombre(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='direccion'>Dirección*</label>
                        <input
                            type='text'
                            id='direccion'
                            placeholder='Ingresa tu Dirección'
                            className='uppercase w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={direccion}
                            onChange={e => setDireccion(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='fechaRegistro'>Fecha de Registro*</label>
                        <input
                            type='date'
                            id='fechaRegistro'
                            className='uppercase w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={fechaRegistro}
                            onChange={e => setFechaRegistro(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='telefono'>Celular*</label>
                        <input
                            type='number'
                            id='telefono'
                            placeholder='Ingresa tu Celular'
                            className='uppercase w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={telefono}
                            onChange={e => setTelefono(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='idClub'>Club*</label>
                        <input
                            type='number'
                            id='idClub'
                            placeholder='Ingresa tu Club'
                            className='uppercase w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={idClub}
                            onChange={e => setIdClub(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='correo'>Email</label>
                        <input
                            type='email'
                            id='correo'
                            placeholder='Email de Registro'
                            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={correo}
                            onChange={e => setCorreo(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='password'>Contraseña</label>
                        <input
                            type='password'
                            id='password'
                            placeholder='Contraseña de Registro'
                            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className='my-5'>
                        <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='password2'>Repetir Contraseña</label>
                        <input
                            type='password'
                            id='password2'
                            placeholder='Repetir Contraseña'
                            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            value={repetirPassword}
                            onChange={e => setRepetirPassword(e.target.value)}
                        />
                    </div>
                    <input
                        type='submit'
                        value='Crear Cuenta'
                        className='bg-sky-700 w-full py-3 text-white mb-5 uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors'
                    />
                   
                </form>
            </div>

        </>
    )
}

export default Registrar