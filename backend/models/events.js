const mongoose = require('mongoose');
const {Schema} = mongoose;

const EventSchema =new Schema({
    event: {type : String, required : true},
    sport: {type : String, required:true},
    city: {type: String, required:true}
});

module.exports =mongoose.model('Event', EventSchema);