import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return (
        <div className="header">
            <Link
                to="/"
                className={`header__button ${location.pathname === "/" ? "active" : ""}`}
            >
                Home
            </Link>
            <Link
                to="/list"
                className={`header__button ${location.pathname === "/list" ? "active" : ""}`}
            >
                Country List
            </Link>
            <Link
                to="/form"
                className={`header__button ${location.pathname === "/form" ? "active" : ""}`}
            >
                Add New Country Form
            </Link>
        </div>
    );
};

export default Header;