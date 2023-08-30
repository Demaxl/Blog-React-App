import { useState, useEffect, memo } from "react";
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
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">Blog</Link>
                    <a className="navbar-brand navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <img src={defaultImage} alt="User Image" width={40} className="rounded-pill" />
                    </a>
                    
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav ms-auto me-5">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>

                            {window.innerWidth > 576 && 
                                <li className="nav-item">
                                    <a className="nav-link navbar-brand" href="#">
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


export default memo(Base);