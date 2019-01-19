//2000
function CarNotFound(msg){
    this.name = 'CarNotFound';
    this.message = msg || 'Car not found.';
    this.code = 2000;
    this.status = 404;
}
CarNotFound.prototype = Error.prototype;
module.exports.CarNotFound = CarNotFound;