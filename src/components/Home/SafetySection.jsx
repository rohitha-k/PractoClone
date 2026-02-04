import React from "react";
import { FaShieldAlt, FaLock, FaUserShield } from "react-icons/fa";
import securityImg from "@/assets/security_shield_medical.png";

const SafetySection = () => {
    return (
        <div className="bg-light py-5 mt-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h2 className="fw-bold mb-4" style={{ color: "#28328c" }}>Your data is safe with us</h2>
                        <ul className="list-unstyled">
                            <li className="d-flex align-items-start mb-4">
                                <div className="bg-white p-3 rounded-circle shadow-sm me-3">
                                    <FaLock className="text-primary fs-4" />
                                </div>
                                <div>
                                    <h5 className="fw-bold">100% Confidential</h5>
                                    <p className="text-muted">All your consultations and medical records are completely private.</p>
                                </div>
                            </li>
                            <li className="d-flex align-items-start mb-4">
                                <div className="bg-white p-3 rounded-circle shadow-sm me-3">
                                    <FaShieldAlt className="text-primary fs-4" />
                                </div>
                                <div>
                                    <h5 className="fw-bold">Secure Infrastructure</h5>
                                    <p className="text-muted">We use 256-bit encryption to ensure your data is always protected.</p>
                                </div>
                            </li>
                            <li className="d-flex align-items-start">
                                <div className="bg-white p-3 rounded-circle shadow-sm me-3">
                                    <FaUserShield className="text-primary fs-4" />
                                </div>
                                <div>
                                    <h5 className="fw-bold">Verified Doctors</h5>
                                    <p className="text-muted">Every doctor on Practo goes through a rigorous verification process.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 text-center">
                        <img
                            src={securityImg}
                            alt="Security"
                            className="img-fluid"
                            style={{ maxWidth: "400px" }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SafetySection;
