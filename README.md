# caps

### Author: Emad Idris ✌✌

### Start
```
npm start
```

#### Tests

To run tests:

`npm test`

### Sample Output
```
EVENT {
  event: 'pickup',
  dateee: 'Sun Nov 14 2021 16:36:06 GMT+0200 (Eastern European Standard Time)',
  payload: {
    orderStore: 'Carfour',
    orderId: '321c17e9-d818-4fb2-b4de-80f1d9d3ed26',
    orderCustomer: 'Harold Kling',
    orderAddress: 'Nienowborough,19906 Friesen Key'
  }
}
DRIVER: deliverd up 321c17e9-d818-4fb2-b4de-80f1d9d3ed26
Thank you, 321c17e9-d818-4fb2-b4de-80f1d9d3ed26
EVENT {
  event: 'delivered',
  dateee: 'Sun Nov 14 2021 16:36:09 GMT+0200 (Eastern European Standard Time)',
  payload: {
    orderStore: 'Carfour',
    orderId: '321c17e9-d818-4fb2-b4de-80f1d9d3ed26',
    orderCustomer: 'Harold Kling',
    orderAddress: 'Nienowborough,19906 Friesen Key'
  }
}
DRIVER : picked up 321c17e9-d818-4fb2-b4de-80f1d9d3ed26
EVENT {
  event: 'in-transit',
  dateee: 'Sun Nov 14 2021 16:36:11 GMT+0200 (Eastern European Standard Time)',
  payload: {
    orderStore: 'Carfour',
    orderId: '321c17e9-d818-4fb2-b4de-80f1d9d3ed26',
    orderCustomer: 'Harold Kling',
    orderAddress: 'Nienowborough,19906 Friesen Key'
  }
}
EVENT {
  event: 'pickup',
  dateee: 'Sun Nov 14 2021 16:36:16 GMT+0200 (Eastern European Standard Time)',
  payload: {
    orderStore: 'Carfour',
    orderId: '321c17e9-d818-4fb2-b4de-80f1d9d3ed26',
    orderCustomer: 'Harold Kling',
    orderAddress: 'Nienowborough,19906 Friesen Key'
  }
}
```
# UML
![](./lab11.png)