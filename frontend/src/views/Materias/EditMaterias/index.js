import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import SideBar from "../../../components/layout/SideBar/SideBar"
import NavBar from "../../../components/layout/NavBar/NavBar"

import edit from "../../../assets/img/edit.png"
import editImage from "../../../assets/img/editImage.png"

const EditMaterias = () => {
    const [nombre, setNombre] = useState("")
    const [nomMuestra, setNombreMuestra] = useState("")
    const [descripcion, setDescripcion] = useState("")


    const navigate = useNavigate()

    const { cod } = useParams()

    const updateMateria = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:4000/materias/update/${cod}`, {
            nom_mat:nombre,
            desc_mat:descripcion,
        })

        navigate("/materias")
    }

    const getMateriaById = async () => {
        const response = await axios.get(`http://localhost:4000/materias/${cod}`)
        const data = response.data[0]

        setNombre(data.nom_mat)
        setNombreMuestra(data.nom_mat)
        setDescripcion(data.desc_mat)

    }

    useEffect(() => {
        getMateriaById();
    }, [])

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
                                    <p className="text-4xl font-bold text-darkBlue"> Editar Materia </p>
                                </div>
                                <form className="form" onSubmit={updateMateria}>

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
                                        GUARDAR
                                    </button>
                                </form>
                            </div>
                            <div className="w-3/5 flex items-center justify-center">
                                <img src={edit} alt="edit" className="w-1/2"/>
                            </div>

                        </div>

                        <div className="bg-white p-8 flex col-span-2 flex-col space-beetwen shadow-md rounded-25">
                            <div>
                                <h1 className="text-5xl text-darkBlue mb-12">¡Edita los datos de la materia <span className="font-bold">{nomMuestra}</span>!</h1>
                                <p className="text-3xl mb-12">Aqui puedes modificar los datos a gusto, no olvides <span className="font-bold text-xblue">Guardar</span>.</p>
                            </div>
                            
                            <img src={editImage} alt="editImage" className=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditMaterias;
