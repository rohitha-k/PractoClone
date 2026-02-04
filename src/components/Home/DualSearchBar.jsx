import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";

const DualSearchBar = () => {
    const [location, setLocation] = useState("Bangalore");
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        if (e.key === "Enter" || e.type === "click") {
            navigate(`/doctors?specialty=${search}&location=${location}`);
        }
    };

    return (
        <div className="search-container shadow-sm border rounded-lg d-flex align-items-center bg-white mx-auto mt-n5 position-relative z-index-10" style={{ maxWidth: "850px", height: "60px" }}>
            <div className="location-box d-flex align-items-center px-3 border-end" style={{ flex: "1", minWidth: "200px" }}>
                <FaMapMarkerAlt className="text-primary me-2" />
                <input
                    type="text"
                    className="border-0 bg-transparent w-100 outline-none"
                    placeholder="Enter locality/city"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>
            <div className="search-box d-flex align-items-center px-3" style={{ flex: "2" }}>
                <FaSearch className="text-muted me-2" />
                <input
                    type="text"
                    className="border-0 bg-transparent w-100 outline-none"
                    placeholder="Search doctors, clinics, hospitals, etc."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={handleSearch}
                />
            </div>

            <style>{`
                .outline-none:focus {
                    outline: none;
                }
                .z-index-10 {
                    z-index: 10;
                }
                .mt-n5 {
                    margin-top: -30px !important;
                }
            `}</style>
        </div>
    );
};

export default DualSearchBar;
