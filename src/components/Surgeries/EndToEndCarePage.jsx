// EndToEndCarePage.js
import React from "react";
import VideoSection from "./VideoSection";

const EndToEndCarePage = () => {
  const assistanceSteps = [
    "Travel Assistance",
    "Insurance Paperwork",
    "Admission Procedure",
    "Discharge Formalities",
    "Pre-surgery tests"
  ];

  return (
    <div style={styles.container}>
      <VideoSection
        title="End to end care explained"
        videoUrl="https://www.youtube.com/embed/cmoqoTc3bgk"
        description="We focus on providing you the best experience and support you at every step on your road to recovery"
      />

      <div style={styles.assistanceSection}>
        <h3 style={styles.heading}>Get complete assistance from Admission to Discharge</h3>
        <div style={styles.stepsGrid}>
          {assistanceSteps.map((step, idx) => (
            <div key={idx} style={styles.stepCard}>
              <div style={styles.dot}></div>
              <span style={styles.stepText}>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    marginTop: "40px",
  },
  assistanceSection: {
    backgroundColor: "#f8f9fa",
    padding: "30px",
    borderRadius: "15px",
    marginTop: "40px",
  },
  heading: {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#28328c",
  },
  stepsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
  },
  stepCard: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  dot: {
    width: "8px",
    height: "8px",
    backgroundColor: "#28328c",
    borderRadius: "50%",
  },
  stepText: {
    fontSize: "14px",
    color: "#333",
  }
};


export default EndToEndCarePage;
