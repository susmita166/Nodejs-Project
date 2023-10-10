const getExpress = require('express');
const getRouter = getExpress.Router();
const getContactController = require('../controllers/contactController');
const asyncHandler = require('express-async-handler');

// Define routes and use controller methods as callbacks
getRouter.get('/', asyncHandler(getContactController.getContact));
getRouter.post('/postContact', asyncHandler(getContactController.postContact));
getRouter.put('/:id', asyncHandler(getContactController.updateContact));

// http://localhost:5000/api/contacts/1 (delete)
getRouter.delete('/:id', asyncHandler(getContactController.deleteContact));

module.exports = getRouter;
