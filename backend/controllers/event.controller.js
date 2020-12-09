
const Event = require('../models/events');
const eventCtrl = {};


eventCtrl.getEvents = async (req,res) =>{
   const events =await Event.find();
   res.json(events);
  }

eventCtrl.createEvent = async (req, res) => {
    const event = new Event(req.body);
    await event.save();
    res.json({
        'status' : 'Event saved'
    });
    
};

module.exports = eventCtrl;