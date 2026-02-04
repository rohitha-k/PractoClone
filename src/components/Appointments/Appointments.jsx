import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Appointments = () => {
    // Mock data for appointments
    const [appointments, setAppointments] = useState([
        {
            id: 1,
            doctorName: "Dr. Rohitha",
            specialty: "Dentist",
            date: "2024-10-25",
            time: "10:00 AM",
            status: "Completed",
            hospital: "Apollo Hospital, Bangalore"
        },
        {
            id: 2,
            doctorName: "Dr. Aravind",
            specialty: "General Physician",
            date: "2024-11-02",
            time: "05:30 PM",
            status: "Upcoming",
            hospital: "Manipal Hospital, Bangalore"
        }
    ]);

    return (
        <div className="container py-5">
            <h2 className="mb-4 fw-bold">My Appointments</h2>

            {appointments.length === 0 ? (
                <div className="text-center py-5">
                    <h4 className="text-muted">No appointments found</h4>
                    <Link to="/doctors" className="btn btn-primary mt-3">Book an Appointment</Link>
                </div>
            ) : (
                <div className="row">
                    {appointments.map((apt) => (
                        <div key={apt.id} className="col-md-6 mb-4">
                            <div className="card shadow-sm border-0 h-100">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between align-items-start mb-3">
                                        <div>
                                            <h5 className="card-title fw-bold mb-1">{apt.doctorName}</h5>
                                            <p className="text-muted mb-0">{apt.specialty}</p>
                                        </div>
                                        <span className={`badge ${apt.status === 'Upcoming' ? 'bg-primary' : 'bg-success'}`}>
                                            {apt.status}
                                        </span>
                                    </div>
                                    <div className="mb-3">
                                        <p className="mb-1"><strong>Date:</strong> {apt.date}</p>
                                        <p className="mb-1"><strong>Time:</strong> {apt.time}</p>
                                        <p className="mb-0"><strong>Hospital:</strong> {apt.hospital}</p>
                                    </div>
                                    <div className="d-flex gap-2">
                                        {apt.status === 'Upcoming' && (
                                            <button className="btn btn-outline-danger btn-sm">Cancel</button>
                                        )}
                                        <button className="btn btn-outline-primary btn-sm">View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Appointments;
