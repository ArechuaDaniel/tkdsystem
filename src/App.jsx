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
            <Route path='alumnos' element={<MostrarAlumnos />} />
            <Route path='crearAlumno' element={<CrearAlumno />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
