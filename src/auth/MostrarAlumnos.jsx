import { NavLink } from "react-router-dom";

import Header from "../components/Header";
import Barra from "../components/Barra";

const MostrarAlumnos = () => {
    return (
        <>  
            <Header/>
            <div className="flex">
            
            <Barra/>
            <div className=' overflow-y-auto h-screen bg-slate-200 md:w-4/5'>
                <div className="flex justify-around items-center">
                    <h1 className='md:text-3xl md:m-10 uppercase'>Datos generales de los alumnos</h1>
                    
                </div>
                
                {/* BUSCAR ALUMNOS */}
                <div className="flex items-center justify-center mt-4">
                    <div>
                        <input className="md:p-3 p-2 ml-4 rounded-xl md:w-96 text-black uppercase" 
                        type="search" 
                        placeholder="Cedula, Nombre, Apellido" />
                    </div>

                    <div className="flex items-center bg-sky-400 rounded-xl md:p-3 p-2 ml-4">
                        <span class="material-symbols-outlined">
                            search
                        </span>
                        <input
                        className="uppercase"
                        type="submit" value="Buscar Alumno" />
                    </div>
                </div>
                {/* ALUMNOS */}
                <div className='flex justify-center mt-10'>

                    <table className="table-fixed border-separate border-spacing-2 border border-black m-4">
                        <thead>
                            <tr>
                                <th className='border border-black w-96 text-left p-3'>Nº IDENTIFICACION</th>
                                <th className='border border-black w-96 text-left p-3' >APELLIDOS</th>
                                <th className='border border-black w-96 text-left p-3'>NOMBRES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border border-black w-96 text-left p-3'>The Sliding </td>
                                <td className='border border-black w-96 text-left p-3'>Malcolm Lockyer</td>
                                <td className='border border-black w-96 text-left p-3'>1961</td>
                            </tr>
                            <tr>
                                <td className='border border-black w-96 text-left p-3'>The Sliding </td>
                                <td className='border border-black w-96 text-left p-3'>Malcolm Lockyer</td>
                                <td className='border border-black w-96 text-left p-3'>1961</td>
                            </tr>
                            <tr>
                                <td className='border border-black w-96 text-left p-3'>The Sliding </td>
                                <td className='border border-black w-96 text-left p-3'>Malcolm Lockyer</td>
                                <td className='border border-black w-96 text-left p-3'>1961</td>
                            </tr>
                            <tr>
                                <td className='border border-black w-96 text-left p-3'>The Sliding </td>
                                <td className='border border-black w-96 text-left p-3'>Malcolm Lockyer</td>
                                <td className='border border-black w-96 text-left p-3'>1961</td>
                            </tr>
                            <tr>
                                <td className='border border-black w-96 text-left p-3'>The Sliding </td>
                                <td className='border border-black w-96 text-left p-3'>Malcolm Lockyer</td>
                                <td className='border border-black w-96 text-left p-3'>1961</td>
                            </tr>
                            <tr>
                                <td className='border border-black w-96 text-left p-3'>The Sliding </td>
                                <td className='border border-black w-96 text-left p-3'>Malcolm Lockyer</td>
                                <td className='border border-black w-96 text-left p-3'>1961</td>
                            </tr>
                            <tr>
                                <td className='border border-black w-96 text-left p-3'>The Sliding </td>
                                <td className='border border-black w-96 text-left p-3'>Malcolm Lockyer</td>
                                <td className='border border-black w-96 text-left p-3'>1961</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            </div>
        </>
    )
}

export default MostrarAlumnos