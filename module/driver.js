'use strict';

// import event from pool
const events = require('../events/events')

events.on('pickup',(payload)=>deliverPhase(payload));

function deliverPhase(payload){
    setTimeout(()=>{makingPickUp(payload);},5000)
    setTimeout(()=>{makingDelivery(payload)},3000)
}
function makingPickUp(payload){
    console.log(`DRIVER : picked up ${payload.orderId}`)
    events.emit('in-transit',payload) 
}
function makingDelivery(payload){
    console.log(`DRIVER: deliverd up ${payload.orderId}`)
    events.emit('delivered',payload) 
}
module.exports = {deliverPhase,makingPickUp,makingDelivery}
