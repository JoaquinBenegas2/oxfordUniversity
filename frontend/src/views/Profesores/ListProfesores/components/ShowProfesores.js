import { useState } from "react";
import { Link } from "react-router-dom";

const ShowTable = ({ profesores, deleteProfesores }) => {
    const [searchProfesores, setSearchProfesores] = useState("")

    const handleDeleteClick = (cod) => {
        deleteProfesores(cod)
    }

    return(
        <div className="w-full bg-white p-8 shadow-md rounded-25">
            <div className="card-header-alumnos mb-12 flex items-center h-16">
                <p className="text-4xl font-bold text-darkBlue"> Profesores </p>
                <div className="flex items-center gap-x-5">
                    <input 
                        className="border-input border-2 rounded-3xl" 
                        value={searchProfesores} 
                        onChange={ (e) => setSearchProfesores(e.target.value) }
                        type="text"
                    />
                    <i className="fa-solid fa-magnifying-glass text-white bg-blue p-5 icon"></i>
                </div>
            </div>
            <table className="tables w-full border-collapse mb-12">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>DNI</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Usuario</th>
                        <th>Ciudad</th>
                        <th>Operaciones</th>
                        <th>Acción</th>
                    </tr>
                </thead>

                <tbody>
                    { profesores?.map( (profesor) => (
                        <tr key={profesor.cod_prof}>
                            <td>{profesor.cod_prof}</td>
                            <td>{profesor.dni_prof}</td>
                            <td>{profesor.nom_prof}</td>
                            <td>{profesor.ape_prof}</td>
                            <td>{profesor.usuario_prof}</td>
                            <td>{profesor.ciudad_prof}</td>
                            <td className="flex gap-5">
                                <Link to={`/profesores/edit/${profesor.cod_prof}`}>
                                    <button>
                                        <i className="fa-solid fa-pen text-orange bg-lightOrange p-5 icon"></i>
                                    </button>
                                </Link>
                                <button onClick={ () => handleDeleteClick(profesor.cod_prof) }>
                                    <i className="fa-sharp fa-solid fa-trash text-red bg-lightRed p-5 icon"></i>
                                </button>
                            </td>
                            <td>
                                <Link to={`/profesores/view/${profesor.cod_prof}`}>
                                    <button>
                                    <i className="fa-solid fa-eye text-blue2 bg-lightBlue2 p-5 icon"></i>
                                </button>
                                </Link>
                            </td>
                        </tr>
                    ) ) }
                </tbody>
            </table>
            <Link to="/profesores/add/">
                <button 
                    className="button py-4 px-12 bg-darkBlue text-white font-bold"> 
                    AGREGAR
                </button>
            </Link>
        </div>
    );
}

export default ShowTable;