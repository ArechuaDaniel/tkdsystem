import React from 'react'

import Barra from "../components/Barra";
import { useDispatch, useSelector } from "react-redux";
import { deleteAlumno, startLoadingAlumnos, startLoadingInstructor, updateInstructor } from "../store/alumno/thunk";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { edadFecha, formatearFecha } from "../helpers/formatearFecha";
import Swal from "sweetalert2";



const Perfil = () => {


    const [cedulaInstructor, setCedulaInstructor] = useState('')
    const [correo, setCorreo] = useState('')
    const [primerApellido, setPrimerApellido] = useState('')
    const [segundoApellido, setSegundoApellido] = useState('')
    const [primerNombre, setPrimerNombre] = useState('')
    const [segundoNombre, setSegundoNombre] = useState('')
    const [fechaNacimiento, setFechaNacimiento] = useState('')
    const [direccion, setDireccion] = useState('')
    const [fechaRegistro, setFechaRegistro] = useState('')
    const [telefono, setTelefono] = useState('')
    const [password, setPassword] = useState('')
    const [repetirPassword, setRepetirPassword] = useState('')
    const [idClub, setIdClub] = useState('')
    const [alerta, setAlerta] = useState({})

    const dispatch = useDispatch();
    const { instructor } = useSelector(state => state.alumno)
    const navigate = useNavigate();

    const fechaActual = new Date();
    //const navigate = Navigate();
    useEffect(() => {

        dispatch(startLoadingInstructor())
    }, [])

    // useEffect(() => {

    //     //dispatch(startLoadingInstructor())
    //     setCedulaInstructor(instructor.cedulaInstructor)
    //     setPrimerApellido(instructor.primerApellido)
    //     setSegundoApellido(instructor.segundoApellido)
    //     setPrimerNombre(instructor.primerNombre)
    //     setSegundoNombre(instructor.segundoNombre)
    //     setFechaNacimiento(formatearFecha(instructor.fechaNacimiento))
    //     setDireccion(instructor.direccion)
    //     setFechaRegistro(formatearFecha(instructor.fechaRegistro))
    //     setTelefono(instructor.telefono)
    //     setCorreo(instructor.correo)
    //     setIdClub(instructor.idClub)


    // }, [instructor])

    // console.log(cedulaInstructor,
    //     primerApellido,
    //     segundoApellido,
    //     primerNombre,
    //     segundoNombre,
    //     fechaNacimiento,
    //     direccion,
    //     fechaRegistro,
    //     telefono,
    //     idClub,
    //     password,
    //     repetirPassword,
    //     correo);
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
                    title: "Ha regresado al Dashboard!",
                    //text: "Your file has been deleted.",
                    icon: "success"
                });

                navigate('/tkdsystem/api')

            }
        });

    }
    const handleSubmit = async e => {
        e.preventDefault();


        if ([cedulaInstructor, correo, primerApellido, primerNombre, direccion, fechaRegistro, telefono, idClub, fechaNacimiento].includes('')) {
            Swal.fire({
                title: "Todos los campos son obligatorios",
                //text: "That thing is still around?",
                icon: "warning"
            });
            return;
        }

        if (![password, repetirPassword].includes('')) {
            if (password.length < 6) {
                Swal.fire({
                    title: "El Password es muy corto, agrega minimo 6 caracteres",
                    //text: "That thing is still around?",
                    icon: "warning"
                });

            }
            if (password != repetirPassword) {
                Swal.fire({
                    title: "Los password no son iguales",
                    //text: "That thing is still around?",
                    icon: "warning"
                });


            }
        }



        // INGRESAR EN LA API
        try {

            dispatch(updateInstructor({ cedulaInstructor, primerApellido, segundoApellido, primerNombre, segundoNombre, fechaNacimiento, direccion, fechaRegistro, telefono, idClub, correo }))
            navigate('/tkdsystem/api')
        } catch (error) {

            setAlerta({
                msg: error.response.data.msg,
                error: true
            })

        }

    }



    return (
        <>

            <div className="flex md:flex-row flex-col">
                <Barra />

                <div className=' shadow-2xl md:w-4/5 '>

                    <div className='rounded-xl bg-white '>
                        <h1 className='text-sky-600 font-black md:text-3xl text-2xl px-10 mt-10'>
                            <span className="material-symbols-outlined align-middle text-3xl mr-2">
                                person
                            </span>Datos generales del Instructor
                        </h1>

                        {/* CUENTA */}
                        <div className='flex md:flex-row flex-col justify-center'>
                            {/* INFORMACIÓN */}
                            <div className='shadow-2xl bg-white p-10 md:w-1/3 m-10 '>
                                <div className='flex flex-col justify-center items-center'>

                                    <img className='h-40 w-40 rounded-3xl ' src="https://i.pinimg.com/564x/47/76/16/477616da0e2cbed645631c6fbf418939.jpg" alt="" />
                                    <p className='capitalize bg-sky-500 p-3 text-white font-bold my-4 rounded-2xl'>
                                        {`${instructor.primerNombre} ${instructor.primerApellido} `}
                                    </p>
                                </div>
                                <p className='font-bold uppercase'>
                                    <span className="align-middle mr-2 material-symbols-outlined">
                                        sports_gymnastics
                                    </span>
                                    {`${instructor.club} `}
                                </p>
                                <p className='mt-2'>
                                    <span className="align-middle mr-2 material-symbols-outlined">
                                        pin_drop
                                    </span>
                                    {`${instructor.pais}, ${instructor.provincia}, ${instructor.canton}`}
                                    
                                </p>
                                <p className=''>
                                    <span className="align-middle mr-2 material-symbols-outlined">
                                        mail
                                    </span>
                                    {instructor.correo}
                                </p>
                                <p className=''>
                                    <span className="align-middle mr-2 material-symbols-outlined">
                                        phone_iphone
                                    </span>
                                    {instructor.telefono}
                                </p>
                            </div>

                            {/* DETEALLE CUENTA */}
                            <div className=''>
                            {/* INFORMACIÓN     */}
                            <div className='shadow-2xl bg-white p-10  m-10  '>
                                <h2 className='flex justify-between font-bold'>Detalle de la cuenta
                                    <NavLink
                                        to={'/tkdsystem/api/instructor'}
                                    >

                                        <span className="material-symbols-outlined align-middle mr-2">
                                            edit_square
                                        </span>
                                    </NavLink>
                                </h2>
                                <div className='mt-4'>
                                    <p className='capitalize font-bold'>
                                        Cédula:
                                        <span className='font-normal'>
                                            {` ${instructor.cedulaInstructor} `}
                                        </span>
                                    </p>
                                    <p className='capitalize font-bold'>
                                        Apellidos:
                                        <span className='font-normal'>
                                            {` ${instructor.primerApellido} ${instructor.segundoApellido} `}
                                        </span>
                                    </p>
                                    <p className='capitalize font-bold'>
                                        Nombres:
                                        <span className='font-normal'>
                                            {` ${instructor.primerNombre} ${instructor.segundoNombre} `}
                                        </span>
                                    </p>
                                    <p className='font-bold'>
                                        Fecha de Nacimiento:
                                        <span className='font-normal'>
                                            {` ${formatearFecha(instructor.fechaNacimiento)} `}
                                        </span>
                                    </p>
                                    <p className='font-bold'>
                                        Género:
                                        <span className='font-normal'>
                                            {` ${instructor.genero} `}
                                        </span>
                                    </p>
                                    <p className='font-bold'>
                                        Tipo de Sangre:
                                        <span className='font-normal'>
                                            {` ${instructor.tipoSangre} `}
                                        </span>
                                    </p>
                                    <p className='font-bold capitalize'>
                                        Dirección:
                                        <span className='font-normal'>
                                            {` ${instructor.direccion} `}
                                        </span>
                                    </p>
                                    <p className='font-bold'>
                                        Fecha de Registro:
                                        <span className='font-normal'>
                                            {` ${formatearFecha(instructor.fechaRegistro)} `}
                                        </span>
                                    </p>
                                </div>
                            </div>

                            {/* CONTRASEÑA */}
                            <div className='shadow-2xl bg-white p-10  m-10  '>
                                <h2 className='flex justify-between font-bold'>Cambiar Contraseña
                                    <NavLink
                                        to={'/tkdsystem/api/cambiar-password'}
                                    >

                                        <span className="material-symbols-outlined align-middle mr-2">
                                            edit_square
                                        </span>
                                    </NavLink>
                                </h2>
                            </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}


export default Perfil
