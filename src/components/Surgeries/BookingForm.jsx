// BookingForm.jsx
import React from "react";

const NAVBAR_BANNER_HEIGHT = 150; // adjust according to navbar + banner

const BookingForm = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: NAVBAR_BANNER_HEIGHT + 20,
        width: "350px",
        height: `calc(100vh - ${NAVBAR_BANNER_HEIGHT + 40}px)`,
        flexShrink: 0,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 0 20px rgba(0,0,0,0.08)",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          Book your consultation today
        </h3>

        <form style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <select style={styles.input}>
            <option>Bangalore</option>
            <option>Hyderabad</option>
            <option>Chennai</option>
          </select>

          <select style={styles.input}>
            <option>Select Ailment*</option>
            <option>Piles</option>
            <option>Hernia</option>
            <option>Kidney Stone</option>
          </select>

          <input style={styles.input} type="text" placeholder="Name*" />
          <input
            style={styles.input}
            type="tel"
            placeholder="Contact Number*"
          />

          <button style={styles.button} type="submit">
            Book Appointment
          </button>
        </form>

        <p style={styles.tc}>
          By submitting the form, you agree to Practo's T&C
        </p>

        <div style={styles.or}>OR</div>

        <div style={styles.callBox}>
          📞 <strong>08045685554</strong>
        </div>
      </div>
    </div>
  );
};

const styles = {
  input: {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "14px",
    background: "#28328c",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
  tc: {
    fontSize: "12px",
    textAlign: "center",
    marginTop: "10px",
    color: "#666",
  },
  or: {
    textAlign: "center",
    margin: "15px 0",
    fontWeight: "600",
  },
  callBox: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "12px",
    textAlign: "center",
  },
};

export default BookingForm;
