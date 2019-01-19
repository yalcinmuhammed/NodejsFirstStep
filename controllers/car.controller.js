const CarModel = require("../models/car.model");
const CarError = require("../errors/car.error");
const carController = {};

carController.createCar = (carData)=>{
    return new Promise((resolve, reject)=>{
        let newCar = new CarModel();
        newCar = {
            brand: carData.brand,
            name: carData.name,
            carType: carData.carType,
            kilometers: carData.kilometers,
            color: carData.color,
            isTruck:carData.isTruck
        };
        CarModel.create(newCar).then((carInstance)=>{
            carInstance = carInstance.toObject();
            carInstance.carId = carInstance._id;
            delete carInstance._id;
            delete carInstance.__v;
            return resolve(carInstance);
        }).catch((err)=>{
            return reject(err);
        });
    });
}

carController.getCar = (carId)=>{
    return new Promise((resolve, reject)=>{
        CarModel.findById(carId).populate("brand","name _id").then((carInstance)=>{
            if(!carInstance){
                return reject(new CarError.CarNotFound());
            }
            carInstance = carInstance.toObject();
            carInstance.carId = carInstance._id;
            delete carInstance._id;
            delete carInstance.__v;
            return resolve(carInstance);
        }).catch((err)=>{
            return reject(err);
        });
    });
}

module.exports = carController;