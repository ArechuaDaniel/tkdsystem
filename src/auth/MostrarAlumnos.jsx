import Header from "../components/Header";
import Barra from "../components/Barra";
import { useDispatch, useSelector } from "react-redux";
import { startLoadingAlumnos, startUpdateAlumno } from "../store/alumno/thunk";
import { Link, NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";




const MostrarAlumnos = () => {

    const params = useParams();

    
    const dispatch = useDispatch();
    const { alumnos } = useSelector(state => state.alumno);
    
    
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

    // const results = !search ? alumnos : alumnos.filter((dato)=> dato.primerApellido.toLowerCase().includes(search.toLocaleLowerCase()))

    // useEffect(() => {

    //     const resp = () =>{
    //         return dispatch(startLoadingAlumnos())
    //     }
    //     resp()
    // }, [])

    // for (let i = 0; i < alumnos.length; i++) {
    //     numero = 1+i;
    //     console.log(numero);
    // }

    return (
        <>
            <Header />
            <div className="flex">

                <Barra />
                <div className=' overflow-y-auto h-screen shadow-2xl md:w-4/5'>
                    <div className="flex justify-around items-center m-10 ">
                        <h1 className='md:text-3xl text-2xl uppercase'>Datos generales de los alumnos </h1>
                        <NavLink
                            className=''
                            to={'/tkdsystem/api/crear-alumno'}>

                            <button className='bg-sky-600 p-3 text-white rounded-xl font-bold flex justify-center items-center uppercase '>
                                <span className="material-symbols-outlined mr-2">
                                    add_circle
                                </span>
                                Registrar Alumno
                            </button>
                        </NavLink>

                    </div>



                    {/* BUSCAR ALUMNOS */}
                    <div className="flex md:flex-row flex-col-reverse items-center justify-evenly  shadow-md">
                        <div className="bg-gray-200 rounded-xl p-3  md:w-1/3 w-full flex justify-between ">
                            
                            <input className=" bg-gray-200  uppercase"
                                value={search}
                                onChange={searcher}
                                type="text"
                                id="search"
                                placeholder="Buscar"
                            />    
                            <span className="material-symbols-outlined align-middle">search</span>
                        </div>
                        <div className="flex md:justify-end justify-center p-3">
                            <div className="bg-gray-100 rounded-lg shadow-2xl w-48 ml-10 p-3 uppercase">
                                <h3 className="font-bold">Total Alumnos : {alumnos.length}</h3>
                                <h3>Activos   : 3 </h3>
                                <h3>Inactivos : 1</h3>
                            </div>
                        </div>
                    </div>


                    {/* ALUMNOS */}
                    <div className='flex justify-center m-5 shadow-2xl'>

                        <table className="table-fixed shadow-2xl bg-gray-200 rounded-2xl  m-4 ">
                            <thead className='bg-sky-600 text-white rounded-2xl'>
                                <tr>
                                    <th className=' w-16 text-center p-3'>#</th>
                                    <th className=' w-48 text-left p-3'>Nº IDENTIFICACION</th>
                                    <th className=' w-48 text-left p-3' >ALUMNO</th>
                                    <th className=' w-32 text-left p-3'>ESTADO</th>
                                    <th className=' w-32 text-left p-3'>ACCIÓN</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    results.map(alm => (
                                        <tr key={alm.cedulaAlumno} className="bg-gray-200 rounded-xl text-black p-2 m-2 hover:bg-gray-400">
                                            <td className=' text-center p-3 '> {numero = numero + 1}</td>
                                            <td className=' text-left p-3 '>{alm.cedulaAlumno} </td>
                                            <td className=' text-left p-3 uppercase'>{alm.primerApellido + ' ' + alm.primerNombre}</td>
                                            <td className='  text-left p-3 uppercase'>{alm.estado}</td>
                                            <td className='  text-center p-3'><Link to={`/tkdsystem/api/editar-alumno/${alm.cedulaAlumno}`}
                                                className="bg-sky-600 p-3 rounded-xl text-white uppercase font-bold hover:bg-sky-700 text-center"><span className="material-symbols-outlined align-middle mr-2">
                                                    edit
                                                </span></Link></td>
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

export default MostrarAlumnos