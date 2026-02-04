import React from "react";

const locations = [
  "JP Nagar",
  "Whitefield",
  "HSR Layout",
  "Indiranagar",
  "Sarjapur Road",
];

const LocationCard = ({ selectedLocation, onSelectLocation }) => {
  return (
    <div className="location-card">
      <h3 className="location-title">
        Provide current location to see Doctors near you
      </h3>

      <p className="location-sub">
        You are seeing results from <strong>{selectedLocation}</strong>
      </p>

      <div className="locations">
        {locations.map((loc) => (
          <span
            key={loc}
            className={`location-pill ${
              selectedLocation === loc ? "active" : ""
            }`}
            onClick={() => onSelectLocation(loc)}
          >
            {loc}
          </span>
        ))}
      </div>

      <button
        className="current-btn"
        onClick={() => onSelectLocation("Bangalore")}
      >
        📍 Use Current Location
      </button>
    </div>
  );
};

export default LocationCard;
