import "../styles/Hero.css";
import img from "../assets/img.avif";
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>
          Skip the travel! <br />
          Take Online Doctor Consultation
        </h1>

        <p className="sub">
          Private consultation + Audio call <br />
          Starts at just <strong>₹199</strong>
        </p>

        <p className="online">+122 Doctors are online</p>

        <button className="consult-btn">Consult Now</button>

        <div className="features">
          <span>✔ Verified Doctors</span>
          <span>✔ Digital Prescription</span>
          <span>✔ Free Followup</span>
        </div>
      </div>

      <div className="hero-right">
        <img src={img} alt="doctor" />
      </div>
    </section>
  );
}
