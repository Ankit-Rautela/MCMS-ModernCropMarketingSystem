import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
    const auth = localStorage.getItem('user');

    const logout = () => {
        localStorage.clear();
    }

    return (
        // <div>
        //     <h1>Hie, {JSON.parse(auth).name}</h1>
        // </div>
        <section style={{ backgroundColor: "#eee" }}>
            <div className="container py-5">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle img-fluid"
                                    style={{ width: 100 }}
                                />
                                <h5 className="my-3">{JSON.parse(auth).name}</h5>
                                <p className="text-muted mb-1">Farmer</p>
                                <p className="text-muted mb-4">{JSON.parse(auth).address}</p>
                                <div className="d-flex justify-content-center mb-2">
                                    {/* Future Scope */}
                                    {/* <button type="button" className="btn btn-outline-secondary ms-1">
                                        Edit Profile
                                    </button> */}
                                    <Link onClick={logout} type="button" className="btn btn-outline-secondary ms-1" to="/signup">
                                        Log Out
                                    </Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-lg-8" >
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Full Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{JSON.parse(auth).name}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{JSON.parse(auth).email}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Phone</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{JSON.parse(auth).phone}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Address</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{JSON.parse(auth).address}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Profile;