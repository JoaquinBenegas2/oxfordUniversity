import { useState } from "react";
import { Link } from "react-router-dom";

const ShowTable = ({ alumnos, deleteAlumnos }) => {
    const [searchAlumnos, setSearchAlumnos] = useState("")

    const handleDeleteClick = (cod) => {
        deleteAlumnos(cod)
    }

    return(
        <div className="w-full bg-white p-8 shadow-md rounded-25">
            <div className="card-header-alumnos mb-12 flex items-center h-16">
                <p className="text-4xl font-bold text-darkBlue"> Alumnos </p>
                <div className="flex items-center gap-x-5">
                    <input 
                        className="border-input border-2 rounded-3xl" 
                        value={searchAlumnos} 
                        onChange={ (e) => setSearchAlumnos(e.target.value) }
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
                        <th>Curso</th>
                        <th>Operaciones</th>
                        <th>Acción</th>
                    </tr>
                </thead>

                <tbody>
                    { alumnos?.map( (alumno) => (
                        <tr key={alumno.cod_alumno}>
                            <td>{alumno.cod_alumno}</td>
                            <td>{alumno.dni_alumno}</td>
                            <td>{alumno.nom_alumno}</td>
                            <td>{alumno.ape_alumno}</td>
                            <td>{alumno.usuario_alumno}</td>
                            <td>{alumno.ciudad_alumno}</td>
                            <td>{`${alumno.cod_curso.charAt(0)} "${alumno.cod_curso.charAt(1)}"`}</td>
                            <td className="flex gap-5">
                                <Link to={`/alumnos/edit/${alumno.cod_alumno}`}>
                                    <button>
                                        <i className="fa-solid fa-pen text-orange bg-lightOrange p-5 icon"></i>
                                    </button>
                                </Link>
                                <button onClick={ () => handleDeleteClick(alumno.cod_alumno) }>
                                    <i className="fa-sharp fa-solid fa-trash text-red bg-lightRed p-5 icon"></i>
                                </button>
                            </td>
                            <td>
                                <Link to={`/alumnos/view/${alumno.cod_alumno}`}>
                                    <button>
                                    <i className="fa-solid fa-eye text-blue2 bg-lightBlue2 p-5 icon"></i>
                                </button>
                                </Link>
                            </td>
                        </tr>
                    ) ) }
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