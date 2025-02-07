import React from "react";
import "../style/home.css"; // Import CSS file

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>WELCOME!</h1>
        <div className="overlay"></div>
        <img
          src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=500&auto=format&fit=crop&q=60"
          alt="Nature"
          loading="lazy"
        />
      </header>

      <section className="home-content">
        <div className="image-box">
          <img src="./assets/dinesh.JPG" alt="Dinesh Patel" loading="lazy" />
        </div>
        <div className="text-box">
          <p>
            My name is <strong>Dinesh Patel</strong>, and I am currently pursuing a{" "}
            <strong>Ph.D. at the Indian Institute of Technology Roorkee (IIT Roorkee)</strong> under the guidance of{" "}
            <a
              href="https://ch.iitr.ac.in/~CH/Ashwini_Kumar_Sharma"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prof. Ashwini Kumar Sharma
            </a>
            . I am currently working in the area of <strong>aqueous Zinc battery</strong>.
          </p>
        </div>
      </section>
    </div>
  );
}
