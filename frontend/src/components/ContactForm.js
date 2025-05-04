import React, { useState } from "react";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    try {
      // Point to your local backend (or your deployed endpoint)
      await axios.post("http://localhost:5000//api/contacts", formData);
      setStatus("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="contact-from-section spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title">
              <h2>Contact Us!</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <form onSubmit={handleSubmit} className="comment-form contact-form">
              <div className="row">
                <div className="col-lg-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-4">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-lg-12 text-center">
                  <textarea
                    name="message"
                    placeholder="Messages"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <button type="submit" className="site-btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
            {status && (
              <p
                style={{
                  marginTop: "15px",
                  color: "#333",
                  textAlign: "center",
                }}
              >
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
