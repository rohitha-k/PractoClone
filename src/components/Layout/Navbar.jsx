import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem("user");
      const savedUser = storedUser ? JSON.parse(storedUser) : null;
      setUser(savedUser);
    };

    checkUser();

    // Listen for storage changes (across tabs) and custom auth events
    window.addEventListener("storage", checkUser);
    window.addEventListener("authChange", checkUser);

    return () => {
      window.removeEventListener("storage", checkUser);
      window.removeEventListener("authChange", checkUser);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    setUser(null);
    window.dispatchEvent(new Event("authChange"));
    navigate("/login");
  };

  return (
    <>
      <style>
        {`
          .navbar {
            position: sticky;
            top: 0;
            z-index: 1000;
          }

          .navbar-brand {
            font-size: 1.6rem;
            letter-spacing: 0.5px;
          }

          .nav-link {
            font-weight: 500;
            color: #1f2d3d !important;
            margin-right: 10px;
            transition: color 0.2s ease;
          }

          .nav-link:hover {
            color: #0d6efd !important;
            border-bottom: 2px solid #0d6efd;
          }

          .nav-link.active {
            color: #0d6efd !important;
            border-bottom: 2px solid #0d6efd;
          }

          .btn-outline-primary {
            border-radius: 20px;
            padding: 6px 18px;
          }

          .btn-primary {
            border-radius: 20px;
            padding: 6px 18px;
            font-weight: 500;
          }
           
           /* Dropdown on hover/click styling adjust if needed */
           .dropdown-toggle::after {
               vertical-align: middle;
           }
        `}
      </style>

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand fw-bold text-primary" to="/">
            practo
          </Link>

          {/* Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Left */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" to="/doctors">
                  Find Doctors
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="/video-consult">
                  Video Consult
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/surgeries">
                  Surgeries
                </NavLink>
              </li>
            </ul>

            {/* Right */}
            <div className="d-flex align-items-center">
              {user ? (
                <div className="dropdown">
                  <button
                    className="btn btn-light dropdown-toggle d-flex align-items-center gap-2"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaUserCircle size={24} color="#787887" />
                    <span className="fw-semibold text-dark">{user.fullName?.split(" ")[0]}</span>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end shadow border-0">
                    <li><h6 className="dropdown-header">{user.fullName}</h6></li>
                    <li><Link className="dropdown-item" to="/profile">My Profile</Link></li>
                    <li><Link className="dropdown-item" to="/appointments">My Appointments</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><button className="dropdown-item text-danger" onClick={handleLogout}>Logout</button></li>
                  </ul>
                </div>
              ) : (
                <>
                  <Link to="/login" className="btn btn-outline-primary me-2">
                    Login
                  </Link>
                  <Link to="/signup" className="btn btn-primary">
                    Signup
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
