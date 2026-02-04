import React from "react";

const Hero = () => {
  const mobileHospitals = [
    {
      name: "Fortis",
      specialists: 32,
      img: "https://via.placeholder.com/40",
    },
    {
      name: "MAX Healthcare",
      specialists: 32,
      img: "https://via.placeholder.com/40",
    },
    {
      name: "Sakra World Hospital",
      specialists: 26,
      img: "https://via.placeholder.com/40",
    },
    {
      name: "Apollo Hospitals",
      specialists: 40,
      img: "https://via.placeholder.com/40",
    },
    {
      name: "Manipal Hospital",
      specialists: 29,
      img: "https://via.placeholder.com/40",
    },
  ];

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Segoe UI", sans-serif;
        }

        body {
          overflow-x: hidden;
          background-color:white;
        }

        .hero-container {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          padding: 60px 40px;
          min-height: 80vh;
          width: 100%;
        }

        .hero-left {
          width: 60%;
        }

        .hero-left h1 {
          font-size: 46px;
          line-height: 1.3;
          color: #050404;
        }

        .hero-left span {
          font-weight: 700;
        }

        .features {
          margin: 22px 0;
          list-style: none;
        }

        .features li {
          font-size: 17px;
          color: #555;
          margin-bottom: 10px;
        }

        .cta-btn {
          background: #14bef0;
          color: #fff;
          border: none;
          padding: 14px 30px;
          font-size: 16px;
          border-radius: 4px;
          cursor: pointer;
        }

        .review {
          margin-top: 35px;
          max-width: 420px;
        }

        .stars {
          color: green;
          font-size: 18px;
        }

        .review p {
          font-size: 14px;
          color: #666;
          margin-top: 8px;
        }

        /* RIGHT SIDE */
        .hero-right {
          width: 40%;
          display: flex;
          justify-content: center;
        }

        .mobile-frame {
          width: 290px;
          height: 520px;
          border-radius: 30px;
          border: 2px solid #040303;
          background: #fafafa;
          overflow: hidden;
          padding: 15px;
        }

        /* SLIDER */
        .slider {
          display: flex;
          flex-direction: column;
          animation: slideUp 12s linear infinite;
        }

        @keyframes slideUp{
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .mobile-card {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #fff;
          padding: 12px;
          margin-bottom: 12px;
          border-radius: 10px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.08);
        }

        .mobile-card img {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
        }

        .mobile-card h4 {
          font-size: 14px;
          color: #333;
        }

        .mobile-card p {
          font-size: 12px;
          color: #777;
        }
      `}</style>

      <div className="hero-container">
        {/* LEFT */}
        <div className="hero-left">
          <h1>
            Instant appointment with <br />
            doctors.<span>Guaranteed.</span>
          </h1>

          <ul className="features">
            <li>✔ 100,000 Verified doctors</li>
            <li>✔ 3M+ Patient recommendations</li>
            <li>✔ 25M Patients/year</li>
          </ul>

          <button className="cta-btn">Find me the right doctor</button>

          <div className="review">
            <div className="stars">★★★★★</div>
            <p>
              Very helpful. Far easier than doing same things on computer.
              Allows quick and easy search with speedy booking.
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="mobile-frame">
            <div className="slider">
              {[...mobileHospitals, ...mobileHospitals].map((item, index) => (
                <div className="mobile-card" key={index}>
                  <img src={item.img} alt={item.name} />
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.specialists} Specialists</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
