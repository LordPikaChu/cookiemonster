import Botkit from 'botkit';

import slackConfig from '../slack.config.json';

var controller = Botkit.slackbot({debug: false})
controller
  .spawn({
    token: slackConfig['bot_user_access_token']
  })
  .startRTM(function (err) {
    if (err) {
      throw new Error(err)
    }
  })

controller.hears(
  ['hello', 'hi'], ['direct_message', 'direct_mention', 'mention'],
  function (bot, message) { bot.reply(message, 'Meow. :smile_cat:') })
