
var respond = {};

respond.success = (res, data)=>{
    return res.status(200).json({
        statusCode: 200,
        data: data
    });
}

respond.withError = (next, error, statusCode)=>{
    statusCode = statusCode || error.status || 500;
    error.status = statusCode;
    return next(error);
}

respond.withValidationError = (res, errors, statusCode)=>{
    statusCode = statusCode || 400;
    return res.status(statusCode).json({
        statusCode: statusCode,
        error:{
            errorCode:1000,
            validationErrors: errors
        }
    });
}

module.exports = respond;
