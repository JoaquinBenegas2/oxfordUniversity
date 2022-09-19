import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import SideBar from "../../../components/layout/SideBar/SideBar"
import NavBar from "../../../components/layout/NavBar/NavBar"


const ViewAlumnos = () => {
    const [DNI, setDNI] = useState("")
    const [nombre, setNombre] = useState("")
    const [nomMuestra, setNombreMuestra] = useState("")
    const [apeMuestra, setApellidoMuestra] = useState("")
    const [apellido, setApellido] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [curso, setCurso] = useState("")
    const [division, setDivision] = useState("")

    const navigate = useNavigate()

    const { cod } = useParams()

    const getAlumnoById = async () => {
        const response = await axios.get(`http://localhost:4000/alumnos/${cod}`)
        const data = response.data[0]

        setDNI(data.dni_alumno)
        setNombre(data.nom_alumno)
        setNombreMuestra(data.nom_alumno)
        setApellido(data.ape_alumno)
        setApellidoMuestra(data.ape_alumno)
        setCiudad(data.ciudad_alumno)
        setCurso(data.cod_curso.charAt(0))
        setDivision(data.cod_curso.charAt(1))
    }

    useEffect(() => {
        getAlumnoById();
    }, [])

    return (
        <div className="flex">
            <SideBar />
            <div className="w-full">
                <NavBar />

                <div className="flex justify-center">
                    <div className="container w-full grid col-8"> 

                        <div className="bg-white p-8 flex col-span-6 shadow-md rounded-25">
                            <div className="w-1/2">
                                <div className="card-header-alumnos mb-12 flex items-center h-16">
                                    <p className="text-4xl font-bold text-darkBlue"> Más Información </p>
                                </div>
                                <div className="mb-8">
                                    <label className=""> DNI: </label>
                                    <p> {DNI} </p>
                                </div>
                                <div className="mb-8">
                                    <label className=""> Nombre: </label>
                                    <p> {nombre} </p>
                                </div>
                                <div className="mb-8">
                                    <label className=""> Apellido: </label>
                                    <p> {apellido} </p>
                                </div>
                                <div className="mb-8">
                                    <label className=""> Ciudad: </label>
                                    <p> {ciudad} </p>
                                </div>
                                <div className="mb-8">
                                    <label className=""> Curso: </label>
                                    <p> {`${curso}° "${division}"`} </p>
                                </div>
                                <div className="mb-8 flex flex-col">
                                    <label className="m-0"> Materias: </label>
                                    <Link to={`/alumnos/materias/${cod}`} className="text-2xl text-xblue underline underline-offset-2"> Ver Materias </Link>
                                </div>
                            </div>
                            <div className="w-1/2 flex items-center justify-center">
                                
                            </div>
                        </div>

                        <div className="bg-white p-8 flex col-span-2 flex-col space-beetwen shadow-md rounded-25">
                            <div>
                                <h1 className="text-5xl text-darkBlue mb-12">¡Información sobre <span className="font-bold">{nomMuestra} {apeMuestra}</span>!</h1>
                                <p className="text-3xl mb-12">Aqui verás la iformación <span className="font-bold text-xblue">completa</span>.</p>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewAlumnos;
