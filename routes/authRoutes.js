const getExpressForAuth = require('express');
const getRoutesForAuth = getExpressForAuth.Router();
const getControllerForAuth = require('../controllers/AuthController');


getRoutesForAuth.post('/register', getControllerForAuth.register);
getRoutesForAuth.post('/login', getControllerForAuth.login);
getRoutesForAuth.post('/refreshToken', getControllerForAuth.refreshToken);
getRoutesForAuth.delete('/logout', getControllerForAuth.logout);

module.exports = getRoutesForAuth;


// const {register,login} = require('../controllers/AuthController')
// getRoutesForAuth.post('/signup', register);