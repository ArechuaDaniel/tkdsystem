
import Barra from "../components/Barra";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingAlumnos } from "../store/alumno/thunk";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { edadFecha } from "../helpers/formatearFecha";


const Side = () => {



    const dispatch = useDispatch();
    const { alumnos } = useSelector(state => state.alumno);
    const auth = useSelector(state => state.auth);

    const [search, setSearch] = useState("")
    let numero = 0;

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
    }, [])


    return (
        <>

            <div className="flex md:flex-row flex-col">
                <Barra />

                <div className=' overflow-y-auto h-screen shadow-2xl md:w-4/5'>
                    
                <div className="flex justify-around items-center m-10">
                            
                        <h1 className='text-sky-600 font-black md:text-3xl text-2xl'>
                            <span className="material-symbols-outlined align-middle text-3xl mr-2">
                                dashboard
                            </span>
                            Dashboard </h1>
                            <NavLink
                            className=''
                            to={'/tkdsystem/api/perfil'}>

                            <button className='bg-sky-600 hover:bg-sky-700 p-3 text-white rounded-xl font-bold flex justify-center items-center capitalize'>
                                <span className="material-symbols-outlined align-middle mr-2">
                                    person
                                </span>
                                Ver Perfil
                            </button>
                        </NavLink>
                    </div>
                    <div className="flex justify-between items-center md:flex-row flex-col md:justify-center">

                    
                    </div>
                    <div className="mt-10 flex justify-around items-center">
                    <div className="ml-10 ">
                        <h1 className='md:text-3xl text-2xl capitalize'>
                            <span className="material-symbols-outlined align-middle text-3xl mr-2">
                                account_circle
                            </span>
                            Bienvenido  {auth.primerNombre}{' '}{auth.primerApellido}</h1>
                    </div>
                        <NavLink 
                            to='/tkdsystem/api/alumnos'
                            className="bg-yellow-500  hover:bg-yellow-600 hover:font-bold text-white cursor-default rounded-lg shadow-2xl ml-10 p-6 ">
                            <h3 className="md:text-3xl text-2xl flex flex-col items-center">Alumnos  <span className="font-bold  text-4xl">{alumnos.length}</span></h3>
                        </NavLink>

                    </div>
                    


                    {/* BUSCAR ALUMNOS */}
                    <div className="flex md:flex-row flex-col-reverse items-center justify-evenly  shadow-md mt-4">
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
                        
                    </div>


                    {/* ALUMNOS */}
                    <div className='flex justify-center m-5 shadow-2xl'>

                        <table className="table-fixed shadow-2xl bg-gray-200 rounded-2xl  m-4 ">
                            <thead className='bg-sky-600 text-white rounded-2xl'>
                                <tr>
                                    <th className=' w-16 text-center p-3'>#</th>
                                    <th className=' w-48 text-left p-3'>Nº Identificación</th>
                                    <th className=' w-48 text-left p-3' >Alumno</th>
                                    <th className=' w-32 text-left p-3' >Edad</th>
                                    <th className=' w-32 text-left p-3'>Estado</th>
                                    

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    results.map(alm => (
                                        <tr key={alm.cedulaAlumno} className="bg-gray-200 rounded-xl text-black p-2 m-2 hover:bg-gray-400">
                                            <td className=' text-center p-3 '> {numero = numero + 1}</td>
                                            <td className=' text-left p-3 '>{alm.cedulaAlumno} </td>
                                            <td className=' text-left p-3 capitalize'>{alm.primerApellido + ' ' + alm.primerNombre}</td>
                                            <td className='  text-left p-3'>{edadFecha(alm.fechaNacimiento) + ' '}años</td>
                                            <td className='  text-left p-3 capitalize'>{alm.estado}</td>
                                            
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



export default Side