import React from "react";
import { Link } from "react-router-dom";
import { FaStar, FaMapMarkerAlt, FaRupeeSign } from "react-icons/fa";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="card shadow-sm h-100 border-0">
      {/* Doctor Image */}
      <div style={{ height: "180px", overflow: "hidden" }}>
        <img
          src={doctor.image}
          alt={doctor.name}
          className="card-img-top"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>

      <div className="card-body text-center p-3">
        <h6 className="fw-bold mb-1" style={{ fontSize: "0.95rem" }}>
          {doctor.name}
        </h6>

        <p
          className="text-primary fw-semibold mb-1"
          style={{ fontSize: "0.8rem" }}
        >
          {doctor.specialty}
        </p>

        <p className="text-muted mb-2" style={{ fontSize: "0.75rem" }}>
          {doctor.experience} years
        </p>

        {/* Rating */}
        <div className="mb-2">
          <FaStar className="text-warning" size={12} />
          <span className="ms-1 fw-bold" style={{ fontSize: "0.8rem" }}>
            {doctor.rating}
          </span>
          <span className="text-muted ms-1" style={{ fontSize: "0.7rem" }}>
            ({doctor.reviews})
          </span>
        </div>

        {/* Hospital */}
        <div className="mb-2">
          <FaMapMarkerAlt className="text-muted me-1" size={10} />
          <small className="text-muted" style={{ fontSize: "0.65rem" }}>
            {doctor.hospital}
          </small>
        </div>

        {/* Fee */}
        <div className="mb-3">
          <FaRupeeSign className="text-success me-1" size={12} />
          <span
            className="fw-bold text-success"
            style={{ fontSize: "0.85rem" }}
          >
            {doctor.fee}
          </span>
          <span className="text-muted ms-1" style={{ fontSize: "0.65rem" }}>
            fee
          </span>
        </div>
        <Link
          to="/doctors"
          className="btn btn-sm btn-primary w-100"
          style={{ fontSize: "0.8rem" }}
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

export default DoctorCard;
