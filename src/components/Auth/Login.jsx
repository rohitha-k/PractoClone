import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import authBg from '../../assets/auth-premium-bg.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const validateForm = () => {
    if (!email) {
      toast.error("Email is required");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (!password) {
      toast.error("Password is required");
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Login submitted:", { email, password });

      // Mock login state
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Login Successful!");

      // Redirect back to where they came from (e.g., the booking page) or Home
      const from = location.state?.from || "/";
      navigate(from, { replace: true });
    }
  };


  return (
    <div className="container-fluid d-flex justify-content-center align-items-center position-relative" style={{ minHeight: "100vh", overflow: "hidden" }}>
      <img
        src={authBg}
        alt="Background"
        className="auth-bg"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          zIndex: 0
        }}
      />
      <div className="card shadow-lg border-0 p-4" style={{
        width: "100%",
        maxWidth: "400px",
        borderRadius: "20px",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        zIndex: 1
      }}>
        <h2 className="text-center fw-bold mb-4 text-primary">Login</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-3">
            <label className="form-label fw-semibold">Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderRadius: "10px", padding: "12px" }}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ borderRadius: "10px", padding: "12px" }}
            />
          </div>
          <div className="mb-3 d-flex justify-content-between align-items-center">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <Link to="/forgot-password" style={{ textDecoration: "none", fontSize: "0.9rem" }}>Forgot password?</Link>
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 fw-bold py-2 mt-2"
            style={{ borderRadius: "10px", fontSize: "1.1rem" }}
          >
            Login
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="mb-0">
            Don't have an account? <Link to="/signup" className="fw-bold text-primary" style={{ textDecoration: "none" }}>Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

