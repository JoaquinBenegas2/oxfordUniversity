import axios from "axios"

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SideBar from "../../../components/layout/SideBar/SideBar"
import NavBar from "../../../components/layout/NavBar/NavBar"

import add from "../../../assets/img/add.png"
import addImage from "../../../assets/img/addImage.png"


const SaveMateria = () => {
    const [nombre, setNombre] = useState("")
    const [descripcion, setDescripcion] = useState("")

    const navigate = useNavigate()

    const SaveMateria = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:4000/materias/add", {
            nom_mat:nombre,
            desc_mat:descripcion,
        })

        navigate("/materias")
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
                                    <p className="text-4xl font-bold text-darkBlue"> Agregar Materia </p>
                                </div>
                                <form className="form" onSubmit={SaveMateria}>
                                    <label className=""> Nombre </label>
                                    <input 
                                        className="input border-input border-2 rounded-3xl" 
                                        value={nombre} 
                                        onChange={ (e) => setNombre(e.target.value) }
                                        type="text"
                                    />

                                    <label className=""> Descripcion </label>
                                    <input 
                                        className="input border-input border-2 rounded-3xl" 
                                        value={descripcion} 
                                        onChange={ (e) => setDescripcion(e.target.value) }
                                        type="text"
                                    />

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
                                <h1 className="text-5xl text-darkBlue mb-12">¡Agrega una nueva <span className="font-bold">Materia</span>!</h1>
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
  
export default SaveMateria;