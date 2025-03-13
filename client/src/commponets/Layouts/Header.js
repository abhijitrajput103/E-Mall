import React from "react";
import { NavLink, Link } from "react-router-dom";
import toast from "react-hot-toast";
import { Badge } from "antd";

import { useAuth } from "../../context/auth";
import { GiShoppingBag } from 'react-icons/gi';
import { useCart } from "../../context/cart";

const Header = () => {
    const [auth, setAuth] = useAuth();
    const [cart, setCart] = useCart();

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem("auth");
        toast.success("Logged out successfully");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-subtle shadow-sm">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand d-flex align-items-center me-5">
                    <GiShoppingBag className="me-2" /> E-commerce
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <div className="d-flex justify-content-center flex-grow-1 mx-4">
                                <div className="position-relative w-100">
                                    <input
                                        type="text"
                                        id="search-input"
                                        placeholder="Search products..."
                                        className="form-control form-control-sm rounded-pill"
                                    />
                                    <i
                                        id="search-icon"
                                        className="fas fa-search position-absolute top-50 end-0 translate-middle-y me-3 text-muted"
                                        style={{ cursor: "pointer" }}
                                    ></i>
                                </div>
                            </div>
                        </li>

                        {!auth?.user ? (
                            <>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/register">Register</NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    className="btn text-dark position-relative"
                                    to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"}`}
                                >
                                    <i className="fas fa-user fs-4"></i>
                                </NavLink>
                                <button
                                    className="btn btn-link text-dark ms-3"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </>
                        )}

                        <li className="nav-item">
                            <Badge count={cart?.length || 0} showZero>
                                <NavLink className="nav-link text-dark ms-3" to="/cart">
                                    <i className="fas fa-shopping-cart fs-4"></i>
                                </NavLink>
                            </Badge>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
