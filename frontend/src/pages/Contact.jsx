import React from "react";
import { contactDetails } from "../data/membershipData.js"; // adjust path if needed

function Contact() {
  return (
    <div className="page container">
      <header className="page-header">
        <h1>Contact Us</h1>


        <p className="page-subtitle">
          Have a question about membership, coaching, or court hire? Get in touch.
        </p>
      </header>

      <section className="section split">
        <div>
          <h2>Club Details</h2>
          <p>
            Glen Waverley Tennis Club<br />
            Glen Waverley, Victoria, Australia
          </p>


          <p>
            Email:{" "}
            <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
            <br />
            Phone:{" "}
            <a href={`tel:${contactDetails.mobile}`}>{contactDetails.mobile}</a>
          </p>
        </div>

        <div>
          <h2>Send a Message</h2>

          <form
            className="contact-form"
            action="https://formspree.io/f/xwvvpklk"
            method="POST"
          >
            <label>
              Your Name
              <input type="text" name="name" required />
            </label>

            <label>
              Your Email
              <input type="email" name="email" required />
            </label>

            <label>
              Message to the Club
              <textarea name="message" rows="4" required />
            </label>

            <input type="hidden" name="source" value="GWTC website contact form" />

            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
