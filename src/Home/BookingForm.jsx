import React, { useState } from 'react';
import Footer from './Footer';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    bookingType: 'resort',
    name: '',
    email: '',
    phone: '',
    address: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
    idProof: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const message = `*Booking Request*\n
Type: ${formData.bookingType}
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Address: ${formData.address}
Check-In: ${formData.checkIn}
Check-Out: ${formData.checkOut}
Guests: ${formData.guests}`;

    const whatsappNumber = '9762979477'; // ✅ Replace with your real number if needed
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  return (
    <>
      <style>{`
        body, html, #root {
          margin: 0;
          padding: 0;
          height: 100%;
          font-family: 'Segoe UI', sans-serif;
          background: #f9f9f9;
        }

        .form-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .form-container {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 60px 20px 40px;
        }

        .form-box {
          width: 100%;
          max-width: 550px;
          background-color: #fff;
          padding: 40px;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
        }

        h2 {
          text-align: center;
          margin-bottom: 30px;
          color: #003366;
          font-family: 'Georgia', serif;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          color: #333;
          font-weight: 600;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #ccc;
          border-radius: 10px;
          font-size: 1rem;
          background: #fefefe;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          border-color: #003366;
          outline: none;
        }

        .submit-btn {
          background-color: #25D366;
          color: white;
          padding: 12px;
          width: 100%;
          font-size: 1rem;
          border: none;
          border-radius: 10px;
          font-weight: bold;
          cursor: pointer;
          margin-top: 10px;
        }

        .submit-btn:hover {
          background-color: #1ebf5b;
        }
      `}</style>

      <div className="form-wrapper">
        <div className="form-container">
          <div className="form-box">
            <h2>Book Your Stay</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Booking Type</label>
                <select
                  name="bookingType"
                  value={formData.bookingType}
                  onChange={(e) => setFormData({ ...formData, bookingType: e.target.value })}
                  required
                >
                  <option value="resort">Resort</option>
                  <option value="villa">Villa</option>
                </select>
              </div>

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Address</label>
                <textarea
                  name="address"
                  rows="3"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>ID Proof (Aadhaar, Passport, etc.)</label>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  onChange={(e) => setFormData({ ...formData, idProof: e.target.files[0] })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Check-In Date</label>
                <input
                  type="date"
                  name="checkIn"
                  value={formData.checkIn}
                  onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>Check-Out Date</label>
                <input
                  type="date"
                  name="checkOut"
                  value={formData.checkOut}
                  onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label>No. of Guests</label>
                <input
                  type="number"
                  name="guests"
                  min="1"
                  value={formData.guests}
                  onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="submit-btn">
                Submit Booking via WhatsApp
              </button>
            </form>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
