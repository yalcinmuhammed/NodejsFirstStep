const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const Schema = mongoose.Schema;
const brandSchema = new Schema({
    name:{
        type: String,
        default: null
    }
});
brandSchema.plugin(timestamps);
module.exports = mongoose.model('brands', brandSchema);