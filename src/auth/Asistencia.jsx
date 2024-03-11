import React, { useState } from 'react'
import Barra from '../components/Barra'
import { Link, NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteAsistencia, startLoadingAlumnos, startLoadingAsistencias, startLoadingHorarios } from '../store/alumno/thunk'
import { formatearFecha } from '../helpers/formatearFecha'
import Swal from 'sweetalert2'

const Asistencia = () => {

    const [fechaRegistro, setFechaRegistro] = useState('')
    //const [hoarioInicio, setHorarioInicio  ]= useState('')
    
    const dispatch = useDispatch();
    
    useEffect(() => {
      
        dispatch(startLoadingAsistencias())
        dispatch(startLoadingHorarios())
        dispatch(startLoadingAlumnos())
        //setFechaRegistro(formatearFecha(fecha))
    
    }, [])
    

    const {asistencias, horarios} = useSelector(state => state.alumno)
    let numero = 0;
    const [search, setSearch] = useState("")
    

    const searcher = (e) => {
        setSearch(e.target.value)
        setFechaRegistro(e.target.value)
    }

    let results = []
    if (!search) {
        results = asistencias
        //console.log(results); 
    }
    else {
        results = asistencias.filter((dato) => dato.primerNombre.toLowerCase().includes(search.toLocaleLowerCase()) || dato.primerApellido.toLowerCase().includes(search.toLocaleLowerCase()) || dato.cedulaAlumno.toLowerCase().includes(search.toLocaleLowerCase())|| dato.fechaRegistro.toLowerCase().includes(search.toLocaleLowerCase()) || dato.hoarioInicio.toLowerCase().includes(search.toLocaleLowerCase()))
    }
    //console.log(asistencias);
    const eliminar = (idAsistencia) => {
        //console.log(idHorario);
        Swal.fire({
            title: "¿Estas seguro de eliminar la Asistencia?",
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
                    title: "Ha eliminado la Asistencia!",
                    //text: "Your file has been deleted.",
                    icon: "success"
                    
                });

                
                dispatch(deleteAsistencia({idAsistencia}))
                
            }
        });
        
    }
  return (
    <>
            
            <div className="flex md:flex-row flex-col">

                <Barra />
                <div className=' overflow-y-auto h-screen shadow-2xl md:w-4/5'>
                <div className="flex justify-around items-center m-10">

                <h1 className='text-sky-600 font-black md:text-3xl text-2xl'
>
                        <span className="material-symbols-outlined align-middle text-3xl mr-2">
                            
                            fact_check
                            </span>
                            Asistencias</h1>
                        <NavLink
                        className=''
                        to={'/tkdsystem/api/registrar-asistencia'}>

                            <button className='bg-sky-600 p-3 text-white rounded-xl font-bold flex justify-center items-center capitalize '>
                            <span className="material-symbols-outlined align-middle mr-2">
                                    add_circle
                                </span>
                                Registrar Asistencia
                            </button>
                        </NavLink>
                    </div>
                    {/* BUSCAR ALUMNOS */}
                    <div className="flex md:flex-row  items-center justify-evenly  shadow-md">
                        <div className="bg-gray-200 rounded-xl p-3  md:w-1/3 w-full flex justify-between ">
                            
                            <input className=" bg-gray-200  uppercase w-full "
                                //value={search}
                                onChange={searcher}
                                type="text"
                                id="search"
                                placeholder="Buscar"
                            />    
                            <span className="material-symbols-outlined align-middle">search</span>
                        </div>
                        
                        <div className="flex md:justify-end justify-center p-3">
                            <div className="bg-gray-100 rounded-lg shadow-2xl w-48 ml-10 p-3 uppercase">
                                <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idHorario'>horario</label>
                                 <select 
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    name="idHorario"
                                    id='idHorario'
                                    
                                    onChange={searcher}
                                 >
                                    <option value="">--Seleccione--</option>
                                    {
                                   horarios.map( horario => (
                                        <option key={horario.idHorario} value={horario.hoarioInicio}>{horario.hoarioInicio +' / '+ horario.hoarioFin}</option>
                                    ))
                                    }
                                
                                    
                                </select>
                            </div>
                            <div className="bg-gray-100 rounded-lg shadow-2xl w-48 ml-10 p-3 uppercase">
                            <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='fechaRegistro'>Fecha</label>
                            <input
                                    type='date'
                                    id='fechaRegistro'
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    value={(fechaRegistro)}
                                    onChange={searcher}
                                />
                            </div>
                        </div>
                    </div>
                    {/* HORARIOS */}
                    <div className='flex justify-center m-5 shadow-2xl'>

                        <table className="table-fixed shadow-2xl bg-gray-200 rounded-2xl  m-4">
                            <thead>
                                <tr className='bg-sky-600 text-white rounded-2xl'>
                                    <th className=' w-16 text-center p-3 '>#</th>
                                    <th className=' w-28 text-left p-3 capitalize' >Fecha</th>
                                    <th className=' w-40 text-left p-3 capitalize'>Nº Identificación</th>
                                    <th className=' w-48 text-left p-3 capitalize'>Alumno</th>
                                    <th className=' w-48 text-left p-3 capitalize'>Horario</th>
                                    <th className=' w-40 text-left p-3 capitalize'>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                results.map(asistencia => (
                                    <tr key={asistencia.idAsistencia} className="bg-gray-200 rounded-xl text-black p-2 m-2 hover:bg-gray-400">
                                        <td className=' text-center p-3 '> {numero = numero + 1}</td>
                                        <td className='  text-left p-3'>{ formatearFecha(asistencia.fechaRegistro)}</td>
                                        <td className=' text-left p-3 '>{asistencia.cedulaAlumno} </td>
                                        <td className=' text-left p-3 capitalize'>{asistencia.primerApellido + ' ' + asistencia.primerNombre}</td>
                                        <td className='  text-left p-3'>{asistencia.hoarioInicio +' / '+ asistencia.hoarioFin}</td>
                                        <td className='  text-left p-3 flex'>
                                                <Link to={`/tkdsystem/api/editar-asistencia/${asistencia.idAsistencia}`}
                                                className="bg-sky-600 p-2 rounded-xl text-white uppercase font-bold hover:bg-sky-700 text-left mr-2"><span className="material-symbols-outlined text-center align-middle ">
                                                    edit_square
                                                </span></Link>
                                                <Link 
                                                
                                                className='bg-red-500 p-2 rounded-xl text-white uppercase font-bold hover:bg-red-600 text-center'
                                                onClick={() => eliminar(asistencia.idAsistencia)}
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

export default Asistencia