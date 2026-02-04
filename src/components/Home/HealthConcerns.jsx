import { useNavigate } from "react-router-dom";
import hc1 from "@/assets/hc1.png";
import hc2 from "@/assets/hc2.png";
import hc13 from "@/assets/hc13.png";
import hc4 from "@/assets/hc4.png";
import hc51 from "@/assets/hc51.jpeg";
import hc16 from "@/assets/hc16.jpeg";

const specializations = [
  {
    id: 1,
    title: "Period doubts",
    image: hc1,
  },
  {
    id: 2,
    title: "Skin issues",
    image: hc2,
  },
  {
    id: 3,
    title: "Urology",
    image: hc13,
  },
  {
    id: 4,
    title: "Cold, cough or fever",
    image: hc4,
  },
  {
    id: 5,
    title: "Child not feeling well",
    image: hc51,
  },
  {
    id: 6,
    title: "Depression or anxiety",
    image: hc16,
  },
];


const Specializations = () => {
  const navigate = useNavigate();

  const handleConsultClick = (specialty) => {
    navigate("/consult/direct");
  };

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h4 className="fw-bold">
            Consult top doctors online for any health concern
          </h4>
          <p className="text-muted mb-0">
            Private online consultations with verified doctors in all
            specialists
          </p>
        </div>

        <button className="btn btn-outline-primary">
          View All Specialities
        </button>
      </div>

      {/* Specializations */}
      <div className="row text-center">
        {specializations.map((item) => (
          <div className="col-md-2 col-sm-4 col-6 mb-4" key={item.id}>
            <div className="specialization-card" onClick={() => handleConsultClick(item.title)}>
              <div className="icon-circle mb-3">
                {/* Image goes here */}
                {item.image && <img src={item.image} alt={item.title} />}
              </div>

              <p className="fw-semibold mb-2">{item.title}</p>
              <span className="consult-link">CONSULT NOW</span>
            </div>
          </div>
        ))}

      </div>

      {/* Styles */}
      <style>
        {`
          .specialization-card {
            cursor: pointer;
          }

          .icon-circle {
            width: 110px;
            height: 110px;
            border-radius: 50%;
            background: #f2f6ff;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto;
          }

          .icon-circle img {
            width: 60%;
            height: 60%;
            object-fit: contain;
          }

          .consult-link {
            color: #0d6efd;
            font-size: 0.85rem;
            font-weight: 600;
          }

          .specialization-card:hover .consult-link {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
};

export default Specializations;
