//2000
function APIException(msg){
    this.name = 'APIException';
    this.message = msg || 'Ooops. Bir hata oluştu';
    this.code = 1000;
    this.status = 500;
}
APIException.prototype = Error.prototype;
module.exports.APIException = APIException;

function Unauthorized(msg){
    this.name = 'Unauthorized';
    this.message = msg || 'Yetkiniz yok :(';
    this.code = 1001;
    this.status = 401;
}
Unauthorized.prototype = Error.prototype;
module.exports.Unauthorized = Unauthorized;

function ServiceNotFound(msg){
    this.name = 'ServiceNotFound';
    this.message = msg || 'Servis not found';
    this.code = 1002;
    this.status = 404;
}
ServiceNotFound.prototype = Error.prototype;
module.exports.ServiceNotFound = ServiceNotFound;