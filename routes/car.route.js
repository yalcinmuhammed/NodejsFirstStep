var express = require('express');
var router = express.Router();
const respond = require("../helpers/respond");
const CarController = require("../controllers/car.controller");
const carValidator = require("../validators/car.validator");
const verifier = require("../helpers/verifier");

router.post('/', [verifier.verifyToken], [carValidator.createCar], function(req, res, next) {
    CarController.createCar(req.body).then((instance)=>{
        respond.success(res, instance);
    }).catch((err)=>{
        respond.withError(next, err);
    });
});

router.get('/:carId', function(req, res, next) {
    CarController.getCar(req.params.carId).then((instance)=>{
        respond.success(res, instance);
    }).catch((err)=>{
        respond.withError(next, err);
    });
});

module.exports = router;