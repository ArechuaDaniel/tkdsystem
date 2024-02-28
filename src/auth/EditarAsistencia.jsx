import Header from '../components/Header'
import Barra from '../components/Barra'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { formatearFecha } from "../helpers/formatearFecha";
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingAlumnos, startLoadingHorarios, startUpdateAsistencia, updateAsistencia } from '../store/alumno/thunk'
const EditarAsistencia = () => {
        
        const params = useParams();
        
    
        const {editAsistencia, horarios} = useSelector(state => state.alumno)
        const dispatch = useDispatch();
        const navigate = useNavigate();
        const [fechaRegistro, setFechaRegistro] = useState('')
        const [idHorario, setIdHorario] = useState('')

    
    
        const fecha = new Date()
        const idAsistencia = params.id;
    
        useEffect(() => {
          
            setFechaRegistro(formatearFecha(fecha))
            dispatch(startLoadingAlumnos())
             dispatch(startLoadingHorarios())
            dispatch(startUpdateAsistencia({idAsistencia}))
        
        }, [])

        useEffect(() => {
            
            setFechaRegistro(formatearFecha(editAsistencia.fechaRegistro))
            setIdHorario(editAsistencia.idHorario)
            
        }, [editAsistencia])
        
        
    
    
        const regresar = (e) => {
            e.preventDefault()
            Swal.fire({
                title: "¿Estas seguro de regresar?",
                //text: "You won't be able to revert this!",
                icon: "question",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Ok",
                cancelButtonColor: "#d33",
                cancelButtonText: "Cancelar!",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        title: "Ha regresado a Asistencia!",
                        //text: "Your file has been deleted.",
                        icon: "success"
                    });
    
                    navigate('/tkdsystem/api/asistencias')
    
                }
            });
    
        }
        const handleSubmit = async(e) => {
            e.preventDefault();
            try {
                if ([fechaRegistro, idHorario].includes('')) {
                    Swal.fire({
                        title: "Todos los campos son obligatorios",
                        //text: "That thing is still around?",
                        icon: "warning"
                      });
                      return;
                }
                
                
                    dispatch(updateAsistencia({idAsistencia, fechaRegistro, idHorario}))
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "El horario se ha actualizado con exito",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    navigate('/tkdsystem/api/asistencias')  
                } catch (error) {
                    console.log(error);
                }
        }
        return (
            <>
                
                <div className="flex md:flex-row flex-col">
    
                    <Barra />
                    <div className=' mx-auto'>
                        <div className="flex justify-around items-center">
    
                            <h1 className='md:text-3xl text-2xl mt-10  uppercase'>Actualizar asistencia</h1>
    
                        </div>
                        <div className='flex justify-center '>
    
    
                            {/* FORMULARIO */}
                            <form className='md:my-10 m-5  shadow-2xl rounded-lg p-10'
                                onSubmit={handleSubmit}
                            >
                                <div className='my-5'>
                                    <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='cedulaAlumno'>cedula alumno</label>
                                    <input
                                        type='text'
                                        id='cedulaAlumno'
                                        value={editAsistencia.cedulaAlumno}
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='alumno'>Alumno</label>
                                    <input
                                        type='text'
                                        id='alumno'
                                        value={editAsistencia.primerApellido +' '+editAsistencia.primerNombre}
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black capitalize'
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='fechaRegistro'>Fecha de asistencia</label>
                                    <input
                                        type='date'
                                        id='fechaRegistro'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                        value={fechaRegistro}
                                        onChange={e => setFechaRegistro(e.target.value)}
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='idHorario'>horario</label>
                                    <select 
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    name="idHorario"
                                    onChange={e => setIdHorario(e.target.value)}
                                    value={idHorario}
                                    >
                                        <option value="id">--Seleccione--</option>
                                    {
                                   horarios.map( horario => (
                                        <option value={horario.idHorario}>{horario.hoarioInicio +' / '+ horario.hoarioFin}</option>
                                    ))
                                    }
                                    </select>
                                </div>
    
                                <div className="flex md:flex-row-reverse flex-col  justify-evenly">
                                    
                                    <button
                                        className='bg-sky-600  text-white  uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-700 transition-colors p-3 '
                                    >
                                        <span className="material-symbols-outlined align-middle mr-2">
                                            save
                                        </span>
                                        Guardar
    
                                    </button>
                                    <button
                                        className='bg-red-400   text-white  uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-red-500 transition-colors p-3  md:mt-0 mt-6'
                                        onClick={regresar}
                                    >
                                        <span className="material-symbols-outlined align-middle mr-2">
                                            cancel
                                        </span>
                                        Regresar
    
                                    </button>
                                </div>
    
                            </form>
                        </div>
                    </div>
                </div>
            </>
        )
    }

export default EditarAsistencia