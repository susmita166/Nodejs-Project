const { CLIENT_RENEG_LIMIT } = require("tls");
const {constants} = require("../constant");
class ErrorHandlerMiddleware {
    errorHandler = (err, req, res, next) => {
        // res.status(res.statusCode).json({ error: err.message, stackTrace: err.stack });
        const statusCode = res.statusCode;
        //res.json({message : err.message, stackTrace: err.stack});

        switch (statusCode)
        {
            case constants.VALIDATION_ERROR:
                res.json({
                    title: "Validation Failed",
                    message : err.message,
                    stackTrace: err.stack
            });
            break;

            case constants.UNAUTHORIZED:
                res.json({
                    title: "Unauthorized",
                    message : err.message,
                    stackTrace: err.stack
                });
            break;

            case constants.FORBIDDEN:
            res.json({
                title: "FORBIDDEN",
                message : err.message,
                stackTrace: err.stack
            });
            break;   
            
            case constants.NOT_FOUND:
            res.json({
                title: "NOT_FOUND",
                message : err.message,
                stackTrace: err.stack
            });
            break;   

            case constants.SERVER_ERROR:
            res.json({
                title: "SERVER_ERROR",
                message : err.message,
                stackTrace: err.stack
            });
            break;  
            
            // default:
            //     console.log('No error, All good !');
        }
    };
}

module.exports = new ErrorHandlerMiddleware();

