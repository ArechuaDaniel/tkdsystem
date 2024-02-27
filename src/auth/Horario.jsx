import React, { useState } from 'react'
import Header from '../components/Header'
import Barra from '../components/Barra'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { deleteHorario, startLoadingHorarios } from '../store/alumno/thunk'
import Swal from 'sweetalert2'
import { useEffect } from 'react'


const Horario = () => {

    const dispatch = useDispatch();
    const { horarios} = useSelector(state => state.alumno)
   

    useEffect(() => {
      
        dispatch(startLoadingHorarios())
    }, [])
    
    let numero = 0;
    

    const eliminar = (idHorario) => {
        //console.log(idHorario);
        Swal.fire({
            title: "¿Estas seguro de eliminar horario?",
            //text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Eliminar",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Ha eliminado el Horario!",
                    //text: "Your file has been deleted.",
                    icon: "success"
                    
                });

                dispatch(deleteHorario({idHorario}))
                //navigate('/tkdsystem/api/horarios')

            }
        });
        
    }

    return (
        <>
            <Header />
            <div className="flex">

                <Barra />
                <div className=' overflow-y-auto h-screen shadow-2xl md:w-4/5 w-full'>
                    <div className="flex justify-around items-center mt-10">

                        <h1 className='md:text-3xl  text-2xl capitalize'>Horarios</h1>
                        <NavLink
                            className=''
                            to={'/tkdsystem/api/nuevo-horario'}>

                            <button className='bg-sky-600 p-3 hover:bg-sky-700 text-white rounded-xl font-bold flex justify-center items-center capitalize'>

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
                                <th className='w-16 text-center p-3'>#</th>
                                    {/* <th className='w-16 text-center p-3'>#</th> */}
                                    <th className='md:w-40 w-32 text-left p-3 capitalize' >Inicio de horario</th>
                                    <th className='md:w-40 w-32 text-left p-3 capitalize'>Fin de horario</th>
                                    <th className=' w-40 text-center p-3 capitalize'>Acción</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    horarios.map(horario => (
                                        <tr key={horario.idHorario} className="bg-gray-200 rounded-xl text-black p-2 m-2 hover:bg-gray-400">
                                            <td className=' text-center p-3 '> {numero = numero + 1}</td>
                                            {/* <td className=' text-center p-3 '> {horario.idHorario}</td> */}
                                            <td className=' text-left p-3 '>{horario.hoarioInicio} </td>
                                            <td className=' text-left p-3 uppercase'>{horario.hoarioFin}</td>
                                            <td className='  text-center p-3'>
                                                <Link to={`/tkdsystem/api/editar-horario/${horario.idHorario}`}
                                                className="bg-sky-600 p-2 rounded-xl text-white uppercase font-bold hover:bg-sky-700 text-center mr-2"><span className="material-symbols-outlined text-center align-middle ">
                                                    edit_square
                                                </span></Link>
                                                <Link 
                                                
                                                className='bg-red-500 p-2 rounded-xl text-white uppercase font-bold hover:bg-red-600 text-center'
                                                onClick={() => eliminar(horario.idHorario)}
                                                >
                                                <span className="material-symbols-outlined align-middle">
                                                    delete
                                                </span>
                                                </Link>
                                            </td>
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

export default Horario