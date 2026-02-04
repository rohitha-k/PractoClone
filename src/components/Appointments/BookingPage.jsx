import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const BookingPage = () => {
    const { doctorId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [user, setUser] = useState(null);

    // Mock Doctor Data (In a real app, fetch by doctorId)
    const doctor = {
        id: doctorId,
        name: location.state?.doctorName || "Dr. Sarah Smith",
        specialty: location.state?.specialty || "Dentist",
        hospital: location.state?.hospital || "Apollo Hospital, Bangalore",
        fee: "₹500"
    };

    const [selectedSlot, setSelectedSlot] = useState(null);
    const [patientDetails, setPatientDetails] = useState({
        name: "",
        age: "",
        gender: "Male",
        phone: ""
    });

    // Slots Mock Data
    const slots = [
        "10:00 AM", "10:30 AM", "11:00 AM",
        "04:00 PM", "04:30 PM", "05:00 PM"
    ];

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setPatientDetails(prev => ({ ...prev, name: JSON.parse(storedUser).fullName, phone: JSON.parse(storedUser).mobile || "" }));
        }
    }, []);

    const handleBook = () => {
        if (!selectedSlot) {
            toast.error("Please select a time slot");
            return;
        }
        if (!patientDetails.name || !patientDetails.age || !patientDetails.phone) {
            toast.error("Please fill in all patient details");
            return;
        }

        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (!isLoggedIn) {
            toast.info("Please login to complete booking");
            // Redirect to login, passing current location to return to
            navigate("/login", { state: { from: location.pathname, doctorName: doctor.name, specialty: doctor.specialty, hospital: doctor.hospital } });
            return;
        }

        // Logic to save appointment (mock)
        const newAppointment = {
            id: Date.now(),
            doctorName: doctor.name,
            specialty: doctor.specialty,
            date: new Date().toISOString().split('T')[0], // Today
            time: selectedSlot,
            status: "Upcoming",
            hospital: doctor.hospital
        };

        // In a real app, post to API. Here we just simulate success.
        console.log("Booking Appointment:", newAppointment);
        toast.success("Appointment Booked Successfully!");
        navigate("/booking-summary", { state: { appointment: newAppointment } });
    };

    return (
        <div className="container py-5">
            <h2 className="fw-bold mb-4">Book Appointment</h2>
            <div className="row">
                {/* Doctor Details */}
                <div className="col-md-4 mb-4">
                    <div className="card shadow-sm border-0 p-3">
                        <div className="d-flex align-items-center mb-3">
                            <div className="bg-light rounded-circle p-3 me-3">
                                <span className="fs-3">👨‍⚕️</span>
                            </div>
                            <div>
                                <h5 className="fw-bold mb-0">{doctor.name}</h5>
                                <p className="text-muted mb-0">{doctor.specialty}</p>
                            </div>
                        </div>
                        <hr />
                        <p className="mb-1"><strong>Hospital:</strong> {doctor.hospital}</p>
                        <p className="mb-1"><strong>Consultation Fee:</strong> {doctor.fee}</p>
                    </div>
                </div>

                {/* Booking Form */}
                <div className="col-md-8">
                    <div className="card shadow-sm border-0 p-4">
                        <h5 className="fw-bold mb-3">Select Time Slot</h5>
                        <div className="d-flex flex-wrap gap-2 mb-4">
                            {slots.map(slot => (
                                <button
                                    key={slot}
                                    className={`btn ${selectedSlot === slot ? 'btn-primary' : 'btn-outline-secondary'}`}
                                    onClick={() => setSelectedSlot(slot)}
                                >
                                    {slot}
                                </button>
                            ))}
                        </div>

                        <h5 className="fw-bold mb-3">Patient Details</h5>
                        <div className="mb-3">
                            <label className="form-label">Patient Name</label>
                            <input
                                type="text"
                                className="form-control"
                                value={patientDetails.name}
                                onChange={(e) => setPatientDetails({ ...patientDetails, name: e.target.value })}
                            />
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Age</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    value={patientDetails.age}
                                    onChange={(e) => setPatientDetails({ ...patientDetails, age: e.target.value })}
                                />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Gender</label>
                                <select
                                    className="form-select"
                                    value={patientDetails.gender}
                                    onChange={(e) => setPatientDetails({ ...patientDetails, gender: e.target.value })}
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="form-label">Phone Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                value={patientDetails.phone}
                                onChange={(e) => setPatientDetails({ ...patientDetails, phone: e.target.value })}
                            />
                        </div>

                        <button className="btn btn-primary w-100 py-2 fs-5 fw-bold" onClick={handleBook}>
                            Confirm Booking
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingPage;
