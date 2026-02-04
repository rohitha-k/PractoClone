import React from "react";
import { Link } from "react-router-dom";

import d1 from "@/assets/d1.jpeg";
import d2 from "@/assets/d2.jpeg";
import d31 from "@/assets/d31.jpeg";
import d4 from "@/assets/d4.jpeg";
import d5 from "@/assets/d5.jpeg";
import d6 from "@/assets/d6.jpeg";
import d7 from "@/assets/d7.jpeg";
import d8 from "@/assets/d8.jpeg";
import d9 from "@/assets/d9.jpeg";
import d10 from "@/assets/d10.jpeg";
import DoctorCard from "./DoctorCard";

const doctors = [
  {
    id: 1,
    name: "Dr. Aisha Khan",
    specialty: "Cardiologist",
    experience: 12,
    rating: 4.8,
    reviews: 245,
    hospital: "City Heart Hospital",
    fee: 1200,
    image: d1,
  },
  {
    id: 2,
    name: "Dr. Rajesh Sharma",
    specialty: "Dentist",
    experience: 8,
    rating: 4.7,
    reviews: 189,
    hospital: "Smile Dental Clinic",
    fee: 800,
    image: d2,
  },
  {
    id: 3,
    name: "Dr. Meera Iyer",
    specialty: "Dermatologist",
    experience: 10,
    rating: 4.9,
    reviews: 312,
    hospital: "Skin Care Center",
    fee: 1000,
    image: d31,
  },
  {
    id: 4,
    name: "Dr. Suresh Gupta",
    specialty: "Neurologist",
    experience: 15,
    rating: 4.9,
    reviews: 234,
    hospital: "Brain & Spine Institute",
    fee: 1500,
    image: d7,
  },
  {
    id: 5,
    name: "Dr. Priya Menon",
    specialty: "Gynecologist",
    experience: 9,
    rating: 4.8,
    reviews: 278,
    hospital: "Women's Health Clinic",
    fee: 1100,
    image: d4,
  },
  {
    id: 6,
    name: "Dr. Amit Joshi",
    specialty: "Orthopedic",
    experience: 11,
    rating: 4.7,
    reviews: 198,
    hospital: "Bone & Joint Hospital",
    fee: 1300,
    image: d8,
  },
  {
    id: 7,
    name: "Dr. Neha Patel",
    specialty: "Pediatrician",
    experience: 9,
    rating: 4.8,
    reviews: 267,
    hospital: "Children's Care Hospital",
    fee: 700,
    image: d6,
  },
  {
    id: 8,
    name: "Dr. Vikram Singh",
    specialty: "ENT Specialist",
    experience: 10,
    rating: 4.6,
    reviews: 156,
    hospital: "ENT Hospital",
    fee: 900,
    image: d10,
  },
  {
    id: 9,
    name: "Dr. Sarah Williams",
    specialty: "Psychiatrist",
    experience: 14,
    rating: 4.9,
    reviews: 182,
    hospital: "Mind Wellness Center",
    fee: 2000,
    image: d5,
  },
  {
    id: 10,
    name: "Dr. Rahul Verma",
    specialty: "Urologist",
    experience: 13,
    rating: 4.7,
    reviews: 145,
    hospital: "UroCare Hospital",
    fee: 1400,
    image: d9,
  },
  {
    id: 11,
    name: "Dr. Anjali Desai",
    specialty: "Ophthalmologist",
    experience: 7,
    rating: 4.8,
    reviews: 198,
    hospital: "Vision Eye Care",
    fee: 900,
    image: d31,
  },
  {
    id: 12,
    name: "Dr. Sameer Malhotra",
    specialty: "Gastroenterologist",
    experience: 16,
    rating: 4.9,
    reviews: 215,
    hospital: "Digestive Health Clinic",
    fee: 1600,
    image: d1,
  },
];

const TopDoctors = () => {
  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">Top Doctors</h2>

      {/* 4 columns layout */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
        {doctors.slice(0, 12).map((doctor) => (
          <div key={doctor.id}>
            <DoctorCard doctor={doctor} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopDoctors;
