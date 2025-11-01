'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: 'success', message: 'Message sent successfully!' });
        setFormData({ name: '', email: '', phone: '', website: '', subject: '', message: '' });
      } else {
        setStatus({ type: 'error', message: data.error || 'Something went wrong.' });
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please try again.' });
    }

    setIsSubmitting(false);
  };

  return (
    <section className="bg-black pb-5">
      <div className="container form-container-overlap">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            <div className="contact-form-wrapper ctaborder">
              <h2 className="text-center mb-4 text-white">Get in Touch</h2>

              <form onSubmit={handleSubmit} className="php-email-form pt-4">
                <div className="row g-3">
                  {/** Name */}
                 <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                     <div className="form-group">
                        <div className="input-with-icon">
                        <i className="bi bi-person"></i>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        </div>
                    </div>    
                  </div>

                  {/** Email */}
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                    <div className="form-group">
                        <div className="input-with-icon">
                        <i className="bi bi-envelope"></i>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        </div>
                    </div>    
                  </div>

                  {/** Phone */}
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                     <div className="form-group">
                        <div className="input-with-icon">
                        <i className="bi bi-telephone"></i>
                        <input
                            type="text"
                            className="form-control"
                            name="phone"
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                        </div>
                    </div>    
                  </div>

                  {/** Website */}
                  <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12">
                     <div className="form-group">
                        <div className="input-with-icon">
                        <i className="bi bi-globe"></i>
                        <input
                            type="text"
                            className="form-control"
                            name="website"
                            placeholder="Your website"
                            value={formData.website}
                            onChange={handleChange}
                        />
                        </div>
                    </div>    
                  </div>

                  {/** Subject */}
                 <div className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-12">
                     <div className="form-group">
                        <div className="input-with-icon">
                        <i className="bi bi-text-left"></i>
                        <input
                            type="text"
                            className="form-control"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        </div>
                    </div>    
                  </div>

                  {/** Message */}
                  <div className="col-12">
                     <div className="form-group">
                        <div className="input-with-icon">
                        <i className="bi bi-chat-dots message-icon"></i>
                        <textarea
                            className="form-control"
                            name="message"
                            placeholder="Write Message..."
                            style={{ height: '180px' }}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                        </div>
                    </div>    
                  </div>

                  {/** Button */}
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="bg-transparent btn-outline-white position-relative rounded-3 text-uppercase"
                      disabled={isSubmitting}
                    >
                      <div className="flip-animate" data-hover="SEND MESSAGE">
                        {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                      </div>
                    </button>
                  </div>
                </div>
              </form>

              {status.message && (
                <p
                  className={`text-center mt-3 ${
                    status.type === 'success' ? 'text-success' : 'text-danger'
                  }`}
                >
                  {status.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
