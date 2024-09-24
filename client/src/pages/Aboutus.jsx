import React from 'react';

const Aboutus = () => {
  return (
    <div className=" pt-5 py-1">
      <h1 className="text-center mb-5 display-4">About Us</h1>
      
      {/* Welcome Section */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <p className="card-text lead">
            Welcome to our e-commerce platform, crafted with passion and precision by Sudarsanam Ganesan. Our goal is to provide an exceptional online shopping experience that is convenient, reliable, and tailored to meet your everyday needs.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="row mb-4 align-items-center">
        <div className="col-md-6 order-md-2">
          {/* Image placeholder */}
          {/* <img src="mission-image-url.jpg" alt="Our Mission" className="img-fluid rounded shadow-sm" /> */}
        </div>
        <div className="col-md-6 order-md-1">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title h3">Our Mission</h2>
              <p className="card-text lead">
                Our mission is to offer a seamless shopping experience that brings the best products directly to your doorstep. We are dedicated to creating a platform that is easy to navigate, secure, and filled with a diverse range of high-quality products to cater to all your needs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Shop With Us Section */}
      <div className="row mb-4 align-items-center">
        <div className="col-md-6">
          {/* Image placeholder */}
          {/* <img src="shop-with-us-image-url.jpg" alt="Why Shop With Us" className="img-fluid rounded shadow-sm" /> */}
        </div>
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title h3">Why Shop With Us?</h2>
              <p className="card-text lead">
                We understand the value of quality and affordability, and we strive to bring you the best of both. Our platform is constantly evolving, with new products, exciting deals, and features that make shopping more enjoyable and efficient.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About the Developer Section */}
      <div className="card mb-4 shadow-sm">
        <div className="card-body">
          <h2 className="card-title h3">About the Developer</h2>
          <p className="card-text lead">
            This platform is developed by Sudarsanam Ganesan, a passionate software developer from Coimbatore. With a strong background in web development and a keen eye for user experience, Sudarsanam is committed to building an e-commerce solution that not only meets but exceeds customer expectations.
          </p>
        </div>
      </div>

      {/* Get in Touch Section */}
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title h3">Get in Touch</h2>
          <p className="card-text lead">
            We are always here to help. If you have any questions, suggestions, or feedback, feel free to reach out to us. Your satisfaction is our top priority.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutus;
