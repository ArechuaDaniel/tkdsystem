import { NavLink } from "react-router-dom";
import Header from "../components/Header";
import Barra from "../components/Barra";

const CrearAlumno = () => {
    return (
        <>  
            <Header/>
            <div className="flex">
            
            <Barra/>
            <div className=' overflow-y-auto h-screen bg-slate-200 md:w-4/5'>
                <div className="flex justify-around items-center">
                    
                    <h1 className='md:text-3xl mt-10  uppercase'>Crear un alumno nuevo</h1>
                </div>
                <div className='flex justify-center '>
                    <form className='md:my-10 m-5  shadow rounded-lg p-10  md:grid  md:grid-cols-3 md:gap-x-8 '>
                        <div className='my-5'>
                            <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='cedulaAlumno'>Cedula</label>
                            <input
                                type='text'
                                id='cedulaAlumno'
                                placeholder='Cedula del Alumno'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                            />
                        </div>
                        <div className='my-5'>
                            <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='primerApellido'>Apellido Paterno</label>
                            <input
                                type='text'
                                id='primerApellido'
                                placeholder='Ingrese Apellido Paterno'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                            />
                        </div>
                        <div className='my-5'>
                            <label className='uppercase text-gray-600 text-xl font-bold' htmlFor='segundoApellido'>Apellido Materno</label>
                            <input
                                type='text'
                                id='segundoApellido'
                                placeholder='Ingrese Apellido Materno'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                            />
                        </div>
                        <div className='my-5'>
                            <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='primerNombre'>Primer Nombre</label>
                            <input
                                type='text'
                                id='primerNombre'
                                placeholder='Ingrese Primer Nombre'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                            />
                        </div>
                        <div className='my-5'>
                            <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='segundoNombre'>Segundo Nombre</label>
                            <input
                                type='text'
                                id='segundoNombre'
                                placeholder='Ingrese Segundo Nombre'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                            />
                        </div>
                        <div className='my-5'>
                            <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='fechaNacimiento'>Fecha De Nacimiento</label>
                            <input
                                type='date'
                                id='fechaNacimiento'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                            />
                        </div>
                        <div className='my-5'>
                            <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='direccion'>Dirección</label>
                            <input
                                type='text'
                                id='direccion'
                                placeholder='Ingrese Dirección'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                            />
                        </div>
                        <div className='my-5'>
                            <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='fechaIngreso'>Fecha De Ingreso</label>
                            <input
                                type='date'
                                id='fechaIngreso'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                            />
                        </div>
                        <div className='my-5'>
                            <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='telefono'>Celular</label>
                            <input
                                type='text'
                                id='telefono'
                                placeholder='Ingrese Celular'
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                            />
                        </div>
                        <div className='my-5'>
                            <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='ocupacion'>Ocupación</label>
                            <select id="ocupacion" className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black '>
                                <option value="audi" selected>--Seleccione--</option>
                                <option value="Estudiante">Estudiante</option>
                                <option value="Trabaja">Trabaja</option>
                                <option value="Otros">Otros</option>

                            </select>
                        </div>
                        
                        
                        <button
                            className='bg-sky-700 w-full  py-3  text-white mb-5 uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-800 transition-colors'
                        >
                            <span className="material-symbols-outlined align-middle mr-2">
                                save
                            </span>
                            Guardar Alumno

                        </button>
                        
                    </form>
                </div>
            </div>
            </div>
        </>
    )
}

export default CrearAlumno