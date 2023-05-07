import React, { useState } from 'react';
import './FeedbackForm.css';

function FeedbackForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comments, setComments] = useState('');
    const [feedbackList, setFeedbackList] = useState([]);
  
    const handleSubmit = event => {
      event.preventDefault();
      const feedback = { name, email, comments };
      fetch('http://localhost:5000/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedback)
      })
        .then(response => response.json())
        .then(data => {
          setFeedbackList([...feedbackList, data]);
          setName('');
          setEmail('');
          setComments('');
        });
    };
  
    return (
      <div className="feedback-form">
        <h2>Feedback Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={event => setName(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="comments">Comments:</label>
            <textarea
              id="comments"
              value={comments}
              onChange={event => setComments(event.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
        {feedbackList.length > 0 && (
          <div>
            <h2>Feedback List</h2>
            <ul>
              {feedbackList.map((feedback, index) => (
                <li key={index}>
                  <p>Name: {feedback.name}</p>
                  <p>Email: {feedback.email}</p>
                  <p>Comments: {feedback.comments}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
  
  export default FeedbackForm;
  