import React from "react";
import { useNavigate } from "react-router-dom";
import art1 from "@/assets/art12.jpg";
import art2 from "@/assets/art2.jpeg";
import art3 from "@/assets/art3.jpeg";
import art4 from "@/assets/art4.jpeg";

const articles = [
  {
    id: 1,
    title: "5 Symptoms You Should Never Ignore",
    category: "Health Tips",
    image: art1,
  },
  {
    id: 2,
    title: "How to Boost Immunity Naturally",
    category: "Wellness",
    image: art2,
  },
  {
    id: 3,
    title: "Best Foods for a Healthy Heart",
    category: "Nutrition",
    image: art3,
  },
  {
    id: 4,
    title: "When Should You Consult a Doctor?",
    category: "Medical Advice",
    image: art4,
  },
];

const ReadArticles = () => {
  const navigate = useNavigate();

  return (
    <div className="container my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4 className="fw-bold">Read Health Articles</h4>
        <span
          className="text-primary fw-semibold"
          style={{ cursor: "pointer" }}
        >
          View All
        </span>
      </div>

      {/* Articles */}
      <div className="row">
        {articles.map((article) => (
          <div className="col-md-3 col-sm-6 mb-4" key={article.id}>
            <div
              className="card h-100 shadow-sm border-0 article-card"
              onClick={() => navigate(`/article/${article.id}`)}
              style={{ cursor: "pointer" }}
            >
              <img
                src={article.image}
                className="card-img-top"
                alt={article.title}
              />
              <div className="card-body">
                <small className="text-primary fw-semibold">
                  {article.category}
                </small>
                <h6 className="mt-2 fw-semibold">{article.title}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Styles */}
      <style>
        {`
          .article-card {
            border-radius: 12px;
            overflow: hidden;
            transition: transform 0.25s ease, box-shadow 0.25s ease;
          }

          .article-card img {
            height: 160px;
            object-fit: cover;
          }

          .article-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.08);
          }
        `}
      </style>
    </div>
  );
};

export default ReadArticles;
