import Botkit from 'botkit';

import CONFIG from '../config';

var controller = Botkit.slackbot({debug: false});

controller
.spawn({token: CONFIG.BOT_AUTH_TOKEN})
.startRTM(function (err) {
  if (err) {
    throw new Error(err);
  }
});

controller.on('reaction_added', function(bot, reaction) {
  console.log(reaction);
});
