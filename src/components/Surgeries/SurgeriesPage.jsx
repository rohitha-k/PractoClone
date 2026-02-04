import React from "react";
import SurgeriesHero from "./SurgeriesHero";
import PractoBanner from "./PractoBanner";
import Departments from "./Departments";
import BookingForm from "./BookingForm";
import ClinicsGallery from "./ClinicGallery";
import PractoBenefits from "./PractoBenefits";
import EndToEndCarePage from "./EndToEndCarePage";

const NAVBAR_BANNER_HEIGHT = 150; // adjust to your navbar + banner height

const SurgeriesPage = () => {
  return (
    <div>
      {/* Banner spans full width */}
      <PractoBanner />

      {/* Main content: left and right */}
      <div style={styles.pageContainer}>
        {/* Left content */}
        <div style={styles.leftContent}>
          <SurgeriesHero />
          <Departments />
          <PractoBenefits />
          <EndToEndCarePage />
          {/*<ClinicsGallery />*/}
        </div>

        {/* Right sticky booking form */}
        <div style={styles.rightContent}>
          <BookingForm />
        </div>
      </div>

      {/* City Listing Section */}
      <div style={styles.citySection}>
        <h2 style={styles.cityHeading}>Practo Care in your city</h2>
        <p style={styles.citySub}>Find expert surgeons near you</p>
        <div style={styles.cityGrid}>
          {["Bangalore", "Delhi NCR", "Mumbai", "Hyderabad", "Ahmedabad", "Pune", "Jaipur", "Kolkata", "Indore", "Lucknow", "Chandigarh", "Ernakulam", "Coimbatore", "Kanpur", "Mysore", "Bhubaneswar", "Vijayawada", "Visakhapatnam", "Bhopal", "Nagpur", "Chennai", "NOIDA"].map((city, i) => (
            <span key={i} style={styles.cityPill}>{city}</span>
          ))}
        </div>
      </div>
    </div>

  );
};

const styles = {
  pageContainer: {
    display: "flex",
    alignItems: "flex-start",
    gap: "20px",
    padding: "20px",
  },
  leftContent: {
    flex: 1,
    // Removed maxHeight and overflowY to make full content visible
  },
  rightContent: {
    flexShrink: 0,
    position: "sticky",
    top: NAVBAR_BANNER_HEIGHT + 20, // sticky below navbar + banner
    width: "350px", // width of booking form
    height: `calc(100vh - ${NAVBAR_BANNER_HEIGHT + 40}px)`,
  },
  citySection: {
    backgroundColor: "#fff",
    padding: "60px 40px",
    marginTop: "60px",
    borderTop: "1px solid #ebebeb",
    textAlign: "center",
  },
  cityHeading: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#2d2d32",
    marginBottom: "8px",
  },
  citySub: {
    fontSize: "14px",
    color: "#787887",
    marginBottom: "32px",
  },
  cityGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "12px",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  cityPill: {
    padding: "8px 24px",
    borderRadius: "20px",
    border: "1px solid #e0e0e0",
    fontSize: "14px",
    color: "#414146",
    cursor: "pointer",
    transition: "all 0.2s ease",
  },
};

export default SurgeriesPage;
