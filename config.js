var config = {
    "PORT": process.env.PORT || 3000,
    "apiURL":"http://localhost:3000/",
    "db":{
        "mysqldb":{
            "connectionURL":"",
            "PORT":"",
            "username":"",
            "pwd":""
        },
        "mongodb":{
            "connectionURL":"*******************",
            "PORT":"",
            "username":"",
            "pwd":"*******"
        }
    }
};
module.exports = config;