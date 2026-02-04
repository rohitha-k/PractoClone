import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import doctors from "@/assets/doctors.avif"; // adjust path if needed
import logo from "@/assets/logo.png";
const PractoBanner = () => {
  const styles = {
    hero: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "60px",
      borderRadius: "24px",
      background: "linear-gradient(90deg, #1b2b8f, #5b85c6)",
      color: "#fff",
      overflow: "hidden",
      margin: "30px auto",
    },
    content: {
      maxWidth: "55%",
    },
    logo: {
      height: "80px ",
      marginBottom: "20px",
    },
    heading: {
      fontSize: "36px",
      fontWeight: "700",
      lineHeight: "1.3",
      marginBottom: "20px",
    },
    paragraph: {
      fontSize: "16px",
      lineHeight: "1.6",
      marginBottom: "30px",
      opacity: 0.95,
    },
    button: {
      display: "inline-flex",
      alignItems: "center",
      gap: "15px",
      padding: "14px 22px",
      border: "1.5px solid #fff",
      borderRadius: "10px",
      fontSize: "16px",
      cursor: "pointer",
    },
    phone: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontWeight: "600",
    },
    imageWrapper: {
      maxWidth: "40%",
    },
    image: {
      height: "360px",
      objectFit: "contain",
    },
  };

  return (
    <div style={styles.hero}>
      <div style={styles.content}>
        <img src={logo} alt="Practo Care" style={styles.logo} />

        <h1 style={styles.heading}>
          End to end care from Top Surgeons <br />
          at our Practo Care Clinics
        </h1>

        <p style={styles.paragraph}>
          Talk to our care expert today to book your consultation.
          <br />
          All insurance accepted & No-cost EMI available.
        </p>

        <div style={styles.button}>
          <span>Reach out to us on</span>
          <span style={styles.phone}>
            <FaPhoneAlt /> 08045685554
          </span>
        </div>
      </div>

      <div style={styles.imageWrapper}>
        <img src={doctors} alt="Doctors" style={styles.image} />
      </div>
    </div>
  );
};

export default PractoBanner;
