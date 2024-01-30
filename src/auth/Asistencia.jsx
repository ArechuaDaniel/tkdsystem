import React from 'react'
import Header from '../components/Header'
import Barra from '../components/Barra'
import { NavLink } from 'react-router-dom'

const Asistencia = () => {
  return (
    <>
            <Header />
            <div className="flex">

                <Barra />
                <div className=' overflow-y-auto h-screen shadow-2xl md:w-4/5'>
                    <div className="flex justify-around items-center mt-10">

                        <h1 className='md:text-3xl  text-2xl uppercase'>Asistencia</h1>
                        <NavLink
                        className=''
                        to={'/tkdsystem/api/registrar-asistencia'}>

                            <button className='bg-sky-600 p-3 text-white rounded-xl font-bold flex justify-center items-center uppercase '>
                                <span className='text-3xl font-bold mr-2'>
                                    <ion-icon name="add-circle-outline"></ion-icon>
                                </span>
                                Registrar Asistencia
                            </button>
                        </NavLink>
                    </div>
                    {/* HORARIOS */}
                    <div className='flex justify-center m-5 shadow-2xl'>

                        <table className="table-fixed shadow-2xl bg-gray-200 rounded-2xl  m-4">
                            <thead>
                                <tr className='bg-sky-600 text-white rounded-2xl'>
                                    <th className=' w-32 text-center p-3 '>#</th>
                                    <th className=' w-32 text-center p-3 '>Nº IDENTIFICACION</th>
                                    <th className=' w-32 text-center p-3 '>ALUMNO</th>
                                    <th className=' w-48 text-center p-3' >FECHA</th>
                                    <th className=' w-48 text-center p-3'>HORARIO</th>
                                </tr>
                            </thead>
                            <tbody>
                            <tr>
                                    <td className=' w-32 text-center p-3'>1 </td>
                                    <td className=' w-48 text-center p-3'>1234587981</td>
                                    <td className=' w-48 text-center p-3'>jHON dOE</td>
                                    <td className=' w-48 text-center p-3'>2024-01-30</td>
                                    <td className=' w-48 text-center p-3'>12:00 / 13:00</td>
                            </tr>
                            <tr>
                                    <td className=' w-32 text-center p-3'>1 </td>
                                    <td className=' w-48 text-center p-3'>1234587981</td>
                                    <td className=' w-48 text-center p-3'>jHON dOE</td>
                                    <td className=' w-48 text-center p-3'>2024-01-30</td>
                                    <td className=' w-48 text-center p-3'>12:00 / 13:00</td>
                            </tr>
                            <tr>
                                    <td className=' w-32 text-center p-3'>1 </td>
                                    <td className=' w-48 text-center p-3'>1234587981</td>
                                    <td className=' w-48 text-center p-3'>jHON dOE</td>
                                    <td className=' w-48 text-center p-3'>2024-01-30</td>
                                    <td className=' w-48 text-center p-3'>12:00 / 13:00</td>
                            </tr>
                            <tr>
                                    <td className=' w-32 text-center p-3'>1 </td>
                                    <td className=' w-48 text-center p-3'>1234587981</td>
                                    <td className=' w-48 text-center p-3'>jHON dOE</td>
                                    <td className=' w-48 text-center p-3'>2024-01-30</td>
                                    <td className=' w-48 text-center p-3'>12:00 / 13:00</td>
                            </tr>
                            <tr>
                                    <td className=' w-32 text-center p-3'>1 </td>
                                    <td className=' w-48 text-center p-3'>1234587981</td>
                                    <td className=' w-48 text-center p-3'>jHON dOE</td>
                                    <td className=' w-48 text-center p-3'>2024-01-30</td>
                                    <td className=' w-48 text-center p-3'>12:00 / 13:00</td>
                            </tr>
                                

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
  )
}

export default Asistencia