// src/pages/Membership.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { joinLinks, contactDetails } from "../data/membershipData";
import { membershipPrices } from "../data/membershipPrices";




export default function Membership() {
  return (
    <div className="page">
      <header className="page-header">
        <div className="container">
          <h1>Membership</h1>
          <p className="page-subtitle">
            <h4> Join Glen Waverley Tennis Club — great tennis, friendly people, and a welcoming community</h4>
            Membership classes and fees are listed below.<br /><br /> A Registration/Insurance fee is paid by our Club to Tennis Victoria and is included in the fees for each Club member. <br></br> The membership year is from 1 July to 30 June of the following year.   Quarterly pro-rata fees are payable by members joining during the membership year.
Senior (Incl. $20 refundable maintenance levy)
          
          
          
          </p>
        </div>
      </header>
      
      {/* Pricing cards */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Membership options</h2>

          <a
            href={`${import.meta.env.BASE_URL}GWTC_Membership_Form.pdf`}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            Download Membership PDF
          </a>
        

          <div className="pricing-grid">
            {membershipPrices.map((opt) => (
              <div
                key={opt.id}
                className={`pricing-card ${opt.featured ? "featured" : ""}`}
              >
                <h3 style={{ marginTop: 0 }}>{opt.title}</h3>
                <p className="price">{opt.priceText}</p>
                <p style={{ color: "var(--color-text-muted)", marginTop: 0 }}>
                  {opt.notes}
                </p>

                <ul className="bullet-list">
                  {opt.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                  {/*
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  <a className="btn btn-primary" href={joinLinks.onlineForm} target="_blank" rel="noreferrer">
                    Apply / Join
                  </a>
                </div>
                */}

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to join */}
      <section className="section section-alt">
        <div className="container split">
          <div>
            <h2 className="section-title">How to join</h2>
            <ol className="numbered-list">
              <li>
                Complete the online membership form.
              </li>
              <li>
                We’ll contact you to confirm your details and membership type.
              </li>
              <li>
                Pay your membership fee (PayID/bank transfer options available).
              </li>
              <li>
                Get started — come down for a social tennis hit.
              </li>
            </ol>

            <div className="hero-actions" style={{ marginTop: "1rem" }}>
              <a className="btn btn-primary" href={joinLinks.onlineForm} target="_blank" rel="noreferrer">
                Open join form
              </a>
              <NavLink className="btn btn-outline" to="/contact">
                Contact us
              </NavLink>
            </div>
          </div>

          <div className="feature-card">
            <h3 style={{ marginTop: 0 }}>Need help?</h3>
            <p className="footer-text" style={{ marginTop: 0 }}>
              Email: {contactDetails.email}<br />
              Phone: {contactDetails.phone}
            </p>

            {contactDetails.payId && (
              <>
                <h4 style={{ marginBottom: "0.5rem" }}>PayID</h4>
                <p className="footer-text" style={{ marginTop: 0 }}>
                  {contactDetails.payId}
                </p>
              </>
            )}

            <p className="footer-text">
              Not sure which membership suits you? Send us a message and we’ll help.
            </p>
          </div>
        </div>
      </section>

      {/* Quick FAQ */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">FAQ</h2>

          <div className="values-grid">
            <div className="value-card">
              <h4 style={{ marginTop: 0 }}>Do I need to be experienced?</h4>
              <p className="footer-text">
                No — all levels are welcome. Coaching and social sessions are great ways to start.
              </p>
            </div>

            <div className="value-card">
              <h4 style={{ marginTop: 0 }}>Can I try social tennis first?</h4>
              <p className="footer-text">
                Yes — come along to a social session and meet members before joining. We meet up on Sunday afternoon and Friday AM
              </p>
            </div>

            <div className="value-card">
              <h4 style={{ marginTop: 0 }}>How do court bookings work?</h4>
              <p className="footer-text">
                Booking is not necessary. Roll up to play whenever there is a free court available
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
