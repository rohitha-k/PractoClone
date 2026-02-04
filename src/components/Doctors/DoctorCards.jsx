import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const DoctorCards = ({ doctor }) => {
  const navigate = useNavigate();

  const handleBook = () => {
    navigate(`/booking/${doctor.id}`, {
      state: {
        doctorName: doctor.name,
        specialty: doctor.specialty,
        hospital: doctor.hospital
      }
    });
  };


  return (
    <div className="doctor-card">
      <img
        src={doctor.image || "https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg"}
        alt={doctor.name}
        className="doctor-img"
      />

      <div className="doctor-info">
        <div className="doctor-name">{doctor.name}</div>

        <div className="doctor-meta">
          {doctor.specialty} • {doctor.experience} yrs experience
        </div>

        <div className="doctor-location">📍 {doctor.location}</div>

        <div className="doctor-fee">₹{doctor.fee} Consultation fee</div>

        <div className="doctor-rating">
          <span className="rating-pill">4.8 ★</span>
          <span className="ms-2">95% (45 Patient Stories)</span>
        </div>

        <div className="patient-benefit mt-2 text-success" style={{ fontSize: "0.9rem" }}>
          <span className="me-2">✓ Verified Professional</span>
          <span>• 15 min wait time</span>
        </div>
      </div>

      <div className="doctor-actions">
        <button className="book-btn" onClick={handleBook}>Book Clinic Visit</button>

        <button className="contact-btn">Contact Clinic</button>
      </div>
    </div>
  );
};

export default DoctorCards;

