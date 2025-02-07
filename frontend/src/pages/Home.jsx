import React from "react";

export default function Home() {
  return (
    <div>
      
      {/* Main Content */}
      <main>
        <div className="header-img">
          <div className="header-overlay"></div>
          <h1>WELCOME!</h1>
          <img
            src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=500&auto=format&fit=crop&q=60"
            alt="Nature"
            loading="lazy"
          />
        </div>

        <div className="content-box">
          <img src="./assets/dinesh.JPG" alt="Dinesh Patel" loading="lazy" />
          <div className="content" style={{ padding: "10px" }}>
            My name is Dinesh Patel, and I am currently pursuing a Ph.D. at the Indian Institute of Technology Roorkee (IIT Roorkee) under the guidance of{" "}
            <a
              href="https://ch.iitr.ac.in/~CH/Ashwini_Kumar_Sharma"
              target="_blank"
              rel="noopener noreferrer"
            >
              Prof. Ashwini Kumar Sharma
            </a>
            . I am currently working in the area of aqueous Zinc battery.
          </div>
        </div>
      </main>
    </div>
  );
}
