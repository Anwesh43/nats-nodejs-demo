const NATS = require('nats')
const nc = NATS.connect()
console.log("connected")
console.log("closing in 3 seconds")
setTimeout(() => {
    console.log("closing nc")
    nc.close()
    console.log("closed")
}, 3000)
