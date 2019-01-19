const mongoose = require("mongoose");
const timestamps = require("mongoose-timestamp");
const Schema = mongoose.Schema;
const carSchema = new Schema({
    brand:{
        type: mongoose.Schema.Types.ObjectId, ref: 'brands'
    },
    name:{
        type: String,
        default: null
    },
    carType:{
        type: String,
        enum: ["SEDAN", "HATCHBACK"],
        default: "SEDAN"
    },
    kilometers:{
        type:Number,
        default:0
    },
    color:{
        type: String,
        default: null
    },
    isTruck:{
        type: Boolean,
        default: false
    }
});
carSchema.plugin(timestamps);
module.exports = mongoose.model('cars', carSchema);
