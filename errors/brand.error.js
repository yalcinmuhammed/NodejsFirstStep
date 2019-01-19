//3000
function BrandNotFound(msg){
    this.name = 'BrandNotFound';
    this.message = msg || 'Brand not found.';
    this.code = 3000;
    this.status = 404;
}
BrandNotFound.prototype = Error.prototype;
module.exports.BrandNotFound = BrandNotFound;