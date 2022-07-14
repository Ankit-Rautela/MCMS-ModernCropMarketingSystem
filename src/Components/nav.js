import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
    }

    return (
        <div>
            {auth ?
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Products</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/add">Add Products</Link>                                    </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/update">Update Products</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/profile">Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={logout} className="nav-link" aria-current="page" to="/signup">Log Out({JSON.parse(auth).name})</Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
                :
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item" ><Link className="nav-link" aria-current="page" to="/signup">Sign Up</Link></li>
                                <li className="nav-item" ><Link className="nav-link" aria-current="page" to="/login">Log In</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            }
        </div>
    )
}

export default NavBar