import axios from "axios";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShowTable = ({ matsAlumno, deleteMatAlumno, cod_alumno }) => {
    const [searchMatAlumno, setSearchMatAlumno] = useState("")
    const [nomMuestra, setNombreMuestra] = useState("")
    const [materias, setMaterias] = useState("")

    const getAlumnoById = async (cod_alumno) => {
        const response = await axios.get(`http://localhost:4000/alumnos/${cod_alumno}`)
        const data = response.data[0]

        setNombreMuestra(data.nom_alumno)
    }

    const getMaterias = async () => {
        const response = await axios.get("http://localhost:4000/materias")
        setMaterias(response.data)
    }

    const handleDeleteClick = (cod_alumno, cod_mat) => {
        deleteMatAlumno(cod_alumno, cod_mat)
    }

    useEffect(() => {
        getAlumnoById(cod_alumno);
        getMaterias();
    }, [])

    return(
        <div className="w-full bg-white p-8 shadow-md rounded-25">
            <div className="card-header-alumnos mb-12 flex items-center h-16">
                <p className="text-4xl font-bold text-darkBlue"> Notas por Materia de {nomMuestra}</p>
                <div className="flex items-center gap-x-5">
                    <input 
                        className="border-input border-2 rounded-3xl" 
                        value={searchMatAlumno} 
                        onChange={ (e) => setSearchMatAlumno(e.target.value) }
                        type="text"
                    />
                    <i className="fa-solid fa-magnifying-glass text-white bg-blue p-5 icon"></i>
                </div>
            </div>
            <table className="tables w-full border-collapse mb-12">
                <thead>
                    <tr>
                        <th>Materia</th>
                        <th>Descripcion</th>
                        <th>Nota 1</th>
                        <th>Nota 2</th>
                        <th>Nota 3</th>
                        <th>Promedio</th>
                        <th>Operaciones</th>
                    </tr>
                </thead>

                <tbody>
                    { matsAlumno?.map( (mat) => (
                            <tr key={mat.cod_mat}>
                                <td>{materias[mat.cod_mat - 1].nom_mat}</td>
                                <td>{materias[mat.cod_mat - 1].desc_mat}</td>
                                <td>{mat.nota1_mat}</td>
                                <td>{mat.nota2_mat}</td>
                                <td>{mat.nota3_mat}</td>
                                <td>{mat.promedio_mat}</td>
                                <td className="flex gap-5">
                                    <Link to={`/alumnos/edit/${mat.cod_alumno}/${mat.cod_mat}`}>
                                        <button>
                                            <i className="fa-solid fa-pen text-orange bg-lightOrange p-5 icon"></i>
                                        </button>
                                    </Link>
                                    <button onClick={ () => handleDeleteClick(mat.cod_alumno, mat.cod_mat) }>
                                        <i className="fa-sharp fa-solid fa-trash text-red bg-lightRed p-5 icon"></i>
                                    </button>
                                </td>
                            </tr> 
                        )
                    ) }
                </tbody>
            </table>
            <Link to="/alumnos/add/">
                <button 
                    className="button py-4 px-12 bg-darkBlue text-white font-bold"> 
                    AGREGAR
                </button>
            </Link>
        </div>
    );
}

export default ShowTable;