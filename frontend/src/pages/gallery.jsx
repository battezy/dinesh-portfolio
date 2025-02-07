import React from 'react';

export default function Gallery() {
  return (
    <div>
      <main>
        <div className="header-img">
          <div className="header-overlay"></div>
          <h1>GALLERY</h1>
          <img
            src="https://images.pexels.com/photos/256150/pexels-photo-256150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Gallery"
          />
        </div>

        <div className="content-box">
          <div style={{ borderTop: "4px solid rgb(6, 50, 118)", padding: "20px 0px" }}>
            <div className="gallery-page">
              <div className="gallery-img">
                <img src="../assets/gallery/g3.jpeg" style={{ width: "100%" }} alt="Gallery Image 1" />
              </div>
              <div className="gallery-img">
                <img src="../assets/gallery/g1.jpeg" style={{ width: "100%" }} alt="Gallery Image 2" />
              </div>
              <div className="gallery-img">
                <img src="../assets/gallery/g2.jpeg" style={{ width: "100%" }} alt="Gallery Image 3" />
              </div>
              <div className="gallery-img">
                <img src="../assets/gallery/g4.jpeg" style={{ width: "100%" }} alt="Gallery Image 4" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
