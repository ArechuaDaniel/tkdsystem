import { NavLink } from "react-router-dom";

import alumno from '../assets/alumno.jpg';
import asensos from '../assets/asensos.jpg';
import campeonatos from '../assets/campeonatos.jpg';
import asistencia from '../assets/asistencia.jpg';
import categorias from '../assets/categorias.jpg';
import Header from "../components/Header";
import Barra from "../components/Barra";
import MostrarAlumnos from "./MostrarAlumnos";
const Side = () => {
    //const sliderCarrousel = require.context('../assets', true);
    return (
        <>
            
            
            <div className="flex md:flex-row flex-col">

                <Barra />
            
            </div>
                
        </>
    )
}

export default Side