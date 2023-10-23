import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./pages/Login"


function App() {
  

  return (
    <>
     <BrowserRouter>
      <Routes >
        {/* ÁREA P+UBLICA */}
        <Route path='tkdsystem/' element={<Login/>}>
          <Route />
        </Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
