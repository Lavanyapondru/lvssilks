import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    interestedIn: "Clothing",
    email: "",
    message: "",

    // Stitching measurements
    shoulder: "",
    bust: "",
    waist: "",
    hip: "",
    sleeve: "",
    length: "",
    fitting: "Comfort / Loose",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Hide old success message when user changes the form
    setSent(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Enquiry:", formData);

    setSent(true);

    // Clear form
    setFormData({
      name: "",
      phone: "",
      interestedIn: "Clothing",
      email: "",
      message: "",

      shoulder: "",
      bust: "",
      waist: "",
      hip: "",
      sleeve: "",
      length: "",
      fitting: "Comfort / Loose",
    });
  };

  return (
    <section className="page-section">
      <div className="container">

        <div className="row g-5 align-items-start">

          {/* LEFT SIDE */}
          <div className="col-lg-5">

            <span className="eyebrow">
              WE’D LOVE TO HEAR FROM YOU
            </span>

            <h1 className="display-title">
              Let’s talk about what you need.
            </h1>

            <p>
              Send us your product enquiry, stitching requirements,
              custom order details or any questions you may have.
            </p>

            <div className="contact-list">

              <p>
                <i className="bi bi-telephone"></i>

                <span>
                  <b>Call / WhatsApp</b>
                  <br />
                  +91 90000 00000
                </span>
              </p>

              <p>
                <i className="bi bi-envelope"></i>

                <span>
                  <b>Email</b>
                  <br />
                  hello@womenneeds.in
                </span>
              </p>

              <p>
                <i className="bi bi-geo-alt"></i>

                <span>
                  <b>Studio</b>
                  <br />
                  Hyderabad, Telangana, India
                </span>
              </p>

            </div>
          </div>


          {/* RIGHT SIDE */}
          <div className="col-lg-7">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="row g-3">

                {/* NAME */}
                <div className="col-md-6">
                  <label htmlFor="name">
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>


                {/* PHONE */}
                <div className="col-md-6">
                  <label htmlFor="phone">
                    Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91"
                  />
                </div>


                {/* INTERESTED IN */}
                <div className="col-md-6">
                  <label htmlFor="interestedIn">
                    Interested in
                  </label>

                  <select
                    id="interestedIn"
                    name="interestedIn"
                    value={formData.interestedIn}
                    onChange={handleChange}
                  >
                    <option value="Clothing">
                      Clothing
                    </option>

                    <option value="Women Products">
                      Women Products
                    </option>

                    <option value="Skincare">
                      Skincare
                    </option>

                    <option value="Dress Materials">
                      Dress Materials
                    </option>

                    <option value="Stitching">
                      Stitching
                    </option>
                  </select>
                </div>


                {/* EMAIL */}
                <div className="col-md-6">
                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                  />
                </div>


                {/* =====================================
                    STITCHING MEASUREMENTS
                ====================================== */}

                {formData.interestedIn === "Stitching" && (
                  <div className="col-12">

                    <div className="stitching-measurements">

                      <div className="measurement-header">
                        <div>
                          <span className="eyebrow">
                            STITCHING DETAILS
                          </span>

                          <h4>
                            Your Measurements
                          </h4>

                          <p>
                            Please enter your measurements in inches.
                            If you are unsure about a measurement,
                            leave it blank and our team can assist you.
                          </p>
                        </div>

                        <i className="bi bi-rulers"></i>
                      </div>


                      <div className="row g-3">

                        {/* SHOULDER */}
                        <div className="col-md-6">
                          <label htmlFor="shoulder">
                            Shoulder Size
                          </label>

                          <div className="measurement-input">
                            <input
                              id="shoulder"
                              name="shoulder"
                              type="number"
                              step="0.5"
                              min="0"
                              value={formData.shoulder}
                              onChange={handleChange}
                              placeholder="e.g. 14"
                            />

                            <span>in</span>
                          </div>
                        </div>


                        {/* BUST */}
                        <div className="col-md-6">
                          <label htmlFor="bust">
                            Bust Size
                          </label>

                          <div className="measurement-input">
                            <input
                              id="bust"
                              name="bust"
                              type="number"
                              step="0.5"
                              min="0"
                              value={formData.bust}
                              onChange={handleChange}
                              placeholder="e.g. 36"
                            />

                            <span>in</span>
                          </div>
                        </div>


                        {/* WAIST */}
                        <div className="col-md-6">
                          <label htmlFor="waist">
                            Waist Size
                          </label>

                          <div className="measurement-input">
                            <input
                              id="waist"
                              name="waist"
                              type="number"
                              step="0.5"
                              min="0"
                              value={formData.waist}
                              onChange={handleChange}
                              placeholder="e.g. 30"
                            />

                            <span>in</span>
                          </div>
                        </div>


                        {/* HIP */}
                        <div className="col-md-6">
                          <label htmlFor="hip">
                            Hip Size
                          </label>

                          <div className="measurement-input">
                            <input
                              id="hip"
                              name="hip"
                              type="number"
                              step="0.5"
                              min="0"
                              value={formData.hip}
                              onChange={handleChange}
                              placeholder="e.g. 38"
                            />

                            <span>in</span>
                          </div>
                        </div>


                        {/* SLEEVE */}
                        <div className="col-md-6">
                          <label htmlFor="sleeve">
                            Sleeve Length
                          </label>

                          <div className="measurement-input">
                            <input
                              id="sleeve"
                              name="sleeve"
                              type="number"
                              step="0.5"
                              min="0"
                              value={formData.sleeve}
                              onChange={handleChange}
                              placeholder="e.g. 17"
                            />

                            <span>in</span>
                          </div>
                        </div>


                        {/* LENGTH */}
                        <div className="col-md-6">
                          <label htmlFor="length">
                            Dress / Kurti Length
                          </label>

                          <div className="measurement-input">
                            <input
                              id="length"
                              name="length"
                              type="number"
                              step="0.5"
                              min="0"
                              value={formData.length}
                              onChange={handleChange}
                              placeholder="e.g. 44"
                            />

                            <span>in</span>
                          </div>
                        </div>


                        {/* FITTING */}
                        <div className="col-12">
                          <label htmlFor="fitting">
                            Fitting Preference
                          </label>

                          <select
                            id="fitting"
                            name="fitting"
                            value={formData.fitting}
                            onChange={handleChange}
                          >
                            <option value="Comfort / Loose">
                              Comfort / Loose
                            </option>

                            <option value="Regular Fit">
                              Regular Fit
                            </option>

                            <option value="Slim Fit">
                              Slim Fit
                            </option>
                          </select>
                        </div>


                        {/* MEASUREMENT NOTE */}
                        <div className="col-12">
                          <div className="measurement-note">
                            <i className="bi bi-info-circle"></i>

                            <span>
                              Please measure around the body without
                              pulling the measuring tape too tightly.
                              Measurements should be provided in inches.
                            </span>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                )}


                {/* MESSAGE */}
                <div className="col-12">

                  <label htmlFor="message">
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us what you are looking for..."
                  ></textarea>

                </div>


                {/* SUBMIT */}
                <div className="col-12">

                  <button
                    className="btn btn-brand btn-lg"
                    type="submit"
                  >
                    Send Enquiry

                    <i className="bi bi-send ms-1"></i>
                  </button>

                </div>

              </div>


              {/* SUCCESS */}
              {sent && (
                <div className="success-msg mt-3">

                  <i className="bi bi-check-circle"></i>

                  <span>
                    Thank you! Your enquiry has been received.
                    We will get back to you soon.
                  </span>

                </div>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}