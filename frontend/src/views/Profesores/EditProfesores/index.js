import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import SideBar from "../../../components/layout/SideBar/SideBar"
import NavBar from "../../../components/layout/NavBar/NavBar"

import edit from "../../../assets/img/edit.png"
import editImage from "../../../assets/img/editImage.png"

const EditProfesores = () => {
    const [DNI, setDNI] = useState("")
    const [nombre, setNombre] = useState("")
    const [nomMuestra, setNombreMuestra] = useState("")
    const [apellido, setApellido] = useState("")
    const [ciudad, setCiudad] = useState("")

    const navigate = useNavigate()

    const { cod } = useParams()

    const updateProfesor = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:4000/profesores/update/${cod}`, {
            dni_prof:DNI,
            nom_prof:nombre,
            ape_prof:apellido,
            ciu_prof:ciudad,
        })

        navigate("/profesores")
    }

    const getProfesorById = async () => {
        const response = await axios.get(`http://localhost:4000/profesores/${cod}`)
        const data = response.data[0]
        console.log(data)

        setDNI(data.dni_prof)
        setNombre(data.nom_prof)
        setNombreMuestra(data.nom_prof)
        setApellido(data.ape_prof)
        setCiudad(data.ciudad_prof)
    }

    useEffect(() => {
        getProfesorById();
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
                                    <p className="text-4xl font-bold text-darkBlue"> Editar profesor </p>
                                </div>
                                <form className="form" onSubmit={updateProfesor}>
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
                                <h1 className="text-5xl text-darkBlue mb-12">¡Edita los datos del profesor <span className="font-bold">{nomMuestra}</span>!</h1>
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

export default EditProfesores;
