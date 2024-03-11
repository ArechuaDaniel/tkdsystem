import React from 'react'

import Header from '../components/Header'
import Barra from '../components/Barra'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { formatearFecha } from "../helpers/formatearFecha";
import { useDispatch, useSelector } from 'react-redux'
import { startLoadingAlumnos, startLoadingCinturones, startNewAsenso } from '../store/alumno/thunk'

const RegistrarAsenso = () => {
    

    const { alumnos,cinturones} = useSelector(state => state.alumno);
    const dispatch = useDispatch();

      const navigate = useNavigate();
      const [fechaAsenso, setFechaAsenso] = useState('')
      const [cedulaAlumno, setCedulaAlumno] = useState('')
      const [idCinturon, setIdCinturon] = useState('')
      const [search, setSearch] = useState("")
  
    
  

      const fecha = new Date()
      const searcher = (e) => {
        setSearch(e.target.value)
    }

    let results = []
    if (!search) {
        results = alumnos
        //console.log(results); 
    }
    else {
        results = alumnos.filter((dato) => dato.primerNombre.toLowerCase().includes(search.toLocaleLowerCase()) || dato.primerApellido.toLowerCase().includes(search.toLocaleLowerCase()) || dato.cedulaAlumno.toLowerCase().includes(search.toLocaleLowerCase()))
    }
  
      useEffect(() => {
            dispatch(startLoadingAlumnos())
          setFechaAsenso(formatearFecha(fecha))
          dispatch(startLoadingCinturones())
      
      }, [])
      
      console.log(cedulaAlumno);
  
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
        
            dispatch(startNewAsenso({cedulaAlumno,fechaAsenso, idCinturon}))
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
              
              <div className="flex md:flex-row flex-col">
  
                  <Barra />
                  <div className=' mx-auto overflow-y-auto h-screen'>
                    <div className="flex justify-around items-center m-10">
                        <h1 className='text-sky-600 font-black md:text-3xl text-2xl'>
                          <span className="material-symbols-outlined align-middle text-3xl mr-2">
                            license 
                            </span>
                            Registro de asenso</h1>
  
                      </div>

                      {/* BUSCAR ALUMNOS */}
                    <div className="flex flex-col shadow-md p-3">
                        
                        <div className="bg-gray-200 rounded-xl p-3  w-full flex ">
                            <input className=" bg-gray-200  capitalize w-full "
                                value={search}
                                onChange={searcher}
                                type="text"
                                id="search"
                                placeholder="Buscar"
                            />    
                            <span className="material-symbols-outlined align-middle">search</span>
                        </div>
                        <div className="p-3 ">
                        <div className="bg-gray-100 rounded-lg shadow-2xl p-3 capitalize">
                                <h3 className="font-bold">Alumno :
                            {
                                search ? 
                                
                                results.map( alumno => (
                                    <div key={alumno.cedulaAlumno} className="bg-gray-200 rounded-xl  p-3 hover:bg-gray-400 font-normal ">
                                        <span>{alumno.cedulaAlumno + ' ' + ' ' + alumno.primerApellido + ' ' + alumno.primerNombre }</span>
                                    </div>
                                ))
                            
                            : ' '
                            }
                            </h3>
                            </div> 
                        </div>
                    </div>
                      <div className='flex justify-center '>
  
  
                          {/* FORMULARIO */}
                          <form className='md:my-10 m-5  shadow-2xl rounded-lg p-10'
                            onSubmit={handleSubmit}
                          >
                              <div className='my-5'>
                                  <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='cedulaAlumno'>cedula alumno</label>
                                  <input
                                      type='text'
                                      id='cedulaAlumno'
                                      value={cedulaAlumno}
                                      onChange={e => setCedulaAlumno(e.target.value)}
                                      className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                  />
                              </div>
                              <div className='my-5'>
                                  <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='fechaAsenso'>Fecha de asenso</label>
                                  <input
                                      type='date'
                                      id='fechaAsenso'
                                      min='1950-01-01'
                                      max={formatearFecha(fecha)}
                                      className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                      value={fechaAsenso}
                                      onChange={e => setFechaAsenso(e.target.value)}
                                  />
                              </div>
                              <div className='my-5'>
                                  <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='idCinturon'>Cinturón</label>
                                  <select 
                                  className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                  name="idCinturon"
                                  onChange={e => setIdCinturon(e.target.value)}
                                  
                                  >
                                      <option value="">--Seleccione--</option>
                                      {
                                        cinturones.map(cinturon => (
                                            <option value={cinturon.idCinturon}>{cinturon.asensoColor}</option>
                                        ))
                                      }

                                  </select>
                              </div>
  
                              <div className="flex md:flex-row-reverse flex-col  justify-evenly">
                                  
                                  <button
                                      className='bg-sky-600  text-white  capitalize font-bold rounded-xl hover:cursor-pointer hover:bg-sky-700 transition-colors p-3 '
                                  >
                                      <span className="material-symbols-outlined align-middle mr-2">
                                          save
                                      </span>
                                      Guardar
  
                                  </button>
                                  <button
                                      className='bg-red-400   text-white  capitalize font-bold rounded-xl hover:cursor-pointer hover:bg-red-500 transition-colors p-3  md:mt-0 mt-6'
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
  
  
  

export default RegistrarAsenso