import React, { useState } from 'react'

const NuevoPassword = () => {
    const [password, setPassword] = useState('')
  return (
    <>
    <div className='rounded-xl bg-gray-200'>
                <h1 className='text-sky-600 font-black text-3xl uppercase px-10 mt-10'>Reestablece tu Contraseña</h1>

                <form
                    
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
            </div>
    </>
  )
}

export default NuevoPassword