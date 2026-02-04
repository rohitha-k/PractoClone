import React from "react";
const orderImg = "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";


const Order = () => {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: "Segoe UI", sans-serif;
        }

        body {
          overflow-x: hidden;
        }

        .order-container {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          padding: 80px 40px;
          background: #f4f5f7;
          width: 100%;
          min-height: 100vh;
        }

        /* LEFT CONTENT */
        .order-left {
          width: 55%;
        }

        .order-left h1 {
          font-size: 48px;
          font-weight: 500;
          color: #2d2d2d;
          line-height: 1.25;
          margin-bottom: 25px;
        }

        .order-left h1 span {
          font-weight: 700;
        }

        .order-points {
          list-style: none;
          margin-bottom: 30px;
        }

        .order-points li {
          font-size: 18px;
          color: #555;
          margin-bottom: 14px;
        }

        .order-action {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 40px;
        }

        .order-btn {
          background: #14bef0;
          color: #fff;
          border: none;
          padding: 14px 28px;
          font-size: 16px;
          border-radius: 4px;
          cursor: pointer;
        }

        .order-info {
          font-size: 14px;
          color: #555;
        }

        /* REVIEW */
        .order-review {
          max-width: 480px;
          font-size: 14px;
          color: #666;
          line-height: 1.6;
        }

        .reviewer {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 14px;
          font-size: 13px;
          color: #777;
        }

        /* RIGHT IMAGE */
        .order-right {
        
          width: 45%;
          display: flex;
          justify-content: center;
        }

        .order-illustration {
          width: 420px;
        }
          .order-image {
  width: 100%;
  max-width: 250px;
  margin: 0 auto;
  display: block;
}
      `}</style>

      <div className="order-container">
        {/* LEFT */}
        <div className="order-left">
          <h1>
            Get all your medicines.
            <br />
            <span>Everytime. On time.</span>
          </h1>

          <ul className="order-points">
            <li>✔ Guaranteed availability</li>
            <li>✔ Over 130,000+ genuine medicines</li>
            <li>✔ Home delivery in 24hrs</li>
          </ul>

          <div className="order-action">
            <button className="order-btn">Order Medicines</button>
            <div className="order-info">
              Last order delivered <strong>57 mins</strong> ago
              <br />
              in Mundhwa, Pune
            </div>
          </div>

          <div className="order-review">
            The executive who delivered the Medicine was kind he even waited for
            more than 20 mins and was still smiling and happy.... Awesome Practo
            for having people who like doing what they do...
          </div>

          <div className="reviewer">👤 Kripa Shankari Srinivasan</div>
        </div>

        {/* RIGHT */}
        <div className="order-right">
          <img
            src={orderImg}
            alt="Medicines Illustration"
            className="order-illustration"
          />
        </div>
      </div>

    </>
  );
};

export default Order;
