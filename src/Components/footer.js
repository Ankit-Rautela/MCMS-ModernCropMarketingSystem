import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className='footer fixed-bottom bg-dark' >
                <div className="container  mx-auto bg-dark" >
                    <footer className="d-flex flex-wrap justify-content-between align-items-center py-4 my-0 border-top">
                        <p className="col-md-4 mb-0 text-muted">&copy; 2022 | Modern Crop Marketing System - Dashboard</p>



                        <ul className="nav col-md-4 justify-content-end">
                            <li className="nav-item"><a href="./" className="nav-link px-2 text-muted">Home</a></li>
                            {/* <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About Us</a></li> */}
                        </ul>
                    </footer>
                </div>
            </div>
        </div>
    )
}
export default Footer