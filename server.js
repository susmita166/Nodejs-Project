const express = require('express');
const app = express();
const contactRoutes = require('./routes/contactRoutes');
const getErrorHandlerMiddleware = require("./middleware/errorHandler");
const getConnectionDb = require("./config/mangoDbConnection");

require('dotenv').config();  // to load the environment variables from the .env file.

getConnectionDb(); //MangoDb connection


app.use(express.json()); // Middleware to parse incoming JSON data
app.use('/api/contacts', contactRoutes);
app.use(getErrorHandlerMiddleware.errorHandler);


const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log('App is running on', PORT);
});
