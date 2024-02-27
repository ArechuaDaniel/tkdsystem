import Header from '../components/Header'
import Barra from '../components/Barra'
import { Link, NavLink, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { startLoadingAsensos } from '../store/alumno/thunk'
import { formatearFecha } from '../helpers/formatearFecha'

const Asenso = () => {
    const params = useParams();

    const dispatch = useDispatch();
    const { asensos } = useSelector(state => state.alumno);

    const [fechaAsenso, setFechaAsenso] = useState('')

    useEffect(() => {
      
        dispatch(startLoadingAsensos())
    }, [])
    
    console.log(asensos);
    const [search, setSearch] = useState("")
    const searcher = (e) => {
        setSearch(e.target.value)
    }
    let results = []
    let numero = 0;
    if (!search) {
        results = asensos
        //console.log(results); 
    }
    else {
        results = asensos.filter((dato) => dato.primerNombre.toLowerCase().includes(search.toLocaleLowerCase()) || dato.primerApellido.toLowerCase().includes(search.toLocaleLowerCase()) || dato.cedulaAlumno.toLowerCase().includes(search.toLocaleLowerCase())|| dato.fechaAsenso.toLowerCase().includes(search.toLocaleLowerCase()))
    }
      return (
        <>
                <Header />
                <div className="flex">
    
                    <Barra />
                    <div className=' overflow-y-auto h-screen shadow-2xl md:w-4/5'>
                        <div className="flex justify-around items-center mt-10">
    
                            <h1 className='md:text-3xl  text-2xl capitalize'>Asensos</h1>
                            <NavLink
                            className=''
                            to={'/tkdsystem/api/registrar-asenso'}>
    
                                <button className='bg-sky-600 p-3 text-white rounded-xl font-bold flex justify-center items-center capitalize '>
                                    <span className='text-3xl font-bold mr-2'>
                                        <ion-icon name="add-circle-outline"></ion-icon>
                                    </span>
                                    Registrar Asenso
                                </button>
                            </NavLink>
                        </div>
                       
                       {/* BUSCAR ALUMNOS */}
                    <div className="flex md:flex-row  items-center justify-evenly  shadow-md">
                        <div className="bg-gray-200 rounded-xl p-3  md:w-1/3 w-full flex justify-between ">
                            
                            <input className=" bg-gray-200  uppercase w-full "
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
                            <input
                                    type='date'
                                    id='fechaRegistro'
                                    className='w-full mt-3 p-3 border rounded-xl bg-gray-50 text-black'
                                    value={(fechaAsenso)}
                                    onChange={searcher}
                                />
                            </div>
                        </div>
                    </div>
                        {/* HORARIOS */}
                        <div className='flex justify-center m-5 shadow-2xl'>
    
                            <table className="table-fixed shadow-2xl bg-gray-200 rounded-2xl  m-4">
                                <thead>
                                    <tr className='bg-sky-600 text-white rounded-2xl'>
                                        <th className=' w-16 text-center p-3 capitalize '>#</th>
                                        <th className=' w-48 text-left p-3 capitalize '>Nº Identificación</th>
                                        <th className=' w-48 text-left p-3 capitalize '>Alumno</th>
                                        <th className=' w-32 text-left p-3 capitalize' >Fecha</th>
                                        <th className=' w-32 text-left p-3 capitalize'>Cinturón</th>
                                        <th className=' w-28 text-left p-3 capitalize'>Acción</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    results.map(asenso => (
                                        <tr key={asenso.idAsenso} className="bg-gray-200 rounded-xl text-black p-2 m-2 hover:bg-gray-400">
                                            <td className=' text-center p-3 '> {numero = numero + 1}</td>
                                            <td className=' text-left p-3 '>{asenso.cedulaAlumno} </td>
                                            <td className=' text-left p-3 capitalize'>{asenso.primerApellido + ' ' + asenso.primerNombre}</td>
                                            <td className='  text-left p-3 '>{formatearFecha(asenso.fechaAsenso)}</td>
                                            <td className='  text-left p-3 capitalize'>{asenso.cinturon}</td>
                                            <td className='  text-center p-3'><Link to={`/tkdsystem/api/editar-asenso/${asenso.idAsenso}`}
                                                className="bg-sky-600 p-2 rounded-xl text-white uppercase font-bold hover:bg-sky-700 text-center"><span className="material-symbols-outlined text-center align-middle ">
                                                    edit_square
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
    
    

export default Asenso