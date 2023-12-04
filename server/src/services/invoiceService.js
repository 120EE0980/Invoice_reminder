// src/services/invoiceService.js
const axios = require('axios');

// Mocked due invoices data (replace with your actual data source or database connection)
const dueInvoicesData = [
  { id: 1, amount: 100, dueDate: '2023-12-15', recipient: 'John Doe' },
  { id: 2, amount: 150, dueDate: '2023-12-20', recipient: 'Jane Smith' },
];

// Function to get due invoices
const getDueInvoices = () => {
 //we might fetch data from a database or external API
  return dueInvoicesData;
};

// Function to trigger automation for a specific invoice
const triggerAutomationForInvoice = async (invoice) => {
  try {
    
    const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/17241577/3fdjrtn/';
   
    const zapierData = {
      invoiceId: invoice.id,
      amount: invoice.amount,
      dueDate: invoice.dueDate,
      recipient: invoice.recipient,
    };

    // Make a POST request to Zapier webhook with the data payload
    await axios.post(zapierWebhookUrl, zapierData);

    // Log success or handle any additional post-automation logic
    console.log(`Automation triggered for invoice ${invoice.id}`);
  } catch (error) {
    // Log or handle errors appropriately
    console.error('Error triggering automation:', error);
    throw error;
  }
};

module.exports = {
  getDueInvoices,
  triggerAutomationForInvoice,
};

  