import React from "react";

const PageNotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.text}>
        Oops! The page you are looking for does not exist.
      </p>
      <a href="/" style={styles.link}>
        Go Back Home
      </a>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80vh",
    textAlign: "center",
    backgroundColor: "#f8f9fa",
    color: "#333",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    fontSize: "6rem",
    margin: "0",
    color: "#dc3545",
  },
  text: {
    fontSize: "1.5rem",
    margin: "10px 0",
  },
  link: {
    fontSize: "1.2rem",
    color: "#007bff",
    textDecoration: "none",
    marginTop: "15px",
    padding: "10px 20px",
    border: "2px solid #007bff",
    borderRadius: "5px",
    transition: "all 0.3s ease-in-out",
  },
  linkHover: {
    backgroundColor: "#007bff",
    color: "#fff",
  },
};

export default PageNotFound;
