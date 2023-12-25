const getExpressForTest = require('express');
const getRouteForTest = getExpressForTest.Router();
const getTestController = require('../controllers/testController');

getRouteForTest.get('/',getTestController.welcomeFunction)
getRouteForTest.post('/',getTestController.postFunction)
getRouteForTest.patch('/patchfunc/:id',getTestController.patchFunction)
getRouteForTest.delete('/deletefunc/:id',getTestController.deleteFunction)


module.exports = getRouteForTest;