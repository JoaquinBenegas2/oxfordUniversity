import axios from "axios"
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import SideBar from "../../../components/layout/SideBar/SideBar"
import NavBar from "../../../components/layout/NavBar/NavBar"

import ShowMatAlumno from "./components/ShowMatAlumno";

// Import CSS a
import "./components/tables.css"


const ListMatAlumno = () => {
    const [matsAlumno, setMatsAlumno] = useState([])

    const { cod } = useParams()

    const getMateriasAlumno = async (cod) => {
        const response = await axios.get(`http://localhost:4000/materias-alumno/${cod}`)
        setMatsAlumno(response.data)
    }

    const deleteMatAlumno = async (cod_alumno, cod_mat) => {
        await axios.delete(`http://localhost:4000/materias-alumno/delete/${cod_alumno}/${cod_mat}`)
        getMateriasAlumno(cod_alumno);
    }

    useEffect(() => {
        getMateriasAlumno(cod);
    }, [])

    return(
        <div className="flex">
            <SideBar />
            <div className="w-full">
                <NavBar />
                
                <div className="w-full flex justify-center">
                    <div className="container">
                        <ShowMatAlumno matsAlumno={matsAlumno} deleteMatAlumno={deleteMatAlumno} cod_alumno={cod}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListMatAlumno;