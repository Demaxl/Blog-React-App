import { useState, useEffect } from "react";
import { Outlet, Link } from "react-router-dom";
import defaultImage from '../img/default.jpg'


function Base() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Blog</a>
                    <a className="navbar-brand navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <img src={defaultImage} alt="User Image" width={40} className="rounded-pill" />
                    </a>
                    
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav ms-auto me-5">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>

                            {window.innerWidth > 576 && 
                                <li class="nav-item">
                                    <a class="nav-link navbar-brand" href="#">
                                        <img src={defaultImage} alt="User Image" className="rounded-pill" width={40}/>
                                    </a>
                                </li>}
                        </ul>
                    </div>
                    
                </div>
            </nav>

            <Outlet />
        </>
    )
}


export default Base;