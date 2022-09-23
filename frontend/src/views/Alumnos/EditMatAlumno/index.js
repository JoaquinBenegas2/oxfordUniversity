import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import SideBar from "../../../components/layout/SideBar/SideBar"
import NavBar from "../../../components/layout/NavBar/NavBar"

import edit from "../../../assets/img/edit.png"
import editImage from "../../../assets/img/editImage.png"


const EditMatAlumno = () => {
    const [materias, setMaterias] = useState([])
    const [matMuestra, setMatMuestra] = useState("")
    const [codMateria, setCodMateria] = useState("")
    const [nota1, setNota1] = useState("")
    const [nota2, setNota2] = useState("")
    const [nota3, setNota3] = useState("")

    const navigate = useNavigate()

    const { cod_alumno, cod_mat } = useParams()

    const getMateriaById = async () => {
        const response = await axios.get(`http://localhost:4000/materias/${cod_mat}`)
        const data = response.data[0]

        setMatMuestra(data.nom_mat)
    }

    const getMaterias = async () => {
        const response = await axios.get("http://localhost:4000/materias")
        setMaterias(response.data)
    }

    const updateMateriaAlumno = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:4000/materias-alumno/update/${cod_alumno}/${cod_mat}`, {
            cod_mat:codMateria,
            nota1_mat:nota1,
            nota2_mat:nota2,
            nota3_mat:nota3
        })
        navigate(`/alumnos/materias/${cod_alumno}`)
    }

    const getMatAlumnoById = async () => {
        const response = await axios.get(`http://localhost:4000/materias-alumno/${cod_alumno}/${cod_mat}`)
        const data = response.data[0]
        console.log(data)

        setCodMateria(data.cod_mat)
        setNota1(data.nota1_mat)
        setNota2(data.nota2_mat)
        setNota3(data.nota3_mat)
    }

    useEffect(() => {
        getMatAlumnoById();
        getMaterias();
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
                                    <p className="text-4xl font-bold text-darkBlue"> Editar Materia del Alumno </p>
                                </div>
                                <form className="form" onSubmit={updateMateriaAlumno}>
                                                      
                                    <label className=""> Curso </label>
                                    <select 
                                        className="input border-input border-2 rounded-3xl" 
                                        value={codMateria} 
                                        onChange={ (e) => setCodMateria(e.target.value) }>
                                            { materias?.map( (mat) => (
                                                <option value={`${mat.cod_mat}`}> {`${mat.nom_mat}`} </option>
                                            ) ) }
                                    </select>

                                    <label className=""> Nota 1 </label>
                                    <input 
                                        className="input border-input border-2 rounded-3xl" 
                                        value={nota1} 
                                        onChange={ (e) => setNota1(e.target.value) }
                                        type="text"
                                    />

                                    <label className=""> Nota 2 </label>
                                    <input 
                                        className="input border-input border-2 rounded-3xl" 
                                        value={nota2} 
                                        onChange={ (e) => setNota2(e.target.value) }
                                        type="text"
                                    />

                                    <label className=""> Nota 3 </label>
                                    <input 
                                        className="input border-input border-2 rounded-3xl" 
                                        value={nota3} 
                                        onChange={ (e) => setNota3(e.target.value) }
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
                                <h1 className="text-5xl text-darkBlue mb-12">¡Edita los datos de <span className="font-bold">{matMuestra}</span>!</h1>
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

export default EditMatAlumno;
