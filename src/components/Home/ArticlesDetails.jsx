import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import art1 from "@/assets/art12.jpg";
import art2 from "@/assets/art2.jpeg";
import art3 from "@/assets/art3.jpeg";
import art4 from "@/assets/art4.jpeg";

const articleDetails = [
  {
    id: 1,
    title: "5 Symptoms You Should Never Ignore",
    category: "Health Tips",
    doctor: "Dr. Neha Patil (MBBS)",
    image: art1,
    content: [
      "Never ignore these 5 critical symptoms: chest pain or pressure, sudden shortness of breath, severe headaches, unexplained weight loss or fatigue, and sudden changes in vision or speech.",
      "Chest Pain or Pressure: Pain spreading to the arm, jaw, or neck may indicate a heart attack.",
      "Sudden Shortness of Breath: Can signal pneumonia, heart failure, or pulmonary embolism.",
      "Severe Headache: A sudden, intense headache may indicate stroke or aneurysm.",
      "Unexplained Weight Loss or Fatigue: Could be signs of cancer, diabetes, or autoimmune diseases.",
      "Sudden Vision or Speech Changes: May indicate a stroke or neurological disorder.",
      "Disclaimer: These symptoms are for informational purposes only. Seek immediate medical help if you experience them.",
    ],
  },
  {
    id: 2,
    title: "How to Boost Immunity Naturally",
    category: "Wellness",
    doctor: "Dr. Rohan Kulkarni (MD)",
    image: art2,
    content: [
      "Immunity protects the body from infections.",
      "Balanced diet, good sleep, and regular exercise improve immunity.",
      "Consult a doctor if you fall sick frequently.",
    ],
  },
  {
    id: 3,
    title: "Best Foods for a Healthy Heart",
    category: "Nutrition",
    doctor: "Dr. Sneha Iyer (Cardiologist)",
    image: art3,
    content: [
      "Heart health depends largely on diet.",
      "Fruits, vegetables, whole grains, and fish are heart-friendly.",
      "Avoid excess salt and processed foods.",
    ],
  },
  {
    id: 4,
    title: "When Should You Consult a Doctor?",
    category: "Medical Advice",
    doctor: "Dr. Amit Verma (MD)",
    image: art4,
    content: [
      "Delaying medical care can worsen health conditions.",
      "Persistent pain, fever, or sudden symptoms need attention.",
      "Emergency symptoms require immediate care.",
    ],
  },
];

const ArticleDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const article = articleDetails.find((item) => item.id === parseInt(id));

  if (!article) {
    return <h4 className="text-center mt-5">Article not found</h4>;
  }

  return (
    <div className="container my-5">
      <button className="btn btn-link mb-3" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <p className="text-primary fw-semibold">{article.category}</p>
      <h2 className="fw-bold mb-2">{article.title}</h2>
      <p className="text-muted mb-4">Medically reviewed by {article.doctor}</p>

      <img
        src={article.image}
        alt={article.title}
        className="img-fluid rounded mb-4"
      />

      {article.content.map((para, index) => (
        <p key={index} className="fs-6 text-secondary">
          {para}
        </p>
      ))}

      <div className="alert alert-success mt-4">
        <strong>Still concerned?</strong> Consult a doctor for proper guidance.
      </div>
    </div>
  );
};

export default ArticleDetails;
