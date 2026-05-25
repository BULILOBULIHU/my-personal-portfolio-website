export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>Gerald Bulilo Bulihu</h1>
        <p>Student | Web Developer | Cloud Enthusiast</p>
      </header>

      <section style={{ marginBottom: "30px", padding: "20px", background: "#fff", borderRadius: "8px" }}>
        <h2>Personal Profile</h2>
        <p>
          I am passionate about building modern web applications and deploying them
          on cloud platforms like Vercel and Render.
        </p>
      </section>

      <section style={{ marginBottom: "30px", padding: "20px", background: "#fff", borderRadius: "8px" }}>
        <h2>Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>Python (Flask)</li>
          <li>PHP (OOP)</li>
          <li>C++</li>
          <li>Cloud Hosting (Vercel, Render)</li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px", padding: "20px", background: "#fff", borderRadius: "8px" }}>
        <h2>Projects</h2>
        <ul>
          <li>
            <a href="https://bulilobulihu.github.io/abc" target="_blank" rel="noopener noreferrer">
              Personal Portfolio Website
            </a>
          </li>
          <li>
            <a href="https://github.com/BULILOBULIHU/my-personal-portfolio-website" target="_blank" rel="noopener noreferrer">
              AI-powered Parent Engagement System (PESS)
            </a>
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px", padding: "20px", background: "#fff", borderRadius: "8px" }}>
        <h2>Contact Information</h2>
        <p>Email: bulilobulihu@gmail.com</p>
        <p>Phone: +255 0753253010</p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/BULILOBULIHU" target="_blank" rel="noopener noreferrer">
            BULILOBULIHU
          </a>
        </p>
      </section>
    </div>
  );
}

