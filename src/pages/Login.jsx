import login from '../assets/login1.jpg'

const Login = () => {
    return (
        <>
            <div className='flex md:flex-row  justify-center items-center mx-auto h-screen bg-gray-200'>
                {/* IMAGE */}
                <div className=''>
                    <img
                        className='rounded-xl'
                        style={{height:'575px'}}
                        src={login} alt="login" />
                </div>

                {/* LOGIN  */}
                <div
                    style={{height:'575px'}} 
                    className='rounded-xl bg-white'>
                <h1 className='text-sky-600 font-black text-3xl uppercase px-10 mt-10'>Ingreso al sistema </h1>
                    <form className='my-10 bg-white shadow rounded-lg p-10'>
                        <div className='my-5'>
                            <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='user'>Usuario</label>
                            <input
                                type='text'
                                id='user'
                                placeholder='Usuario de Registro'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            />
                        </div>
                        <div className='my-5'>
                            <label className='uppercase text-gray-600 block text-xl font-bold' htmlFor='password'>Contraseña</label>
                            <input
                                type='password'
                                id='password'
                                placeholder='Password de Registro'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
                            />
                        </div>
                        <input
                            type='submit'
                            value='Iniciar Sesión'
                            className='bg-sky-700 w-full py-3 text-white mb-5 uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors'
                        />
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login