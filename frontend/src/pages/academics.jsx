import React from "react";

export default function Academics() {
  return (
    <div>
      <main>
        <div className="header-img">
          <div className="header-overlay"></div>
          <h1>ACADEMICS</h1>
          <img
            src="https://images.unsplash.com/photo-1543877087-ebf71fde2be1?w=500&auto=format&fit=crop&q=60"
            alt="Academics"
          />
        </div>

        <div className="content-box">
          <div style={{ borderTop: "4px solid rgb(6, 50, 118)", padding: "20px 0px" }}>
            <ul style={{ marginLeft: "8px", paddingLeft: "10px" }}>
              <li>
                <h5 className="acad-heading">
                  <b>
                    Doctor of Philosophy (Ph.D.) - Chemical Engineering{" "}
                    <span className="acad-timeline">[2022 - Present]</span>
                  </b>
                </h5>
                <div style={{ margin: "0 10px" }}>
                  <div>Indian Institute of Technology Roorkee (IITR), India</div>
                  <div>CGPA: 9.17/10</div>
                </div>
              </li>
              <br />

              <li>
                <h5 className="acad-heading">
                  <b>
                    Master of Technology (M.Sc.) – Analytical Chemistry{" "}
                    <span className="acad-timeline">[2017 - 2019]</span>
                  </b>
                </h5>
                <div style={{ margin: "0 10px" }}>
                  <div>Department of Chemistry, University of Mumbai, India</div>
                  <div>CGPA: 7.21/10</div>
                </div>
              </li>
              <br />

              <li>
                <h5 className="acad-heading">
                  <b>
                    Bachelor of Technology (B.Sc.) – Chemistry{" "}
                    <span className="acad-timeline">[2014 - 2017]</span>
                  </b>
                </h5>
                <div style={{ margin: "0 10px" }}>
                  <div>Thakur College of Science and Commerce, University of Mumbai, India</div>
                  <div>CGPA: 6.72/7</div>
                </div>
              </li>
              <br />
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
