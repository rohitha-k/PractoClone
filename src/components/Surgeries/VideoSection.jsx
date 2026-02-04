// VideoSection.js
import React from "react";

const VideoSection = ({ title, videoUrl, description }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>{title}</h2>
      <div style={styles.videoWrapper}>
        <iframe
          width="100%"
          height="400"
          src={videoUrl}
          title="YouTube video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p style={styles.description}>{description}</p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    fontWeight: "600",
    marginBottom: "20px",
  },
  videoWrapper: {
    marginBottom: "20px",
  },
  description: {
    fontSize: "1rem",
    color: "#555",
  },
};

export default VideoSection;
