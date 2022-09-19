import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import SideBar from "../../../components/layout/SideBar/SideBar"
import NavBar from "../../../components/layout/NavBar/NavBar"


const ViewMaterias = () => {
    const [nombre, setNombre] = useState("")
    const [nomMuestra, setNombreMuestra] = useState("")
    const [descripcion, setDescripcion] = useState("")


    const navigate = useNavigate()

    const { cod } = useParams()

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

                        </div>

                        <div className="bg-white p-8 flex col-span-2 flex-col space-beetwen shadow-md rounded-25">
                            <div>
                                <h1 className="text-5xl text-darkBlue mb-12">¡Información sobre <span className="font-bold">{nomMuestra}</span>!</h1>
                                <p className="text-3xl mb-12">Aqui verás la iformación <span className="font-bold text-xblue">completa</span>.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewMaterias;
