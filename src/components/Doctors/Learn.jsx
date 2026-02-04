import React, { useState, useEffect } from "react";

const Learn = () => {
  /* --------- DYNAMIC IMAGE SOURCES (ONLINE) --------- */
  const images = [
    "https://static.practo.com/web-assets/images/providers/calendar.png",
    "https://static.practo.com/web-assets/images/providers/profile.png",
  ];

  const [activeImg, setActiveImg] = useState(0);

  /* --------- AUTO IMAGE SWITCH (OPTIONAL, SUBTLE) --------- */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImg((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: "Segoe UI", sans-serif;
        }

        .learn-container {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          padding: 90px 40px;
          background: #f4f5f7;
          min-height: 100vh;
          width: 100%;
          position: relative;
        }

        /* LEFT CONTENT */
        .learn-left {
          width: 50%;
        }

        .learn-left h1 {
          font-size: 46px;
          font-weight: 400;
          color: #2d2d2d;
          line-height: 1.25;
          margin-bottom: 24px;
        }

        .learn-left h1 span {
          font-weight: 700;
        }

        .learn-points {
          list-style: none;
          margin-bottom: 28px;
        }

        .learn-points li {
          font-size: 17px;
          color: #555;
          margin-bottom: 14px;
        }

        .learn-btn {
          background: #14bef0;
          color: #fff;
          border: none;
          padding: 14px 26px;
          font-size: 16px;
          border-radius: 4px;
          cursor: pointer;
          margin-bottom: 34px;
        }

        /* REVIEW */
        .learn-review {
          font-size: 14px;
          color: #666;
          line-height: 1.6;
          max-width: 460px;
        }

        .learn-user {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
          font-size: 13px;
          color: #777;
        }

        /* RIGHT IMAGE AREA */
        .learn-right {
          width: 50%;
          display: flex;
          justify-content: center;
          position: relative;
        }

        .dashboard-img {
          width: 520px;
          transition: opacity 0.5s ease;
        }


        /* COMPANY LOGOS */
        .logos {
          position: absolute;
          bottom: 50px;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: space-evenly;
          padding: 0 40px;
          opacity: 0.35;
        }

        .logos img {
          height: 32px;
        }
      `}</style>

      <div className="learn-container">
        {/* LEFT */}
        <div className="learn-left">
          <h1>
            Leading Healthcare Providers.
            <br />
            <span>Trust us for Business</span>
          </h1>

          <ul className="learn-points">
            <li>
              ✔ Get seen by <strong>25M+</strong> patients on Practo.com
            </li>
            <li>✔ The most advanced software for clinics and hospitals</li>
            <li>✔ State of the art business analytics for enterprises</li>
          </ul>

          <button className="learn-btn">Learn more</button>

          <div className="learn-review">
            Enjoying all the programs that too through one app. but for Physio
            people pls add a column for notes instead of prescription.
          </div>

          <div className="learn-user">👤 Nidhi Kumar</div>
        </div>

        {/* RIGHT */}
        <div className="learn-right">
          <img
            src={images[activeImg]}
            alt="Practo dashboard"
            className="dashboard-img"
          />
        </div>

        {/* COMPANY LOGOS */}
        <div className="logos">
          <img
            src="https://static.practo.com/web-assets/images/providers/suguna.svg"
            alt=""
          />
          <img
            src="https://static.practo.com/web-assets/images/providers/pratiksha.svg"
            alt=""
          />
          <img
            src="https://static.practo.com/web-assets/images/providers/nmc.svg"
            alt=""
          />
          <img
            src="https://static.practo.com/web-assets/images/providers/vps.svg"
            alt=""
          />
        </div>
      </div>

    </>
  );
};

export default Learn;
