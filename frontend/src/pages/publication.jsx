import React from "react";

export default function Publication() {
  return (
    <div>
      <main>
        {/* Home */}
        <div className="header-img">
          <div className="header-overlay"></div>
          <h1>PUBLICATIONS</h1>
          <img
            src="https://images.unsplash.com/photo-1546587348-d12660c30c50?w=500&auto=format&fit=crop&q=60"
            alt="Publications"
            loading="lazy"
          />
        </div>

        <div className="content-box">
          <div style={{ borderTop: "4px solid rgb(6, 50, 118)", padding: "20px 0px" }}>
            <ul style={{ margin: 0, paddingLeft: "20px" }}>
              <li>
                <h5>
                  <b>Hybrid Electrolyte with Biomass-Derived Carbon Host for High-Performance Aqueous Zn-S Battery.</b>
                </h5>
                <div style={{ margin: "0 10px" }}>
                  Dinesh Patel, Abhishek Dharmesh, Yash Sharma, Poonam Rani, and Ashwini Kumar Sharma, 
                  Chemical Engineering Journal, 479, 2024, 147722.
                  <br />
                  <a style={{ color: "black" }} href="https://doi.org/10.1016/j.cej.2023.147722" target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </div>
              </li>

              <br />

              <li>
                <h5>
                  <b>Minireview on Aqueous Zinc–Sulfur Batteries: Recent Advances and Future Perspectives.</b>
                </h5>
                <div style={{ margin: "0 10px" }}>
                  Dinesh Patel and Ashwini Kumar Sharma, Energy & Fuels, 37 (15) 2023, 10897-10914.
                  <br />
                  <a style={{ color: "black" }} href="https://doi.org/10.1021/acs.energyfuels.3c01938" target="_blank" rel="noopener noreferrer">
                    Read More
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
