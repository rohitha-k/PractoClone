import React from "react";

const testimonials = [
    {
        name: "Abhy",
        role: "33 yr old IT Professional",
        text: "I was really sick and couldn't get out of bed. I talked to the doctor through Practo and he shared advice in 10 minutes. I even got the medicines delivered on the same day through Practo, just a WOW experience.",
    },
    {
        name: "Preeti",
        role: "26 yr old IT Professional",
        text: "I was in pain and it was really late at night. I wanted help but couldn't go to see the doctor due to lateness of the hour. Consulted online on Practo and doctor responded immediately.",
    },
    {
        name: "Deepak",
        role: "29 yr old traveller",
        text: "I was travelling to a remote place for scuba diving and injured myself. Tough to find doctors around, so did an online consultation on Practo and hey presto, I have my medicines. Disruptive. Convenient.",
    },
];

const Testimonials = () => {
    return (
        <section className="py-5 bg-white overflow-hidden">
            <div className="container">
                <h2 className="fw-bold mb-5 text-center">What our users say about their online consultation experience</h2>
                <div className="row g-4">
                    {testimonials.map((t, i) => (
                        <div className="col-md-4" key={i}>
                            <div className="card h-100 p-4 border shadow-sm" style={{ borderRadius: "15px" }}>
                                <div className="d-flex align-items-center gap-3 mb-3">
                                    <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: "50px", height: "50px", fontSize: "1.2rem", fontWeight: "bold", color: "#28328c" }}>
                                        {t.name[0]}
                                    </div>
                                    <div>
                                        <h6 className="fw-bold mb-0">{t.name}</h6>
                                        <p className="text-muted small mb-0">{t.role}</p>
                                    </div>
                                </div>
                                <p className="text-muted small italic">"{t.text}"</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
