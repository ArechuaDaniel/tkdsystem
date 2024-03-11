

import React, { useState } from 'react'
import Barra from '../components/Barra'
import { Link, NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteHorario, deletePago, startLoadingAlumnos, startLoadingAsistencias, startLoadingHorarios, startLoadingPagos } from '../store/alumno/thunk'
import { formatearFecha, formatearMes, formatearMesNombre } from '../helpers/formatearFecha'
import Swal from 'sweetalert2'


const Pagos = () => {
    
        const [fechaPago, setFechaPago] = useState('')
        const [mesPago, setMesPago] = useState('')
        //const [hoarioInicio, setHorarioInicio  ]= useState('')
        const [idPago, setIdPago] = useState('')
        const dispatch = useDispatch();
        
        //console.log(formatearFecha(fecha));
    
        
        useEffect(() => {
          
            //dispatch(startLoadingAsistencias())
            //dispatch(startLoadingHorarios())
            dispatch(startLoadingAlumnos())
            dispatch(startLoadingPagos())
            //setFechaRegistro(formatearFecha(fecha))
        
        }, [])
        
    
        const {asistencias, horarios, pagos} = useSelector(state => state.alumno)
        let numero = 0;
        const [search, setSearch] = useState("")
        
    
        const searcher = (e) => {
            setSearch(e.target.value)
            setMesPago(e.target.value)
            setFechaPago(e.target.value)
        }
    
        let results = []
        if (!search) {
            results = pagos
            //console.log(results); 
        }
        else {
            results = pagos.filter((dato) => dato.primerNombre.toLowerCase().includes(search.toLocaleLowerCase()) || dato.primerApellido.toLowerCase().includes(search.toLocaleLowerCase()) || dato.cedulaAlumno.toLowerCase().includes(search.toLocaleLowerCase())|| dato.fechaPago.toLowerCase().includes(search.toLocaleLowerCase()) || dato.mesPago.toLowerCase().includes(search.toLocaleLowerCase()))
        }
        //console.log(asistencias);
        
        const eliminar = (idPago) => {
            //console.log(idHorario);
            Swal.fire({
                title: "¿Estas seguro de eliminar Pago?",
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
                        title: "Ha eliminado el Pago!",
                        //text: "Your file has been deleted.",
                        icon: "success"
                        
                    });
    
                    
                    dispatch(deletePago({idPago}))
                }
            });
            
        }
      return (
        <>
                
                <div className="flex md:flex-row flex-col">
    
                    <Barra />
                    <div className=' overflow-y-auto h-screen shadow-2xl md:w-4/5'>
                        <div className="flex justify-around items-center m-10">

                        <h1 className='text-sky-600 font-black md:text-3xl text-2xl'>
                            <span className="material-symbols-outlined align-middle text-3xl mr-2">
                                
                                payments
                                </span>
                                Pagos</h1>
                            <NavLink
                            className=''
                            to={'/tkdsystem/api/registrar-pago'}>
    
                                <button className='bg-sky-600 p-3 text-white rounded-xl font-bold flex justify-center items-center capitalize '>
                                <span className="material-symbols-outlined align-middle mr-2">
                                        add_circle
                                    </span>
                                    Registrar Pago
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
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idPago'>Estado</label>
                                     <select 
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                        name="idPago"
                                        id='idPago'
                                        
                                        onChange={searcher}
                                     >
                                        <option value="">--Seleccione--</option>
                                        {
                                       pagos.map( pago => (
                                            <option key={pago.idPago} value={pago.idPago}>{pago.idPago}</option>
                                        ))
                                        }
                                    
                                        
                                    </select>
                                </div>
                                <div className="bg-gray-100 rounded-lg shadow-2xl w-48 ml-10 p-3 uppercase">
                                <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='mesPago'>Fecha</label>
                                <input
                                        type='month'
                                        id='mesPago'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                        value={(mesPago)}
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
                                        <th className=' w-40 text-left p-3 capitalize' >Mes</th>
                                        <th className=' w-40 text-left p-3 capitalize'>Nº Identificación</th>
                                        <th className=' w-40 text-left p-3 capitalize'>Alumno</th>
                                        <th className=' w-28 text-left p-3 capitalize'>Estado</th>
                                        <th className=' w-48 text-left p-3 capitalize'>Forma de Pago</th>
                                        <th className=' w-40 text-left p-3 capitalize'>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    results.map(pago => (
                                        <tr key={pago.idpago} className="bg-gray-200 rounded-xl text-black p-2 m-2 hover:bg-gray-400">
                                            <td className=' text-center p-3 '> {numero = numero + 1}</td>
                                            <td className='  text-left p-3'>{ formatearFecha(pago.fechaPago)}</td>
                                            <td className='  text-left p-3'>{ formatearMesNombre(pago.mesPago)}</td>
                                            <td className=' text-left p-3 '>{pago.cedulaAlumno} </td>
                                            <td className=' text-left p-3 capitalize'>{pago.primerApellido + ' ' + pago.primerNombre}</td>
                                            <td className='  text-left p-3'>Pagado</td>
                                            <td className='  text-left p-3'>{pago.formaPago}</td>
                                            <td className='  text-left p-3 flex'>
                                                    <Link to={`/tkdsystem/api/editar-pago/${pago.idPago}`}
                                                    className="bg-sky-600 p-2 rounded-xl text-white uppercase font-bold hover:bg-sky-700 text-left mr-2"><span className="material-symbols-outlined text-center align-middle ">
                                                        edit_square
                                                    </span></Link>
                                                    <Link 
                                                    
                                                    className='bg-red-500 p-2 rounded-xl text-white uppercase font-bold hover:bg-red-600 text-center'
                                                    onClick={() => eliminar(pago.idPago)}
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
    


export default Pagos