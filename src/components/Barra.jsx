import { useState } from 'react';
import { NavLink } from 'react-router-dom'

const Barra = () => {
    const Links = [
        { name: "Ver Alumnos", link: "/tkdsystem/api/alumnos" },
        { name: "Registrar Alumnos", link: "/tkdsystem/api/crearAlumno" },
        { name: "Categorías", link: "/tkdsystem/api/alumnos" },
        { name: "Asistencia", link: "/tkdsystem/api/alumnos" },
        { name: "Campeonatos", link: "/tkdsystem/api/alumnos" },
        { name: "Asensos", link: "/tkdsystem/api/alumnos" },
    ];
    const [open, setOpen] = useState(false);
    return (
        <>



            <div className={`md:w-1/5 h-screen md:bg-slate-300 overflow-y-auto`}>
                <div className=" text-4xl text-white absolute top-6 right-10 cursor-pointer md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    <ion-icon name={open ? "close" : "menu"}></ion-icon>

                </div>


                <ul className={`md:w-96 bg-slate-300 transition-all duration-150 ease-in absolute md:static  ${open ? "top-200" : "top-[-690px]"}`}>
                    {
                        Links.map((Link) => (
                            <NavLink key={Link.name}
                                className={({ isActive }) => (isActive ? 'text-sky-800  ' : '')}
                                to={Link.link}>
                                <p className="p-6 hover:bg-sky-800 hover:text-white text-2xl uppercase md:w-full w-screen ">{Link.name}</p></NavLink>
                        ))
                    }
                    <NavLink className={({ isActive }) => (isActive ? 'text-red-400' : '')}
                        // target="_blank"
                        to='/tkdsystem/'>
                        <p className="'p-6 hover:bg-sky-800 hover:text-white text-2xl uppercase "> Cerrar Sesión
                        <span className="material-symbols-outlined text-xl ">
                            logout
                        </span>
                        </p>
                    </NavLink>

                </ul>
                
            </div>
            {/* bg-sky-800 md:grid  md:grid-cols-3 md:gap-x-8 md:gap-y-4">  flex flex-col justify-center items-center md:h-screen h-full */}



        </>
    )
}

export default Barra