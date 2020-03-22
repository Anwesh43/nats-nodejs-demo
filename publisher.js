const NATS = require('nats')
const nc = NATS.connect()
const {SUBJECT_NAME, STOP_SUBSCRIBER_MESSAGE} = require('./constants')
console.log("connected")
console.log("closing in 3 seconds")

let i = 0
console.log("sending messages")
const interval = setInterval(() => {
    nc.publish(SUBJECT_NAME, `message${i++}`)
    if (i == 100) {
        clearInterval(interval)
        nc.publish(SUBJECT_NAME, STOP_SUBSCRIBER_MESSAGE)
        setTimeout(() => {
            console.log("finished sending messages")
            nc.close()
        }, 2000)

    }
}, 1000)
