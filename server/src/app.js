// src/app.js
require('dotenv').config();
const express = require('express');
const passport = require('passport');
const cors =require('cors')
const session = require('express-session');
const config = require('./config');
const authRoutes = require('./routes/authRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const bodyParser = require('body-parser');
const passportsetup=require("./services/authService")
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Passport initialization
app.use(passport.initialize());
app.use(passport.session());

app.use(
    cors({
        origin:"http://localhost:3000",
        methods : "GET,POST,PUT,DELETE",
        credentials:true,
    })
)
// Routes
app.use('/auth', authRoutes);
app.use('/api/invoices', invoiceRoutes);

// Start the server
const port=process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
