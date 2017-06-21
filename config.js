let slackConfig = null;

if (!process.env.BOT_AUTH_TOKEN) {
  slackConfig = require('./slack.config.json');
}

export default {
  BOT_AUTH_TOKEN: process.env.BOT_AUTH_TOKEN || slackConfig['bot_user_access_token']
}
