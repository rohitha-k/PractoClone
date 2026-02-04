// Departments.jsx
import React from "react";

const departments = [
  { name: "General Surgery", ailments: 9, focus: "General Health Issues" },
  { name: "Proctology", ailments: 5, focus: "Anus related issues" },
  { name: "Ophthalmology", ailments: 4, focus: "Eye related issues" },
  { name: "Urology", ailments: 12, focus: "Kidney related issues" },
  { name: "Cosmetic", ailments: 12, focus: "Cosmetic Surgery related" },
  { name: "Orthopedics", ailments: 8, focus: "Knee and Joints related" },
  { name: "ENT", ailments: 6, focus: "Ear, Nose, Throat" },
  { name: "Dermatology", ailments: 7, focus: "Skin related issues" },
  { name: "Cardiology", ailments: 10, focus: "Cardiology related" },
];


const Departments = () => {
  return (
    <div style={styles.leftContent}>
      <h2 style={styles.title}>Our Departments</h2>
      <div style={styles.grid}>
        {departments.map((dept, idx) => (
          <div key={idx} style={styles.card}>
            <div style={styles.info}>
              <strong style={styles.deptName}>{dept.name}</strong>
              <p style={styles.deptFocus}>{dept.focus}</p>
              <p style={styles.deptAilments}>{dept.ailments} ailments</p>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

const styles = {
  leftContent: {
    flex: 1,
    overflowY: "auto",
    maxHeight: "calc(100vh - 150px)", // leave space for navbar/banner
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
    gap: "20px",
  },
  card: {
    background: "#fff",
    borderRadius: "12px",
    textAlign: "center",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    padding: "15px",
  },
  info: {
    marginTop: "5px",
  },
  deptName: {
    fontSize: "16px",
    display: "block",
    marginBottom: "4px",
  },
  deptFocus: {
    fontSize: "13px",
    color: "#666",
    margin: "0 0 4px 0",
  },
  deptAilments: {
    fontSize: "12px",
    color: "#28328c",
    fontWeight: "600",
    margin: 0,
  }
};

export default Departments;
