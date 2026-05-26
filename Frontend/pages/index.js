import { useEffect, useState } from "react";

export default function Home() {
  const [portfolio, setPortfolio] = useState(null);

  useEffect(() => {
    fetch("https://my-personal-portfolio-website-1.onrender.com/api/portfolio")
      .then(res => res.json())
      .then(data => setPortfolio(data))
      .catch(err => console.error("Error fetching portfolio:", err));
  }, []);

  if (!portfolio) return <p style={{ textAlign: "center" }}>Loading portfolio...</p>;

  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px", backgroundColor: "#f9f9f9" }}>
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>{portfolio.name}</h1>
        <p>{portfolio.about}</p>
      </header>

      {/* Skills */}
      <section style={{ marginBottom: "30px", padding: "20px", background: "#fff", borderRadius: "8px" }}>
        <h2>Skills</h2>
        <ul>
          {portfolio.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>

      {/* Qualifications */}
      <section style={{ marginBottom: "30px", padding: "20px", background: "#fff", borderRadius: "8px" }}>
        <h2>Qualifications</h2>
        <p>{portfolio.qualifications.degree} — {portfolio.qualifications.status}</p>
      </section>

      {/* Projects */}
      <section style={{ marginBottom: "30px", padding: "20px", background: "#fff", borderRadius: "8px" }}>
        <h2>Projects</h2>
        <ul>
          {portfolio.projects.map((project, index) => (
            <li key={index}>
              <strong>{project.title}</strong>: {project.description}{" "}
              <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section style={{ marginBottom: "30px", padding: "20px", background: "#fff", borderRadius: "8px" }}>
        <h2>Contact Information</h2>
        <p>Email: <a href={`mailto:${portfolio.contact.email}`}>{portfolio.contact.email}</a></p>
        <p>Phone: {portfolio.contact.phone}</p>
        <p>
          GitHub:{" "}
          <a href={portfolio.contact.github} target="_blank" rel="noopener noreferrer">
            {portfolio.contact.github}
          </a>
        </p>
      </section>
    </div>
  );
}
