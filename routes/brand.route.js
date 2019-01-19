var express = require('express');
var router = express.Router();
const respond = require("../helpers/respond");
const BrandController = require("../controllers/brand.controller");

router.post('/', function(req, res, next) {
    BrandController.createBrand(req.body).then((instance)=>{
        respond.success(res, instance);
    }).catch((err)=>{
        respond.withError(next, err);
    });
});

router.get('/:brandId', function(req, res, next) {
    BrandController.getBrand(req.params.brandId).then((instance)=>{
        respond.success(res, instance);
    }).catch((err)=>{
        respond.withError(next, err);
    });
});

module.exports = router;