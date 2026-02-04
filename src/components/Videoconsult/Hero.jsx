import React from "react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/video_consult_hero.png";
import { FaCheckCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="py-5" style={{ backgroundColor: "#fdf5f2" }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="fw-bold display-5 mb-3" style={{ color: "#1c2c36" }}>
              Skip the travel!<br />
              Take Online Doctor Consultation
            </h1>
            <p className="fs-5 text-muted mb-4">
              Private consultation + Audio call • Starts at just ₹199
            </p>

            <div className="d-flex align-items-center mb-4">
              <div className="d-flex me-3">
                <div className="bg-primary rounded-circle border border-white" style={{ width: "32px", height: "32px", zIndex: 3 }}></div>
                <div className="bg-info rounded-circle border border-white" style={{ width: "32px", height: "32px", marginLeft: "-10px", zIndex: 2 }}></div>
                <div className="bg-secondary rounded-circle border border-white" style={{ width: "32px", height: "32px", marginLeft: "-10px", zIndex: 1 }}></div>
              </div>
              <span className="text-secondary fw-semibold">
                <span className="text-success">●</span> +172 Doctors are online
              </span>
            </div>

            <Link to="/consult/direct" className="btn btn-info btn-lg px-5 py-3 fw-bold mb-4 text-white shadow-sm" style={{ backgroundColor: "#28a3da", border: "none" }}>
              Consult Now
            </Link>

            <div className="d-flex flex-wrap gap-4 mt-2">
              <span className="text-muted d-flex align-items-center gap-1">
                <FaCheckCircle className="text-secondary" /> Verified Doctors
              </span>
              <span className="text-muted d-flex align-items-center gap-1">
                <FaCheckCircle className="text-secondary" /> Digital Prescription
              </span>
              <span className="text-muted d-flex align-items-center gap-1">
                <FaCheckCircle className="text-secondary" /> Free Followup
              </span>
            </div>
          </div>

          <div className="col-lg-5 text-center mt-5 mt-lg-0">
            <img
              src={heroImg}
              alt="Video Consultation"
              className="img-fluid rounded-4"
              style={{ maxHeight: "400px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
