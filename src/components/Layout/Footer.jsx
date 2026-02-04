import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-5">
      {/* Top SEO Section */}
      <div className="bg-white py-5 border-top">
        <div className="container" style={{ fontSize: "12px", color: "#787887", lineHeight: "1.8" }}>
          <div className="mb-4">
            <p>Consult a doctor online on Practo for any health concern. Our pool of over 20,000 trusted doctors across 25+ specialities will ensure all your health queries are answered. You can get online dr advice from a Psychiatrist, Dermatologist, Gynecologist, Sexologist, Pediatrician, Cardiologist, Neurologist, Gastroenterologist, Urologist, Endocrinologist, Dentist, Psychologist, and many more. Video consultation with a doctor is available only on Practo's online doctor app.</p>
            <p>Practo serves customers in the following cities: Bangalore, Mumbai, Delhi, Kolkata, Hyderabad, Chennai, Pune, Ahmedabad, Gurgaon and Ghaziabad.</p>
          </div>

          <div className="mb-4">
            <p className="mb-1"><strong className="text-secondary">Recently Answered Questions:</strong> Headache sleeplessness stress | White curd like discharge | Acne mark thyroid issues | Please Help Hiv Fear | Diet plan | Lump on Soft Palate | Tight foreskin | Chest Pain ECG</p>
            <p className="mb-1"><strong className="text-secondary">Topics:</strong> Looking for weight gain tips? | Worried about chest pain? | Want to get rid of dark circles? | How to use prega news kit? | Need some weight loss advice? | Work, family or relationship stress? | Looking to improve digestion? | Painful kidney stones? | Need some sexual advice? | Want to learn how to last longer? | Seek help for lower back pain | Need some advice for irregular periods? | Ask how you can relieve throat pain | Need help with frequent urination? | Have trouble breathing? | Need some dental advice? | Want to get rid of acne scars? | Stomach pain bothering you? | Doubts about periods?</p>
          </div>

          <div>
            <p className="mb-0"><strong className="text-secondary">Specialities:</strong> Ask A Psychiatrist | Ask A Dermatologist | Ask A Sexologist | Ask A Gynecologist | Ask A General Physician Doctor | Ask A Pediatrician Doctor | Ask An Ear Nose Throat Doctor | Ask A Kidney Urine Doctor | Ask An Orthopedic Doctor | Ask A Neurologist Doctor</p>
          </div>
        </div>
      </div>

      {/* Main Link Section */}
      <div className="py-5 text-white" style={{ backgroundColor: "#28328c" }}>
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-6 col-md-4 col-lg-2">
              <h6 className="fw-bold mb-3 text-white">Practo</h6>
              <ul className="list-unstyled small footer-links">
                <li>About</li>
                <li>Blog</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <h6 className="fw-bold mb-3 text-white">For patients</h6>
              <ul className="list-unstyled small footer-links">
                <li>Search for doctors</li>
                <li>Search for clinics</li>
                <li>Search for hospitals</li>
                <li>Book Diagnostic Tests</li>
                <li>Read health articles</li>
                <li>Read about medicines</li>
                <li>Online doctor consultation</li>
                <li>Order medicines</li>
                <li>Practo Drive</li>
                <li>Health app</li>
                <li>Book Full Body Checkups</li>
                <li>Practo Plus</li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <h6 className="fw-bold mb-3 text-white">For doctors</h6>
              <ul className="list-unstyled small footer-links">
                <li>Practo Consult</li>
                <li>Practo Health Feed</li>
                <li>Practo Profile</li>
                <li>Online Doctor Consultation</li>
              </ul>
              <h6 className="fw-bold mt-4 mb-3 text-white">For clinics</h6>
              <ul className="list-unstyled small footer-links">
                <li>Ray by Practo</li>
                <li>Practo Reach</li>
                <li>Ray Tab</li>
                <li>Practo Pro</li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <h6 className="fw-bold mb-3 text-white">For hospitals</h6>
              <ul className="list-unstyled small footer-links">
                <li>Insta by Practo</li>
                <li>Qikwell by Practo</li>
                <li>Practo Profile</li>
                <li>Practo Reach</li>
              </ul>
              <h6 className="fw-bold mt-4 mb-3 text-white">For Corporates</h6>
              <ul className="list-unstyled small footer-links">
                <li>Wellness Plans</li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <h6 className="fw-bold mb-3 text-white">More</h6>
              <ul className="list-unstyled small footer-links">
                <li>Help</li>
                <li>Developers</li>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Subscribers</li>
                <li>Healthcare directory</li>
                <li>Practo Health Wiki</li>
              </ul>
            </div>
            <div className="col-6 col-md-4 col-lg-2">
              <h6 className="fw-bold mb-3 text-white">Social</h6>
              <ul className="list-unstyled small footer-links">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>LinkedIn</li>
                <li>YouTube</li>
                <li>GitHub</li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-4 border-top border-secondary">
            <div className="d-flex flex-column align-items-center">
              <h2 className="fw-bold mb-2">practo</h2>
              <p className="small mb-0 opacity-75">Copyright © 2026, Practo. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
                .footer-links li {
                    margin-bottom: 8px;
                    cursor: pointer;
                    opacity: 0.8;
                }
                .footer-links li:hover {
                    opacity: 1;
                }
                `}
      </style>
    </footer>
  );
};

export default Footer;
