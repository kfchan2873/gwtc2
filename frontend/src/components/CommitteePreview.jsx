// src/components/CommitteePreview.jsx

import React from "react";
import { Link } from "react-router-dom";
import CommitteeCard from "./CommitteeCard";
import { committeeMembers } from "../data/committeeData";

const CommitteePreview = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Meet Our Committee</h2>

        <div className="committee-grid">
          {committeeMembers.slice(0, 4).map((member, index) => (
            <CommitteeCard key={index} member={member} />
          ))}
        </div>

        <div className="committee-cta">
          <Link to="/committee" className="btn btn-primary">
            View Full Committee
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommitteePreview;