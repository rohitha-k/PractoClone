import React from "react";
import { FaCheck } from "react-icons/fa";

const Benefits = () => {
    const benefits = [
        {
            title: "Consult Top Doctors 24x7",
            description: "Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.",
        },
        {
            title: "Convenient and Easy",
            description: "Start an instant consultation within 2 minutes or do video consultation at the scheduled time.",
        },
        {
            title: "100% Safe Consultations",
            description: "Be assured that your online consultation will be fully private and secured.",
        },
        {
            title: "Similar Clinic Experience",
            description: "Experience clinic-like consultation through a video call with the doctor.",
        },
        {
            title: "Free Follow-up",
            description: "Get a valid digital prescription and a 7-day free follow-up for further clarifications.",
        },
    ];

    return (
        <section className="py-5 bg-light">
            <div className="container">
                <h2 className="fw-bold mb-5 text-center">Benefits of Online Consultation</h2>
                <div className="row g-4 justify-content-center">
                    {benefits.map((benefit, i) => (
                        <div className="col-md-6 col-lg-4" key={i}>
                            <div className="d-flex gap-3">
                                <div className="mt-1">
                                    <FaCheck className="text-secondary" />
                                </div>
                                <div>
                                    <h5 className="fw-bold mb-2">{benefit.title}</h5>
                                    <p className="text-muted small">{benefit.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
