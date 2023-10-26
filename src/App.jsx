import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Side from "./auth/Side"
import MostrarAlumnos from "./auth/MostrarAlumnos"
import CrearAlumno from "./auth/CrearAlumno"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes >
          {/* ÁREA PÚBLICA */}
          <Route path='tkdsystem/' element={<Login />} />

          {/* ÁREA PRIVADA */}

          <Route path='tkdsystem/api' element={<Side />} />
          <Route path='tkdsystem/api/alumnos' element={<MostrarAlumnos />} />
          <Route path='tkdsystem/api/crearAlumno' element={<CrearAlumno />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
