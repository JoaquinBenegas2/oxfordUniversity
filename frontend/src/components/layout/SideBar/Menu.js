import { Link } from "react-router-dom";

const Menu = () => {
    return(
        <div className="sidebar-menu">
            <div>
                <Link to="/alumnos" className="sidebar-item active">
                    <div className="icon-content"> <i className="fa-solid fa-book"></i> </div>
                    <p> Registros </p>
                </Link>

                <Link to="/practicas" className="sidebar-item">
                    <div className="icon-content"> <i className="fa-solid fa-clipboard"></i> </div>
                    <p> Prácticas </p>
                </Link>

                <Link to="/evaluaciones" className="sidebar-item">
                    <div className="icon-content"> <i className="fa-solid fa-circle-check"></i> </div>
                    <p> Evaluaciones </p>
                </Link>
            </div>
            
            <div>
                <Link to="" className="sidebar-item">
                    <div className="icon-content"> <i className="fa-solid fa-arrow-right-from-bracket"></i> </div>
                    <p> Salir </p>
                </Link>  
            </div>
        </div>
    );
}

export default Menu;