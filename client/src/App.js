import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import axios from "axios";
import "./App.css";

const API_BASE_URL = 'http://localhost:5000'; // Update this with your backend server URL

const App = () => {
  const [invoices, setInvoices] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Fetch due invoices when the component mounts
    if (isLoggedIn) {
      fetchInvoices();
    }
  }, [isLoggedIn]);

  const fetchInvoices = async () => {
    try {
      // Make a request to your backend API to get due invoices
      const response = await axios.get(`${API_BASE_URL}/api/invoices`);
      setInvoices(response.data);
    } catch (error) {
      console.error('Error fetching invoices:', error);
    }
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const triggerAutomation = async () => {
    try {
      // Make a request to your backend API to trigger Zapier automation
      await axios.post(`${API_BASE_URL}/api/trigger-automation`);
      // Optionally, you can fetch updated invoices after triggering automation
      fetchInvoices();
    } catch (error) {
      console.error('Error triggering automation:', error);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>Invoice Remainder App</h1>
          <button onClick={handleLogout}>Logout</button>
          <div>
            <h2>Due Invoices</h2>
            <ul>
              {invoices.map((invoice) => (
                <li key={invoice.id}>
                  Amount: {invoice.amount}, Due Date: {invoice.dueDate}, Recipient: {invoice.recipient}
                </li>
              ))}
            </ul>
          </div>
          <button onClick={triggerAutomation}>Trigger Automation</button>
        </div>
      ) : (
        <div>
          <h1>Login with Google</h1>
          <GoogleLogin onSuccess={handleLoginSuccess} />
        </div>
      )}
    </div>
  );
};

export default App;

