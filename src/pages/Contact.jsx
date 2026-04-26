import React, { useState } from "react";


const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) return;

    console.log(form);
    setSubmitted(true);

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 mx-auto" style={{ maxWidth: "600px" }}>
        <h2 className="text-center mb-4">Contact Us</h2>

        {submitted && (
          <div className="alert alert-success">
            Message sent successfully!
          </div>
        )}

        <form onSubmit={submitHandler}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={form.name}
              onChange={changeHandler}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={form.email}
              onChange={changeHandler}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Message</label>
            <textarea
              name="message"
              rows="4"
              className="form-control"
              value={form.message}
              onChange={changeHandler}
              required
            />
          </div>

          <div className="d-grid">
            <button className="btn btn-dark">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;