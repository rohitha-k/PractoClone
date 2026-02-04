import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import doctorIllustration from "@/assets/verified_doctor.png";
import followupIllustration from "@/assets/free_followup.png";
import secureIllustration from "@/assets/private_secure.png";

import gynaecologyIcon from "@/assets/gynaecology_icon.png";
import sexologyIcon from "@/assets/sexology_icon.png";
import generalPhysicianIcon from "@/assets/general_physician_icon.png";
import dermatologyIcon from "@/assets/dermatology_icon.png";
import psychiatryIcon from "@/assets/psychiatry_icon.png";
import stomachIcon from "@/assets/stomach_icon.png";

import { FaTimes, FaChevronDown } from "react-icons/fa";

const specialities = [
    { name: "Gynaecology", icon: gynaecologyIcon },
    { name: "General physician", icon: generalPhysicianIcon },
    { name: "Dermatology", icon: dermatologyIcon },
    { name: "Sexology", icon: sexologyIcon },
    { name: "Psychiatry", icon: psychiatryIcon },
    { name: "Stomach and digestion", icon: stomachIcon },
];

const ConsultFormPage = () => {
    const navigate = useNavigate();
    const dropdownRef = useRef(null);

    const [currentSlide, setCurrentSlide] = useState(0);
    const [symptoms, setSymptoms] = useState("");
    const [selectedSpeciality, setSelectedSpeciality] = useState(null);
    const [mobileNumber, setMobileNumber] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const slides = [
        { image: doctorIllustration, title: "Verified Doctors" },
        { image: followupIllustration, title: "Free Follow-up" },
        { image: secureIllustration, title: "Private & Secure" }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [slides.length]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const isFormValid = symptoms.length >= 4 && selectedSpeciality && mobileNumber.length === 10;

    return (
        <div className="vh-100 bg-light d-flex flex-column">
            {/* Minimalist Header */}
            <header className="bg-white border-bottom py-3">
                <div className="container d-flex justify-content-between align-items-center">
                    <Link to="/" className="text-decoration-none">
                        <h2 className="fw-bold mb-0 text-primary">practo</h2>
                    </Link>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
                <div className="container" style={{ maxWidth: "900px" }}>
                    <div className="card shadow border-0 overflow-hidden" style={{ borderRadius: "10px" }}>
                        <div className="row g-0">
                            {/* Left Form Section */}
                            <div className="col-lg-7 p-5 bg-white position-relative">
                                <button
                                    onClick={() => navigate(-1)}
                                    className="btn btn-link text-muted position-absolute top-0 end-0 m-3 p-0"
                                    style={{ fontSize: "1.2rem" }}
                                >
                                    <FaTimes />
                                </button>

                                <h3 className="fw-bold mb-4" style={{ color: "#333d47" }}>Consult with a Doctor</h3>

                                <div className="mb-4">
                                    <label className="form-label fw-bold small text-muted">Tell us your symptom or health problem</label>
                                    <textarea
                                        className="form-control"
                                        rows="3"
                                        placeholder="Eg: fever, headache"
                                        value={symptoms}
                                        onChange={(e) => setSymptoms(e.target.value)}
                                        style={{ backgroundColor: "#f8f9fa", borderRadius: "8px", border: "1px solid #dee2e6", resize: "none" }}
                                    ></textarea>
                                    <div className="form-text small opacity-50">Min 4 characters</div>
                                </div>

                                {/* Speciality Selection - Conditional */}
                                {symptoms.length >= 4 && (
                                    <div className="mb-4 animate-fade-in">
                                        <label className="form-label fw-bold small text-muted">Choose a relevant speciality</label>
                                        <div className="position-relative" ref={dropdownRef}>
                                            <div
                                                className="form-control d-flex justify-content-between align-items-center cursor-pointer"
                                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                                style={{ backgroundColor: "#f8f9fa", borderRadius: "8px", border: "1px solid #dee2e6", height: "45px" }}
                                            >
                                                {selectedSpeciality ? (
                                                    <div className="d-flex align-items-center">
                                                        <img src={selectedSpeciality.icon} alt="" style={{ width: "24px", marginRight: "10px" }} />
                                                        <span>{selectedSpeciality.name}</span>
                                                    </div>
                                                ) : (
                                                    <span className="text-muted">Select One</span>
                                                )}
                                                <FaChevronDown className={`text-muted transition ${isDropdownOpen ? "rotate-180" : ""}`} />
                                            </div>

                                            {isDropdownOpen && (
                                                <div className="position-absolute w-100 bg-white shadow-lg mt-1 border rounded-3 overflow-auto z-3" style={{ maxHeight: "250px" }}>
                                                    {specialities.map((spec, i) => (
                                                        <div
                                                            key={i}
                                                            className="px-3 py-2 d-flex align-items-center speciality-item"
                                                            onClick={() => {
                                                                setSelectedSpeciality(spec);
                                                                setIsDropdownOpen(false);
                                                            }}
                                                        >
                                                            <img src={spec.icon} alt="" style={{ width: "30px", height: "30px", marginRight: "12px", objectFit: "contain" }} />
                                                            <span className="small fw-semibold">{spec.name}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <div className="mb-4">
                                    <label className="form-label fw-bold small text-muted">Mobile number</label>
                                    <div className="input-group">
                                        <span className="input-group-text bg-white" style={{ borderRight: "none" }}>
                                            <span className="me-2">🇮🇳</span>
                                            <span className="small text-muted">▼</span>
                                        </span>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Enter mobile number"
                                            value={mobileNumber}
                                            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 10))}
                                            style={{ backgroundColor: "#f8f9fa", borderLeft: "none" }}
                                        />
                                    </div>
                                    <div className="form-text small opacity-50 mt-1">A verification code will be sent to this number.</div>
                                </div>

                                <button
                                    className={`btn w-100 py-3 fw-bold transition ${isFormValid ? "btn-primary shadow-sm" : "btn-secondary disabled"}`}
                                    style={{ borderRadius: "8px" }}
                                >
                                    Continue
                                </button>
                            </div>

                            {/* Right Illustration Section */}
                            <div className="col-lg-5 bg-white border-start d-flex flex-column align-items-center justify-content-center p-5 text-center">
                                <div key={currentSlide} className="animate-fade">
                                    <img
                                        src={slides[currentSlide].image}
                                        alt={slides[currentSlide].title}
                                        className="img-fluid mb-4"
                                        style={{ maxWidth: "180px", height: "160px", objectFit: "contain" }}
                                    />
                                    <h5 className="fw-bold" style={{ color: "#333d47" }}>{slides[currentSlide].title}</h5>
                                </div>
                                <div className="d-flex gap-2 mt-4">
                                    {slides.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`rounded-circle transition ${currentSlide === i ? "bg-primary" : "bg-light border"}`}
                                            style={{ width: "8px", height: "8px" }}
                                        ></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <style>
                {`
                .animate-fade {
                    animation: fadeIn 0.5s ease-in-out;
                }
                .animate-fade-in {
                    animation: slideUpFade 0.4s ease-out;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes slideUpFade {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .cursor-pointer {
                    cursor: pointer;
                }
                .rotate-180 {
                    transform: rotate(180deg);
                }
                .speciality-item {
                    cursor: pointer;
                    transition: background 0.2s;
                    border-bottom: 1px solid #f8f9fa;
                }
                .speciality-item:hover {
                    background-color: #f0f7ff;
                }
                .speciality-item:last-child {
                    border-bottom: none;
                }
                .transition {
                    transition: all 0.3s ease;
                }
                `}
            </style>
        </div>
    );
};

export default ConsultFormPage;
