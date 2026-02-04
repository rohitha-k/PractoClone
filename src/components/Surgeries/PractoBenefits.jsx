// PractoBenefits.jsx
import React from "react";
import { FaUserMd, FaRobot, FaHeadset, FaMoneyBillWave } from "react-icons/fa";

const benefits = [
  {
    icon: <FaUserMd size={28} color="#28328c" />,
    title: "Expert surgeons",
    description: "Qualified & Experienced Specialists",
  },
  {
    icon: <FaRobot size={28} color="#28328c" />,
    title: "Advanced Surgical Procedures",
    description: "Employing Modern & Cutting-edge Medical Technologies",
  },
  {
    icon: <FaHeadset size={28} color="#28328c" />,
    title: "Personal Care Assistants",
    description:
      "Assistance at every step of your journey. Post-Operative Care & Support",
  },
  {
    icon: <FaMoneyBillWave size={28} color="#28328c" />,
    title: "Financial Aid & Assistance",
    description:
      "100% transparency in Pricing and No-Cost EMI Options available",
  },
];


const PractoBenefits = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Practo Care Benefits</h2>
      <div style={styles.list}>
        {benefits.map((b, idx) => (
          <div key={idx} style={styles.item}>
            <div style={styles.icon}>{b.icon}</div>
            <div>
              <h4 style={styles.title}>{b.title}</h4>
              <p style={styles.desc}>{b.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "50px auto",
    padding: "0 20px",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "25px",
    textAlign: "center",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  item: {
    display: "flex",
    alignItems: "center", // ✅ FIX
    gap: "15px",
    padding: "15px 0",
    borderBottom: "1px solid #eee",
  },
  text: {
    display: "flex",
    flexDirection: "column",
  },

  icon: {
    flexShrink: 0,
  },
  title: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "600",
  },
  desc: {
    margin: "4px 0 0 0",
    fontSize: "14px",
    color: "#555",
  },
};

export default PractoBenefits;
