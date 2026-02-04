import React from "react";

const Stats = () => {
    const stats = [
        { label: "Happy Users", value: "2,00,000+" },
        { label: "Verified Doctors", value: "20,000+" },
        { label: "Specialities", value: "25+" },
        { label: "App Rating", value: "4.5 / 5" },
    ];

    return (
        <section className="py-4" style={{ backgroundColor: "#28328c", color: "white" }}>
            <div className="container">
                <div className="row text-center gy-3">
                    {stats.map((stat, i) => (
                        <div className="col-6 col-md-3" key={i}>
                            <h3 className="fw-bold mb-1">{stat.value}</h3>
                            <p className="mb-0 small text-white-50">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
