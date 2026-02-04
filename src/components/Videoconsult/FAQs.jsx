import React from "react";

const faqs = [
    {
        question: "What is online consultation?",
        answer: "Online consultation is a method to connect patients and doctors virtually. It is a convenient way to get medical advice without visiting a clinic.",
    },
    {
        question: "How do I start an online consultation?",
        answer: "You can start by clicking the 'Consult Now' button, selecting a speciality, and then choosing a doctor or getting connected instantly.",
    },
    {
        question: "Is it safe and private?",
        answer: "Yes, your consultations are 100% private and secured with industry-standard encryption.",
    },
    {
        question: "Can I get a prescription?",
        answer: "Yes, doctors can provide a digital prescription which is valid at all pharmacies.",
    },
];

const FAQs = () => {
    return (
        <section className="py-5 bg-light">
            <div className="container" style={{ maxWidth: "800px" }}>
                <h2 className="fw-bold mb-5 text-center">FAQs</h2>
                <div className="accordion border-0 shadow-sm" id="faqAccordion" style={{ borderRadius: "15px", overflow: "hidden" }}>
                    {faqs.map((faq, i) => (
                        <div className="accordion-item border-0 border-bottom" key={i}>
                            <h2 className="accordion-header">
                                <button
                                    className="accordion-button collapsed fw-bold text-dark bg-white"
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target={`#collapse${i}`}
                                    aria-expanded="false"
                                    aria-controls={`collapse${i}`}
                                    style={{ padding: "20px" }}
                                >
                                    {faq.question}
                                </button>
                            </h2>
                            <div
                                id={`collapse${i}`}
                                className="accordion-collapse collapse"
                                data-bs-parent="#faqAccordion"
                            >
                                <div className="accordion-body text-muted small bg-white" style={{ padding: "0 20px 20px 20px" }}>
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
