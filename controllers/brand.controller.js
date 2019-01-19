const BrandModel = require("../models/brand.model");
const BrandError = require("../errors/brand.error");
const brandController = {};

brandController.createBrand = (brandData)=>{
    return new Promise((resolve, reject)=>{
        let newBrand = new BrandModel();
        newBrand = {
            name: brandData.name        
        };
        BrandModel.create(newBrand).then((brandInstance)=>{
            brandInstance = brandInstance.toObject();
            brandInstance.brandId = brandInstance._id;
            delete brandInstance._id;
            delete brandInstance.__v;
            return resolve(brandInstance);
        }).catch((err)=>{
            return reject(err);
        });
    });
}


module.exports = brandController;