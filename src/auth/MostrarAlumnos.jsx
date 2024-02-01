import Header from "../components/Header";
import Barra from "../components/Barra";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingAlumnos } from "../store/alumno/thunk";
import { Link, NavLink } from "react-router-dom";
import EditarAlumno from "./EditarAlumno";


const MostrarAlumnos = () => {

    
    const alumno = useSelector(state => state.alumno);
    console.log(alumno.alumnos);
    return (
        <>
            <Header />
            <div className="flex">

                <Barra />
                <div className=' overflow-y-auto h-screen shadow-2xl md:w-4/5'>
                    <div className="flex justify-around items-center m-10 ">
                        <h1 className='md:text-3xl text-2xl uppercase'>Datos generales de los alumnos </h1>
                        <NavLink
                            className=''
                            to={'/tkdsystem/api/crear-alumno'}>

                            <button className='bg-sky-600 p-3 text-white rounded-xl font-bold flex justify-center items-center uppercase '>
                                <span className="material-symbols-outlined mr-2">
                                    add_circle
                                </span>
                                Registrar Alumno
                            </button>
                        </NavLink>
                        
                    </div>

                    <div className="flex md:justify-end justify-center p-3">
                    <div className="bg-gray-100 rounded-lg shadow-2xl w-48 ml-10 p-3 uppercase">
                            <h3 className="font-bold">Total Alumnos : 10</h3>
                            <h3>Activos   : 9</h3>
                            <h3>Inactivos : 1</h3>
                    </div>
                    </div>

                    {/* BUSCAR ALUMNOS */}
                    <div className="flex items-center justify-center m-5 shadow-md">
                        <div>
                            <input className="md:p-3 p-2 ml-4 rounded-xl md:w-96 bg-gray-200 text-black uppercase"
                                type="search"
                                placeholder="Cedula, Nombre, Apellido" />
                        </div>

                        <div className="flex items-center bg-sky-600 p-3  text-white m-2 uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-700 transition-colors">
                            <span className="material-symbols-outlined">
                                search
                            </span>
                            <input
                                className=""
                                type="submit" value="Buscar Alumno" />
                        </div>
                    </div>
                    {/* ALUMNOS */}
                    <div className='flex justify-center m-5 shadow-2xl'>

                        <table className="table-fixed shadow-2xl bg-gray-200 rounded-2xl  m-4 ">
                            <thead className='bg-sky-600 text-white rounded-2xl'>
                                <tr>
                                    <th className=' w-48 text-left p-3'>Nº IDENTIFICACION</th>
                                    <th className=' w-48 text-left p-3' >ALUMNO</th>
                                    <th className=' w-32 text-left p-3'>ESTADO</th>
                                    <th className=' w-32 text-left p-3'>ACCIÓN</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    alumno.alumnos.map(alm => (
                                        <tr key={alm.cedulaAlumno} className="bg-gray-200 rounded-xl text-black p-2 m-2">
                                            <td className=' text-left p-3'>{alm.cedulaAlumno} </td>
                                            <td className=' text-left p-3 uppercase'>{alm.primerApellido + ' ' + alm.primerNombre}</td>
                                            <td className='  text-left p-3'>ACTIVO</td>
                                            <td className='  text-center p-3'><Link to={`/tkdsystem/api/editar-alumno/:${alumno.alumnos.cedulaAlumno}`}
                                            className="bg-sky-600 p-3 rounded-xl text-white uppercase font-bold hover:bg-sky-700 text-center"><span className="material-symbols-outlined align-middle mr-2">
                                            edit
                                            </span></Link></td>
                                        </tr>
                                    ))
                                }
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MostrarAlumnos