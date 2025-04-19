import React from "react";
import { Link } from "react-router-dom";

const ThemeSwitcher = () => {
    return (
        <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle" id="bd-theme">
            <button className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center" id="bd-theme-button" type="button" data-bs-toggle="dropdown" aria-label="Toggle theme (dark)">
                <img src="./assets/images/icons/moon.png" alt="dark mode" className="img-fluid bi me-2 opacity-50" style={{ width: "2em" }} />
                <span className="visually-hidden" id="bd-theme-text">Ganti Mode</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
                <li>
                    <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="light">
                        <img src="./assets/images/icons/sun.png" alt="sun mode" className="img-fluid bi me-2 opacity-50" style={{ width: "1em" }} />
                        Terang
                        <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2" /></svg>
                    </button>
                </li>
                <li>
                    <button type="button" className="dropdown-item d-flex align-items-center active" data-bs-theme-value="dark">
                        <img src="./assets/images/icons/moon.png" alt="moon mode" className="img-fluid bi me-2 opacity-50" style={{ width: "1em" }} />
                        Gelap
                        <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2" /></svg>
                    </button>
                </li>
                <li>
                    <button type="button" className="dropdown-item d-flex align-items-center" data-bs-theme-value="auto">
                        <svg className="bi me-2 opacity-50" width="1em" height="1em"><use href="#circle-half" /></svg>
                        Auto
                        <svg className="bi ms-auto d-none" width="1em" height="1em"><use href="#check2" /></svg>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default ThemeSwitcher;
