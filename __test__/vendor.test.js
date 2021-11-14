'use strict';

//load
const events = require('../events/events')
const vendor = require('../module/vendor')

describe('Vendor Console Log',()=>{
    let consoleSpy;
    beforeEach(()=>{
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })
    afterEach(()=>{
        consoleSpy.mockRestore();
    })
    it('verify the "delivered" emit triggers the correct console log',()=>{
        // let orderCustomer = vendor.createOrder();
        // events.emit('delivered',orderCustomer);
        // expect(consoleSpy).toHaveBeenCalledWith(`Thank you, ${orderCustomer.orderId}`)
        let orderCustomer = vendor.createOrder();
        events.emit('delivered',orderCustomer);
        expect(consoleSpy).toHaveBeenCalledWith(`Thank you, ${orderCustomer.orderId}`)
    })
})
