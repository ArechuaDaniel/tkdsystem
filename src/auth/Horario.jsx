import React from 'react'
import Header from '../components/Header'
import Barra from '../components/Barra'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'


const Horario = () => {
    const dispatch = useDispatch()
    //const alumno = useSelector(state => state.alumno);
    //console.log(alumno.horarios);
   // dispatch(startLoadingHorarios())
    return (
        <>
            <Header />
            <div className="flex">

                <Barra />
                <div className=' overflow-y-auto h-screen shadow-2xl md:w-4/5 w-full'>
                    <div className="flex justify-around items-center mt-10">

                        <h1 className='md:text-3xl  text-2xl uppercase'>Horarios</h1>
                        <NavLink
                            className=''
                            to={'/tkdsystem/api/nuevo-horario'}>

                            <button className='bg-sky-600 p-3 hover:bg-sky-700 text-white rounded-xl font-bold flex justify-center items-center uppercase'>
                                
                                    <span className="material-symbols-outlined mr-2">
                                        add_circle
                                    </span>
                                Agregar Horario
                            </button>
                        </NavLink>
                    </div>
                    {/* HORARIOS */}
                    <div className='flex justify-center m-5 shadow-2xl'>

                        <table className="table-fixed shadow-2xl bg-gray-200 rounded-2xl  m-4">
                            <thead className='bg-sky-600 text-white rounded-2xl'>
                                <tr >
                                    
                                    <th className=' w-48 text-center p-3' >INICIO DE HORARIO</th>
                                    <th className=' w-48 text-center p-3'>FIN DE HORARIO</th>
                                </tr>
                            </thead>
                            <tbody>
                               
                               
                                <tr>
                                    <td className=' text-center p-3'>11:00</td>
                                    <td className=' text-center p-3'>12:00</td>
                                </tr>
                                <tr>
                                    <td className=' text-center p-3'>11:00</td>
                                    <td className=' text-center p-3'>12:00</td>
                                </tr>
                                

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Horario