'use strict';

// vendor 

const events = require('../events/events') // import fron event folder

var faker = require('faker');
// console.log(faker)
// let numberRandom = Math.ceil(Math.random());

function createOrder (){
    let orderStore = "Carfour";
    let orderId = faker.random.uuid();
    let orderCustomer = faker.name.findName();
    let orderAddress = `${faker.address.city()},${faker.address.streetAddress()}`;
    let customerOrders = {orderStore,orderId,orderCustomer,orderAddress}
    return customerOrders;
}

let dataForPickUp = createOrder();

function pickUpOrder (customerOrders = dataForPickUp){ 
    events.emit('pickup', customerOrders) // call 
}

setInterval(pickUpOrder,5000) // change data every 5 sec

events.on('delivered',makeDelivery)

function makeDelivery (payload){
    console.log(`Thank you, ${payload.orderId}`)
}
module.exports={createOrder ,pickUpOrder , makeDelivery }