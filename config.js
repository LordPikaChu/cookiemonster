import SLACK_CONFIG from './slack.config.json';

export default {
  BOT_AUTH_TOKEN: process.env.BOT_AUTH_TOKEN || SLACK_CONFIG['bot_user_access_token']
}
