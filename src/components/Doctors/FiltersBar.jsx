import React from "react";

const FiltersBar = ({
  locations,
  onFilterLocation,
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <div className="filter-bar">
      <div className="filter-item">
        <label>Location</label>
        <select
          value={locations.find((loc) => loc === searchTerm) || ""}
          onChange={(e) => onFilterLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          {locations.map((loc, idx) => (
            <option key={idx} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      <div className="filter-item">
        <label>Search</label>
        <input
          type="text"
          placeholder="Search doctors..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default FiltersBar;
