import React from "react";

function Gallery() {
  return (
    <div className="page container">
      <header className="page-header">
        <h1>Gallery</h1>
        <p className="page-subtitle">
          Moments from the courts — coaching, competitions and community events.
        </p>
      </header>

      <section className="section">
        <p>
          Here you can display a grid of club photos. In a more advanced version
          this might pull from a CMS or cloud storage.
        </p>
        <div className="gallery-grid">
          <div className="image-placeholder">
            <span>Photo 1</span>
          </div>
          <div className="image-placeholder">
            <span>Photo 2</span>
          </div>
          <div className="image-placeholder">
            <span>Photo 3</span>
          </div>
          <div className="image-placeholder">
            <span>Photo 4</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
