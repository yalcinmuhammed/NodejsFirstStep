const respond = require('../helpers/respond');
var carValidator = {};

carValidator.createCar = function (req, res, next) {
    req.checkBody({
        brand: {
            notEmpty: true
        },
        name: {
            notEmpty: true
        },
        carType: {
            notEmpty: true,
            matches: {
                options: ['^(' + ['SEDAN', 'HATCHBACK'].join('|') + ')$', 'i'],
                errorMessage: "Invalid Value. Must be 'SEDAN', 'HATCHBACK'."
            },
            errorMessage: "Invalid Value. Must be 'SEDAN', 'HATCHBACK'."
        },
        kilometers: {
            optional: true
        }
    });

    if (req.validationErrors()) {
        return respond.withValidationError(res, req.validationErrors(true));
    }
    return next();
};

module.exports = carValidator;