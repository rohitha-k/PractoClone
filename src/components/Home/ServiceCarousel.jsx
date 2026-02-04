import React, { useEffect } from "react";
import videoConsultation from "@/assets/img1.jpg";
import findDoctors from "@/assets/img2.jpg";
import surgeries from "@/assets/img4.jpg";
// Ensure Bootstrap JS is available
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ServiceCarousel = () => {
  useEffect(() => {
    // Manually initialize the carousel to ensure it starts
    const carouselElement = document.getElementById('demo');
    if (carouselElement) {
      // We rely on the global bootstrap object or the fact that importing the bundle
      // makes 'bootstrap' available if attached to window, BUT
      // the safest way in standard module systems without window.bootstrap is:
      // However, usually the bundle auto-initializes data-bs-ride. 
      // If it doesn't, we can try dispatching a click or just re-adding the class?
      // Let's try to access the Carousel constructor.
      // Since we just imported the bundle for side effects, let's see if we can get an instance.

      // A common fix for React + Bootstrap (without react-bootstrap) is to import the class:
      import('bootstrap').then((bootstrap) => {
        new bootstrap.Carousel(carouselElement, {
          interval: 2800,
          ride: 'carousel',
          pause: false
        });
      });
    }
  }, []);
  return (
    <div>
      <style>
        {`
          .carousel-img {
            height: 580px;
            width: 100%;
            object-fit: cover;
          }

          .carousel-caption {
      background: linear-gradient(
        to top,
        rgba(0, 0, 0, 0.45),
        rgba(0, 0, 0, 0)
      );
      width: 100%;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 20px 0;
      text-align: center;
    }

    .carousel-caption h3 {
      color: #ffffff;
      font-weight: 600;
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
    }

    .carousel-caption p {
      color: #f1f1f1;
      text-shadow: 0 2px 6px rgba(0, 0, 0, 0.6);
    }
  `}
      </style>

      <div
        id="demo"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="2800" /* 🔥 faster */
        data-bs-pause="false"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button
            data-bs-target="#demo"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button data-bs-target="#demo" data-bs-slide-to="2"></button>
          <button data-bs-target="#demo" data-bs-slide-to="3"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={videoConsultation}
              className="d-block w-100 carousel-img"
            />
            <div className="carousel-caption">
              <h3>Instant Video Consultation</h3>
              <p>Connect within 60 secs</p>
            </div>
          </div>

          <div className="carousel-item">
            <img src={findDoctors} className="d-block w-100 carousel-img" />
            <div className="carousel-caption">
              <h1 className="fw-bold mb-4">Find & Book Your Perfect Doctor</h1>
              <p className="lead mb-4">Choose from 10,000+ verified doctors across specialties.</p>
              <div className="d-flex gap-3 justify-content-center"> {/* Added justify-content-center for button alignment */}
                <button className="btn btn-primary btn-lg px-4" onClick={() => navigate("/doctors")}>Find Doctors</button>
                <button className="btn btn-outline-light btn-lg px-4" onClick={() => navigate("/video-consult")}>Video Consult</button>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img src={surgeries} className="d-block w-100 carousel-img" />
            <div className="carousel-caption">
              <h3>Surgeries</h3>
              <p>Safe and trusted surgery centers</p>
            </div>
          </div>
        </div>

        {/* ❌ Controls REMOVED */}
      </div>
    </div>
  );
};

export default ServiceCarousel;
