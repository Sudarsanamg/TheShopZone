import React from 'react';

const Contactus = () => {
  return (
    <div className="">
      <h1 className="text-center mb-5 display-4">Contact Us</h1>
      <p className="mb-5 text-center lead">
        We value your feedback and are here to assist you with any questions, concerns, or suggestions you may have. Feel free to reach out to us through any of the following channels:
      </p>

      {/* Email Section */}
      <div className="mb-4">
        <h2 className="h4">Email</h2>
        <p>
          You can email us at <a href="mailto:sudarsanamg762004@gmail.com" className="text-primary">sudarsanamg762004@gmail.com</a>. We strive to respond to all inquiries within 24 hours.
        </p>
      </div>

      {/* Phone Section */}
      <div className="mb-4">
        <h2 className="h4">Phone</h2>
        <p>
          If you prefer to speak with us directly, call us at <a href="tel:+918870840512" className="text-primary">+918870840512</a>. Our support team is available from 9 AM to 6 PM, Monday to Friday.
        </p>
      </div>

      {/* Address Section */}
      <div className="mb-4">
        <h2 className="h4">Address</h2>
        <address>
          Sudarsanam Ganesan<br />
          B99 Housing Unit<br />
          Nehrunagar, Kallapatti<br />
          Coimbatore, India
        </address>
      </div>

      {/* Social Media Section */}
      <div className="mb-4">
        <h2 className="h4">Follow Us</h2>
        <p>Stay connected and follow us on social media for the latest updates:</p>
        <ul className="list-unstyled">
          <li><a href="[Facebook URL]" className="text-primary">Facebook</a></li>
          <li><a href="[Twitter URL]" className="text-primary">Twitter</a></li>
          <li><a href="[Instagram URL]" className="text-primary">Instagram</a></li>
        </ul>
      </div>

      {/* Feedback Form */}
      <div className="mb-5">
        <h2 className="h4 mb-3">Feedback Form</h2>
        <p>You can also use our feedback form below to send us a message directly:</p>
        <form className="needs-validation" noValidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Your Name</label>
            <input type="text" id="name" className="form-control" required />
            <div className="invalid-feedback">
              Please enter your name.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Your Email</label>
            <input type="email" id="email" className="form-control" required />
            <div className="invalid-feedback">
              Please enter a valid email address.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Your Message</label>
            <textarea id="message" className="form-control" rows="4" required></textarea>
            <div className="invalid-feedback">
              Please enter your message.
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contactus;
