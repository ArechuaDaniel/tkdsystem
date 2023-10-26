import { NavLink } from "react-router-dom";

const MostrarAlumnos = () => {
    return (
        <>
            <div className='bg-sky-800 md:h-screen h-full text-white'>
                <div className="flex justify-around items-center bg-sky-900">
                    <h1 className='md:text-3xl md:m-10 ml-10 uppercase'>Datos generales de los alumnos</h1>
                    <NavLink to="/tkdsystem/api/crearAlumno">
                        
                        <h1 className='flex items-center text-white md:text-2xl text-center m-10 bg-sky-400 p-3 rounded-xl uppercase'>
                        <span className="material-symbols-outlined mr-2">
                            person_add
                        </span>
                            Crear Alumno</h1>
                    </NavLink>
                </div>
                <div className='flex justify-center mt-10'>
                    <table className="table-fixed border-separate border-spacing-2 border border-gray-200">
                        <thead>
                            <tr>
                                <th className='border border-gray-200 w-96 text-left p-3'>Nº IDENTIFICACION</th>
                                <th className='border border-gray-200 w-96 text-left p-3' >APELLIDOS</th>
                                <th className='border border-gray-200 w-96 text-left p-3'>NOMBRES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-gray-200 w-96 text-left p-3'>The Sliding </td>
                                <td className='border border-gray-200 w-96 text-left p-3'>Malcolm Lockyer</td>
                                <td className='border border-gray-200 w-96 text-left p-3'>1961</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-200 w-96 text-left p-3'>The Sliding </td>
                                <td className='border border-gray-200 w-96 text-left p-3'>Malcolm Lockyer</td>
                                <td className='border border-gray-200 w-96 text-left p-3'>1961</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-200 w-96 text-left p-3'>The Sliding </td>
                                <td className='border border-gray-200 w-96 text-left p-3'>Malcolm Lockyer</td>
                                <td className='border border-gray-200 w-96 text-left p-3'>1961</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-200 w-96 text-left p-3'>The Sliding </td>
                                <td className='border border-gray-200 w-96 text-left p-3'>Malcolm Lockyer</td>
                                <td className='border border-gray-200 w-96 text-left p-3'>1961</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-200 w-96 text-left p-3'>The Sliding </td>
                                <td className='border border-gray-200 w-96 text-left p-3'>Malcolm Lockyer</td>
                                <td className='border border-gray-200 w-96 text-left p-3'>1961</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-200 w-96 text-left p-3'>The Sliding </td>
                                <td className='border border-gray-200 w-96 text-left p-3'>Malcolm Lockyer</td>
                                <td className='border border-gray-200 w-96 text-left p-3'>1961</td>
                            </tr>
                            <tr>
                                <td className='border border-gray-200 w-96 text-left p-3'>The Sliding </td>
                                <td className='border border-gray-200 w-96 text-left p-3'>Malcolm Lockyer</td>
                                <td className='border border-gray-200 w-96 text-left p-3'>1961</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default MostrarAlumnos