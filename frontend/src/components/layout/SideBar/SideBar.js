import { useState } from "react";

import Menu from "./Menu";

// Import CSS
import "./sidebar.css"

const SideBar = () => {
    const [open, setOpen] = useState(false);

    const handleBarsClick = () => {
        setOpen(!open)
    };

    return(
        <div className={`sidebar${ !open ? " active" : ""} bg-darkBlue text-white`}> 
            <div className="sidebar-header">
                <div className="icon-content"> <i className="fa-solid fa-bars" onClick={handleBarsClick} ></i> </div>
                <h2> OXFORD </h2>
            </div>
            <Menu />
        </div>
    );
}

export default SideBar;