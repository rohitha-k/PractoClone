import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import DoctorCards from "./DoctorCards";
import FiltersBar from "./FiltersBar";
import LocationCard from "./LocationCard";

const DoctorsPage = () => {
  const [searchParams] = useSearchParams();
  const urlSpecialty = searchParams.get("specialty");
  const urlLocation = searchParams.get("location");

  // Default location
  const [selectedLocation, setSelectedLocation] = useState(urlLocation || "Bangalore");
  const [searchTerm, setSearchTerm] = useState(urlSpecialty || "");

  // Doctors data (frontend-only)
  const doctors = [
    {
      id: 1,
      name: "Dr. Venkatesh M J",
      specialty: "Dentist",
      hospital: "All Care Dental Centre",
      location: "Indiranagar",
      experience: 32,
      fee: 300,
    },
    {
      id: 2,
      name: "Dr. D N Naveen",
      specialty: "Dentist",
      hospital: "Smile Dental Clinic",
      location: "Whitefield",
      experience: 30,
      fee: 400,
    },
    {
      id: 3,
      name: "Dr. Ravi Kumar",
      specialty: "Cardiologist",
      hospital: "Heart Care",
      location: "JP Nagar",
      experience: 25,
      fee: 600,
    },
    {
      id: 4,
      name: "Dr. Sarah D'Souza",
      specialty: "Orthopedist",
      hospital: "Bone & Joint Clinic",
      location: "Indiranagar",
      experience: 18,
      fee: 500,
    },
    {
      id: 5,
      name: "Dr. Amit Sharma",
      specialty: "General Physician",
      hospital: "Family Health Care",
      location: "JP Nagar",
      experience: 15,
      fee: 400,
    },
    {
      id: 6,
      name: "Dr. Priya Nair",
      specialty: "Pediatrician",
      hospital: "Kids Wellness Hub",
      location: "Whitefield",
      experience: 12,
      fee: 450,
    },
  ];

  // Filtered doctors state
  const [filteredDoctors, setFilteredDoctors] = useState(doctors);

  // Update filtered doctors whenever location or search changes
  useEffect(() => {
    const filtered = doctors.filter((doc) => {
      const matchLocation = selectedLocation
        ? doc.location.toLowerCase().includes(selectedLocation.toLowerCase())
        : true;
      const matchSearch = searchTerm
        ? doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchTerm.toLowerCase())
        : true;
      return matchLocation && matchSearch;
    });
    setFilteredDoctors(filtered);
  }, [selectedLocation, searchTerm]);


  return (
    <>
      <style>
        {`
    /* ================== SEARCH BAR ================== */
.search-bar {
  display: flex;
  gap: 12px;
  padding: 16px 20px;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  position: sticky;
  top: 0;
  z-index: 10;
}

.search-bar input {
  flex: 1;
  padding: 12px 14px;
  font-size: 14px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  outline: none;
  transition: border 0.2s ease, box-shadow 0.2s ease;
}

.search-bar input:focus {
  border-color: #14aaf5;
  box-shadow: 0 0 0 3px rgba(20, 170, 245, 0.15);
}

.search-bar input:disabled {
  background: #f9fafb;
  color: #6b7280;
  cursor: not-allowed;
}

/* ================== FILTER BAR ================== */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  padding: 12px 16px;
  background-color: #f5f5f5;
  border-radius: 8px;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  margin-bottom: 20px;
}

.filter-item {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #333;
}

.filter-item label {
  margin-bottom: 4px;
  font-weight: 500;
}

.filter-item select,
.filter-item input[type="text"] {
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #fff;
  transition: border-color 0.2s, box-shadow 0.2s;
}

.filter-item select:focus,
.filter-item input[type="text"]:focus {
  border-color: #007bff;
  box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.2);
  outline: none;
}

.filter-item button {
  padding: 6px 12px;
  background-color: #007bff;
  border: none;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.2s;
}

.filter-item button:hover {
  background-color: #0056b3;
}

@media (max-width: 600px) {
  .filter-bar {
    flex-direction: column;
    align-items: stretch;
  }

  .filter-item {
    width: 100%;
  }
}

/* ================== DOCTOR CARD ================== */
.doctor-card {
  display: flex;
  gap: 18px;
  padding: 18px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  margin-bottom: 18px;
  transition: all 0.25s ease;
}

.doctor-card:hover {
  box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  transform: translateY(-2px);
}

.doctor-img {
  width: 96px;
  height: 96px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #f1f5f9;
}

.doctor-info {
  flex: 1;
}

.doctor-name {
  font-size: 17px;
  font-weight: 600;
  color: #2563eb;
  margin-bottom: 4px;
  cursor: pointer;
}

.doctor-name:hover {
  text-decoration: underline;
}

.doctor-meta {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 6px;
}

.doctor-location {
  font-size: 13px;
  color: #6b7280;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 8px;
}

.doctor-fee {
  font-size: 14px;
  font-weight: 600;
  color: #16a34a;
  margin-bottom: 8px;
}

.doctor-rating {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
}

.rating-pill {
  background: #16a34a;
  color: white;
  padding: 3px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
}

.doctor-actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  min-width: 170px;
}

.book-btn {
  background: #14aaf5;
  border: none;
  color: white;
  padding: 10px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.book-btn:hover {
  background: #0f8fd6;
}

.contact-btn {
  background: white;
  border: 1px solid #14aaf5;
  color: #14aaf5;
  padding: 9px;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
}

.contact-btn:hover {
  background: #f0f7ff;
}

/* ================== LOCATION CARD ================== */
.location-card {
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 18px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 90px;
}

.location-title {
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 6px;
  color: #111827;
}

.location-sub {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 14px;
}

.locations {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.location-pill {
  padding: 7px 12px;
  font-size: 13px;
  border-radius: 20px;
  border: 1px solid #d1d5db;
  background: #fff;
  cursor: pointer;
  transition: all 0.25s ease;
}

.location-pill:hover {
  background: #f0f7ff;
  border-color: #14aaf5;
  color: #14aaf5;
}

.location-pill.active {
  background: #14aaf5;
  color: #fff;
  border-color: #14aaf5;
  box-shadow: 0 2px 6px rgba(20, 170, 245, 0.4);
}

.current-btn {
  margin-top: 16px;
  width: 100%;
  padding: 10px;
  border-radius: 6px;
  border: none;
  background: #14aaf5;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

.current-btn:hover {
  background: #0f8fd6;
}

/* ================== GENERAL LAYOUT ================== */
.content {
  display: flex;
  gap: 20px;
}

.left {
  flex: 3;
}

.right {
  flex: 1;
}

@media (max-width: 900px) {
  .content {
    flex-direction: column;
  }

  .right {
    width: 100%;
  }
`}
      </style>
      {/* Search bar */}
      <div className="search-bar">
        <input
          value={selectedLocation}
          disabled
          placeholder="Current Location"
        />
        <input
          placeholder="Search doctor, clinic, specialty..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Filter Bar */}
      <FiltersBar
        locations={["Indiranagar", "Whitefield", "JP Nagar"]}
        onFilterLocation={setSelectedLocation}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <div className="content" style={{ display: "flex", gap: "20px" }}>
        <div className="left" style={{ flex: 3 }}>
          <h2>
            {filteredDoctors.length} doctor
            {filteredDoctors.length !== 1 ? "s" : ""} available in{" "}
            {selectedLocation}
          </h2>

          {filteredDoctors.map((doctor) => (
            <DoctorCards key={doctor.id} doctor={doctor} />
          ))}
        </div>

        <div className="right" style={{ flex: 1 }}>
          <LocationCard
            selectedLocation={selectedLocation}
            onSelectLocation={setSelectedLocation}
          />
        </div>
      </div>
    </>
  );
};

export default DoctorsPage;
