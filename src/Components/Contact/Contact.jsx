import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="bg-gray-100 py-12 px-4">
      <div id="contact" className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Get in Touch Section */}
          <div className="text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h3>
            <p className="mb-2">
              SP. Vadugapalaym<br />
              Senjeri Puthur<br />
              Sulur Taluk<br />
              Coimbatore<br />
              TN - 641671<br />
            </p>
            <p className="mb-2">
              Email: {"info@mythilicoirs.in"}
              <a
                href="mailto:info@mythilicoirs.in"
                className="text-blue-500 hover:underline"
              >
                info@mythilicoirs.in
              </a>
            </p>
            <p className="mb-2">
              Phone:{" "}
              <a
                href="tel:+919585133442"
                className="text-blue-500 hover:underline"
              >
                +91 9585133442
              </a>
            </p>
          </div>

          {/* Contact Form Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Send Us a Message</h3>
            <form
              action="https://formspree.io/f/xdkkbrvz"
              method="POST"
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-white text-gray-800"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-white text-gray-800"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-md bg-white text-gray-800"
                rows="4"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Location</h3>
          <div className="map-container">
            <iframe
              title="Google Map Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0501136676953!2d77.25382877369628!3d10.80747385862302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9b31a4d1ba037%3A0x5054ff180da96090!2sMythili%20coirs!5e0!3m2!1sen!2sin!4v1735959066260!5m2!1sen!2sin" 
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
