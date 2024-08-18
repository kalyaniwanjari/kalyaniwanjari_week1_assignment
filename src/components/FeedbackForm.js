import React, { useState } from 'react';
import './FeedbackForm.css'; // Assuming you create a CSS file for styling

function FeedbackForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState('5');
  const [comments, setComments] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || !validateEmail(email)) {
      alert('Please fill in all fields with valid information.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="feedback-form">
      {submitted ? (
        <div className="submitted-data">
          <h2>Thank you for your feedback!</h2>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Rating:</strong> {rating}</p>
          <p><strong>Comments:</strong> {comments}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Rating:</label>
            <select value={rating} onChange={(e) => setRating(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div className="form-group">
            <label>Comments:</label>
            <textarea
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default FeedbackForm;
