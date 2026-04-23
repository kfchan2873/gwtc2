// src/pages/Location.jsx
import React from "react";

function Location() {
  return (
    <div className="page container location-page">
      <header className="page-header">
        <h2>Location</h2>
        <p className="page-subtitle">
        We are situated at the rear of Monash Aquatic & Recreation Centre.
        Enter the Aquatic Centre carpark from the eastern Waverley Road entrance or from Aquatic Place, 
        then proceed to the southern end of the Aquatic Centre carpark to the Tennis Club reserved carpark
        and entrance to the Club.
        </p>
      </header>

      <section className="section">
        <h2>Our Address</h2>
        <p>
          Glen Waverley Tennis Club <br />
          626 Waverley Road, Glen Waverley, VIC 3150
        </p>

        <div className="map-container">
          <iframe
            title="Glen Waverley Tennis Club Map"
            src="https://www.google.com/maps?q=626%20Waverley%20Road%20Glen%20Waverley%20VIC%203150&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Location;
