
import Header from '../components/Header'
import Barra from '../components/Barra'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { formatearFecha, formatearMes } from "../helpers/formatearFecha";
import { startLoadingHorarios,  startNewAsistencia, startNewPago } from '../store/alumno/thunk'
import { useDispatch, useSelector } from 'react-redux'
import { extraerHora, formatearHora } from '../helpers/formatearHora'


const RegistrarPago = () => {
        
        const { alumnos,pagos } = useSelector(state => state.alumno);
        const dispatch = useDispatch();
        
    
        const [fechaPago, setFechapago] = useState('')
        const [mesPago, setMesPago] = useState('')
        const [cedulaAlumno, setCedulaAlumno] = useState('')
        const [comprobante, setComprobante] = useState('')
        const [formaPago, setFormaPago] = useState('')
        const [alerta, setAlerta] = useState('')
        const [idPago, setIdPago] = useState('')
        const [search, setSearch] = useState("")
        
        const navigate = useNavigate();
        
    
        const fecha = new Date()
    
    
        useEffect(() => {
            
            setFechapago(formatearFecha(fecha))
            setMesPago(formatearMes(fecha))
            setFormaPago('Efectivo')
            //sethoarioInicio('23:00:00')
            
            
        }, [])
    
        
        //console.log({cedulaAlumno, fechaPago, mesPago:mesPago+'-05',formaPago,comprobante});
    
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
                        title: "Ha regresado a Pagos!",
                        //text: "Your file has been deleted.",
                        icon: "success"
                    });
    
                    navigate('/tkdsystem/api/pagos')
    
                }
            });
    
        }
        const handleSubmit = async(e) => {
            e.preventDefault()
            try {
            if ([cedulaAlumno, fechaPago, mesPago,formaPago].includes('')) {
                Swal.fire({
                    title: "Todos los campos son obligatorios",
                    //text: "That thing is still around?",
                    icon: "warning"
                  });
                  return;
            }

                dispatch(startNewPago({cedulaAlumno, fechaPago, mesPago,formaPago,comprobante}))
                navigate('/tkdsystem/api/pagos')  
                  
            } catch (error) {
                console.log(error);
                
            } 
            //finally {
            //      //navigate('/tkdsystem/api/pagos')  
            // }
              
            
            
        }
        const { msg } = alerta;
        return (
            <>
                
                <div className="flex md:flex-row flex-col">
    
                    <Barra />
                    <div className=' mx-auto md:overflow-y-auto h-screen'><div className="flex justify-around items-center m-10">
                        <h1 className='text-sky-600 font-black md:text-3xl text-2xl'>
                                
                            <span className="material-symbols-outlined align-middle text-3xl mr-2">
                                
                                payments
                                </span>
                                Registro de Pagos</h1>
    
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
                                    <label className=' text-gray-600  text-xl font-bold' htmlFor='fechaPago'>Fecha de Pago</label>
                                    <input
                                        type='date'
                                        id='fechaPago'
                                        max={formatearFecha(fecha)}
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                        value={(fechaPago)}
                                        onChange={e => setFechapago(e.target.value)}
                                    />
                                </div>
                                <div className='my-5'>
                                    <label className=' text-gray-600  text-xl font-bold' htmlFor='mesPago'>Mes de Pago</label>
                                    <input
                                        type='month'
                                        id='mesPago'
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                        value={mesPago}
                                        onChange={e => setMesPago(e.target.value)}
                                    />
                                </div>
                                <div className='my-5'>
                                  <label className=' text-gray-600  text-xl font-bold' htmlFor='formaPago'>Forma de Pago</label>
                                  <select 
                                  className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                  name="formaPago"
                                  onChange={e => setFormaPago(e.target.value)}
                                  
                                  >
                                      
                                      <option value="Efectivo">Efectivo</option>
                                      <option value="Transferencia">Transferencia</option>
                                      <option value="Deposito">Depósito</option>

                                      {/* {
                                        pagos.map(pago => (
                                            <option value={pago.idPago}>{pago.formaPago}</option>
                                        ))
                                      } */}

                                  </select>
                              </div>
                              {
                                (formaPago != 'Efectivo' || formaPago == '--Seleccione--')
                                ?
                                <div className='my-5'>
                                <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='comprobante'>Comprobante</label>
                                <input
                                    type='text'
                                    id='comprobante'
                                    value={comprobante}
                                    onChange={e => setComprobante(e.target.value)}
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                />
                            </div>
                                : ''
                              }
                              
    
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
    
    
    
export default RegistrarPago