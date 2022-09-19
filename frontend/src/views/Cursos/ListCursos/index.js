import axios from "axios"

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import SideBar from "../../../components/layout/SideBar/SideBar"
import NavBar from "../../../components/layout/NavBar/NavBar"
import ShowMaterias from "./components/ShowMaterias";

// Import CSS
import "./components/tables.css"


const ListMaterias = () => {
    const [materias, setMaterias] = useState([])

    const getMaterias = async () => {
        const response = await axios.get("http://localhost:4000/materias")
        setMaterias(response.data)
    }

    const deleteMaterias = async (cod) => {
        await axios.delete(`http://localhost:4000/materias/delete/${cod}`)
        getMaterias();
    }

    useEffect(() => {
        getMaterias();
    }, [])

    return(
        <div className="flex">
            <SideBar />
            <div className="w-full">
                <NavBar />
                
                <div className="w-full flex justify-center">
                    <div className="container">
                        <Link to="/alumnos">
                            <button className="text-darkBlue mb-4 mr-3 ml-3">
                                Alumnos
                            </button>
                        </Link>
                        <Link to="/profesores">
                            <button className="text-darkBlue mb-4 mr-3 ml-3">
                                Profesores
                            </button>
                        </Link>
                        <Link to="/materias">
                            <button className="text-darkBlue mb-4 font-bold text-3xl mr-3 ml-3">
                                Materias
                            </button>
                        </Link>
                        <ShowMaterias materias={materias} deleteMaterias={deleteMaterias} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListMaterias;