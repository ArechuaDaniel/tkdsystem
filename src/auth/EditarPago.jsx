import Barra from '../components/Barra'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

import { formatearFecha, formatearMes } from "../helpers/formatearFecha";
import { startUpdatePago, updatepago } from '../store/alumno/thunk'
import { useDispatch, useSelector } from 'react-redux'


const EditarPago = () => {
    
    
            
            const { alumnos,pagos, editPago } = useSelector(state => state.alumno);
            const dispatch = useDispatch();
            const params = useParams()
            
        
            const [fechaPago, setFechapago] = useState('')
            const [mesPago, setMesPago] = useState('')
            
            const [comprobante, setComprobante] = useState('')
            const [formaPago, setFormaPago] = useState('')
            const [alerta, setAlerta] = useState('')
            
            const [search, setSearch] = useState("")
            
            const navigate = useNavigate();
            
        
            const fecha = new Date()
            const idPago = params.id;
            
        
            useEffect(() => {
                
               
                //sethoarioInicio('23:00:00')
                dispatch(startUpdatePago({idPago}))
                
                
            }, [])
            useEffect(() => {
              
                //setCedulaAlumno(editPago.cedulaAlumno)
                setFechapago(formatearFecha(editPago.fechaPago))
                setMesPago(formatearMes(editPago.mesPago))
                setFormaPago(editPago.formaPago)
                setComprobante(editPago.comprobante)
              
            }, [editPago])
            
        
            
            
        
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
                if ([fechaPago, mesPago,formaPago].includes('')) {
                    Swal.fire({
                        title: "Todos los campos son obligatorios",
                        //text: "That thing is still around?",
                        icon: "warning"
                      });
                      return;
                }
                
                    dispatch(updatepago({fechaPago, mesPago,formaPago,comprobante, idPago}))
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Pago actualizado con exito",
                        showConfirmButton: false,
                        timer: 1500
                      });
                    navigate('/tkdsystem/api/pagos')  
                } catch (error) {
                    console.log(error);
                    
                }
                
            }
            const { msg } = alerta;
            return (
                <>
                    
                    <div className="flex md:flex-row flex-col">
        
                        <Barra />
                        <div className=' mx-auto md:overflow-y-auto h-screen'>
                            <div className="flex justify-around items-center">
        
                                <h1 className='md:text-3xl text-2xl mt-10'>
                                    
                                <span className="material-symbols-outlined align-middle text-3xl mr-2">
                                    
                                    payments
                                    </span>
                                    Actualizar Pago</h1>
        
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
                                            value={editPago.cedulaAlumno}
                                            
                                            className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                        />
                                    </div>
                                    <div className='my-5'>
                                    <label className='capitalize text-gray-600  text-xl font-bold' htmlFor='alumno'>Alumno</label>
                                    <input
                                        type='text'
                                        id='alumno'
                                        value={editPago.primerApellido +' '+editPago.primerNombre}
                                        className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black capitalize'
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
                                            value={(mesPago)}
                                            onChange={e => setMesPago(e.target.value)}
                                        />
                                    </div>
                                    <div className='my-5'>
                                      <label className=' text-gray-600  text-xl font-bold' htmlFor='formaPago'>Forma de Pago</label>
                                      <select 
                                      className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                      name="formaPago"
                                      onChange={e => setFormaPago(e.target.value)}
                                      value={formaPago}
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
        
        
        
    

export default EditarPago