import Header from '../components/Header'
import Barra from '../components/Barra'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { formatearFecha } from "../helpers/formatearFecha";
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingAlumnos, startLoadingCinturones, startNewAsenso, startUpdateAsenso, updateAsenso } from '../store/alumno/thunk'

const EditarAsenso = () => {

  
  
      const { alumnos,editAsenso,cinturones} = useSelector(state => state.alumno);
      const dispatch = useDispatch();

      
  
        const navigate = useNavigate();
        const [fechaAsenso, setFechaAsenso] = useState('')
        const [idCinturon, setIdCinturon] = useState('')

        const params = useParams();
        const idAsenso = params.id;
       
        
        const fecha = new Date()
        
    
        useEffect(() => {
          dispatch(startUpdateAsenso({idAsenso}))
          dispatch(startLoadingAlumnos())
          dispatch(startLoadingCinturones())
        
        }, [])
        useEffect(() => {
            setFechaAsenso(formatearFecha(editAsenso.fechaAsenso));
            setIdCinturon(editAsenso.idCinturon)
        
        }, [editAsenso])
        
        
    
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
                        title: "Ha regresado a Asensos!",
                        //text: "Your file has been deleted.",
                        icon: "success"
                    });
    
                    navigate('/tkdsystem/api/asensos')
    
                }
            });
    
        }
        const handleSubmit = async(e) => {
          e.preventDefault()
          try {
          if ([cedulaAlumno,fechaAsenso, idCinturon].includes('')) {
              Swal.fire({
                  title: "Todos los campos son obligatorios",
                  //text: "That thing is still around?",
                  icon: "warning"
                });
                return;
          }
          
              dispatch(updateAsenso({idAsenso,fechaAsenso, idCinturon}))
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "El asenso se ha registrado con exito",
                  showConfirmButton: false,
                  timer: 1500
                });
              navigate('/tkdsystem/api/asensos')  
          } catch (error) {
              console.log(error);
          }
          
      }
        return (
            <>
                <Header />
                <div className="flex">
    
                    <Barra />
                    <div className=' mx-auto'>
                        <div className="flex justify-around items-center">
    
                            <h1 className='md:text-3xl text-2xl mt-10  uppercase'>Actualizar asenso</h1>
    
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
                                        value={editAsenso.cedulaAlumno}
                                        
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='alumno'>Alumno</label>
                                    <input
                                        type='text'
                                        id='alumno'
                                        value={editAsenso.primerApellido +' '+editAsenso.primerNombre}
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black capitalize'
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='fechaAsenso'>Fecha de asenso</label>
                                    <input
                                        type='date'
                                        id='fechaAsenso'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                        value={fechaAsenso}
                                        onChange={e => setFechaAsenso(e.target.value)}
                                    />
                                </div>
                                <div className='my-5'>
                                  <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='idCinturon'>Cinturón</label>
                                  <select 
                                  className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                  name="idCinturon"
                                  onChange={e => setIdCinturon(e.target.value)}
                                  value={idCinturon}
                                  >
                                      <option value="id">--Seleccione--</option>
                                      {
                                        cinturones.map(cinturon => (
                                            <option value={cinturon.idCinturon}>{cinturon.color}</option>
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
    
    
    
  
  

export default EditarAsenso