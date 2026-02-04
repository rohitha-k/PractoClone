import React from "react";
import gynaecologyIcon from "@/assets/gynaecology_icon.png";
import sexologyIcon from "@/assets/sexology_icon.png";
import generalPhysicianIcon from "@/assets/general_physician_icon.png";
import dermatologyIcon from "@/assets/dermatology_icon.png";
import psychiatryIcon from "@/assets/psychiatry_icon.png";
import stomachIcon from "@/assets/stomach_icon.png";

const specialities = [
  { name: "Gynaecology", icon: gynaecologyIcon, price: 499 },
  { name: "Sexology", icon: sexologyIcon, price: 499 },
  { name: "General physician", icon: generalPhysicianIcon, price: 399 },
  { name: "Dermatology", icon: dermatologyIcon, price: 449 },
  { name: "Psychiatry", icon: psychiatryIcon, price: 499 },
  { name: "Stomach and digestion", icon: stomachIcon, price: 399 },
];

const Specialities = () => {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold mb-1">25+ Specialities</h2>
            <p className="text-muted">Consult with top doctors across specialities</p>
          </div>
          <button className="btn btn-outline-secondary px-4">See all Specialities</button>
        </div>

        <div className="row g-4 text-center">
          {specialities.map((item, i) => (
            <div className="col-6 col-md-4 col-lg-2" key={i}>
              <div className="card h-100 border-0 shadow-sm p-3 hover-shadow transition" style={{ borderRadius: "12px" }}>
                <div className="mb-3">
                  <img
                    src={item.icon}
                    alt={item.name}
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px", objectFit: "contain" }}
                  />
                </div>
                <h6 className="fw-bold mb-2">{item.name}</h6>
                <p className="text-muted small mb-3">₹{item.price}</p>
                <a href="#" className="text-info fw-bold text-decoration-none small">
                  Consult now ›
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          .hover-shadow:hover {
            box-shadow: 0 10px 20px rgba(0,0,0,0.1) !important;
            transform: translateY(-5px);
          }
          .transition {
            transition: all 0.3s ease;
          }
        `}
      </style>
    </section>
  );
};

export default Specialities;
