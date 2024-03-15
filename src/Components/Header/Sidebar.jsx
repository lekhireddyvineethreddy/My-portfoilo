import React from "react";
import Linkedin from "../Socialaccounts/Linkdin";
import Github from "../Socialaccounts/Github";
import Instagram from "../Socialaccounts/Instagram";
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="Social-icons">
            <Linkedin/>
            <Github/>
            <Instagram/>
        </div>

    )
}
export default Sidebar;