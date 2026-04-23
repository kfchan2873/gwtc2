import React from "react";
import CommitteeCard from "../components/CommitteeCard";
import { committeeMembers } from "../data/committeeData";

const Committee = () => {
  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h1 className="section-title">Our Committee</h1>

          <div className="committee-grid-full">
            {committeeMembers.map((member, index) => (
              <CommitteeCard key={index} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Committee;