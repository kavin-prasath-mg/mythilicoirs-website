import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLeaf, FaPaperPlane, FaCheckCircle, FaSpinner } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-500"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          >
            <FaLeaf className="w-6 h-6" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-6 py-2 rounded-full text-sm font-medium mb-4">
            <FaEnvelope />
            Get in Touch
          </span>
          <h2 className="section-title mb-6">Let's Start a Green Conversation</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to explore sustainable coir solutions? We'd love to hear from you and discuss how our eco-friendly products can benefit your projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-green-800 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                Connect With Us
              </h3>
              <p className="text-gray-600 text-lg mb-8">
                We're here to help you discover the perfect coir solutions for your needs. Reach out to us through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Visit Our Facility",
                  details: ["SP. Vadugapalaym", "Senjeri Puthur, Sulur Taluk", "Coimbatore, TN - 641671"],
                  color: "text-red-500"
                },
                {
                  icon: <FaEnvelope />,
                  title: "Email Us",
                  details: ["info@mythilicoirs.in"],
                  color: "text-blue-500",
                  link: "mailto:info@mythilicoirs.in"
                },
                {
                  icon: <FaPhone />,
                  title: "Call Us",
                  details: ["+91 9585133442"],
                  color: "text-green-500",
                  link: "tel:+919585133442"
                }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`${contact.color} text-2xl p-3 bg-gray-50 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 10 }}
                  >
                    {contact.icon}
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">{contact.title}</h4>
                    {contact.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">
                        {contact.link ? (
                          <a href={contact.link} className="hover:text-green-600 transition-colors duration-300">
                            {detail}
                          </a>
                        ) : detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Business Hours */}
            <motion.div
              className="glass-effect p-6 rounded-2xl"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-green-800 mb-4 flex items-center gap-2">
                <FaLeaf className="text-green-500" />
                Business Hours
              </h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border border-green-100"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-4 mx-auto"
              >
                <FaPaperPlane className="text-white text-xl" />
              </motion.div>
              <h3 className="text-3xl font-bold text-green-800 mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>
                Send Us a Message
              </h3>
              <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-2 bg-green-500 rounded-full"
                />
                <p className="text-lg">We'll get back to you within 24 hours</p>
              </div>
              <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto"></div>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "backOut" }}
                className="text-center py-16 bg-gradient-to-br from-green-50 to-green-100 rounded-xl"
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0] 
                  }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity 
                  }}
                >
                  <FaCheckCircle className="text-7xl text-green-500 mx-auto mb-6" />
                </motion.div>
                <h4 className="text-3xl font-bold text-green-800 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Message Sent Successfully!
                </h4>
                <p className="text-gray-600 text-lg leading-relaxed max-w-md mx-auto">
                  Thank you for reaching out to us. Our team will review your message and get back to you within 24 hours.
                </p>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mt-6 max-w-xs mx-auto"
                />
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Form Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { name: "name", type: "text", placeholder: "Your Full Name", icon: <FaLeaf />, label: "Full Name" },
                    { name: "email", type: "email", placeholder: "your.email@example.com", icon: <FaEnvelope />, label: "Email Address" },
                  ].map((field) => (
                    <motion.div
                      key={field.name}
                      className="relative group"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {field.label}
                      </label>
                      <div className="relative">
                        <motion.div 
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500 group-focus-within:scale-110 transition-transform duration-300"
                          whileHover={{ rotate: 10 }}
                        >
                          {field.icon}
                        </motion.div>
                        <input
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          value={formData[field.name]}
                          onChange={handleChange}
                          className={`w-full pl-12 pr-4 py-4 border-2 rounded-xl transition-all duration-300 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 bg-gray-50 focus:bg-white ${
                            errors[field.name] ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 hover:border-green-300'
                          }`}
                        />
                      </div>
                      {errors[field.name] && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-500 text-sm mt-2 flex items-center gap-1"
                        >
                          <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                          {errors[field.name]}
                        </motion.p>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Message Field */}
                <motion.div 
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your project, requirements, or any questions you have about our coir products..."
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className={`w-full p-4 border-2 rounded-xl transition-all duration-300 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200 resize-none bg-gray-50 focus:bg-white ${
                      errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : 'border-gray-200 hover:border-green-300'
                    }`}
                  />
                  {errors.message && (
                    <motion.p 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-red-500 text-sm mt-2 flex items-center gap-1"
                    >
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {errors.message}
                    </motion.p>
                  )}
                </motion.div>

                {/* Submit Button */}
                <motion.div 
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto primary-btn flex items-center justify-center gap-3 py-4 px-12 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden group"
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          >
                            <FaSpinner />
                          </motion.div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <motion.div
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <FaPaperPlane />
                          </motion.div>
                          Send Message
                        </>
                      )}
                    </div>
                  </motion.button>
                  
                  <p className="text-sm text-gray-500 mt-4">
                    By sending this message, you agree to our privacy policy and terms of service.
                  </p>
                </motion.div>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-green-800 mb-4">Find Us On The Map</h3>
            <p className="text-gray-600 text-lg">Visit our eco-friendly facility in Coimbatore</p>
          </div>
          
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <iframe
              title="Mythili Coirs Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0501136676953!2d77.25382877369628!3d10.80747385862302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9b31a4d1ba037%3A0x5054ff180da96090!2sMythili%20coirs!5e0!3m2!1sen!2sin!4v1735959066260!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
