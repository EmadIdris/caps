'use strict';

// caps

const events =require('./events/events')

require('./module/driver') 
require('./module/vendor')

events.on('pickup' , (payload)=> dateEvent('pickup',payload) ) // create event
events.on('in-transit' ,(payload)=> dateEvent('in-transit',payload) )// create event
events.on('delivered' ,(payload)=> dateEvent('delivered',payload) )// create event

//
function dateEvent(event,payload){
    const dateee = new Date().toString();
    console.log("EVENT" , {event , dateee , payload});
}

module.exports = {dateEvent}