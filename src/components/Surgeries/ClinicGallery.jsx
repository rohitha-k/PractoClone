// ClinicsGallery.jsx
import React, { useState } from "react";

{
  /*const clinicImages = [
  "/assets/clinic1.jpg", // replace with your actual images
  "/assets/clinic2.jpg",
  "/assets/clinic3.jpg",
  "/assets/clinic4.jpg",
];*/
}

const ClinicsGallery = () => {
  const [selectedImage, setSelectedImage] = useState(clinicImages[0]);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        Our new-age clinics with the latest high-tech equipments
      </h2>

      {/* Main large image */}
      <div style={styles.mainImageBox}>
        <img src={selectedImage} alt="Clinic" style={styles.mainImage} />
      </div>

      {/* Thumbnail images */}
      <div style={styles.thumbnailContainer}>
        {clinicImages.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`Clinic ${idx + 1}`}
            style={{
              ...styles.thumbnail,
              border:
                selectedImage === img ? "2px solid #28328c" : "1px solid #ccc",
            }}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    marginTop: "40px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "600",
    textAlign: "center",
  },
  mainImageBox: {
    width: "100%",
    maxWidth: "800px",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 0 20px rgba(0,0,0,0.08)",
  },
  mainImage: {
    width: "100%",
    display: "block",
  },
  thumbnailContainer: {
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    marginTop: "10px",
    flexWrap: "wrap",
  },
  thumbnail: {
    width: "150px",
    height: "100px",
    objectFit: "cover",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

export default ClinicsGallery;
