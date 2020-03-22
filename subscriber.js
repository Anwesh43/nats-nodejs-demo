const {SUBJECT_NAME, STOP_SUBSCRIBER_MESSAGE} = require('./constants')
const NATS = require('nats')
const nc = NATS.connect()
console.log(`listening for messages in ${SUBJECT_NAME}`)
nc.subscribe(SUBJECT_NAME, (msg) => {
    console.log(msg)
    if (msg === STOP_SUBSCRIBER_MESSAGE) {
        nc.close()
    }
})
