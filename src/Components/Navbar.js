import React from 'react'

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="btn btn-outline-success" type="submit">Previous Week</button>
                            </li>
                            <li className="nav-item ml-200">
                                <button className="btn btn-outline-success" type="submit">Next Week</button>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}
