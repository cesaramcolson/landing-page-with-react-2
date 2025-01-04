import React from "react";

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid d-flex">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                            <a className="nav-link" href="#">About</a>
                            <a className="nav-link" href="#">Services</a>
                            <a className="nav-link" href="#">Contact</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}