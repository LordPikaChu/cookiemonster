import Botkit from 'botkit';

import CONFIG from '../config';

var controller = Botkit.slackbot({debug: false})
controller
  .spawn({
    token: CONFIG.BOT_AUTH_TOKEN
  })
  .startRTM(function (err) {
    if (err) {
      throw new Error(err)
    }
  })

controller.hears(
  ['hello', 'hi'], ['direct_message', 'direct_mention', 'mention'],
  function (bot, message) { bot.reply(message, 'Meow. :smile_cat:') })
