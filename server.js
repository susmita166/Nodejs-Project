require('dotenv').config();  // to load the environment variables from the .env file.
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const morgan = require('morgan');
const contactRoutes = require('./routes/contactRoutes');
const testRoutes = require('./routes/testRoutes');
const authRoutes = require('./routes/authRoutes');
const getErrorHandlerMiddleware = require("./middleware/errorHandler");
const getConnectionDb = require("./config/mangoDbConnection");
const createError = require('http-errors'); 

//require('dotenv').config();  // to load the environment variables from the .env file.
// getConnectionDb(); //MangoDb connection

app.use(morgan('dev'));
app.use(express.json()); // Middleware to parse incoming JSON data
app.use(express.urlencoded({extended: true}))
app.use('/api/contacts', contactRoutes);
app.use('/api/test', testRoutes);
app.use('/api/auth', authRoutes);

// app.use(getErrorHandlerMiddleware.errorHandler);

app.use((req, res, next) => {
  const err = createError(404, 'Not Found');  // Create a custom error using http-errors module
  next(err);
});
// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500);  // Use statusCode instead of status
  res.send({
    status: err.statusCode || 500,
    Error: err.message || "Internal Server Error"
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('App is running on', PORT);
});