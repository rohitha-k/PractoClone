import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Consult = () => {
  /* ---------------- DOCTOR COUNT ---------------- */
  const [doctorCount, setDoctorCount] = useState(97596);

  useEffect(() => {
    const interval = setInterval(() => {
      setDoctorCount((prev) => prev + Math.floor(Math.random() * 2 + 1));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  /* ---------------- CHAT MESSAGES ---------------- */
  const fullChat = [
    {
      from: "patient",
      text: "Hello doctor, I recently had a full body checkup.",
    },
    { from: "doctor", text: "Hi Sathwik. Please share your report." },
    { from: "patient", text: "Body checkup report.pdf", file: true },
    {
      from: "doctor",
      text: "You have vitamin D deficiency. Others look fine.",
    },
  ];

  const [messages, setMessages] = useState([]);
  const [chatIndex, setChatIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMessages((prev) => [...prev, fullChat[chatIndex]]);
      setChatIndex((prev) => (prev + 1) % fullChat.length);

      if (messages.length > 6) {
        setMessages((prev) => prev.slice(1));
      }
    }, 2200);

    return () => clearInterval(interval);
  }, [chatIndex, messages.length]);

  /* ---------------- CAROUSEL ---------------- */
  const slides = [
    "Consult top doctors anytime from home",
    "Verified doctors with instant replies",
    "Secure chat and video consultations",
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
      setDotCount((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Segoe UI", sans-serif;
        }

        body, html {
          overflow-x: hidden;
        }

        .consult-container {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          padding: 60px 40px;
          min-height: 100vh;
          background: #f4f5f7;
          width: 100%;
        }

        /* -------- MOBILE -------- */
        .mobile {
          width: 300px;
          height: 580px;
          background: #fff;
          border-radius: 40px;
          border: 1px solid #ddd;
          overflow: hidden;
        }

        .mobile-header {
          background: #3f51b5;
          color: white;
          padding: 14px;
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .avatar {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #959fdf;
        }

        .chat-body {
          padding: 15px;
          height: calc(100% - 60px);
          overflow: hidden;
        }

        .bubble {
          max-width: 55%;
          padding: 10px 12px;
          font-size: 13px;
          margin-bottom: 10px;
          border-radius: 10px;
          animation: slideIn 0.4s ease;
        }

        .patient {
          background: #e1f5fe;
          margin-left: auto;
        }

        .doctor {
          background: #6cec53;
          margin-right: auto;
        }

        .file {
          background: #14bef0;
          color: white;
        }

        @keyframes slideIn {
          from { transform: translateY(10px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        /* -------- RIGHT CONTENT -------- */
        .right {
          width: 55%;
        }

        .right h1 {
          font-size: 42px;
          color: #333;
          line-height: 1.3;
        }

        .right span {
          font-weight: 700;
        }

        .points {
          margin: 22px 0;
          list-style: none;
        }

        .points li {
          font-size: 17px;
          color: #555;
          margin-bottom: 10px;
        }

        .cta {
          background: #14bef0;
          color: white;
          border: none;
          padding: 14px 32px;
          border-radius: 4px;
          cursor: pointer;
        }

        .online {
          margin-left: 14px;
          display: inline-flex;
          align-items: center;
          font-size: 16px;
          color: #555;
        }

        .pulse {
          width: 3px;
          height: 3px;
          background: #14bef0;
          border-radius: 50%;
          margin-right: 6px;
          animation: pulse 1.2s infinite;
          transform: scale(${1 + dotCount * 0.02});
        }

        @keyframes pulse {
          0% { opacity: 0.6; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }

        /* -------- CAROUSEL -------- */
        .app-carousel {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .carousel-text {
          width: 60%;
          background: #eae3e3;
          padding: 18px 22px;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.08);
        }

        .slide-text {
          font-size: 15px;
          margin-bottom: 10px;
        }



        .chat-box {
          width: 55%;
        }

        .chat-bubble {
          background: #e5f7ef;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 13px;
        }
      `}</style>

      <div className="consult-container">
        {/* MOBILE */}
        <div className="mobile">
          <div className="mobile-header">
            <div className="avatar"></div>
            <div>
              <strong>Dr. Sahasra Joseph</strong>
              <div style={{ fontSize: "11px" }}>Consultation active</div>
            </div>
          </div>

          <div className="chat-body">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`bubble ${msg.from} ${msg.file ? "file" : ""}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="right">
          <h1>
            Skip the waiting room. <br />
            <span>Consult with a doctor</span>
          </h1>

          <ul className="points">
            <li>✔ Fees starting at ₹99</li>
            <li>✔ Verified doctors respond in 5 minutes</li>
            <li>✔ 100% Private & confidential</li>
          </ul>

          <Link to="/consult/direct" className="cta text-decoration-none">Consult now</Link>
          <br />
          <br />

          <span className="online">
            <span className="pulse"></span>
            {doctorCount.toLocaleString()} doctors online
          </span>
          <br />
          <br />
          {/* CAROUSEL */}
          <div className="app-carousel">
            <div className="carousel-text">
              <p className="slide-text">{slides[activeSlide]}</p>
            </div>

            <div className="chat-box">
              <div className="chat-bubble">Doctor is typing…</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consult;
