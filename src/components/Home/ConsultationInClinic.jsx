import React from "react";
import { Link } from "react-router-dom";
import ortho from "@/assets/ortho.jpeg";
import phy from "@/assets/phy.jpeg";
import pedia from "@/assets/pedia.jpeg";
import gas from "@/assets/gas.jpeg";

const clinics = [
  {
    id: 1,
    title: "Orthopedist",
    description: "For bone and joints issues, spinal injuries and more",
    image: ortho,
  },
  {
    id: 2,
    title: "General physician",
    description: "Find the right family doctor in your neighborhood",
    image: phy,
  },
  {
    id: 3,
    title: "Pediatrician",
    description: "Child specialists and doctors for infants",
    image: pedia,
  },
  {
    id: 4,
    title: "Gastroenterologist",
    description:
      "Explore issues related to digestive system, liver and pancreas",
    image: gas,
  },
];

const InClinicConsultation = () => {
  return (
    <div className="container my-5">
      {/* Header with See All */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="fw-bold mb-1">
            Book an appointment for an in-clinic consultation
          </h4>
          <p className="text-muted mb-0">
            Find experienced doctors across all specialties
          </p>
        </div>

        <Link to="/specialties" className="see-all-btn">
          See All →
        </Link>
      </div>

      {/* Cards */}
      <div className="row g-4">
        {clinics.map((item) => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={item.id}>
            <Link
              to={`/doctors?specialty=${item.title}`}
              className="text-decoration-none text-dark"
            >
              <div className="clinic-card">
                <div className="clinic-img">
                  <img src={item.image} alt={item.title} />
                </div>

                <h6
                  className={`mt-3 fw-semibold ${item.highlight ? "text-primary" : ""
                    }`}
                >
                  {item.title}
                </h6>
                <p className="text-muted small mb-0">{item.description}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>


      {/* Styles */}
      <style>{`
        .clinic-card {
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .clinic-card:hover {
          transform: translateY(-6px);
        }

        .clinic-img {
          height: 200px;
          border-radius: 12px;
          overflow: hidden;
          background: #f2f2f2;
        }

        .clinic-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .clinic-card:hover .clinic-img img {
          transform: scale(1.08);
        }

        .see-all-btn {
          font-size: 0.9rem;
          font-weight: 600;
          color: #0d6efd;
          text-decoration: none;
          transition: color 0.2s ease, transform 0.2s ease;
        }

        .see-all-btn:hover {
          color: #084298;
          transform: translateX(4px);
        }
      `}</style>
    </div>
  );
};

export default InClinicConsultation;
