import React, { useState } from 'react';
import './App.css'; // Import the CSS file for styling

const packagesData = [
  {
    title: 'Domestic Gold',
    price: 500,
    services: ['Flight Ticket', 'Hotel Accommodation', 'City Tours'],
  },
  {
    title: 'Domestic Premium',
    price: 800,
    services: ['Flight Ticket', 'Hotel Accommodation', 'City Tours', 'Private Guide'],
  },
  {
    title: 'International Gold',
    price: 1000,
    services: ['International Flight Ticket', 'Hotel Accommodation', 'City Tours', 'Travel Insurance'],
  },
  {
    title: 'International Premium',
    price: 1500,
    services: ['International Flight Ticket', 'Hotel Accommodation', 'City Tours', 'Travel Insurance', 'Private Car'],
  },
];

const PackageCard = ({ title, price, services }) => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [place, setPlace] = useState('');
  const [budget, setBudget] = useState(50); // Initial budget value
  const [stars, setStars] = useState(1); // Initial stars value
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data here (you can send it to your backend server)
    setSubmitted(true);
    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setPlace('');
    setBudget(50); // Reset budget to initial value
    setStars(1); // Reset stars to initial value
  };

  const handleBudgetChange = (e) => {
    setBudget(parseInt(e.target.value));
  };

  return (
    <div className="package-card">
      <h3>{title}</h3>
      <p>Price: ${price}</p>
      <ul>
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
      {!submitted ? (
        <div>
          <button onClick={() => setShowForm(!showForm)}>Book Now</button>
          {showForm && (
            <form onSubmit={handleSubmit}>
              <label>Name:</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
              <label>Email:</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label>Phone Number:</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
              <label>Place to Travel:</label>
              <input type="text" value={place} onChange={(e) => setPlace(e.target.value)} required />
              <label>Budget:</label>
              <input type="range" min="0" max="100" value={budget} onChange={handleBudgetChange} />
              <p>Budget: ${Math.round(price * (budget / 100))}</p>
              <label>Hotel Stars:</label>
              <select value={stars} onChange={(e) => setStars(e.target.value)}>
                <option value="1">1 Star</option>
                <option value="2">2 Stars</option>
                <option value="3">3 Stars</option>
                <option value="4">4 Stars</option>
                <option value="5">5 Stars</option>
              </select>
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      ) : (
        <p className="thank-you-message">Thank You for choosing our website for travelling. We will contact you within an hour.</p>
      )}
    </div>
  );
};

const PricingSection = () => (
  <div className="pricing-section">
    <h2>Pricing</h2>
    <div className="package-container">
      {packagesData.map((pkg, index) => (
        <PackageCard key={index} {...pkg} />
      ))}
    </div>
  </div>
);

export default PricingSection;
