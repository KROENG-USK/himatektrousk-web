import React from "react";
import { Link } from "react-router-dom";
import '../styles/style.css';
import '../styles/color.css';
import '../styles/carousel.css';
import '../styles/berita.css';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Himatekro</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="offcanvas offcanvas-top" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            {/* Add menu items here */}
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                                <li className="nav-item mx-2">
                                    <a href="#" aria-current="page" className="nav-link active">Home</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a href="/berita" className="nav-link">Berita</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a href="#" className="nav-link">Event</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a href="#" className="nav-link">Dokumen</a>
                                </li>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a href="#" className="dropdown-item">Pendidikan Sumber Daya Mahasiswa</a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li>
                                        <a href="#" className="dropdown-item">Ekonomi Kreatif</a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a href="#" className="dropdown-item">Informasi dan Komunikasi</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a href="#" className="dropdown-item">Kesejahteraan Mahasiswa</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a href="#" className="dropdown-item">Kerohanian</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><a href="#" className="dropdown-item">Minat dan Bakat</a></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    {/* <li><a href="#" className="dropdown-item">Penelitian dan Pengembangan</a></li> */}
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
