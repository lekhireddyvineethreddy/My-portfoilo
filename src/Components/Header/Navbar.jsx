import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <div className="container">
            <div className="details-form">
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/tech-stack">Tech Stack</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact Me</a>
            </div>
        </div>
    );
}

export default Navbar;
