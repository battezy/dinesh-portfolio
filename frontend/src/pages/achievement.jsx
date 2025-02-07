import React from "react";

export default function Achievement() {
  return (
    <div>
      <main>
        {/* Home */}
        <div className="header-img">
          <div className="header-overlay"></div>
          <h1 style={{ fontSize: "35px", textAlign: "center" }}>AWARDS & ACHIEVEMENTS</h1>
          <img
            src="https://images.unsplash.com/photo-1539667468225-eebb663053e6?w=500&auto=format&fit=crop&q=60"
            alt="Awards & Achievements"
            loading="lazy"
          />
        </div>

        <div className="content-box">
          <div style={{ borderTop: "4px solid rgb(6, 50, 118)", padding: "20px 0px" }}>
            <ul style={{ margin: "0", marginLeft: "12px", padding: "0", paddingLeft: "7px" }}>
              <li>
                <h5>Recipient of India’s prestigious Ph.D. fellowship, Prime Minister Research Fellowship.</h5>
              </li>
              <li>
                <h5>Recipient of DST NIDHI-PRAYAS grant for startup incubation.</h5>
              </li>
              <li>
                <h5>Qualified IIT JAM 2017 and GATE Chemistry 2019.</h5>
              </li>
              <li>
                <h5>Qualified CSIR-NET Chemistry 2022.</h5>
              </li>
              <li>
                <h5>
                  Participated in the “Tata Steel MaterialNEXT 4.0” flagship open innovation program
                  organized by Tata Steel Advanced Materials Research Centre, with the idea of “Aqueous Zn-S battery.” 
                  Emerged as a finalist and was honored with a cash prize of INR 25K in recognition of our 
                  innovative approach and research contributions.
                </h5>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
