import { useEffect, useState } from "react"
import Alerta from "../components/Alerta"
import { Link, useParams } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"
import Swal from "sweetalert2"



const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false)

  const params = useParams();
  const { id } = params;
  useEffect(() => {
    const confirmarCuenta = async () => {
      try {
        const url = `/usuarios/confirmar/${id}`

        const data = await clienteAxios(url)
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Cuenta confirmada correctamente",
          showConfirmButton: false,
          timer: 1500
      });
        
        setCuentaConfirmada(true)
      } catch (error) {
        Swal.fire({
          title: error.response.data.msg,
          //text: "That thing is still around?",
          icon: "warning"
      });
      }
    }
    confirmarCuenta()
  }, [])


  return (
    <div className='rounded-xl flex md:flex-row  justify-center items-center mx-auto  md:h-screen h-full'>
      <div

        className='rounded-xl bg-white'>
        <h1 className='text-sky-600 font-black text-3xl  px-10 mt-10'>Confirma tu Cuenta</h1>
        <div className="mt-20 md:mt-10 shadow-lg p-8  rounded-xl bg-sky-700 text-white">
          
          {cuentaConfirmada && (
            <nav className="mb-5 text-white text-2xl text-center font-bold">
              <Link
                className=''
                to='/tkdsystem/'
              >
                Inicia Sesión
              </Link>
            </nav>
          )}
        </div>
        </div>
      </div>
      )
}

      export default ConfirmarCuenta