import { useState } from "react";

export default function Contact() {
  const [nameInput, setNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [messageInput, setMessageInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!nameInput || !emailInput || !messageInput) {
      setErrorMsg('All fields are required.');
      return;
    }

    // Clear form
    setNameInput('');
    setEmailInput('');
    setMessageInput('');
    setErrorMsg('');
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <form
        id="messageForm"
        onSubmit={handleSubmit}
        className="w-100"
        style={{ maxWidth: '600px' }}
      >
        <h2 className="mb-4 text-center">Contact Me</h2>

        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="messageInput" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="messageInput"
            rows={4}
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
          ></textarea>
        </div>

        {errorMsg && (
          <div className="mb-3 text-danger">
            {errorMsg}
          </div>
        )}

        <div className="text-center">
          <button type="submit" className="btn btn-primary px-5">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
