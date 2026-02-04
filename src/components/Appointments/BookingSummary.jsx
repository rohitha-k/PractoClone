import React from "react";
import { useLocation, Link } from "react-router-dom";

const BookingSummary = () => {
    const location = useLocation();
    const { appointment } = location.state || {}; // Add fallback safety // Update safety

    if (!appointment) {
        return (
            <div className="container py-5 text-center">
                <h2>No appointment details found.</h2>
                <Link to="/" className="btn btn-primary mt-3">Go Home</Link>
            </div>
        );
    }

    return (
        <div className="container py-5 d-flex justify-content-center">
            <div className="card shadow-lg border-0 p-5 text-center" style={{ maxWidth: "600px", width: "100%" }}>
                <div className="mb-4">
                    <div className="bg-success text-white rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: "80px", height: "80px" }}>
                        <span className="fs-1">✓</span>
                    </div>
                </div>
                <h2 className="fw-bold mb-3 text-success">Booking Confirmed!</h2>
                <p className="text-muted mb-4">Your appointment has been successfully booked.</p>

                <div className="text-start bg-light p-4 rounded mb-4">
                    <p className="mb-2"><strong>Doctor:</strong> {appointment.doctorName}</p>
                    <p className="mb-2"><strong>Specialty:</strong> {appointment.specialty}</p>
                    <p className="mb-2"><strong>Date:</strong> {appointment.date}</p>
                    <p className="mb-2"><strong>Time:</strong> {appointment.time}</p>
                    <p className="mb-0"><strong>Hospital:</strong> {appointment.hospital}</p>
                </div>

                <div className="d-flex gap-3 justify-content-center">
                    <Link to="/appointments" className="btn btn-outline-primary">View Appointments</Link>
                    <Link to="/" className="btn btn-primary">Go to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default BookingSummary;
