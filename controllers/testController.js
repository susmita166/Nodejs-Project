const createErr = require('http-errors');  // Create a custom error using http-errors module
const welcomeFunction = (req, res, next) => {
    const err = createErr('Cannot get list of all Product'); 
    err.status  = 404;  
    next(err);
    //res.send('Hello, this is Welcome Page!');
};

const postFunction = (req, res, next) => {
    res.send('Hello, this is Post Request!');
};

const patchFunction = (req, res, next) => {
    res.send('Hello, this is Patch Request!');
};

const deleteFunction = (req, res, next) => {
    res.send('Hello, this is Delete Request!');
};
  
module.exports = {
    welcomeFunction,
    postFunction,
    patchFunction,
    deleteFunction
};
