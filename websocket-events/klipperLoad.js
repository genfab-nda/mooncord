const variables = require('../utils/variablesUtil')

const event = (message) => {
  if (message.type !== 'utf8') { return }
  
  const messageJson = JSON.parse(message.utf8Data)

  if (typeof (messageJson.method) === 'undefined') { return }
  if (messageJson.method !== 'notify_status_update') { return }

  if (typeof (messageJson.params) === 'undefined') { return }

  const statusmessage = messageJson.params

  retrieveMCUStatus(statusmessage[0])
}

function retrieveMCUStatus(message) {
  
  Object.keys(message).forEach(key => {
    console.log(key)
    console.log(message[key])
    if (!/(temp)/g.test(key) && 
        /(mcu)/g.test(key)) {
      variables.updateMCUStatus(key, message[key])
    }
  })
}

module.exports = event
