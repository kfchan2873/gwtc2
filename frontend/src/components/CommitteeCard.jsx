// src/components/CommitteeCard.jsx

import React from "react";

const CommitteeCard = ({ member }) => {
  return (
    <div className="committee-card">
      <img
        src={member.photo}
        alt={member.name}
        className="committee-image"
      />

      <h3 className="committee-name">{member.name}</h3>
      <p className="committee-role">{member.role}</p>
      <p className="committee-bio">{member.bio}</p>
    </div>
  );
};

export default CommitteeCard;