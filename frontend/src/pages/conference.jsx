import React from "react";

export default function Conference() {
  return (
    <div>
      <main>
        {/* Home */}
        <div className="header-img">
          <div className="header-overlay"></div>
          <h1 style={{ fontSize: "35px", textAlign: "center" }}>CONFERENCE ATTENDED</h1>
          <img
            src="https://plus.unsplash.com/premium_photo-1666896192348-dbd2afd19b07?w=500&auto=format&fit=crop&q=60"
            alt="Conference"
            loading="lazy"
          />
        </div>

        <div className="content-box">
          <div style={{ borderTop: "4px solid rgb(6, 50, 118)", padding: "20px 0px" }}>
            <ul style={{ margin: "0", marginLeft: "15px", padding: "0", paddingLeft: "8px" }}>
              <li>
                <b>Dinesh Patel,</b> Ashwini Kumar Sharma. Hybrid Electrolyte for Water Powered Safe and
                Affordable Zinc-Sulfur Battery.
                Presented poster in “International Conference on Green Chemistry (ICGC-2023)”, University of
                Ladakh, Ladakh, India, July 3rd - 5th, 2023.
              </li>
              <br />

              <li>
                <b>Dinesh Patel,</b> Ashwini Kumar Sharma. Water Powered Safe and Affordable Zinc-Sulfur Battery.
                “Institute Research Day Celebrations 2023” at IIT Roorkee, Uttarakhand, India, March 14th, 2023.
              </li>
              <br />

              <li>
                <b>Dinesh Patel,</b> Ashwini Kumar Sharma. Water Powered Safe and Affordable Zinc-Sulfur Battery.
                Uttarakhand Industry exhibition “Uttarakhand Udyog Mahotsav (UKUM 2023)” was awarded as
                Runner-up in the poster session. Quantum University, Roorkee, Uttarakhand, India, March 18th - 20th, 2023.
              </li>
              <br />

              <li>
                <b>Dinesh Patel,</b> Ashwini Kumar Sharma. Recent Advancements in Zinc-Sulfur Battery.
                National conference on “Energy Materials and Devices (NC-EMAD-2022)” IIT Jodhpur, Rajasthan, India,
                Dec 16-18, 2022.
              </li>
              <br />

              <li>
                <b>Dinesh Patel,</b> Poonam Rani, Ashwini Kumar Sharma. Overview of Recent Progress in Aqueous
                Zinc-Sulfur Battery.
                International Conference on “Chemical Engineering: Enabling Transition Towards Sustainable Future
                (ChemTSF 2022)” IIT Roorkee, Uttarakhand, India, Sept 8-10, 2022.
              </li>
              <br />
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
