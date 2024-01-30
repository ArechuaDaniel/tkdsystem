import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { logout } from '../store/auth/authSlice';

import Swal from 'sweetalert2'
const Barra = () => {
    const Links = [
        { name: "Alumnos", link: "/tkdsystem/api/alumnos" },
        //{ name: "Registrar Alumnos", link: "/tkdsystem/api/crear-alumno" },
        { name: "Horarios", link: "/tkdsystem/api/horarios" },
        { name: "Asistencia", link: "/tkdsystem/api/asistencia" },
        { name: "Categorías", link: "/tkdsystem/api/alumnos" },
        
        { name: "Campeonatos", link: "/tkdsystem/api/alumnos" },
        { name: "Asensos", link: "/tkdsystem/api/alumnos" },

       

        
        //{ name: "Cerrar Sesión", link: "/tkdsystem/" },
    ];
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    const auth = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const cerrarSesion = () => {
        Swal.fire({
            title: "¿Estas seguro de Cerrar Sesión?",
            //text: "You won't be able to revert this!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            confirmButtonText: "Cerrar Sesión",
            cancelButtonColor: "#d33",
            cancelButtonText: "Cancelar!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Sesión Cerrada!",
                //text: "Your file has been deleted.",
                icon: "success"
              });

              dispatch(logout(auth.status))
              navigate('/tkdsystem/')
              localStorage.clear();
              //localStorage.setItem('token', '')
            }
          });
        // if (status === 'not-authenticated') {
        //     navigate('/tkdsystem/')
        // }
        // //navigate('/tkdsystem/')
        //console.log(auth);


    }
    return (
        <>



            <div className={`md:w-1/5 h-screen md:bg-gray-200 overflow-y-auto rounded-r-2xl shadow-2xl`}>
                <div className=" text-4xl text-white absolute top-6 right-10 cursor-pointer md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    <ion-icon name={open ? "close" : "menu"}></ion-icon>

                </div>


                <ul className={`md:w-96 bg-slate-300 transition-all duration-150 ease-in absolute md:static  ${open ? "top-300" : "top-[-9090px]"}`}>
                    {
                        Links.map((Link) => (
                            <NavLink key={Link.name}
                                className={({ isActive }) => (isActive ? 'text-sky-800  ' : '')}
                                to={Link.link}>
                                <p className="p-6 hover:bg-sky-800 hover:text-white text-2xl uppercase md:w-full w-screen ">{Link.name}</p></NavLink>
                        ))
                    }
                    

                    <NavLink className={({ isActive }) => (isActive ? 'text-sky-800' : '')}
                        // target="_blank"
                        //to={'/tkdsystem/'}
                        onClick={cerrarSesion}
                        >
                        <p className="hover:bg-sky-800 text-black  p-6 hover:text-white text-2xl uppercase "> Cerrar Sesión
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