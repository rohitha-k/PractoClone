import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./Hero";
import Consult from "./Consult";
import Order from "./Order";
import Learn from "./Learn";

const FindDoctors = () => {
  const navigate = useNavigate();

  const locationsList = [
    "Bangalore",
    "Mumbai",
    "Delhi",
    "Chennai",
    "Hyderabad",
  ];
  const doctorsList = [
    "Dermatologist",
    "Pediatrician",
    "Gynecologist",
    "Cardiologist",
    "Orthopedic",
    "ENT Specialist",
  ];

  const [location, setLocation] = useState("Bangalore");
  const [doctor, setDoctor] = useState("");
  const [showLoc, setShowLoc] = useState(false);
  const [showDoc, setShowDoc] = useState(false);

  const filterList = (list, value) =>
    list.filter((item) => item.toLowerCase().includes(value.toLowerCase()));

  const handleSearch = (selectedDoctor) => {
    const docToSearch = selectedDoctor || doctor;
    if (docToSearch) {
      navigate(`/search?location=${location}&specialty=${docToSearch}`);
    }
  };

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        body { margin: 0; }

        .find-doctors-scroll-wrapper {
          width: 100%;
          background: white;
          color: #333;
          font-family: Arial, sans-serif;
          display: flex;
          flex-direction: column;
        }

        .find-doctors-hero-section {
          height: 80vh;
          width: 100%;
          background:
            linear-gradient(rgba(40,50,140,0.9), rgba(40,50,140,0.9)),
            url("https://images.unsplash.com/photo-1588776814546-1ffcf47267a5");
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          color: white;
        }

        .hero-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          padding: 0 20px;
        }

        .hero-content h1 { font-size: 44px; margin-bottom: 8px; }
        .hero-content h2 { font-size: 24px; margin-bottom: 32px; }

        .search-bar {
          display: flex;
          gap: 12px;
          width: 100%;
          max-width: 1200px;
        }

        .location-box,
        .search-box {
          position: relative;
          display: flex;
          align-items: center;
          background: white;
          padding: 10px 12px;
          border-radius: 4px;
        }

        .location-box { width: 30%; min-width: 200px; }
        .search-box { width: 70%; }

        .search-bar input {
          border: none;
          outline: none;
          font-size: 16px;
          width: 100%;
          color: black;
          background: transparent;
        }

        .icon { margin-right: 8px; color: #555; }

        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          list-style: none;
          padding: 0;
          margin: 4px 0 0;
          border-radius: 4px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          z-index: 10;
          max-height: 200px;
          overflow-y: auto;
        }

        .dropdown li {
          padding: 10px;
          cursor: pointer;
          font-size: 14px;
          color: #000;
        }

        .dropdown li:hover {
          background: #f2f4ff;
        }

        .popular-searches {
          margin-top: 18px;
          font-size: 14px;
        }

        .popular-searches span,
        .popular-searches a {
          color: #cfd4ff;
        }

        .popular-searches a {
          margin: 0 6px;
          text-decoration: none;
        }

        .popular-searches a:hover {
          text-decoration: underline;
        }

        .bottom-nav {
          height: 70px;
          background-color: #606cdd;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          font-size: 14px;
        }

        .nav-item {
          cursor: pointer;
          transition: all 0.3s ease;
          color: #e0e3ff;
          white-space: nowrap;
        }

        .nav-item.active {
          color: #ffffff;
          border-bottom: 3px solid #00c853;
          transform: scale(1.05);
        }

        .nav-item:hover {
          transform: translateY(-3px);
          color: #ffffff;
        }

        .new-badge {
          background-color: #00c853;
          font-size: 10px;
          padding: 2px 6px;
          border-radius: 4px;
          margin-left: 5px;
        }
      `}</style>

      <div className="find-doctors-scroll-wrapper">
        <div className="find-doctors-hero-section">
          <div className="hero-content">
            <h1>Your home for health</h1>
            <h2>Find and Book</h2>

            <div className="search-bar">
              <div className="location-box">
                <span className="icon">📍</span>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    setShowLoc(true);
                  }}
                  onBlur={() => setTimeout(() => setShowLoc(false), 200)}
                  placeholder="Enter city"
                />
                {showLoc && location && (
                  <ul className="dropdown">
                    {filterList(locationsList, location).map((loc, i) => (
                      <li key={i} onClick={() => setLocation(loc)}>
                        {loc}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="search-box">
                <span className="icon">🔍</span>
                <input
                  type="text"
                  value={doctor}
                  onChange={(e) => {
                    setDoctor(e.target.value);
                    setShowDoc(true);
                  }}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                  onBlur={() => setTimeout(() => setShowDoc(false), 200)}
                  placeholder="Search doctors, clinics, hospitals, etc."
                />
                {showDoc && doctor && (
                  <ul className="dropdown">
                    {filterList(doctorsList, doctor).map((doc, i) => (
                      <li key={i} onClick={() => {
                        setDoctor(doc);
                        handleSearch(doc);
                      }}>
                        {doc}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            <div className="popular-searches">
              <span>Popular searches:</span>
              <span style={{ cursor: 'pointer', margin: '0 6px' }} onClick={() => navigate(`/search?location=${location}&specialty=Dermatologist`)}>Dermatologist</span>
              <span style={{ cursor: 'pointer', margin: '0 6px' }} onClick={() => navigate(`/search?location=${location}&specialty=Pediatrician`)}>Pediatrician</span>
              <span style={{ cursor: 'pointer', margin: '0 6px' }} onClick={() => navigate(`/search?location=${location}&specialty=Gynecologist`)}>Gynecologist</span>
              <span style={{ cursor: 'pointer', margin: '0 6px' }} onClick={() => navigate(`/search?location=${location}&specialty=Others`)}>Others</span>
            </div>
          </div>
        </div>

        <Hero />
        <Consult />
        <Order />
        <Learn />
      </div>


    </>
  );
};

export default FindDoctors;
