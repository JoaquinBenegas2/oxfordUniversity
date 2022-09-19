import axios from "axios"

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SideBar from "../../../components/layout/SideBar/SideBar"
import NavBar from "../../../components/layout/NavBar/NavBar"

import add from "../../../assets/img/add.png"
import addImage from "../../../assets/img/addImage.png"


const SaveAlumnos = () => {
    const [DNI, setDNI] = useState("")
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [ciudad, setCiudad] = useState("")
    const [curso, setCurso] = useState("1")
    const [division, setDivision] = useState("A")

    const navigate = useNavigate()

    const SaveAlumno = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:4000/alumnos/add", {
            dni_alumno:DNI,
            nom_alumno:nombre,
            ape_alumno:apellido,
            ciu_alumno:ciudad,
            cur_alumno:curso,
            div_alumno:division
        })

        navigate("/alumnos")
    }

    return (
        <div className="flex">
            <SideBar />
            <div className="w-full">
                <NavBar />

                <div className="flex justify-center">
                    
                    <div className="container w-full grid col-8"> 
                        <div className="bg-white p-8 flex col-span-6 shadow-md rounded-25">

                            <div className="w-2/5">
                                <div className="card-header-alumnos mb-12 flex items-center h-16">
                                    <p className="text-4xl font-bold text-darkBlue"> Agregar Alumno </p>
                                </div>
                                <form className="form" onSubmit={SaveAlumno}>
                                    <label className=""> DNI </label>
                                    <input 
                                        className="input border-input border-2 rounded-3xl" 
                                        value={DNI} 
                                        onChange={ (e) => setDNI(e.target.value) }
                                        type="text"
                                    />

                                    <label className=""> Nombre </label>
                                    <input 
                                        className="input border-input border-2 rounded-3xl" 
                                        value={nombre} 
                                        onChange={ (e) => setNombre(e.target.value) }
                                        type="text"
                                    />

                                    <label className=""> Apellido </label>
                                    <input 
                                        className="input border-input border-2 rounded-3xl" 
                                        value={apellido} 
                                        onChange={ (e) => setApellido(e.target.value) }
                                        type="text"
                                    />

                                    <label className=""> Ciudad </label>
                                    <input 
                                        className="input border-input border-2 rounded-3xl" 
                                        value={ciudad} 
                                        onChange={ (e) => setCiudad(e.target.value) }
                                        type="text"
                                    />
                                    
                                    <label className=""> Curso </label>
                                    <select 
                                        className="input border-input border-2 rounded-3xl" 
                                        value={curso} 
                                        onChange={ (e) => setCurso(e.target.value) }>
                                            <option value="1">1°</option>
                                            <option value="2">2°</option>
                                            <option value="3">3°</option>
                                            <option value="4">4°</option>
                                            <option value="5">5°</option>
                                            <option value="6">6°</option>
                                            <option value="7">7°</option>
                                    </select>

                                    <label className=""> Division </label>
                                    <select 
                                        className="input border-input border-2 rounded-3xl" 
                                        value={division} 
                                        onChange={ (e) => setDivision(e.target.value) }>
                                            <option value="A">"A"</option>
                                            <option value="B">"B"</option>
                                            <option value="C">"C"</option>
                                    </select>

                                    <button 
                                        type="submit"
                                        className="button py-4 px-12 bg-darkBlue text-white font-bold"> 
                                        AGREGAR
                                    </button>
                                </form>
                            </div>
                            <div className="w-3/5 flex items-center justify-center">
                                <img src={add} alt="add" className="w-1/2"/>
                            </div>

                        </div>

                        <div className="bg-white p-8 flex col-span-2 flex-col space-beetwen shadow-md rounded-25">
                            <div>
                                <h1 className="text-5xl text-darkBlue mb-12">¡Agrega un nuevo <span className="font-bold">Alumno</span>!</h1>
                                <p className="text-3xl mb-12">Aqui puedes agregar un nuevo registro, no olvides presionar <span className="font-bold text-xblue">Agregar</span>.</p>
                            </div>
                            
                            <img src={addImage} alt="addImage" className=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
  
export default SaveAlumnos;