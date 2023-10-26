import { NavLink } from "react-router-dom";

import alumno from '../assets/alumno.jpg';
import asensos from '../assets/asensos.jpg';
import campeonatos from '../assets/campeonatos.jpg';
import asistencia from '../assets/asistencia.jpg';
import categorias from '../assets/categorias.jpg';
const Side = () => {
    //const sliderCarrousel = require.context('../assets', true);
    return (
        <>
            <div className='bg-sky-900'>
                <div className='text-white flex justify-between items-center p-10'>
                    <h1 className='text-white md:text-5xl  uppercase'>Sistema tkd</h1>

                    <div className='flex md:text-xl '>
                        <h1 className='mx-4'>Cerrar Sesión</h1>
                        <span className="material-symbols-outlined text-xl ">
                            logout
                        </span>
                    </div>
                </div>
                <div className='bg-sky-800 md:grid  md:grid-cols-3 md:gap-x-8 md:gap-y-4">  flex flex-col justify-center items-center md:h-screen h-full'>
                    {/* ALUMNOS */}

                    <NavLink to="alumnos">
                        <div className='bg-slate-700 rounded-xl flex flex-col justify-center items-center m-10 w-60 h-60'>
                            <div>
                                <img
                                    className='rounded-xl h-40 w-40'
                                    src={alumno} alt="Alumno" />
                            </div>
                            <h1 className='text-white text-2xl text-center mt-6 uppercase'>Alumnos</h1>
                        </div>
                    </NavLink>

                    {/* CATEGORIAS */}
                    <div className='bg-slate-700 rounded-xl flex flex-col justify-center items-center m-10 w-60 h-60'>
                        <div>
                            <img
                                className='rounded-xl h-40 w-40'
                                src={categorias} alt="Alumno" />
                        </div>
                        <h1 className='text-white text-2xl text-center mt-6 uppercase'>CATEGORíAS</h1>
                    </div>

                    {/* ASISTENCIA */}
                    <div className='bg-slate-700 rounded-xl flex flex-col justify-center items-center m-10 w-60 h-60'>
                        <div>
                            <img
                                className='rounded-xl h-40 w-40'
                                src={asistencia} alt="Alumno" />
                        </div>
                        <h1 className='text-white text-2xl text-center mt-6 uppercase'>ASISTENCIA</h1>
                    </div>

                    {/* CAMPEONATOS */}
                    <div className='bg-slate-700 rounded-xl flex flex-col justify-center items-center m-10 w-60 h-60'>
                        <div>
                            <img
                                className='rounded-xl h-40'
                                src={campeonatos} alt="Alumno" />
                        </div>
                        <h1 className='text-white text-2xl text-center mt-6 uppercase'>CAMPEONATOS</h1>
                    </div>

                    {/* ASENSOS */}
                    <div className='bg-slate-700 rounded-xl flex flex-col justify-center items-center m-10 w-60 h-60'>
                        <div>
                            <img
                                className='rounded-xl h-40 w-40'
                                src={asensos} alt="Alumno" />
                        </div>
                        <h1 className='text-white text-2xl text-center mt-6 uppercase'>ASENSOS</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Side