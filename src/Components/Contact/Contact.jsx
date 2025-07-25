import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Clock } from "lucide-react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitted(true);
      
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section className="py-16 bg-white relative overflow-hidden" id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-400 to-blue-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
            <Mail className="w-4 h-4 mr-2" />
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to explore sustainable coir solutions? Our team is here to help you find the perfect products for your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white h-full">
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Visit Our Facility</h4>
                    <div className="text-green-100 leading-relaxed">
                      <div>SF NO-430, 431</div>
                      <div>SP. Vadugapalayam</div>
                      <div>Senjeri Puthur, Sulur Taluk</div>
                      <div>Coimbatore, Tamil Nadu,India</div>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Email Us</h4>
                    <a 
                      href="mailto:kavinprasath.govindasamy15@gmail.com"
                      className="text-green-100 hover:text-white transition-colors break-all"
                    >
                      kavinprasath.govindasamy15@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Call Us</h4>
                    <a 
                      href="tel:+1234567890"
                      className="text-green-100 hover:text-white transition-colors"
                    >
                      +1 234 567 890
                    </a>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2">Business Hours</h4>
                    <div className="text-green-100 space-y-1">
                      <div className="flex justify-between">
                        <span>Mon - Fri:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">
                    Send us a Message
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400"
                        placeholder="What is this regarding?"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-3">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        required
                        className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:border-green-500 focus:outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 resize-none"
                        placeholder="Tell us about your coir requirements, quantity needed, or any specific questions..."
                      />
                    </div>
                    
                    <button
                      onClick={handleFormSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 rounded-xl font-semibold text-lg hover:from-green-700 hover:to-green-800 focus:outline-none focus:ring-4 focus:ring-green-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                          <span>Sending Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-6 w-6" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Visit Our Manufacturing Facility
            </h3>
            <p className="text-lg text-gray-600">
              Located in the heart of Tamil Nadu's coir production region
            </p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0501136676953!2d77.25382877369628!3d10.80747385862302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9b31a4d1ba037%3A0x5054ff180da96090!2sMythili%20coirs!5e0!3m2!1sen!2sin!4v1735959066260!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mythili Coirs Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;