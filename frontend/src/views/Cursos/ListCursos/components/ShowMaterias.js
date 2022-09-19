import { useState } from "react";
import { Link } from "react-router-dom";

const ShowTable = ({ materias, deleteMaterias }) => {
    const [searchMaterias, setSearchMaterias] = useState("")

    const handleDeleteClick = (cod) => {
        deleteMaterias(cod)
    }

    return(
        <div className="w-full bg-white p-8 shadow-md rounded-25">
            <div className="card-header-alumnos mb-12 flex items-center h-16">
                <p className="text-4xl font-bold text-darkBlue"> Materias </p>
                <div className="flex items-center gap-x-5">
                    <input 
                        className="border-input border-2 rounded-3xl" 
                        value={searchMaterias} 
                        onChange={ (e) => setSearchMaterias(e.target.value) }
                        type="text"
                    />
                    <i className="fa-solid fa-magnifying-glass text-white bg-blue p-5 icon"></i>
                </div>
            </div>
            <table className="tables w-full border-collapse mb-12">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Descripcion..</th>
                    </tr>
                </thead>

                <tbody>
                    { materias?.map( (materia) => (
                        <tr key={materia.cod_mat}>
                            <td>{materia.nom_mat}</td>
                            <td>{materia.desc_mat}</td>
                            <td className="flex gap-5">
                                <Link to={`/materias/edit/${materia.cod_mat}`}>
                                    <button>
                                        <i className="fa-solid fa-pen text-orange bg-lightOrange p-5 icon"></i>
                                    </button>
                                </Link>
                                <button onClick={ () => handleDeleteClick(materia.cod_mat) }>
                                    <i className="fa-sharp fa-solid fa-trash text-red bg-lightRed p-5 icon"></i>
                                </button>
                            </td>
                            <td>
                                <Link to={`/materias/view/${materia.cod_mat}`}>
                                    <button>
                                    <i className="fa-solid fa-eye text-blue2 bg-lightBlue2 p-5 icon"></i>
                                </button>
                                </Link>
                            </td>
                        </tr>
                    ) ) }
                </tbody>
            </table>
            <Link to="/materias/add/">
                <button 
                    className="button py-4 px-12 bg-darkBlue text-white font-bold"> 
                    AGREGAR
                </button>
            </Link>
        </div>
    );
}

export default ShowTable;