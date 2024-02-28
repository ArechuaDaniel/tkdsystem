import React, { useState } from 'react'
import Header from '../components/Header'
import Barra from '../components/Barra'
import Swal from 'sweetalert2'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startUpdateHorario, updateHorario } from '../store/alumno/thunk'

const EditarHorario = () => {

    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch();
    const { editHorario } = useSelector(state => state.alumno);

    const [hoarioInicio, setInicio] = useState('')
    const [hoarioFin, setFin] = useState('')

    const idHorario = (params.id)
    //console.log(idHorario);
    

    useEffect(() => {

        dispatch(startUpdateHorario({ idHorario }))

    }, [])
    

    useEffect(() => {
        setInicio(editHorario.hoarioInicio)
        setFin(editHorario.hoarioFin)

    }, [editHorario])


    const regresarHorario = (e) => {
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
                    title: "Ha regresado a Horarios!",
                    //text: "Your file has been deleted.",
                    icon: "success"
                });

                navigate('/tkdsystem/api/horarios')

            }
        });

    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            if ([hoarioInicio,hoarioFin].includes('')) {
                Swal.fire({
                    title: "Todos los campos son obligatorios",
                    //text: "That thing is still around?",
                    icon: "warning"
                  });
                  return;
            }
            if ([hoarioInicio,hoarioFin].includes('00:00:00')) {
                Swal.fire({
                    title: "Todos los campos son obligatorios",
                    //text: "That thing is still around?",
                    icon: "warning"
                  });
                  return;
            }
            
                dispatch(updateHorario({idHorario,hoarioInicio,hoarioFin}))
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "El horario se ha actualizado con exito",
                    showConfirmButton: false,
                    timer: 1500
                  });
                navigate('/tkdsystem/api/horarios')  
            } catch (error) {
                console.log(error);
            }
    }
    return (
        <>
            
            <div className="flex md:flex-row flex-col">

                <Barra />
                <div className='shadow-2xl mx-auto h-full'>
                    <div className="flex justify-around items-center">

                        <h1 className='md:text-3xl text-2xl mt-10  uppercase'>Actualizar Horario</h1>

                    </div>
                    <div className='flex justify-center '>


                        {/* FORMULARIO */}
                        <form 
                            className='md:my-10 m-5  shadow-2xl rounded-lg p-10 '
                            onSubmit={handleSubmit}
                        >
                            <div className='my-5'>
                                <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='horarioInicio'>INICIO DEL HORARIO</label>
                                <input
                                    type='time'
                                    id='horarioInicio'
                                    value={hoarioInicio}
                                    onChange={e => setInicio(e.target.value)}
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                />
                            </div>
                            <div className='my-5'>
                                <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='horarioFin'>FIN DEL HORARIO</label>
                                <input
                                    type='time'
                                    id='horarioFin'
                                    value={hoarioFin}
                                    onChange={e => setFin(e.target.value)}
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                />
                            </div>

                            <div className="flex md:flex-row-reverse flex-col  justify-evenly">

                                <button
                                    className='bg-sky-600  text-white  uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-700 transition-colors p-3'
                                >
                                    <span className="material-symbols-outlined align-middle mr-2">
                                        save
                                    </span>
                                    Guardar

                                </button>
                                <button
                                    className='bg-red-400   text-white  uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-red-500 transition-colors p-3 md:mr-10 md:mt-0 mt-6'
                                    onClick={regresarHorario}
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



export default EditarHorario