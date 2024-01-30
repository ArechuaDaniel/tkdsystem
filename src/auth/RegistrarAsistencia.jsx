import Header from '../components/Header'
import Barra from '../components/Barra'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'

const RegistrarAsistencia = () => {
    const navigate = useNavigate();


    const regresar = (e) => {
        e.preventDefault()
        Swal.fire({
            title: "¿Estas seguro de regresar?",
            //text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Regresar",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar!",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Ha regresado a Asistencia!",
                    //text: "Your file has been deleted.",
                    icon: "success"
                });

                navigate('/tkdsystem/api/asistencia')

            }
        });

    }
    return (
        <>
            <Header />
            <div className="flex">

                <Barra />
                <div className='shadow-2xl mx-auto'>
                    <div className="flex justify-around items-center">

                        <h1 className='md:text-3xl text-2xl mt-10  uppercase'>Registro de asistencia</h1>

                    </div>
                    <div className='flex justify-center '>


                        {/* FORMULARIO */}
                        <form className='md:my-10 m-5  shadow-2xl rounded-lg p-10   '>
                            <div className='my-5'>
                                <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='cedulaAlumno'>cedula alumno</label>
                                <input
                                    type='text'
                                    id='cedulaAlumno'
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                />
                            </div>
                            <div className='my-5'>
                                <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='fechaRegistro'>Fecha de asistencia</label>
                                <input
                                    type='date'
                                    id='fechaRegistro'
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                />
                            </div>
                            <div className='my-5'>
                                <label className='uppercase text-gray-600  text-xl font-bold' htmlFor='idHorario'>horario</label>
                                <select 
                                className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                name="select">
                                    <option value="value1">11:00 / 12:00</option>
                                    <option value="value2" >12:00 / 13:00</option>
                                    <option value="value3">13:00 / 14:00</option>
                                </select>
                            </div>

                            <div className="flex md:flex-row flex-col-reverse  justify-end">
                                <button
                                    className='bg-red-400   text-white  uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-red-500 transition-colors p-3 md:mr-10 md:mt-0 mt-6'
                                    onClick={regresar}
                                >
                                    <span className="material-symbols-outlined align-middle mr-2">
                                        cancel
                                    </span>
                                    Regresar

                                </button>
                                <button
                                    className='bg-sky-600  text-white  uppercase font-bold rounded-xl hover:cursor-pointer hover:bg-sky-700 transition-colors p-3'
                                >
                                    <span className="material-symbols-outlined align-middle mr-2">
                                        save
                                    </span>
                                    Guardar

                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}


export default RegistrarAsistencia