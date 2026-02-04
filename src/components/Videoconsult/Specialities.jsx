import "../styles/Specialities.css";

const specialities = [
  "Gynecology",
  "Sexology",
  "General Physician",
  "Dermatology",
  "Cardiology",
  "Gastroenterology",
];

export default function Specialities() {
  return (
    <section className="specialities">
      <div className="header">
        <h2>25+ Specialities</h2>
        <button className="see-btn">See all Specialities</button>
      </div>

      <div className="grid">
        {specialities.map((item, i) => (
          <div className="card" key={i}>
            <div className="icon"></div>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
