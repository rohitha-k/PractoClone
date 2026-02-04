import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import authBg from '../../assets/auth-premium-bg.png';

const Signup = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        const { fullName, email, mobile, password } = formData;

        if (!fullName.trim()) {
            toast.error("Full Name is required");
            return false;
        }

        if (!email) {
            toast.error("Email is required");
            return false;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error("Please enter a valid email address");
            return false;
        }

        if (!mobile) {
            toast.error("Mobile Number is required");
            return false;
        }
        const mobileRegex = /^[0-9]{10}$/;
        if (!mobileRegex.test(mobile)) {
            toast.error("Mobile Number must be 10 digits");
            return false;
        }

        if (!password) {
            toast.error("Password is required");
            return false;
        }
        if (password.length < 6) {
            toast.error("Password must be at least 6 characters long");
            return false;
        }

        const termsChecked = document.getElementById("terms").checked;
        if (!termsChecked) {
            toast.error("Please agree to the Terms and Conditions");
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Signup submitted:", formData);

            // Simulate login
            localStorage.setItem("user", JSON.stringify(formData));
            localStorage.setItem("isLoggedIn", "true");

            // Dispatch event for Navbar update
            window.dispatchEvent(new Event("authChange"));

            toast.success("Account Created Successfully!");
            navigate("/");
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
                maxWidth: "450px",
                borderRadius: "20px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                zIndex: 1
            }}>
                <h2 className="text-center fw-bold mb-4 text-primary">Join Practo</h2>
                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            className="form-control"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            style={{ borderRadius: "10px", padding: "12px" }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email address</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            style={{ borderRadius: "10px", padding: "12px" }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Mobile Number</label>
                        <input
                            type="tel"
                            name="mobile"
                            className="form-control"
                            placeholder="Enter your mobile number"
                            value={formData.mobile}
                            onChange={handleChange}
                            style={{ borderRadius: "10px", padding: "12px" }}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Create Password</label>
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            style={{ borderRadius: "10px", padding: "12px" }}
                        />
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="terms" />
                        <label className="form-check-label" htmlFor="terms" style={{ fontSize: "0.85rem" }}>
                            I agree to the <Link to="/terms" style={{ textDecoration: "none" }}>Terms and Conditions</Link>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary w-100 fw-bold py-2 mt-2"
                        style={{ borderRadius: "10px", fontSize: "1.1rem" }}
                    >
                        Create Account
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="mb-0">
                        Already have an account? <Link to="/login" className="fw-bold text-primary" style={{ textDecoration: "none" }}>Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
