// Import CSS
import "./navbar.css"

const NavBar = () => {
    return(
        <nav className="nav bg-bgColor">
            <div className="nav-profile text-darkBlue">
                <p> Nombre Apellido </p>
                <p className="profile-icon bg-blue text-white"> N </p>
            </div>
        </nav>
    );
}

export default NavBar;