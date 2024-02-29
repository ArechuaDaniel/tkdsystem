import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Side from "./auth/Side"
import MostrarAlumnos from "./auth/MostrarAlumnos"
import CrearAlumno from "./auth/CrearAlumno"
import Registrar from "./pages/Registrar"
import OlvidePassword from "./pages/OlvidePassword"
import NuevoPassword from "./pages/NuevoPassword"
import ConfirmarCuenta from "./pages/ConfirmarCuenta"
import AuthLayout from "./layouts/AuthLayout"
import RutaProtegida from "./layouts/RutaProtegida"
import Horario from "./auth/Horario"
import Asistencia from "./auth/Asistencia"
import NuevoHorario from "./auth/NuevoHorario"
import RegistrarAsistencia from "./auth/RegistrarAsistencia"
import EditarAlumno from "./auth/EditarAlumno"
import Asenso from "./auth/Asenso"
import RegistrarAsenso from "./auth/RegistrarAsenso"
import EditarHorario from "./auth/EditarHorario"
import EditarAsistencia from "./auth/EditarAsistencia"
import EditarAsenso from "./auth/EditarAsenso"
import Pagos from "./auth/Pagos"

// console.log(import.meta.env.VITE_BACKEND_URL);
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes >
          {/* ÁREA PÚBLICA */}
          <Route path="tkdsystem/" element={<AuthLayout/>}>

            <Route index element={<Login />} />
            <Route path='registrar' element={<Registrar />} />
            <Route path='olvide-password' element={<OlvidePassword />} />
            <Route path='olvide-password/:token' element={<NuevoPassword />} />
            <Route path='confirmar/:id' element={<ConfirmarCuenta />} />
          </Route>

          {/* ÁREA PRIVADA */}
          <Route path="tkdsystem/api/" element={<RutaProtegida/>}>
            <Route index element={<Side />} />
            <Route path='home' element={<Side />} />
            <Route path='alumnos' element={<MostrarAlumnos />} />
            <Route path='crear-alumno' element={<CrearAlumno />} />
            <Route path='editar-alumno/:cedulaAlumno' element={<EditarAlumno />} />
            <Route path='horarios' element={<Horario />} />
            <Route path='nuevo-horario' element={<NuevoHorario />} />
            <Route path='editar-horario/:id' element={<EditarHorario />} />
            <Route path='asistencias' element={<Asistencia />} />
            <Route path='registrar-asistencia' element={<RegistrarAsistencia />} />
            <Route path='editar-asistencia/:id' element={<EditarAsistencia />} />
            <Route path='asensos' element={<Asenso />} />
            <Route path='registrar-asenso' element={<RegistrarAsenso />} />
            <Route path='editar-asenso/:id' element={<EditarAsenso />} />

            <Route path='pagos' element={<Pagos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
