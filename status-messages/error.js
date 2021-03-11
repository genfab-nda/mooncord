const statusUtil = require('../utils/statusUtil')
const webcamUtil = require('../utils/webcamUtil')

const getModule = async function (discordClient, channel, guild, user) {
  const snapshot = await webcamUtil.retrieveWebcam()
  discordClient.user.setActivity('wait for User', { type: 'LISTENING' })

  const statusEmbed = statusUtil.getDefaultEmbed(user, 'A Error occured!', '#c90000')
  statusEmbed
    .attachFiles(snapshot)
    .setImage(`attachment://${snapshot.name}`)

  statusUtil.postStatus(discordClient, statusEmbed, channel)
}
module.exports = getModule
